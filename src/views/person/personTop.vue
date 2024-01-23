<script setup>
import {ref, onMounted, initCustomFormatter} from 'vue'
import scoreLineChart from '@/components/scoreLineChart.vue';
import ascendPersonBarChart from '@/components/ascendPersonBarChart.vue';
import {funLoading, picLoading} from '@/utils/loading'

const calDigest = ref(100)
const loading = ref(true)
const scoreMsg = ref({})
const barValueChange = (value) => {
    calDigest.value = value
}
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
const updateChart = (value) => {
    console.log(value);
    scoreMsg.value = value
}
onMounted(()=>{ 
    funLoading(loading, test)()
    scoreMsg.value.date='2022-11-2'
    scoreMsg.value.score='99'
})
</script>

<template>
    <div class="t1">
        <div class="item" style="border-right: 1px solid #e6e6e6;">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <div style="display: flex; flex-direction: column; gap: 5px;">
                        <div style="display: flex; gap: 35px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                        </div>
                        <div style="display: flex; gap: 15px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;" />
                        </div>  
                        <div style="margin-top: 40px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 55px; width: 365px;" />
                        </div>
                        <div style="margin-top: 35px; display: flex; justify-content: space-between;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 45px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 45px; position: relative; right: 15px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                    <div class="top">
                        <div class="top-left-item">
                            <div style="font-size: small; color:  #bcbcbc;">竞赛分数</div>
                            <div>1,936</div>
                        </div>
                        <div style="display: flex; flex-direction: column; left: 35px; position: relative;">
                            <div style="font-size: 13px; color: #C4C4C6;"> {{ scoreMsg.date }}</div>
                            <div style="font-size: 15px; color: #262626;"> {{ scoreMsg.score }}</div>
                        </div>
                        <div style="bottom: 8px; left: 105px; position: relative;" class="top-left-item">
                            <div style="font-size: small; color:  #bcbcbc;">全球排名</div>
                            <div style="font-size: small;">114514</div>
                        </div>
                        <div style="bottom: 8px; left: 125px; position: relative;" class="top-left-item">
                            <div style="font-size: small; color:  #bcbcbc;">全国排名</div>
                            <div style="font-size: small;">114514</div>
                        </div>
                    </div>
                    <scoreLineChart @updateChart="updateChart"></scoreLineChart>
                </template>
            </el-skeleton>  

            <!-- <div id="chart1" style="width: 330px; height: 155px; position: relative;">

            </div> -->
        </div>
        <div class="item">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <div style="padding-left: 15px; display: flex; flex-direction: column; gap: 5px;">
                        <div style=" display: flex; gap: 25px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 40px;" />
                        </div>
                        <div style="display: flex; gap: 15px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 50px;" />
                            <el-skeleton-item variant="text" style="height: 15px; width: 50px;" />
                            
                        </div>  
                        <div style="margin-top: 40px; position: relative;">
                            <el-skeleton-item variant="text" style="height: 55px; width: 365px;" />
                        </div>
                    </div>
                </template>
                <template #default>
                
                    <div class="top">
                        <div class="top-left-item" style="left: 15px;">
                            <div style="font-size: small; color:  #bcbcbc;">Top</div>
                            <div>{{ calDigest + "%" }}</div>
                        </div>
                        <div class="top-left-item" style="left: 35px; position: relative;">
                            <div style="font-size: 13px; color: #C4C4C6;"> {{ calDigest }}</div>
                            <div style="font-size: 15px; color: #262626;"> {{ calDigest }}</div>
                        </div>
                    </div>
                    <ascendPersonBarChart @updateBar="barValueChange"></ascendPersonBarChart>
                </template>
            </el-skeleton>  
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