<script setup>
import { ref , onMounted} from 'vue';
const medalNum = ref(15)
onMounted(()=>{

})
</script>
<template>
    <div class="item">
        <div class="top">
            <div style="width: 50px; white-space: nowrap; display: flex; flex-direction: column;">
                <div style="color: rgb(192, 192, 192); font-size: small;">勋章成就</div>
                <div style="color: rgb(23, 23, 23); font-size: x-large; display: flex; justify-content: center;">{{medalNum}}</div>
            </div>
            <div style="right: 15px; position: relative; display: flex; align-items: center; cursor: pointer;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="gray" class="h-[24px] w-[24px] text-label-3 dark:text-dark-label-3 cursor-pointer"><path fill-rule="evenodd" d="M18.586 13H3a1 1 0 110-2h15.586L12 4.414A1 1 0 0113.414 3l8.293 8.293a.997.997 0 01-.003 1.417L13.414 21A1 1 0 0112 19.586L18.586 13z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="middle">
            <img src="https://assets.leetcode.cn/aliyun-lc-upload/medal/medalfor2023_50.png" alt="50 天成就勋章" class="h-full w-full cursor-pointer object-contain" data-state="closed" style="width: 70px; height:fit-content"> 
            <img src="https://assets.leetcode-cn.com/contest/level/Knight_lg.png" alt="Knight" class="h-full w-full cursor-pointer object-contain" data-state="closed " style="width: 70px; height:fit-content">
            <img src="https://assets.leetcode.cn/aliyun-lc-upload/medal/medalfor2023_100.png" alt="100 天成就勋章" class="h-full w-full cursor-pointer object-contain" data-state="closed" style="width: 70px; height:fit-content">
        </div>
        <div class="bottom">
            <div style="color:rgb(192, 192, 192); font-size: small; white-space: nowrap;">最近获得</div>
            <div style="color:rgb(66, 66, 66); font-size: medium; ">Knight</div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    .item{
        // background-color: aqua;
        position: relative;
        display: flex;
        width:  390px;
        height: 200px;
        flex-direction: column;
        padding-left: 5px;
        padding-top: 5px;
        .top {

            position: relative;
            display: flex;
            top: 5px;
            left: 5px;
            height: 85px;
            width: 385px;
            // flex-direction: column;
            justify-content: space-between;
        }
        .middle{
            position: relative;
            display: flex;
            height: 85px;
            width: 385px;
            display: flex;
            // justify-content: space-evenly;   
            justify-content: center;
            // justify-content: center;
            // left: 10px;
            gap: 27px;
        }
        .bottom{
            position: relative;
            display: flex;
            height: 85px;
            width: 385px;
            left: 10px;
            flex-direction: column;
            gap: 2px;
            // bottom: 4px;
        }
    }
</style>