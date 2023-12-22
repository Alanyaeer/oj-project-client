<script setup>
import * as echarts from "echarts";
import { ref, onMounted,onBeforeUnmount } from "vue";
const isloading = ref(false)
//声明周期函数，自动执行初始化
onMounted(() => {
  init();
});
//初始化函数
function init() {

  // 基于准备好的dom，初始化echarts实例
  let Chart = echarts.init(document.getElementById("main"));
  // 绘制图表
  let options = {
    title: {
      text: "本周用户月活",
    },
    tooltip: {},
    xAxis: {
      data: ["用户1", "用户2", "用户3", "用户4", "用户5", "用户6"],
    },
    yAxis: {},
    series: [
      {
        name: "周活跃度",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };
  
  // 渲染图表
  Chart.setOption(options);
  let ChartMonth = echarts.init(document.getElementById("month"));
  let options1 = {
    title: {
        text: "日浏览量"
    },
    tooltip: {},
    xAxis: {
        data: ['1', '2', '3', '4', '5', '6', '7', '8']

    },
    yAxis: {},
    series: [
        {
            name: "浏览量",
            type: "bar",
            data: [5, 20, 36, 30, 80, 90, 32,33]
        },
    ],
  };
  ChartMonth.setOption(options1)
  //饼图
  let chartbin = echarts.init(document.getElementById("bin"))
  let optionss = {
    title: {
        text: "用户来源"
    },


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

  let myChart = echarts.init(document.getElementById("maxquestion"))
  var data = [];
    for (let i = 0; i < 7; ++i) {
    data.push(Math.round(Math.random() * 200));
    }

    let option = {
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E','F','G','H'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 6 // only the largest 3 bars will be displayed
    },
    series: [
        {
        realtimeSort: true,
        name: '题目提交人数',
        type: 'bar',
        data: data,
        label: {
            show: true,
            position: 'right',
            valueAnimation: true
        }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
    };

    function update() {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
        } else {
        data[i] += Math.round(Math.random() * 200);
        }
    }
    myChart.setOption(option);
    }

    setInterval(function() {
        update();
    }, 3000);
    isloading.value = false
}
onBeforeUnmount(()=>{
    isloading.value = true
 
})
</script>

<template>
    <div class="top">
        <div id="main" style="width: 350px; height: 300px; "></div>
        <div id="bin" style="width: 569px; height: 300px; "></div>

        <div id="month" style="width: 350px; height: 300px;"></div>
        <!-- <div class="top-lef"></div>
        <div class="top-rig"></div> -->
    </div>

    <div class="bottom">
        <div id="maxquestion" style="width: 1267.5px; height: 300px;"></div>
    </div>
</template>

<style lang="scss" scoped>
.top{
    position: relative;
    top: 5%;
    width: 100%;
    height: 40%;
    display: flex;
    // gap: 40%;
    justify-content: space-between;
    // background-color: aqua;

}
.bottom{
    top: 5%;
    position: relative;
    height: 40%;
    width: 100%;
    // background-color: aquamarine;
}
</style>