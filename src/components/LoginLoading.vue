<script setup>
import {ref, defineProps} from 'vue'
const props = defineProps({
    isshow: Boolean
})

</script>
<template>
<div class="loader" v-if="isshow">
  <div class="outer"></div>
  <div class="middle"></div>
  <div class="inner"></div>
</div>

</template>


<style lang="scss" scoped>
.loader {
  position: absolute;
  display: flex;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: #090821;
  opacity: 0.5;
  z-index: 100000 ;
  border-radius: 15px;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #3cefff;
  border-right-color: #3cefff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

</style>