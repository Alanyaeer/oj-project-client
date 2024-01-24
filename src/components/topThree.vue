<script setup>
import {ref, defineProps, onMounted} from 'vue'

onMounted(() => {
    
})
</script>
<template>
<div class="containerssssssss">
    <div class="item" style="left: 130px;">
        <div class="inner">
            <img style="top: 2px; position: relative;" src="https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010584.webp" alt="" class="src">

        </div>
    </div>
    <div class="two" style="margin-top: 15px;">
        <div class="item" >
            <div class="inner">
                <img src="https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291009738.webp" alt="" class="src">
            </div>
        </div>
        <div class="item" style="left: 50px; background: linear-gradient(#facfa3, #d77c44);">
            <div class="inner">

                <img src="https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010631.webp" alt="" class="src">
            </div>
        </div>

    </div>
</div>

</template>

<style lang="scss" scoped>
.containerssssssss{
    display: flex;
    flex-direction: column;
    .item{
        width: 110px;
        position: relative;
        height:110px;
        border-radius: 1000px;
        align-items: center;
        justify-content: center;
        display: flex;
        background: linear-gradient(#feea88, #d7a807);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
        .inner{
            opacity: 0.95;
            .src{
                width: 100px;
                height: 100px;
                border-radius: 1000px;
            }
        }
    }
    .two{
        gap: 15px;
        display: flex;
        position: relative;;
        left: 45px;
        .item{
            position: relative; 
            width: 110px;
            background: linear-gradient(white, #ababab);
            height: 110px;
            display: flex;
            border-radius: 1000px;
            align-items: center;
            justify-content: center;
            .inner{
                opacity: 0.95;
                display: flex;
                align-items: center;
                justify-content: center;
                .src{
                    width: 100px;
                    height: 100px;
                    border-radius: 1000px;
                }
            }
        }
    }
}
</style>