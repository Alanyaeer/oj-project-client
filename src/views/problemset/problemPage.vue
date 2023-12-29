<script setup>
import neoTaiclock from '@/components/neoTaiclock.vue'
import wavePipe from '@/components/wavePipe.vue';
import {ref} from 'vue'
const commentCardList = ref([
    {
        img: '',
        name: 'xx'
    },
    {
        img: 'xxx',
        name: 'xx'
    },
    {
        img: 'xxx',
        name: 'xx'
    }
])
const studyPlanList = ref([
    {
        img: '',
        name: 'xx'
    },
    {
        img: 'xxx',
        name: 'xx'
    },
    {
        img: 'xxx',
        name: 'xx'
    },
    {
        img: '',
        name: 'xx'
    },
    {
        img: 'xxx',
        name: 'xx'
    },
    {
        img: 'xxx',
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
            <span>零题</span>
        </div>
        <wavePipe style="display: flex; left: 25px; top: 25px"></wavePipe>

    </div>

</div>
<div class="middle">
    <div class="comment">
        <span style="color: #9baacf; font-size: x-large;">推荐</span>
        <div class="comment-wrapper">
            <div v-for="(item, index) in commentCardList" class="comment-item"></div>
        </div>
    </div>
    <div class="studyPlan">
        <span style="color: #9baacf ; font-size: x-large;">学习计划</span>
        <div class="studyPlan-wrapper">
            <div class="studyPlan-item" v-for="(item, index) in studyPlanList">
                
            </div>
        </div>
    </div>
    <div class="problemset">

    </div>
</div>
<div class="right">
    <div class="dayrecord">

    </div>
    <div class="question-finish">

    </div>
</div>
</div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}

.container{
  
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
            height: 70%;
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
        width: 68%;
        .comment{
            height: 25%;
            width: 100%;
            position: relative;

            .comment-wrapper{
                height: 80%;
                width: 100%;
                display: flex;
                position: relative;
                gap: 5%;
                align-items: center;
                justify-content: center;
                .comment-item{
                    border-radius: 15px;
                    height: 90%;
                    width: 30%;
                    background-color: aqua;
                }
            }
        }
        .studyPlan{
            height: 25%;
            width: 100%;
            
            .studyPlan-wrapper{
                height: 80%;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                position: relative;
                gap: 5%;
                row-gap: 15%;
                align-items: center;
                justify-content: center;
                .studyPlan-item{
                    border-radius: 15px;
                    height: 90%;
                    width: 30%;
                    background-color: aqua;
               }
            }
            .studyPlan-item{
                border-radius: 15px;
                height: 90%;
                width: 30%;
                background-color: aqua;
            }
        }
        .problemset{
        }
        // background-color: aqua;
    }
    .right{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        position: relative;
        .dayrecord{
            left: 10%;
            top: 3%;
            width: 80%;
            height: 45%;
            background-color: blanchedalmond;
            display: flex;
            position: relative;
            border-radius: 20px;

        }
        .question-finish{
            left: 10%;
            top: 10%;
            width: 80%;
            height: 15%;
            background-color: blanchedalmond;
            display: flex;
            position: relative;
            border-radius: 20px;
        }
    }
}
</style>