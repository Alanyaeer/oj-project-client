<script setup>
import {ref, onMounted} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const userInfo = ref({})
const article = ref({})
onMounted(()=>{
   userInfo.value.avatar = '1'
   userInfo.value.nickName = 'alanyaeer'
   article.value.titleName = '机智的小军'
   article.value.content = '1111111智的edfafeafegrgregjrgorejreognajgoangoarnoarnogaroaor11111111'
   article.value.desription= '1111111智的edfafeafegrgregjrgorejreognajgoangoarnoarnogaroaor11111111'
})
</script>

<template>

<div class="item">
    <div class="img">
        <img style="width: 60px; height: 60px; display: flex; border-radius: 1000px;" src="https://picsum.photos/60/60" alt="">
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
        scale: 1.05;
    }
</style>