
<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12">
                <h1 class="m-3">
                    Houses
                </h1>
            </div>
        </section>
    </div>
</template>


<script>
import { onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { logger } from '../utils/Logger.js';

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

        return {}

    }
}


</script>


<style lang="scss" scoped></style>