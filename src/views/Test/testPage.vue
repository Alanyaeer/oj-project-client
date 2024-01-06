<script setup>
import {ref, defineProps} from 'vue'
const primary = ref('#6d5dfc')
const innerShadow = ref('inset 2px 2px 2px  #001D3D,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')
</script>

<template>
    
    <div class="wave"></div>
</template>

<style lang="scss" scoped>
.wave {
    position: relative;
    width: 50px ;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    // top: 50%;
    // left: 50%;
    z-index: 2;
    // display: flex;
    box-shadow: v-bind(innerShadow);
    background-color: #7e8ac5;
    &::before,
    &::after{
        content: "";
        position: absolute;
        width: 40px;
        height: 50px;
        top: 0;
        left: 50%;
        background-color: rgba(255, 255, 255, .4);
        border-radius: 45%;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 6s linear infinite;
        z-index: 10;
        transition: 0.5s;

    }
    
    &::after {
        border-radius: 47%;
        // background-color: #eaf2fa;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 2s linear -5s infinite;
        z-index: 20;
        
    }
}

@keyframes rotate {
    50% {
        transform: translate(-50%, -73%) rotate(180deg);
    } 100% {
        transform: translate(-50%, -70%) rotate(360deg);
    }
}

</style>