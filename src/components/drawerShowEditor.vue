<script setup>
import {ref, onMounted, defineProps} from 'vue'
const props = defineProps({
    drawer: Boolean
})
</script>

<template>
 <el-drawer
    v-model="props.drawer"
    title="I am the title"
    direction="btt"
    size="40%"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<style lang="scss" scoped>

</style>