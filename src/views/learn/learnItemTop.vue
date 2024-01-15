
<script setup>
import {ref, onMounted} from 'vue'
const article = ref({
    favourNum: 13,
    viewNum: 352,
    attendNum: 325,
    tags:[
        '动态规划',
        '排列组合',
        '滑动窗口'
    ]
})
onMounted(() => {

})
</script>
<template>
    <div class="top" style="border-bottom: 1px solid #F0F0F0;">
        <div>
            <div>收藏次数</div>
            <div style="padding: 1px 10px; border-radius: 5px; font-family:Georgia, 'Times New Roman', Times, serif; border-radius: 2px; width: 20px; justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{ article.favourNum }}</div>
        </div>
        <div>
            <div>参与人数</div>
            <div style="padding: 1px 10px; border-radius: 5px; font-family:Georgia, 'Times New Roman', Times, serif; border-radius: 2px; width: 20px; justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{article.attendNum}}</div>
        </div>
        <div>
            <div>浏览次数</div>
            <div style="padding: 1px 10px; border-radius: 5px; font-family:Georgia, 'Times New Roman', Times, serif; border-radius: 2px; width: 20px; justify-content: center; height: 15px;  align-items: center; color: black; background-color: #F7F7F7;">{{article.viewNum}}</div>
        </div>
    </div>
    <div class="bottom">
        <div style="color: #8C8C8C;">相关标签</div>
    </div>

</template>


<style scoped lang="scss">
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
    top: 5px;
    display: flex;
    position: relative;
}
</style>