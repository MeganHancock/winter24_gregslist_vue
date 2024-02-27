
<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <h1 class="m-3">
                    Houses
                </h1>
            </div>
        </section>

        <section class="row">
            <div class="col-4">
                {{ houses }}
            </div>
        </section>


    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'

export default {

    setup() {

        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            logger.log('page is mounted')
            getHouses()
        })

        return {
            houses: computed(() => AppState.houses)

        }

    }
}


</script>


<style lang="scss" scoped></style>