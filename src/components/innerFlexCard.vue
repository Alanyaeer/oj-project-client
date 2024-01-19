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
      <img style="width: 100%; height: 100%; position: relative; border-radius: 15px; "  :src="props.img" alt="">
    </div>
    <div class="item-fonts">
      <div class="item-name"><div style="color: black; ">题目</div></div>
      <div class="item-desc"><div style="color: #979797;">内容fjafeafejfaoejfoejfafjefiaeafjefijef</div></div>

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
    // box-shadow: v-bind(innerShadow);
    border-radius: 0px 15px 15px 0px;
    display: flex;

    // justify-content: center;
    align-items: center;


    // background-color: red;
    .item-up-pic{
      // box-shadow: v-bind(outerShadow);
      width: 112px;
      height: 112px;
      justify-content: center;
      align-items: center;
      display: flex;
      // background-color: antiquewhite;
      border-radius: 0px 15px 15px 0px;
      position: relative;
    }
    .item-fonts{
      width: 160px;
      height: 90px;
      left: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-direction: column;
      // justify-content: center;
      gap: 5px;
      // background-color: aqua;
      // background-color: aqua;
      .item-name{
        height: 30px;
        width: 100px;
        // box-shadow: v-bind(outerShadow);
        position: relative;
        display: flex;
        border-radius: 10px;
        font-size: 20px;
        // white-space;
      }
      .item-desc{
        height: 30px;
        width: 160px;
        // box-shadow: v-bind(outerShadow);
        position: relative;
        // left: 30px;
        // bottom: 20px;  
        font-size: 12px;
        // text-wrap:wrap;
        // display: text-wrap;
        display: flex;
        word-break:break-all; 
        border-radius: 10px;
      }
    }

  }

</style>

