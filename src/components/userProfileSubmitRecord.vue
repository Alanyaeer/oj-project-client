  
<script setup>
    import { ref } from 'vue'
    const data = {
        '2023-10-01': 1,
        '2023-10-07': 2,
        '2023-10-20': 3,
        '2023-11-01': 4,
        '2023-11-06': 5,
        '2023-11-12': 6,
        '2023-11-17': 7,
        '2023-11-21': 8,
        '2023-11-28': 9,
        '2023-11-30': 10,
        '2023-12-01': 11,
        '2023-12-06': 12,
        '2023-12-13': 13
    }
    const msg = ref('')
    const showInfo = v => {
        msg.value = v['count'] ? `${v['date']}共有${v['count']}次贡献` : `${v['date']}没有贡献`
    }
    const thresholds = [0, 2, 4, 6]
</script>
<template>
    <!-- <t-calendar-heatmap :thresholds="thresholds" :mapData="data" @hover="showInfo" title="提交图🎉" :tipInfo="msg" class="mapStyle" /> -->
    <t-calendar-heatmap :mapData="data" :thresholds="thresholds" @hover="showInfo" title="提交图🎉" :tipInfo="msg"  class="mapStyle"/>

</template>

<style lang="scss" scoped>
.mapStyle{
    display: flex;
    position: relative;
    justify-content: center;
    top: 10px;
    align-items: center;
    
}
</style>