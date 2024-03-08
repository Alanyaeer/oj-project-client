<script setup>
import {ref, defineProps, onMounted, watch} from 'vue'
const props = defineProps({
    userRanking: Object
})
const getUserRankingFn = () => {
}
watch(() => props?.userRanking,
() => getUserRankingFn(),{deep: true})
onMounted(() => {
    
})
</script>
<template>
<div class="containerssssssss">
    <div class="item" style="left: 130px;">
        <div class="inner">
            <img style="top: 2px; position: relative;" :src="props?.userRanking[0]?.avatar" alt="" class="src">
        </div>
    </div>
    <div class="two" style="margin-top: 15px;">
        <div class="item" >
            <div class="inner">
                <img :src="props?.userRanking[1]?.avatar" alt="" class="src">
            </div>
        </div>
        <div class="item" style="left: 50px; background: linear-gradient(#facfa3, #d77c44);">
            <div class="inner">
                <img :src="props?.userRanking[1]?.avatar" alt="" class="src">
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