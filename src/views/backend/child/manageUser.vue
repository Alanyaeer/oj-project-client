<script setup>
import {ref} from 'vue'
const inputcontent = ref('')
const value = ref([])

const tableData = ref([
{
    date: '1',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '3',
    name: 'Toms',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2',
    name: 'Tsom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '4',
    name: 'Taom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'bTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '4',
    name: 'sTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '1',
    name: 'gTom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
])
const tableRowClassName = ({row, rowIndex})=>{
    if(rowIndex === 1){
        return 'warning-row'
    }
    else if(rowIndex === 2){
        return 'delete-row'
    }
    else if(rowIndex === 3){
        return 'manager-row'
    }
    else if(rowIndex === 4){
        return 'title-row'
    }
    else return ''
}
const formatter =(row, column)=>{
    return row.address
}
const handleChange = ()=>{
    console.log('正常输入中');
}
const options = [
    {
        value: '1',
        label: '25页'   
    },
    {
        value: '2',
        label: '50页'
    },
    {
        value: '3',
        label: '100页'
    }
]
const querySearchAsync = (queryString, cb)=>{

}
</script>

<template>
    <!-- 你好呀 -->
    <div class="top">
        <div class="top-item">
            <span>页数</span>
            <el-cascader v-model="value" :options="options" @change="handleChange" />
        </div>
        <div class="top-item">
            <span>页张</span>
            <el-cascader  v-model="value" :options="options" @change="handleChange" />
        </div>
        <div class="top-item">
            <span>输入</span>
            <el-autocomplete
                v-model="inputcontent"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please input"
                @select="handleSelect"
            />
        </div>

    </div>

    <div class="bottom">
        <el-table 
            :data="tableData" 
            style="width: 100%" height="550" 
            :row-class-name="tableRowClassName"
            class="table-wrapper" border
            :default-sort="{ prop: 'date', order: 'descending' }"
            >
            <el-table-column fixed prop="date" label="Date" sortable width="150" />
            <el-table-column prop="name" label="Name" sortable width="120" />
            <el-table-column prop="state" label="State" sortable width="120" />
            <el-table-column prop="city" label="City" sortable width="320" />
            <el-table-column prop="address" label="Address" sortable width="600" />
            <el-table-column prop="zip" label="Zip" sortable width="120" />
        </el-table>
    </div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
    margin: 10px;
}
.top{

    width: 90%;
    top: 5%;
    left: 5%;
    height: 10%;
    // transform: translate(0%,-50%);
    // background-color: aqua;
    position: relative;
    border-radius: 15px;
    display: flex;
    gap: 15%;
    .top-item{
        gap: 3%;
        // display: flex;

    }
    // margin-left: ;
    // top:50%
    // transform: translate(-5);
}
.bottom{
    background-color: azure;
    width: 90%;
    height: 75%;
    top: 5%;
    left: 5%;
    position: relative;
    border-radius: 15px;

    // margin-top: 1;
    .table-wrapper{
        border-radius: 15px;
        // background-color: black;
    } 

}

</style>