<template>
    <h1>car deets</h1>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';

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

        return {}
    }
}
</script>


<style lang="scss" scoped></style>