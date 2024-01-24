
<script setup>
import {ref, onMounted} from 'vue'
const loading = ref(false)
import { funLoading } from '@/utils/loading';
const article = ref({
    favourNum: 13,
    viewNum: 352,
    attendNum: 325,
    tags:[
        '动态规划',
        '排列组合',
        '滑动窗口',
        '数学',
        '贪心'
    ]
})
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
onMounted(() => {
    funLoading(loading, test)()
})
</script>
<template>
    <el-skeleton   :loading="loading" animated>
        <template #template>
            <div style="display: flex; position: relative; gap: 25px; flex-direction: column;">
                <el-skeleton-item variant="text" style="width: 230px; height: 20px" />
                <el-skeleton-item variant="text" style="width: 230px; height: 20px" />
                <el-skeleton-item variant="text" style="width: 230px; height: 20px" />
                <div style="margin-top: 10px; display: flex; flex-direction: column;">
                    <div style="display: flex; flex-wrap: wrap; gap: 5px; row-gap: 8px;">
                        <el-skeleton-item variant="text" style="width: 60px; height: 20px" />
                        <el-skeleton-item variant="text" style="width: 60px; height: 20px" />
                        <el-skeleton-item variant="text" style="width: 60px; height: 20px" />
                        <el-skeleton-item variant="text" style="width: 30px; height: 20px" />
                        <el-skeleton-item variant="text" style="width: 80px; height: 20px" />
                    </div>
                </div>
            </div>
        </template>
        <template #default>
            <div class="top" style="border-bottom: 1px solid #F0F0F0;">
                <div>
                    <div>收藏次数</div>
                    <div style="padding: 1px 10px; border-radius: 5px;  border-radius: 2px; width: 20px; font-family:'Times New Roman', Times, serif;  justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{ article.favourNum }}</div>
                </div>
                <div>
                    <div>参与人数</div>
                    <div style="padding: 1px 10px; border-radius: 5px;  border-radius: 2px; width: 20px; font-family:'Times New Roman', Times, serif;  justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{article.attendNum}}</div>
                </div>
                <div>
                    <div>浏览次数</div>
                    <div style="padding: 1px 10px; border-radius: 5px;  border-radius: 2px; width: 20px; font-family:'Times New Roman', Times, serif;  justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{article.viewNum}}</div>
                </div>
            </div>
            <div class="bottom">
                <div style="color: #8C8C8C;">相关标签</div>
                <div class="bottom-tag" >
                    <el-tag style="position: relative; display: flex;"  type="info" v-for="(item, index) in article.tags" :key="item.id">
                        {{ item }}
                    </el-tag>
                </div>
            </div>
        </template>
    </el-skeleton> 
    

</template>


<style  lang="scss" scoped>
.top{
    display: flex;
    width: 100%;
    height: 150px;
    flex-direction: column;
    gap: 10px;
    div{
        width: 100%;
        height: 32%;
        color: #8C8C8C;
        display: flex;
        justify-content: space-between;
        size: 5px;
    }
}
.bottom{
    top: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 8px;
    min-width: 226px;
    // margin-bottom: 5px;
    .bottom-tag{
        position: relative;
        display: flex;
        min-width: 226px;
        flex-wrap: wrap;
        
        gap: 5px;
        row-gap: 8px;
        
    }
}
</style>