<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue'
import * as echarts from "echarts";
const drawEcharts = ()=>{
    // 第三步，通过echarts的init方法实例化一个echarts对象myChart，并，保存在data变量中
    // 第四步，执行myChart的setOption方法去画图，当然至于配置项，我们要提前配置好，这里的配置项
    //         写在data中，方便我们在一些事件中去修改对应配置项，比如点击按钮更改配置项数据
    myChart.setOption(this.option);
    // 第五步，在页面初始化加载的时候绑定页面resize事件监听。补充resize事件：resize事件是在浏览器窗口大小改变时，会触发。
    //        如当用户调整窗口大小，或者最大化、最小化、恢复窗口大小显示时触发 resize 事件。
    //        我们一般使用这个事件去做窗口大小与对应元素的大小适配

}
onMounted(()=>{
    
     // chart1
    let Chart = echarts.init(document.getElementById("echarts"));
    // 绘制图表
    let options = {
        xAxis: {
            type: 'category',

            data: ["1997-10-1", "1997-10-3", "2003-11-3", "2004-11-5","2005-11-3", "2008-11-5","2009-11-3", "2010-11-5","2011-11-3", "2012-11-5"],
            splitLine:{
                show:false
            },
            show: false,
        },

        yAxis: {
            splitLine:{
                show:false
            },
            show: false
            // type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260,35, 187, 260],
                type: 'line'
            }
        ],
        color: ['#FFA116']
        ,
        grid: {
            top: "10px",
            left: "0px",
            width: "350px",
            height: "120px",
        },
        tooltip: {
            trigger: 'axis'
        }
        
    };
    // drawEcharts()
    // 渲染图表
    Chart.setOption(options);
})
onBeforeUnmount(()=>{

})
</script>
<template>

    <div id="echarts" style="width: 360px; height: 155px; max-height: 155px; position: relative; color: aqua;">

    </div>

</template>
<style lang="scss" scoped>

</style>