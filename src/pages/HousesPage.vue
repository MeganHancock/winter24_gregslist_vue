
<template>
    <div class="container">
        <section class="row">
            <div class="col-12 my-2">
                <h1>Houses</h1>
            </div>
        </section>

        <section class="row justify-content-center">
            <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3 house-card">
                <HouseCard :houseProp="house" />
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
import HouseCard from '../components/HouseCard.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await housesService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseCard }
}


</script>


<style lang="scss" scoped>
.house-card {
    position: relative;
}
</style>