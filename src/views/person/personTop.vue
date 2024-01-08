<script setup>
import {ref, onMounted, initCustomFormatter} from 'vue'
import scoreLineChart from '@/components/scoreLineChart.vue';
import ascendPersonBarChart from '@/components/ascendPersonBarChart.vue';
const calDigest = ref(100)
const barValueChange = (value) => {
    calDigest.value = value
}
onMounted(()=>{ 
})
</script>

<template>
    <div class="t1">
        <div class="item" style="border-right: 1px solid #e6e6e6;">
            <div class="top">
                <div class="top-left-item">
                    <div style="font-size: small; color:  #bcbcbc;">竞赛分数</div>
                    <div>1,936</div>
                </div>
                <div style="bottom: 8px; left: 160px; position: relative;" class="top-left-item">
                    <div style="font-size: small; color:  #bcbcbc;">全球排名</div>
                    <div style="font-size: small;">114514</div>
                </div>
                <div style="bottom: 8px; left: 180px; position: relative;" class="top-left-item">
                    <div style="font-size: small; color:  #bcbcbc;">全国排名</div>
                    <div style="font-size: small;">114514</div>
                </div>
            </div>
            <scoreLineChart ></scoreLineChart>
            <!-- <div id="chart1" style="width: 330px; height: 155px; position: relative;">

            </div> -->
        </div>
        <div class="item">
            <div class="top">
                <div class="top-left-item" style="left: 15px;">
                    <div style="font-size: small; color:  #bcbcbc;">Top</div>
                    <div>{{ calDigest + "%" }}</div>
                </div>
            </div>
            <ascendPersonBarChart @updateBar="barValueChange"></ascendPersonBarChart>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.t1{
    box-shadow: 0px 0px 5px 0px #e6e6e6;
    width: 800px;
    height: 225px;
    min-height: 225px;
    border-radius: 15px;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: center;
    .item{
        width: 380px;
        height: 200px;
        .top{
            height: 50px;
            width: 100%;
            font-size: x-large;
            color: black;
            display: flex;
            .top-left-item{
                display: flex;
                flex-direction: column;
                justify-content: center;
                position: relative;
            }
        }
    }
}

</style>