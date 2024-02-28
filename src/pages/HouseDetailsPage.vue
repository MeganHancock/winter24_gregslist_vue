<template>
    <div class="container">
        <section class="row">
            <div class="col-12">
                <h1 class="my-3">House Details</h1>
            </div>
        </section>

        <section v-if="house" class="row">
            <div class="col-12 text-center">
                <img class="rounded-3 m-3" :src="house.imgUrl"
                    :alt="'A house with ' + house.bedrooms + ' bedrooms and ' + house.bathrooms + ' bathrooms'">
                <div class="p-3 d-flex justify-content-between">
                    <p>Bedrooms: {{ house.bedrooms }}</p>
                    <p>Bathrooms: {{ house.bathrooms }}</p>
                    <p>Levels: {{ house.levels }}</p>
                </div>
                <h1>${{ house.price }}</h1>

                <p>Listed by {{ house.creator.name }}</p>
                <p>At {{ house.createdAt }}</p>
            </div>
        </section>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js'

export default {
    setup() {

        const route = useRoute()

        async function getHouseById() {
            try {
                const houseId = route.params.houseId
                logger.log(houseId, 'houseId')
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            logger.log('Mounted house details page!');
            logger.log('Id from route', route.params.houseId)
            getHouseById()
        })

        return {
            house: computed(() => AppState.activeHouse)
        }
    }
}
</script>


<style lang="scss" scoped>
img {
    height: 50vh;
    width: 50vh;
    object-fit: cover;
    object-position: center;
    box-shadow: 2px 3px 10px black;

}
</style>