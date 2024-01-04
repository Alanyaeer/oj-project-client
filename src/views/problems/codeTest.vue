<script setup>
import {ref} from 'vue'
const currentTab = ref(0)
</script>

<template>
    <div class="item">
        <div class="item-left">
            <div @click="currentTab = 0" class="item-left-item">

                <svg aria-hidden="true" focusable="false" data-prefix="far" width="18" height="18"  data-icon="square-check" class="svg-inline--fa fa-square-check absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path :fill="currentTab === 0 ? '#02B128': '#98DDA7'" d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                <span :style="currentTab === 0 ? 'color: black': 'color:gray'"> 测试用例</span>
            </div>
            <div @click="currentTab = 1" class="item-left-item">

                <svg aria-hidden="true" focusable="false" data-prefix="far" width="18" height="18" data-icon="terminal" class="svg-inline--fa fa-terminal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path :fill="currentTab === 1 ? '#02B128': '#98DDA7'" d="M6.3 72.2c-9-9.8-8.3-24.9 1.4-33.9s24.9-8.3 33.9 1.4l184 200c8.5 9.2 8.5 23.3 0 32.5l-184 200c-9 9.8-24.2 10.4-33.9 1.4s-10.4-24.2-1.4-33.9L175.4 256 6.3 72.2zM248 432H552c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                <span :style="currentTab === 1 ? 'color: black': 'color:gray'"> 测试结果</span> 
            </div>
            <!--  -->
            <!--  -->
        </div>
        <div class="item-right">
            <div class="item-right-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="gray" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>

            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .item{
        border-radius: 10px;
        width: 940px;
        position: relative;
        height: 50px;
        display: flex;
        background-color: rgb(249, 249, 249);
        align-items: center;
        justify-content: space-between;
        .item-left{
            display: flex;
            height: 100%;
            width: 200px;
            position: relative;
            align-items: center;
            transition: 0.5s;
            
            .item-left-item{
                border-radius: 10px;
                height: 80%;
                padding-left: 10px;
                padding-right: 10px;
                display: flex;
                align-items: center;
                gap:5px;
                cursor: pointer;
                white-space: nowrap;
                
            }
            .item-left-item:hover{
                background-color: #e6e6e6;
            }
        }
        .item-right{
            display: flex;
            height: 100%;
            position: relative;
            align-items: center;
            transition: 0.5s;
            
            .item-right-item{
                border-radius: 10px;
                height: 80%;
                padding-left: 10px;
                padding-right: 10px;
                display: flex;
                align-items: center;
                gap:5px;
                cursor: pointer;
                white-space: nowrap;
                
            }
            .item-right-item:hover{
                background-color: #e6e6e6;
            }
        }
    }

</style>