<template>
    <img :src="houseProp.imgUrl" class="img-fluid"
        :alt="'A house with ' + houseProp.bedrooms + ' bedrooms and ' + houseProp.bathrooms + ' bathrooms'">
    <div class="house-caption">
        <p class="fs-5 mb-1 ms-1">{{ houseProp.bedrooms }} bedroom {{ houseProp.bathrooms }} bathroom house</p>
    </div>
</template>


<script>

import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { House } from '../models/House.js';

export default {
    props: {
        houseProp: { type: House, required: true }
    },

    setup() {
        return {}
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


.house-caption {
    position: absolute;
    bottom: 0;
    color: white;
    text-shadow: 1px 1px 3px black;
    font-weight: bold;
}
</style>