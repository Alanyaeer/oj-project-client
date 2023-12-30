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
  <!-- <svg>
      <circle  cx="100" cy="60" r="50" style="fill:none; stroke:red; stroke-width:4;"/>
  </svg> -->
  <svg class="h-full w-full origin-center -rotate-90 transform" viewBox="0 0 100 100"><circle fill="none" cx="50px" cy="50px" r="42px" stroke-width="3" stroke-linecap="round" stroke="currentColor" class="text-gray-4 dark:text-dark-gray-4"></circle><circle fill="none" cx="50px" cy="50px" r="42px" stroke-width="3" stroke-linecap="round" stroke="currentColor" class="cursor-pointer text-olive dark:text-dark-olive" stroke-dasharray="21.98467487816796 241.90910802337467" stroke-dashoffset="0" data-difficulty="EASY"></circle><circle fill="none" cx="50px" cy="50px" r="42px" stroke-width="3" stroke-linecap="round" stroke="currentColor" class="cursor-pointer text-yellow dark:text-dark-yellow" stroke-dasharray="41.32808139641469 222.56570150512795" stroke-dashoffset="-21.98467487816796" data-difficulty="MEDIUM"></circle><circle fill="none" cx="50px" cy="50px" r="42px" stroke-width="3" stroke-linecap="round" stroke="currentColor" class="cursor-pointer text-pink dark:text-dark-pink" stroke-dasharray="19.34340651824672 244.5503763832959" stroke-dashoffset="-63.312756274582654" data-difficulty="HARD"></circle></svg>
</div>
</template>




<style lang="scss" scoped>
span{
  font-family: 'my_font';
}
.container{
  width: 40vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>