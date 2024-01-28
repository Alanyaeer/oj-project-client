<script setup>
import {defineProps, ref, onMounted}from 'vue'
// import {vueRouter} from 'vue-router'

</script>

<template>
    <div class="lock-style">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="text-brand-orange dark:text-dark-brand-orange"><path fill-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg>
    </div>
</template>

<style lang='scss' scoped>
.lock-style{
    display:flex;
    width: 370px;
    align-content: center;
    color: #FFA116;
    position: absolute;
    z-index: 100;
    justify-content:center;
    height: 370px;
}
</style>