<script setup>
import {ref, onMounted} from 'vue'
// const columns = [
//     {
//     title: 'Name',
//     dataIndex: 'name',
//     },
//     {
//     title: 'Salary',
//     dataIndex: 'salary',
//     },
//     {
//     title: 'Address',
//     dataIndex: 'address',
//     },
//     {
//     title: 'Email',
//     dataIndex: 'email',
//     },
// ];
    // const data = ref([{
    //   key: '1',
    //   name: 'Jane Doe',
    //   salary: 23000,
    //   address: '32 Park Road, London',
    //   email: 'jane.doe@example.com'
    // }, {
    //   key: '2',
    //   name: 'Alisa Ross',
    //   salary: 25000,
    //   address: '35 Park Road, London',
    //   email: 'alisa.ross@example.com'
    // }, {
    //   key: '3',
    //   name: 'Kevin Sandra',
    //   salary: 22000,
    //   address: '31 Park Road, London',
    //   email: 'kevin.sandra@example.com'
    // }, {
    //   key: '4',
    //   name: 'Ed Hellen',
    //   salary: 17000,
    //   address: '42 Park Road, London',
    //   email: 'ed.hellen@example.com'
    // }, {
    //   key: '5',
    //   name: 'William Smith',
    //   salary: 27000,
    //   address: '62 Park Road, London',
    //   email: 'william.smith@example.com'
    // }]);

const columns = ref([
    {
        title: '所有状态',
        dataIndex: 'status',
    },
    {
        title: '所有语言',
        dataIndex: 'lanuage',
    },
    {
        title: '执行时间',
        dataIndex: 'time',
    },
    {
        title: '消耗内存',
        dataIndex: 'memory',
    },
    {
        title: '备注',
        dataIndex: 'comment'
    },
])
const data = ref([
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
    {
        id: "1",
        status: 'Accepted',
        lanuage: 'C++',
        time: '213 ms',
        memory: '256KB',
        comment: '-',
    },
])
</script>

<template>
    <a-table class="table"  :header-cell-style="{ backgroundColor: 'white'}" :columns="columns" :data="data"  />
</template>

<style lang="scss" scoped>
.table{
    padding: 0px 5px;
    // background-color: aquamarine;/
    // width: 300px;
    // height: 600px;
}
</style>