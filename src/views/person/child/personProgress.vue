<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import {getRelativeTime} from '@/utils/dayUtils'
import {getProfileSubmit} from '@/api/question'
const choseValue = ref()
const tableData = ref([])
const searchContent = ref('')
const options = ref([
    {
        value: '0',
        label: '已解决的题目'
    },
    {
        value: '1',
        label: '未解决的题目'
    },
    {
        value: '2',
        label: '未开始的题目'
    }
])
const handleSelect = (v) => {
    console.log(v);
}
const calcColor = (score) => {
    if(score >= 1200 && score < 1400){
        return {color: '#008000'}
    }
    else if(score >= 1400 && score < 1600){
        return {color: '#03A89E'}
    }
    else if(score >= 1600 && score < 1900)
    {
        return {color: '#0000FF'}
    }
    else if(score >= 1900 && score < 2100){
        return {color: '#AA00AA'}
    }
    else if(score >= 2100 && score < 2300){
        return {color: '#DBAF75'}

    }
    else if(score >= 2300 && score < 2500){
        return {color: '#DB6666'}
    }
    else if(score >= 2500){
        return {color: '#FF0000'}
    }
    else {
        return {color: 'gray'}
    }

}
onMounted( async() => {
    let obj = document.getElementsByClassName('sonstyle')[4]
    obj.style.backgroundColor = '#EDEEF0'
    obj.style.color = '#0A84FF'
    let objs =   await getProfileSubmit();
    tableData.value = objs.data
})
</script>

<template>
    <div class="containersssss">
        <div style="gap: 10px; display: flex;">
            <div>
                <el-select v-model="choseValue" placeholder="已解决的题目">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <el-input placeholder="搜索题目" v-model="searchContent">
                    <template slot="append" icon="el-icon-search"></template>
                </el-input>
            </div>
        </div>
        <div style=" display: flex;">
            <el-table
                :data="tableData"
                :border="true"
                :header-cell-style="{ fontSize: '14px', fontWeight: '400',color:'black',  backgroundColor: '#F5F5F5' }"
                style="width: 100%">
                <el-table-column
                    label="最近提交时间"
                    sortable
                    width="140">
                    <template #default="scope">
                        <div style="display:flex; gap:5px">
                            <i class="el-icon-time"></i>
                            <span>{{ getRelativeTime(scope.row.createTime) }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="题目"
                    sortable
                    width="240">
                    <template #default="scope">
                        <div>{{"#"+scope.row.titleId + " " + scope.row.titleName}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    label="题目难度">
                    <template #default="scope">
                        <div :style="calcColor(scope.row.score)">{{scope.row.score}}</div>
                    </template>
                </el-table-column>
                <el-table-column
                    sortable
                    label="提交次数">
                    <template #default="scope">
                        <div>{{ scope.row.submitNum + " 次" }}</div>
                    </template>
                </el-table-column>
            </el-table>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.containersssss{
    width: 100%;
    height: 100%;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

}
</style>