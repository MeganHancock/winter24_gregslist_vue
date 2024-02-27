
<template>
    <div class="container">
        <section class="row">
            <div class="col-12 my-2">
                <h1>Houses</h1>
            </div>
        </section>

        <section v-for="house in houses" :key="house.id" class="row justify-content-around">
            <div class="col-md-4">
                {{ house.price }}
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