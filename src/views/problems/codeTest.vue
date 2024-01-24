<script setup>
import {onMounted, ref} from 'vue'
const currentTab = ref(0)
const testList = ref([0, 1, 2]);
const currentClick = ref(0)

const choseTestcase = (type) => {
    let beforeValue = currentClick.value
    document.getElementsByClassName('atag')[beforeValue].style.backgroundColor = '#ffffff'
    currentClick.value = type
    document.getElementsByClassName('atag')[currentClick.value].style.background = '#F2F3F4'
}
onMounted(() => {
    var t =  document.getElementsByClassName('atag')[0]
    t.style.backgroundColor = '#F2F3F4'
})
</script>

<template>
    <div class="containerss">
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
        <div class="item-content" v-show="currentTab === 0">
            <a-space style="padding: 20px 30px; gap: 20px" wrap>
                <a-tag @click="choseTestcase(index)" class="atag" v-for="(item, index) in testList" :key="index"  style="font-size: 13px; font-weight: bold; border-radius: 10px;" closable>{{ "Case " + item }}</a-tag>
            </a-space>

            <a-space style="padding: 0px 30px;"> 
                <div style="font-size: 12px; color: #8A8A98; font-weight: bold;">input=</div>
            </a-space>
            <a-space style="padding: 5px 30px; ">
                <a-input :style="{width:'860px' }" style="border-radius: 10px; height: 42px" default-value="content" placeholder="Please enter something" allow-clear />
            </a-space>
            <a-space style="padding: 0 30px; margin-top: 15px; margin-bottom: 5px;"> 
                <div style="font-size: 12px; color: #8A8A98; font-weight: bold;">target=</div>
            </a-space>
            <a-space style="padding: 0px 30px;">
                <a-input disabled :style="{width:'860px' }" style="border-radius: 10px; height: 42px" default-value="answer is dfafsafdafad" placeholder="Please enter something" allow-clear />
            
            </a-space>
        </div>
        <div class="item-content" v-show="currentTab === 1">
            <h2 style="color: F05855; font-weight: 400; padding: 15px 25px;">执行错误</h2>
            <a-space style="padding: 0px 25px">
                <!-- <a-alert type="success">This is an info alert.</a-alert> -->
                <a-alert title="error" type="error" style="border-radius: 15px; width: 860px;">you answer issue mistake</a-alert>
            </a-space>
            
        </div>
       
    </div>
   
    <!-- <img src="https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401072101651.webp" alt=""> -->
</template>
<style lang="scss" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.containerss{
    display: flex;
    flex-direction: column;
    // gap: 10px;
    // background-color: rgb(249, 249, 249);
    height: 100%;
    width: 100%;

    background-color: rgb(249, 249, 249);
    padding: 0px 1px;
    border-radius: 0px 0px 10px 10px;

    .item-content{
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        // gap: 0px;
        flex-direction: column;
        // padding: 10px 20px;
        .atag{
            display: flex;
            padding: 15px 10px;
            background-color: white;
            cursor: pointer;
        }
        // .atag:nth-child(1){
        //     background-color: #F2F3F4;
        // }
        .atag:hover{
            background-color: #F2F3F4;
        }
    }
    .item{
        // top: 5px;
        // left: 5px;
        border-radius: 10px 10px 0px 0px;
        // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        position: relative;
        // height: 100%;
        height: 40px;
        min-height: 40px;
        display: flex;
        background-color: rgb(249, 249, 249);
        align-items: center;
        // justify-content: space-between;
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
}
   

</style>