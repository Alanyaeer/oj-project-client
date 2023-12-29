<script setup>
import {ref, defineProps} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const props = defineProps(['img'])

</script>
<template>
  <div class="item">
    <div class="item-up-pic">
      <img style="width: 90%; height: 90%; position: relative; border-radius: 10px;"  :src="props.img" alt="">
    </div>
    <div class="item-fonts">
      <div class="item-name"><span style="color: #9baacf; justify-content: center;">待引入</span></div>
      <div class="item-desc"><span style="color: #9baacf; justify-content: center;">待引入</span></div>

    </div>
  </div>

</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}

  .item{
    width: 285px;
    height: 105px;
    box-shadow: v-bind(innerShadow);
    border-radius: 20px;
    display: flex;
    // justify-content: center;
    align-items: center;


    // background-color: red;
    .item-up-pic{
      box-shadow: v-bind(outerShadow);
      width: 80px;
      height: 80px;
      justify-content: center;
      align-items: center;
      display: flex;
      // background-color: antiquewhite;
      border-radius: 15px;
      position: relative;
      left: 20px;
    }
    .item-fonts{
      width: 160px;
      height: 90px;
      left: 35px;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      // background-color: aqua;
      // background-color: aqua;
      .item-name{
        height: 30px;
        width: 100px;
        box-shadow: v-bind(outerShadow);
        position: relative;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        align-items: center;
      }
      .item-desc{
        height: 30px;
        width: 160px;
        box-shadow: v-bind(outerShadow);
        position: relative;
        // left: 30px;
        // bottom: 20px;  
        display: flex;
        justify-content: center;
        border-radius: 10px;
        align-items: center;
      }
    }

  }

</style>

