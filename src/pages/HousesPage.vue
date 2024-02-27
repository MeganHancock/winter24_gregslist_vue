
<template>
    <div class="container">
        <section class="row">
            <div class="col-12 my-2">
                <h1>Houses</h1>
            </div>
        </section>

        <section class="row justify-content-center">
            <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3 house-card">
                <img :src="house.imgUrl" class="img-fluid"
                    :alt="'A house with ' + house.bedrooms + ' bedrooms and ' + house.bathrooms + ' bathrooms'">
                <div class="house-caption">
                    <p class="fs-5 mb-1 ms-1">{{ house.bedrooms }} bedroom {{ house.bathrooms }} bathroom house</p>
                </div>
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


<style lang="scss" scoped>
img {
    height: 40vh;
    width: 40vh;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
    box-shadow: 2px 3px 10px black;
}

.house-card {
    position: relative;
}

.house-caption {
    position: absolute;
    bottom: 0;
    color: white;
    text-shadow: 1px 1px 3px black;
    font-weight: bold;
}
</style>