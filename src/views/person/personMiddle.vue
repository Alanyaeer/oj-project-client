<script setup>
import {ref, onMounted, initCustomFormatter} from 'vue'
import userProfileProcess from '@/components/userProfileProcess.vue'
import medalShow from '@/components/medalShow.vue';
import {funLoading } from '@/utils/loading'
const loading = ref(true)
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}

onMounted(()=>{ 
    funLoading(loading, test)()
})
</script>

<template>
    <div class="item-2-middle">
        <div class="item-item2">
                <userProfileProcess></userProfileProcess>
             
        </div>
        <div class="item-item2">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                        <div style="display: flex; flex-direction: column; gap: 10px; padding: 16px 20px;">
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;"></el-skeleton-item>
                            <el-skeleton-item variant="text" style="height: 15px; width: 60px;"></el-skeleton-item>
                            <div style="display: flex; gap: 15px; position: relative; left: 60px; align-items: center;">
                                <el-skeleton-item variant="image" style="height: 60px; width: 60px; border-radius: 1000px;"></el-skeleton-item>
                                <el-skeleton-item variant="image" style="height: 80px; width: 80px; border-radius: 1000px;"></el-skeleton-item>
                                <el-skeleton-item variant="image" style="height: 60px; width: 60px; border-radius: 1000px;"></el-skeleton-item>
                            </div>
                            <el-skeleton-item variant="text" style="top: -10px; position: relative; height: 15px; width: 60px;"></el-skeleton-item>
                            <el-skeleton-item variant="text" style=" top: -10px; position: relative;height: 15px; width: 160px;"></el-skeleton-item>
                        </div>
                </template>
                <template #default>
                    <medalShow></medalShow>
                </template>
            </el-skeleton>  
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-2-middle{
    width: 800px;
    height: 200px;
    // background-color: white;
    border-radius: 15px;
    gap: 20px;
    display: flex;
    position: relative;
    .item-item2 {
// back
        display: flex;
        width: 390px;
        box-shadow: 0px 0px 5px 0px #e6e6e6;
        background-color: white; 
        border-radius: 10px;
    }
}
</style>