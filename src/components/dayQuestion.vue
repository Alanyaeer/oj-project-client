<script setup>
import {ref, defineProps, onMounted} from 'vue'
import {funLoading} from '@/utils/loading'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
                        
const easy = "30%"
const middle = "20%"
const hard = "10%"
const offset = 0
const loading = ref(true)
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
        <div class="item" style="background-color: white; left: 10px; position: relative;">
          <el-skeleton-item variant="text" style=" top: 4px;   height: 25px;  width: 100px; position: relative;" />
          <el-skeleton-item style="font-size: x-large; top: 5px;  height: 32px; width: 200px; position: relative;" />
        </div>
      </template>
      <template #default>
        <div class="item">
          <div style=" top: 4px; left: 5px; position: relative;">🥝每日一题 </div>
          <div style="font-size: x-large; top: 5px; left: 10px; position: relative;"> 贪吃的小明</div>
        </div>
      </template>
  </el-skeleton>     
<!-- <div class="container"> -->

<!-- </div> -->
</template>




<style lang="scss" scoped>
span{
  font-family: 'my_font';
}
  .item{
    position: relative;
    top: 10px;
    width: 260px;
    height: 80px;
    gap: 10px;
    left: 5px;
    display: flex;
    flex-direction: column;
    // background-color: aqua;
    border-radius: 15px;
    cursor: pointer;
    // align-items: center;
    // justify-content: center;
    // align-items: center;
    background: #F5F5F5;
    // box-shadow: v-bind(outerShadow);
  }
  .item:hover{
    // scale: 1.05;
    background: #e5e5e5;
    transition: 0.5s;
    // box-shadow: v-bind(innerShadow);
  }
  

</style>