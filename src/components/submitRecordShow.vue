<script setup>
import {ref, onMounted, inject, watch, defineEmits} from 'vue'
import {getSubmitRecord} from '@/api/question'
const submitStatus =  inject('submitStatus')
const emit = defineEmits('changeTab')
const tableData = ref([
])
const showLastSubmit = ref(false)
const submitStatusChange = () => {
    emit('changeTab',2)
    showLastSubmit.value = true
}
const getColor = () => {
//     if(score < 1500) return 'color: #1CB8B8'
//    else if(score < 2100) return 'color: #FFB800'
//    else return 'color: #FF2800'
    if(submitStatus.value.judgeInfo.message === '成功') return "color: #2DB55D"
    else if(submitStatus.value.judgeInfo.message === '编译错误' || submitStatus.value.judgeInfo.message === '答案错误') return "color:#EF4743"
    else return 'color: rgba(28, 28, 28, 1)'
}
watch(() => submitStatus.value,
() => submitStatusChange())
onMounted(async() => {
    let path = window.location.pathname
    let id = path.split('/')[path.split('/').length - 1]
    let obj = {
        questionId: id,
    }
    // console.log(object);
    let t = await getSubmitRecord(obj)
    tableData.value = t.data
})
</script>

<template>
    <div  >
        <el-table
            v-if="showLastSubmit === false"
            :data="tableData"
            stripe
            style="width: 100%"
            :header-row-style="{fontWeight: 300 }">
            <el-table-column
                prop="allStatus"
                label="所有状态"
                width="180">
            </el-table-column>
            <el-table-column
                prop="language"
                label="语言"
                width="90">
            </el-table-column>
            <el-table-column
                prop="time"
                label="执行时间"
                width="90">
            </el-table-column>
            <el-table-column
                prop="memory"
                label="消耗内存"
                width="90">
            </el-table-column>
            <el-table-column
                prop="annotation"
                label="备注">
            </el-table-column>
        </el-table>
        <div v-else="showLastSubmit  === true">
            <h2 style="font-weight: 400; padding: 15px 25px;" :style="getColor()">{{submitStatus.judgeInfo.message}}</h2>
            <a-space style="padding: 0px 25px">
              
                <a-alert v-if="submitStatus.judgeInfo.message !== '成功'" title="error" type="error" style="border-radius: 15px; width: 520px;">{{submitStatus.errorMessage}}</a-alert>
                <a-alert v-if="submitStatus.judgeInfo.message === '成功'" title="success" type="success" style="border-radius: 15px; width: 520px;">{{submitStatus.judgeInfo}}</a-alert>
            </a-space>

            <a-space style="padding: 50px 25px">
                <a-alert title="code" style="border-radius: 15px; width: 520px;">{{submitStatus.code}}</a-alert>

            </a-space>
        </div>
        <!-- <a-table class="tablesss" :border=false  :header-cell-style="{ backgroundColor: 'white'}" :columns="columns" :data="data"  > 
            <template #th>
                <td class="my-td"></td>
            </template>
        </a-table> -->
    </div>
</template>

<style lang="scss" scoped>
.tablesss{
    // padding: 0px 5px;
    // height: auto;

    // background-color: aquamarine;/
    // width: 300px;
    // height: 600px;
    .my-td{
        background-color: white;
    }
}
</style>