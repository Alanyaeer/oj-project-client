<script setup>
import neoTaiclock from '@/components/neoTaiclock.vue'
import wavePipe from '@/components/wavePipe.vue';
import innerFlexCard from '@/components/innerFlexCard.vue';
import personInLive from '@/components/personInLive.vue';
import dayQuestion from '@/components/dayQuestion.vue';
import userSolveProcess from '@/components/userSolveProcess.vue';
import { picLoading, funLoading } from '@/utils/loading';
// import problemBottom from '@/views/problemset/problem-bottom.vue';
import problemBottom from './problemBottom.vue';
import {onMounted, ref} from 'vue'
const topPicLoading = ref(true)
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
const middleLoading = ref(true)
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
onMounted(async ()=>{
    // setTimeout(() => {
    //     topPicLoading.value = false
    //     middleLoading.value = false
    //     console.log(topPicLoading.value);
    // }, 2000)
    picLoading(topPicLoading, 2000)
    // picLoading(middleLoading, 2000)
    funLoading(middleLoading, test)()
    // let t = window.location.pathname
    // if(t === '/')
})
</script>

<template>
<div class="container">
<div class="left">
</div>
<div class="middle">
    <div class="comment">
        <div  style="font-weight:500; color: #535353 ; font-size: 20px;">推荐</div>
        <div class="comment-wrapper">
            <div v-for="(item, index) in commentCardList" class="comment-item">
                <div class="comment-inner-item">
                    <el-skeleton style="width: 280px" :loading="topPicLoading" animated>
                        <template #template>
                            <el-skeleton-item variant="image" style="width: 280px; height: 140px; border-radius: 10px" />
                        </template>
                        <template #default>
                            <img :src="item.img" style="position: relative; width: 280px; height: fit-content; border-radius: 16px; " alt="">
                        </template>
                    </el-skeleton>
                </div>
            </div>
        </div>
    </div>
    <div class="studyPlan">
        <div  style="font-weight:500; color: #535353 ; font-size: 20px;">学习计划</div>
        <div class="studyPlan-wrapper">
            
            <div class="studyPlan-item" v-for="(item, index) in studyPlanList" :style="middleLoading ? 'box-shadow: none': 'box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005'">
                <el-skeleton style="width: 296px" :loading="middleLoading" animated>
                    <template #template>
                        <div style="display: flex;">
                            <el-skeleton-item variant="image" style="width: 112px; height: 112px; border-radius: 15px" />
                            <div style="position: relative; left: 10px; top: 20px; display: flex; flex-direction: column; gap: 5px;">
                                <el-skeleton-item variant="text" style="left: 10px; width: 60px; height: 20px; margin-bottom: 8px;" />
                                <el-skeleton-item variant="text" style="left: 10px; width: 150px; height: 18px; margin-bottom: 5px;" />
                                <el-skeleton-item variant="text" style="left: 10px; width: 100px; height: 18px;" />
                            </div>

                        </div>
                    </template>
                    <template #default>
                        <innerFlexCard :img="item.img"></innerFlexCard>
                    </template>
                </el-skeleton>                
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
            <personInLive style="top: 20px; position: relative;" ></personInLive>
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
    // top: 10px;
    background-color: #FFFFFF;
    .left{
        
        height: 100%;
        width: 12%;
        display: flex;
        gap: 50px   ;
        flex-direction: column;
        top: 40px;
        position: relative;
        .day-finish{
            width: 80%;
            height: 500px;
            margin: 10px auto;
            // background-color: aqua;
            
            border-radius: 20px;
            display: flex;
            box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;
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
        top: 15px;
        position: relative;
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
                // gap: ;
                align-items: center;
                justify-content:space-between;
                margin-bottom: 15px;

                .comment-item{
                    border-radius: 15px;
                    height: 120px;
                    // width: 30%;
                    display: flex;
                    justify-content:center ;
                    align-items: center;
                    // background-color: aqua;
                    // box-shadow: v-bind(outerShadow);
                    box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;

                    .comment-inner-item{
                        height: 115px;
                        width: 95%;
                        border-radius: 20px;
                        // box-shadow: v-bind(innerShadow);
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

                        // box-shadow: v-bind(innerShadow);
                    }
                    // background-color: aqua;
               }
            }
            .studyPlan-item{
                cursor: pointer;
                border-radius: 15px;
                height: 90%;
                width: 30%;
                // box-shadow: v-bind(outerShadow);
                box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;


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
            // box-shadow: v-bind(outerShadow);
            box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;

            display: flex;
            position: relative;
            border-radius: 20px;
            justify-content: center;
            // align-items: center;
            .inner{
                height: 95%;
                top: -15px;
                width: 95%;
                position: relative;
                padding: 0px 20px;
                border-radius: 20px;
                justify-content: center;
                display: flex;
                flex-direction: column;
            }
        }
        .question-finish{
            left: 10%;
            top: 90px;
            width: 80%;
            height: 150px;
            // background-color: blanchedalmond;
            // box-shadow: v-bind(outerShadow);
            box-shadow: 0 0 #0000, 0 0 #0000,0px 2px 6px #0000000a,0px 4px 8px #00000005,0px 6px 12px #00000005;

            align-items:     center;
            justify-content: center;
            display: flex;
            position: relative;
            border-radius: 20px;
        }
    }
}
</style>