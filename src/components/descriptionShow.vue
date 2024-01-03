<script setup>
import {ref} from 'vue'
const currentTab = ref(0)
const clickTitleTab = (index) =>{
    currentTab.value = index
}
const titleName = ref('机智的小军')
</script>

<template>

<div class="container">
    <div class="item">
        <div class="top">
            <div @click="clickTitleTab(0)" class="title">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="memo" class="svg-inline--fa fa-memo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path :fill=" currentTab !== 0 ? '#96C7FC' : '#1083FF'" d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                题目描述
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div class="title" @click="clickTitleTab(1)">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="flask" class="svg-inline--fa fa-flask absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path></svg>
                题解
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div @click="clickTitleTab(2)" class="title">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="clock-rotate-left" class="svg-inline--fa fa-clock-rotate-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill=" currentTab !== 2 ? '#96C7FC' : '#1083FF'" d="M48 106.7V56c0-13.3-10.7-24-24-24S0 42.7 0 56V168c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H80.7c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5c-11-7.3-25.9-4.3-33.3 6.7s-4.3 25.9 6.7 33.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM256 128c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path></svg>
                提交记录
            </div>
            <!-- --未来在实现TODO -->
            <svg style="left: 255px; position: relative;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="content">
            <h2>{{ titleName }}</h2>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.container{
    width: 100vw;
    height: 100vh;
    // justify-content: center;
    // align-items: center;
    display: flex;
    background-color: rgb(226, 226, 226);
    .item{
        top: 55px;
        left: 10px;
        position: relative;
        width: 560px;
        // align-items: center;
        height: 693px;
        // height: 875px;
        border-radius: 10px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        // padding-left: 10px;
        .top {
            // position: relative;
            // left: 10px;
            // width: 99%;
            height: 40px;
            border-radius: 10px 10px 0px 0px;
            background-color: #FAFAFA;
            align-items: center;
            display: flex;
            gap: 10px;
            .title{
                display: flex;
                position: relative;
                left: 10px;
                align-items: center;
                gap: 3px;
                cursor: pointer;
                transition: 0.5s;
            }
          
        }
        .content{
            // top: 40px;
            position: relative;
            display: flex;
            width: 100%;
            padding-left: 10px;
            // border-left: 5px;
            // height: 100%;
            // height: calc(100% - 40px);
        }
    }
}
</style>