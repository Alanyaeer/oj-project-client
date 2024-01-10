<script setup>
import {ref, onMounted} from 'vue'
const fontRef = ref(['求职面试', '职场与内推', '技术分享'])
const fontOtherRef = ref(['学习记录', '意见反馈'])
const colorOtherRef = ref(['#FFAF38', '#37B5FC'])
const currentClick = ref(0)
const colorRef = ref(['#0E81FF','#34D566','#BA5AEB', ])
const imgRef = ref([  
    'https://static.leetcode.cn/cn-mono-assets/production/assets/interview.b8d34858.png',
    'https://static.leetcode.cn/cn-mono-assets/production/assets/jobs-promote.04e3a3ef.png',
    'https://static.leetcode.cn/cn-mono-assets/production/assets/general-topic.66326b21.png'
])
const imgRefRev = ref([
    'https://static.leetcode.cn/cn-mono-assets/production/assets/interview-active.ebee91f1.png',
    'https://static.leetcode.cn/cn-mono-assets/production/assets/jobs-promote-active.3c936ab5.png',
    'https://static.leetcode.cn/cn-mono-assets/production/assets/general-topic-active.0e5b2bab.png'

])
const rightimgRef = ref(
    [
        'https://static.leetcode.cn/cn-mono-assets/production/assets/notes.0e1effb1.png',
        'https://static.leetcode.cn/cn-mono-assets/production/assets/feedback.6ed8deff.png'
    ]
)
const rightimgRefRev = ref(
    [
        // '<img src="" draggable="false" alt="">'
        'https://static.leetcode.cn/cn-mono-assets/production/assets/notes-active.a3ab52f5.png',
        'https://static.leetcode.cn/cn-mono-assets/production/assets/feedback-active.c7f1ed71.png'
    ]
)
const clickBox = (type) => {



    let c = currentClick.value
    let pgtn = document.getElementsByClassName("box-top")
    pgtn[c].style.backgroundColor = '#ffffff'
    pgtn[c].getElementsByClassName('box-font')[0].style.color = 'rgb(44, 44, 44)'
    let ngtn = document.getElementsByClassName("box-top")
    ngtn[type].style.backgroundColor = colorRef.value[type]
    ngtn[type].getElementsByClassName('box-font')[0].style.color = '#ffffff'
    currentClick.value = type
}
const clickBoxright = (type) => {
}
onMounted(()=>{
    clickBox(0)
})
</script>

<template>
    <div class="container">
        <!-- faefae -->
        <div class="top-container">
            <div class="box-top" v-for="(item, index) in fontRef" :key="item.id" @click="clickBox(index)">

                <div class="box-font">
                    {{ item }}
                </div> 
                <div class="img-box">
                    <img v-if="currentClick !== index" style="width: 110px; height: fit-content;"  :src="imgRef[index]" draggable="false" alt="">
                    <img v-else style="width: 110px; height: fit-content;"  :src="imgRefRev[index]" draggable="false" alt="">
                </div>
                
            </div>
            <div class="box-top-right">
                <div class="box-top-right-item" v-for="(item, index) in fontOtherRef">
                    <div class="box-right-font">{{ fontOtherRef[index] }}</div>
                    <div><img style="width: fit-content; height: 50px; position: relative; top: 5px;" :src="rightimgRef[index]" alt=""></div> 
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.container{

    /* width: ; */
    position: relative;
    // top: 10pc;
    // background-color: aquamarine;
    min-height: 700px;
    width: 1350px;
    display: flex;
    justify-content: center;
    .top-container{
        width: 1040px;
        height: 200px;
        display: flex;
        position: relative;
        top: 10px;
        gap: 10px;
        // background-color: black;
        .box-top{
            width: 200px;
            height: 110px;
            position: relative;
            display: flex;
            border-radius: 10px;
            background-color: white;
            cursor: pointer;
            transition: 0.5s;
            box-shadow: 0px 0px 5px 0px #aeaeae;

            .box-font{
                left: 15px;
                top: 10px;
                position: relative;
                color: #5C5C5C;
            }
            .img-box{
                position: relative;
                display: flex;
                left: 15px;
                top: 29px;
            }
        }
        .box-top-right{
            width: 165px;
            height: 110px;
            position: relative;
            display: flex;
            border-radius: 10px;
            // background-color: white;
            flex-direction: column;
            // align-items: center;
            
            gap: 10px;
            .box-top-right-item{
                padding: 5px 5px;
                cursor: pointer;
                box-shadow: 0px 0px 5px 0px #aeaeae;

                width: 150px;
                height: 40px;
                position: relative;
                align-items: center;
                justify-content: space-around;
                display: flex;
                border-radius: 10px;
                background-color: white;
                .box-right-font{
                    color: #5C5C5C;
                }
            }
        }
    }
}
</style>