<script setup>
import {ref, onMounted} from 'vue'
import * as echarts from "echarts";

const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const userInfo = ref({})

function init() {
    let chartbin = echarts.init(document.getElementById("bin"))
    let optionss = {


        series: [
            {
            type: 'pie',
            data: [
                {
                value: 335,
                name: '直接访问'
                },
                {
                value: 234,
                name: '联盟广告'
                },
                {
                value: 1548,
                name: '搜索引擎'
                }
            ]
            }
        ]
    };
    chartbin.setOption(optionss)
}
onMounted(()=>{
    userInfo.value.submitNum = 13
    userInfo.value.passNum = 10
    init();
})
</script>

<template>
    <div class="item">
        <div class="item-wrapper">
            <div class="item-wrapper-item">
               <span>提交个数</span> 
                <span>{{ userInfo.submitNum }}</span>
                
            </div>
            <div class="item-wrapper-item">
                <span>通过个数</span>  
                <span> {{ userInfo.passNum }}</span>

            </div>
            <div class="item-wrapper-item">
                <div id="bin" style="height: 150px; width: 150px    ;"></div>
            </div>
        </div>


    </div>
</template>
<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.item{
    width: 280px;
    height: 250px;
    border-radius: 10px;
    // background-color: aqua;
    box-shadow: v-bind(innerShadow);
    background-color: rgba(224, 232, 237, 0.475);
    .item-wrapper{
        top: 30px; 
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        // align-items: center;
        .item-wrapper-item{
            position: relative;
            display: flex;
            justify-content: space-around;
        }
    }
    
}
</style>