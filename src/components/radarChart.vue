<script setup>
const context = {
    style: {
        canvasSize: 175,
        baseLineCount: 1,
        edgeCount: 4,
        mainColor: ['#4CC075'],
        fillColor: ['#C6EBD3']
    },
    axis: {
        label: ['数据结构', '算法',  '基础架构', '设计'],
        axisMax: [100, 100, 100, 100],
        labelStyle: '10px my_font',
        labelColor: 'gray'
    },
    data: [[65, 77, 78, 66]]
}
</script>
<template>
    <t-radar-chart :context="context" />
</template>



<style lang="scss" scoped>
</style>