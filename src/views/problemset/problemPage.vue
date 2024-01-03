<script setup>
import neoTaiclock from '@/components/neoTaiclock.vue'
import wavePipe from '@/components/wavePipe.vue';
import innerFlexCard from '@/components/innerFlexCard.vue';
import personInLive from '@/components/personInLive.vue';
import dayQuestion from '@/components/dayQuestion.vue';
import userSolveProcess from '@/components/userSolveProcess.vue';
// import problemBottom from '@/views/problemset/problem-bottom.vue';
import problemBottom from './problemBottom.vue';
import {ref} from 'vue'
const commentCardList = ref([
    {
        img: 'https://pic.leetcode.cn/1703045233-TfioKU-Site%20Ads.png?x-oss-process=image%2Fformat%2Cwebp',
        name: 'xx'
    },
    {
        img: 'https://pic.leetcode.cn/1680772589-xwhChN-%E9%A2%98%E5%BA%93.png?x-oss-process=image%2Fformat%2Cwebp',
        name: 'xx'
    },
    {
        img: 'https://pic.leetcode.cn/1702291269-yAoOxc-480%20_%20240.png?x-oss-process=image%2Fformat%2Cwebp',
        name: 'xx'
    }
])
const studyPlanList = ref([
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010755.webp',
        name: 'xx'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010631.webp',
        name: 'xx'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010584.webp',
        name: 'xx'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291009571.webp',
        name: 'xx'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291009533.webp',
        name: 'xx'
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291009738.webp',
        name: 'xx'
    }
])
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
</script>

<template>
<div class="container">
<div class="left">
    <neoTaiclock style="left: 35px; top: 10px;"></neoTaiclock>
    <div class="day-finish">
        <div class="day-finish-left">
            <span>八题</span>
            <span>七题</span>
            <span>六题</span>
            <span>五题</span>
            <span>四题</span>
            <span>三题</span>
            <span>二题</span>
            <span>一题</span>
            <span>签到</span>
        </div>
        <wavePipe style="display: flex; left: 25px; top: 25px"></wavePipe>

    </div>

</div>
<div class="middle">
    <div class="comment">
        <span style="color: #9baacf; font-size: x-large;">推荐</span>
        <div class="comment-wrapper">
            <div v-for="(item, index) in commentCardList" class="comment-item">
                <div class="comment-inner-item">
                    <img :src="item.img" style="position: relative; width: 270px; height: 105px; border-radius: 16px; " alt="">
                    <!--  -->
                </div>
            </div>
        </div>
    </div>
    <div class="studyPlan">
        <span style="color: #9baacf ; font-size: x-large;">学习计划</span>
        <div class="studyPlan-wrapper">
            <div class="studyPlan-item" v-for="(item, index) in studyPlanList">
                <innerFlexCard :img="item.img"></innerFlexCard>
            </div>
        </div>
    </div>
    <div class="problemset">
        <problemBottom></problemBottom>
    </div>
</div>
<div class="right">
    <div class="dayrecord">

        
        <div class="inner">
            <dayQuestion></dayQuestion>
            <personInLive style="top: 115px;"></personInLive>
        </div>
        
    </div>
    <div class="question-finish">
        <userSolveProcess></userSolveProcess>
    </div>
</div>
</div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}

.container{
    min-height: 800px;
    width: 100%;
    position: relative;
    z-index: 1;
    .left{
        height: 100%;
        width: 12%;
        display: flex;
        gap: 50px   ;
        flex-direction: column;
        .day-finish{
            width: 80%;
            height: 500px;
            margin: 10px auto;
            // background-color: aqua;
            border-radius: 20px;
            box-shadow: v-bind(outerShadow);
            display: flex;
            .day-finish-left{
                display: flex;
                flex-direction: column;
                gap: 30px;
                position: relative;
                top: 25px;
                left: 5px;
                color: #9baacf
            }
        }
    }
    .middle{
        height: 100%;
        // min-height: 1500px;
        // max-height: 2000px;
        margin-bottom: 100px;
        width: 68%;
        .comment{
            height: 25%;
            width: 100%;
            position: relative;

            .comment-wrapper{
                margin-top: 15px;
                height: 80%;
                width: 100%;
                display: flex;
                position: relative;
                gap: 5%;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;

                .comment-item{
                    border-radius: 15px;
                    height: 120px;
                    width: 30%;
                    display: flex;
                    justify-content:center ;
                    align-items: center;
                    // background-color: aqua;
                    box-shadow: v-bind(outerShadow);
                    .comment-inner-item{
                        height: 115px;
                        width: 95%;
                        border-radius: 20px;
                        box-shadow: v-bind(innerShadow);
                        display: flex;
                        justify-content:center ;
                        align-items: center;
                        cursor: pointer;
                    }
                }
            }
        }
        .studyPlan{
            height: 25%;
            width: 100%;
            
            .studyPlan-wrapper{
                margin-top: 10px;
                height: 80%;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                position: relative;
                gap: 35px;
                row-gap: 20px;
                align-items: center;
                justify-content: center;
                // box-shadow: v-bind(innerShadow);

                .studyPlan-item{
                    border-radius: 15px;
                    height: 120px;
                    width: 30%;
                    display: flex;
                    position: relative;
                    justify-content: center;
                        align-items: center;
                    .studyPlan-inner{
                        height: 95%;
                        width: 95%;
                        border-radius: 15px;
                        box-shadow: v-bind(innerShadow);
                    }
                    // background-color: aqua;
               }
            }
            .studyPlan-item{
                border-radius: 15px;
                height: 90%;
                width: 30%;
                box-shadow: v-bind(outerShadow);

                // background-color: aqua;
            }
        }
        .problemset{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            top: 50px;
            position: relative;
        }
        // background-color: aqua;
    }
    .right{
        // height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        position: fixed;
        // left: 1180px;
        position: relative;
        .dayrecord{
            left: 10%;
            top: 3%;
            width: 80%;
            height: 320px;
            // background-color: blanchedalmond;
            box-shadow: v-bind(outerShadow);

            display: flex;
            position: relative;
            border-radius: 20px;
            justify-content: center;
            align-items: center;
            .inner{
                height: 95%;
                width: 95%;
                border-radius: 20px;
                box-shadow: v-bind(innerShadow);
                // background-color: aqua;
                justify-content: center;
                display: flex;
            }
        }
        .question-finish{
            left: 10%;
            top: 90px;
            width: 80%;
            height: 150px;
            // background-color: blanchedalmond;
            box-shadow: v-bind(outerShadow);
            align-items:     center;
            justify-content: center;
            display: flex;
            position: relative;
            border-radius: 20px;
        }
    }
}
</style>