  
<script setup>
    import { ref , onMounted} from 'vue'
    import {queryUserDayLife} from '@/api/user'
    import {funLoading} from '@/utils/loading'
    const loading = ref(true)
    const data = ref({})
    const msg = ref('')
    const showInfo = v => {
        msg.value = v['count'] ? `${v['date']}共有${v['count']}次提交` : `${v['date']}没有提交`
    }
    const thresholds = [0, 2, 4, 6]
    onMounted(async () => {
        let _fn = funLoading(loading, queryUserDayLife)
        const today = new Date();
        const currentYear = today.getFullYear();
        let obj = await _fn({'year': currentYear, 'isQueryProfile': true, 'userId': window.location.pathname.split('/')[2]})
        data.value = obj.data
    })
</script>
<template>
    <el-skeleton   :loading="loading" animated>
        <template #template>
            <div style="padding: 15px 20px;">
                <el-skeleton :rows="3" ></el-skeleton>
                <div style="display: flex; margin-top: 25px; gap: 20px;">
                    <el-skeleton-item v-for="(item, index) in 13" style="width: 40px; height: 15px;"></el-skeleton-item>
                    
                </div>
            </div>
        </template>
        <template #default>
            <t-calendar-heatmap id="fjaiefjae" :mapData="data" :thresholds="thresholds" @hover="showInfo" title="提交图🎉" :tipInfo="msg"  class="mapStylesssss"/>
        </template>
    </el-skeleton>  

    <!-- <t-calendar-heatmap :thresholds="thresholds" :mapData="data" @hover="showInfo" title="提交图🎉" :tipInfo="msg" class="mapStyle" /> -->

</template>

<style lang="scss" scoped>
.mapStylesssss{
    display: flex;
    position: relative;
    justify-content: center;
    top: 10px;
    align-items: center;
    
}
</style>