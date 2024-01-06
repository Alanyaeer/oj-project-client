<script setup>
import {ref, onMounted} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const questionInfo = ref({})
onMounted(()=>{
    questionInfo.value.titleName = "机智的小军"
    questionInfo.value.titleId = '31'
    questionInfo.value.passPerson = 31
    questionInfo.value.submitNum = 64;
})
</script>

<template>
    <div class="item">
        <div class="item-content">
            <span style="color: rgb(176, 173, 220); font-size: larger;">{{questionInfo.titleId}}.</span>
            <span style="color: rgb(176, 173, 220);  font-size: larger;">{{questionInfo.titleName}}</span>
        </div>
        <div class="item-progress">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="h-[20px] w-[20px] h-4 w-4"><g filter="url(#hot-filled_svg__filter0_i_289_12318)"><path fill-rule="evenodd" d="M9.588 2.085a1 1 0 01.97.092c2.85 1.966 4.498 4.744 5.31 6.67l.854-.885a1 1 0 011.56.154c2.177 3.38 2.211 7.383.521 10.3C17.039 21.459 13.583 22 11.977 22c-1.569 0-4.905-.27-6.825-3.584-.832-1.435-1.27-3.053-1.125-4.704.146-1.66.876-3.284 2.264-4.721.86-.891 1.505-2.122 1.957-3.322.449-1.193.68-2.278.752-2.806a1 1 0 01.588-.778z" clip-rule="evenodd" fill="url(#hot-filled_svg__paint0_linear_289_12318)"></path></g><defs><linearGradient id="hot-filled_svg__paint0_linear_289_12318" x1="12" x2="12" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#FFA116"></stop><stop offset="1" stop-color="#F9772E"></stop></linearGradient><filter id="hot-filled_svg__filter0_i_289_12318" width="17.2" height="21.2" x="4" y="2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="1.2" dy="1.2"></feOffset><feGaussianBlur stdDeviation="0.6"></feGaussianBlur><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.970833 0 0 0 0 0.05825 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_289_12318"></feBlend></filter></defs></svg>
            <span style="color: orange;">{{ questionInfo.submitNum }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
    .item{
        box-shadow: v-bind(outerShadow);
        border-radius: 10px;
        margin: 5px;
        width: 245px;
        height: 60px;
        gap: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: space-around;
        .item-progress{
            display: flex;
            gap: 5px;
        }
        .item-content{
            align-items: center;
            height: 80%;
            display: flex;
            justify-content: center;

            gap: 5px;
        }
        transition: 0.5s;
    }
    .item:hover{
        box-shadow: v-bind(innerShadow);
        scale: 1.05;
    }
</style>