<script setup>
import {ref, onMounted} from 'vue'
import {funLoading} from '@/utils/loading'
const loading = ref(true)
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
const context = {
    style: {
        canvasSize: 175,
        baseLineCount: 1,
        edgeCount: 4,
        mainColor: ['#4CC075'],
        fillColor: ['#C6EBD3']
    },
    axis: {
        label: ['数据结构', '算法',  '基础架构', '设计'],
        axisMax: [100, 100, 100, 100],
        labelStyle: '10px my_font',
        labelColor: 'gray'
    },
    data: [[65, 77, 78, 66]]
}

onMounted(() => {
    funLoading(loading, test)();
})
</script>
<template>
    <el-skeleton   :loading="loading" animated>
        <template #template>
            <div style="display: flex; justify-content: center; top: -10px; position: relative;">

                <el-skeleton-item variant="image" style=" width: 280px; height: 150px; border-radius: 10px;"></el-skeleton-item>
            </div>
        </template>
        <template #default>
            <t-radar-chart :context="context" />                    
        </template>
    </el-skeleton>  
</template>



<style lang="scss" scoped>
</style>