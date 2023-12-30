<script setup>
import {ref} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

</script>

<template>
<!-- <div class="container"> -->
<div class="item">
  <svg>
      <circle  cx="100" cy="60" r="50" style="fill:none; stroke:red; stroke-width:4;"/>
  </svg>
</div>
</template>




<style lang="scss" scoped>
span{
  font-family: 'my_font';
}
.container{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>