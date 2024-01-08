<script setup>
import {ref, onMounted} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const userInfo = ref({})
const article = ref({})
const tempTest = ref(false) 
const followOrNot = () => {
    tempTest.value  = (tempTest.value === true) ? false : true
}
onMounted(()=>{
   userInfo.value.avatar = '1'
   userInfo.value.nickName = 'alanyaeer'
   userInfo.value.desription = '关注渣渣灰'
   userInfo.value.beFollow = 3
   userInfo.value.thumbNum = 32
   userInfo.value.favourNum = 14
   userInfo.value.reads = 32
   userInfo.value.rank = "9999+"
   article.value.titleName = '机智的小军'
   article.value.content = '1111111智的edfafeafegrgregjrgorejreognajgoangoarnoarnogaroaor11111111'
   article.value.desription= '1111111智的edfafeafegrgregjrgorejreognajgoangoarnoarnogaroaor11111111'
})
</script>

<template>

<div class="item">
    <div class="img">
        <el-popover
            :width="300"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        >
            <template #reference>
                <img style="width: 60px; height: 60px; display: flex; border-radius: 1000px;" src="https://picsum.photos/60/60" alt="">

            </template>
            <template #default>
            <div
                class="demo-rich-conent"
                style="display: flex; gap: 16px; flex-direction: column"
            >
                <div style="display: flex; position: relative; ">
                    <el-avatar
                    :size="60"
                    shape="square"
                    src="https://picsum.photos/60/60"
                    style="margin-bottom: 8px"
                    />
                    <div style="display: flex; flex-direction: column; gap: 5px;">
                        <span style="position: relative; left: 20px ; font-size: large;">{{ userInfo.nickName }}</span>
                        <span style="position: relative; left: 20px ; ">全站排名:
                            <span style="position: relative; color: #3FBB6B;">{{ userInfo.rank }}</span>
                        </span>

                        <span style="position: relative; left: 20px ; color: gainsboro">{{ userInfo.desription }}</span>
                    </div>

                </div>

                <div style="display: flex; position: relative ; gap: 5px; justify-content: center;">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">关注者</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ userInfo.beFollow }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被点赞数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ userInfo.thumbNum }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被收藏数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ userInfo.favourNum }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被阅读数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ userInfo.reads }}</span>
                    </div>
                </div>
                <div @click="followOrNot" style="cursor: pointer; width: 260px; height: 50px; border-radius: 10px; background-color: gainsboro; display: flex; align-items: center;justify-content: center; transition: 0.3s;" :style="tempTest === false ? 'background-color:#3FBB6B;':'background-color:gainsboro'">
                   <span :style="tempTest === true ? 'color: gray; font-size: larger': 'color: white; font-size: larger'">{{ tempTest === false ? "+ 关注": "取消关注" }}</span> 
                </div>
            </div>
            </template>
        </el-popover>
    </div>
    <div class="content">
        <span style="color: rgb(89, 89, 89)">{{ userInfo.nickName }}</span>
        <span style="color: rgb(38, 38, 38); font-size: xx-large;">{{ article.titleName }}</span>
        <div class="font-content">
            <span> {{ article.desription }}</span>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
    .item{
        width: 600px;
        min-height: 180px;
        // height: 180px;
        border-radius: 10px;
        // background-color: aqua;
        box-shadow: v-bind(innerShadow);
        display: flex;
        .img{
            margin: 10px;

        }
        .content{
            margin: 10px;
            display: flex;
            flex-direction: column;
            position: relative;
            .font-content{
                background-color: #d6d9dd;
                width: 500px;
                height: fit-content;
                min-height: 100px;
                border-radius: 10px;
                font-size: medium;
                color:#606060;
            }
        }
        transition: 0.5s;
    }
    .item:hover{
        scale: 1.02;
    }
</style>