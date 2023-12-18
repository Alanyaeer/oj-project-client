<script setup>
import {ref} from 'vue'
const middleBg = ref('#E5E9F4')
const outerShadow = ref('-3px -3px 3px 1px white,\
                            3px 3px 3px 1px black,\
                            inset 3px 3px 5px 1px black,\
                            inset -3px -3px 5px 1px white')
const innerShadow = ref('-3px -3px 3px 1px white,\
                            3px 3px 3px 1px black')
</script>

<template>
  <div class="minibutton-item">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.minibutton-item{
  // background-color: rgb(210, 224, 219);
  background-color: v-bind(middleBg);
  width: 90px;
  height: 30px;
  left: 50%;
  top: 50%;
  display: flex;
  position: relative;
  // margin-left: 4%;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
  // .left-item:hover{
  //     background-color: aqua !important;
  // }
  display: -moz-box;/*兼容Firefox*/
  display: -webkit-box;/*兼容FSafari、Chrome*/

  -moz-box-align: center;/*兼容Firefox*/
  -webkit-box-align: center;/*兼容FSafari、Chrome */

  -moz-box-pack: center;/*兼容Firefox*/
  -webkit-box-pack: center;/*兼容FSafari、Chrome */
  font-size: 2vw;
  // .left-font {
  font-family: 'my_font';
  font-size: medium;
  // box-shadow: v-bind(shadow);
  // box-shadow: -.5rem -.5rem 1rem hsl(0 0% 100% / .75),
  //             .5rem .5rem 1rem hsl(0 0% 50% / .5);
  // }
  box-shadow: v-bind(innerShadow)
        
              // inset 3px 3px 3px 1px black,
              // inset -3px -3px 3px 1px white
}
.minibutton-item:hover{
  background-color: #d1d8eb !important; 
  scale: 1.05 !important;
  box-shadow: v-bind(outerShadow) !important
}
</style>