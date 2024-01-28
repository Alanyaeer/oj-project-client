<script setup>
import {ref,onMounted, defineEmits, watch} from 'vue'
import lockSvg  from '@/components/lockSvg.vue'
import * as echarts from 'echarts';
const changeValue = defineEmits(['updateBar'])
const upValue = ref(100)
watch(()=>upValue.value,()=>{
    setTimeout(()=>{
        changeValue('updateBar',upValue.value)
    }, 20)
})
onMounted(()=>{
    var chartDom = document.getElementById('echarts1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['2023-1-1', '2023-1-2', '2023-1-3', '2023-1-4', '2023-1-5', '2023-1-6', '2023-1-7','2023-1-1', '2023-1-2', '2023-1-3', '2023-1-4','2023-1-3', '2023-1-4','2023-1-3', '2023-1-4','2023-1-4'],
            splitLine:{
                show:false
                
            },
            show: false,

        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                data: [1,2 ,8 ,20, 44, 100, 94, 75, 55, 32, 21, 15, 7, 4, 2 ,1],
                type: 'bar',
                itemStyle:{
                    color: '#e6e6e6'
                }
            }
        ],
        color: ['#e6e6e6'],
        grid: {
            top: "10px",
            left: "20px",
            width: "350px",
            height: "120px",
        },
        // tooltip: {
        //     trigger: 'axis'
        // }
    };

    option && myChart.setOption(option);
    myChart.on('mouseover', 'series',params=>{
        // TODO 一开始触碰会出现undefined的问题

        var dataIndex = params.dataIndex;
        let updateOption = {
            series: [{
                data: option.series[0].data.map((value, index)=>{
                    return {
                        value: value,
                        itemStyle: dataIndex === index ? { color: '#FFA116' } : { color: '#e6e6e6' }
                    }
                })
            }]
        }
        upValue.value =  params.data.value
        if(typeof params.data.value === 'undefined'){
            upValue.value = params.data
        }
        myChart.setOption(updateOption);
    })

})
</script>
<template>
    <!-- <lockSvg></lockSvg> -->
    <!-- <div> -->
    <div id="echarts1" style="width: 360px; height: 155px; max-height: 155px; position: relative; ">

    </div>
</template>

<style lang="scss" scoped>
</style>