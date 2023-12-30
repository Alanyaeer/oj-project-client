<script setup>
import {ref, defineProps} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

</script>

<template>
<!-- <div class="container"> -->
  <div class="item">
    <span style="color: #7e8ac5; top: 4px; left: 5px; position: relative;">🥝每日一题 </span>
    <span style="color: #9baacf; font-size: x-large; top: 5px; left: 10px; position: relative;"> 贪吃的小明</span>
  </div>
<!-- </div> -->
</template>




<style lang="scss" scoped>
span{
  font-family: 'my_font';
}
  .item{
    position: relative;
    top: 10px;
    width: 230px;
    height: 80px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    // background-color: aqua;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: v-bind(outerShadow);
  }
  .item:hover{
    scale: 1.05;
    // box-shadow: v-bind(innerShadow);
  }
</style>