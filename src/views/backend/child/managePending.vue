<script setup>
import {ref, onMounted, watch,onBeforeUnmount } from 'vue'

import {deleteUserByuserName, register, restoreUser} from '@/api/user.js'
import {getQuestionPending,getQuestionCount,deleteQuestionByNumber ,deleteQuestionByTitleName, passQuestion} from '@/api/question.js'
import {validateRep, getRep} from '@/utils/repUtils.ts'
import miniButton from '@/components/miniButton.vue';
import LoginLoading from '@/components/LoginLoading.vue';
const gif = ref(new URL("@/assets/img/loading-pic.gif", import.meta.url).href)
const options = [
    {
        value: 10,
        label: '10页'
    },
    {
        value: 25,
        label: '25页'   
    },
    {
        value: 50,
        label: '50页'
    },
    {
        value: 100,
        label: '100页'
    }
]

const inputcontent = ref('')
const pageSize = ref([])
const page = ref([])
const questionCount = ref(0);
const tableData = ref([])
const options1 = ref([])
const isloading = ref(false)
const drawer = ref(false)
const addUserNameInput = ref('')
const addUserPassInput = ref('')
const restoreId = ref()
let timeout 
const tableRowClassName = ({row, rowIndex})=>{

    if(row.questionType === 2)return 'delete-row'
    else if(row.questionType === 3){
        return 'manager-row'
    }
    else if(row.userType === 4){
        return 'warning-row'
    }
    else if(row.questionType === 0){
        return 'pass-row'
    }
    else if(row.questionType === 1){
        return 'pending-row'
    }
}
/**
 * 
 * @param {type类型如果为1的话， 那么就是页数更改， 如果是2的话，那么就是页张更改} type 
 * @returns 处理多级选择器
 * @apinote 这是用来处理上面左边的两个框框
 */
const handleChange = (type)=>{
    if(type === 1){
    
        updatePageFun()
    }
    else {

    }
}
const withPageAndPageSizeGetPending=() => {
    let pages = page.value[0] 
    let pageSizes = pageSize.value[0]
    if(pageSizes === 0 || pages === 0)
        getPending()
    else getPending(pages, pageSizes)
}
/**
 * 
 * @param {默认页张为1} page 
 * @param {默认页数为10} pageSize 
 * @note 查询审核的信息
 */
const getPending = async (page=1, pageSize=10) => {
    console.log(page, pageSize);
    // 创建一个工具类来截取超过长度的字段
    isloading.value = true
    const obj = {
        page: page,
        pageSize: pageSize
    }
    const rep =  await getQuestionPending(obj)
    if(validateRep(rep)){
        tableData.value = getRep(rep)
    }
    for(let i = 0; i < tableData.value.length; ++i){
        tableData.value[i].value = tableData.value[i].titleName
    }
    // userCount.value = tableData.value.length
    isloading.value = false
    console.log(tableData.value);
}

const updatePageFun = () => {
    while(options1.value.length > Math.floor((questionCount.value - 1) / pageSize.value) + 1) options1.value.pop()
    while(options1.value.length < Math.floor((questionCount.value - 1) / pageSize.value) + 1)options1.value.push({value: `${options1.value.length + 1}`, label: `第${options1.value.length + 1}页`})
}

/**
 * 
 * @param {按钮的类型，如果是1代表的是查询， 如果是2的话代表的是删除，如果是3代表的是添加} type 
 * @apinote 这是用于操作中测按钮
 * @error 这是因为我们选择错误组件了， 应该是自动补全输入哈哈
 */
const buttonClick = async(type)=>{
    if(type === 1){ 

        withPageAndPageSizeGetPending()
    }
    else if(type === 2){
        let rep = await deleteQuestionByTitleName({titleName:inputcontent.value})
        if(rep.data === 0){
            ElNotification({
                type: 'warning',
                message: '删除题目失败',
                title: '删除题目'
            })
        }
        withPageAndPageSizeGetPending()
    }
    else {
        drawer.value = true
    }
}
/**
 * 
 * @param {测试中---} type 
 */
const confirmClick= async(type)=>{
    if(type === 1){

    }
    else{
        const obj = {
            userName: addUserNameInput.value,
            password: addUserPassInput.value
        }

        let rep = await register(obj)
        console.log(rep);
        if(validateRep(rep)) {
            ElNotification({
                type: 'success',
                message: '添加了一个新的用户',
                title: '注册成功'
            })
        }
        else {
            ElNotification({
                type: 'warning',
                message: '注册失败',
                title: '注册失败'
            })
        }
    }
    // 可以记录存储服务， 到时候上pinia来存储服务
    drawer.value = false
    // console.log(type); 

}
const restoreUserClick = async()=>{
    const obj = {
        id: restoreId.value
    }
    let rep = await restoreUser(obj)
    if(validateRep(rep)){
        ElNotification({
            type: 'success',
            message: '恢复了一个新的用户',
            title: '恢复成功'
        })
        withPageAndPageSizeGetUser()

    }
    else {
        ElNotification({
            type: 'warning',
            message: '恢复用户失败',
            title: '恢复成功'
        })
    }
}
/**
 * 
 * @param {查询的数据} queryString 
 * @param {一个回调函数} cb 
 */
const querySearchAsync = (queryString, cb)=>{
    var results = queryString ? tableData.value.filter(createFilter(queryString)) : tableData.value
    clearTimeout(timeout)
    results.slice(0, 10)
    timeout = setTimeout(()=>{
        cb(results)
    }, 1000 * Math.random())
}
/**
 * 
 * @param {查询的字段是什么} queryString 
 * @note  蔚来调用后端数据库进行过滤
 *
 */
const createFilter = (queryString) => {
    console.log(queryString);
  return (restaurant) => {
    return (
      restaurant.userName.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
/**
 * 
 * @param {处理搜索框的对象} item 
 */
const handleSelect = (item)=>{
    console.log('处理对象中');
}
/**
 * @note 删除题目
 * @param {obj} index 
 */
const deleteRow = async(index) => {
    let rep =   await deleteQuestionByNumber({id:tableData.value[index].id})
    console.log(rep);
    if(rep.code === 200 && rep.data === true){
        ElNotification({
                type: 'success',
                title: '通过审核',
                message: '审核通过'
            })
        
    }
    else {
        ElNotification({
                type: 'warning',
                title: '未通过审核',
                message: '审核未通过'
            })
        
    }
}
const passRow = async (index) => {

    console.log(tableData.value[index].id);
    let rep = await passQuestion({id:tableData.value[index].id})
    if(validateRep(rep)){
        console.log(rep);
        if(rep.data === false){
            ElNotification({
                type: 'warning',
                title: '未通过审核',
                message: '审核通过失败'
            })
        }
    }
    getPending()
}
onMounted(async()=>{
    let rep = await getQuestionCount()
    if(validateRep(rep)) questionCount.value = getRep(rep)
    pageSize.value[0] = 10
    page.value[0] = "1"
    getPending()
    updatePageFun()
})
onBeforeUnmount(()=>{
    isloading.value = true
 
})
</script>

<template>

    <el-drawer v-model="drawer" >
        <template #header>
        <div style="display: flex; flex-direction: column;">
            <!-- <h4>恢复或添加用户</h4> -->
            <span style="font-size:xx-large; color: black"> 恢复和添加用户</span>
        </div>

        </template>
        <template #default>
        <div>
            <img style="display: flex; left: 50%; transform: translate(-50%, 0%); position: relative; margin-bottom: 3%;" :src="gif" width="100" height="100"/>
            <div style="display: flex; flex-direction: column; gap: 25px; position: relative;">
                <div style="display: flex;">
                    <span>用户名</span>
                    <el-input style="width: 200px; position: relative; left: 16%;" v-model="addUserNameInput" placeholder="Please input userName" />
                </div>
                <div style="display: flex;">
                    <span>密码 </span>
                    <el-input
                        style="width: 200px; position: relative; left: 20%;"
                        v-model="addUserPassInput"
                        type="password"
                        placeholder="Please input password"
                        show-password
                    />                
                </div>
                <div style="display: flex;">
                    <span>恢复号</span>
                    <el-input
                        style="width: 200px; position: relative; left: 16%;"
                        v-model="restoreId"
                        placeholder="Please input the id"
                    />              
                     
                </div>
                <el-button type="primary" style="position:  relative ;left:30px ; width: 100px; height: 30px;"  @click="restoreUserClick">
                    恢复用户
                </el-button> 
            </div>

        </div>
        </template>
        <template #footer>
        <div style="flex: auto">
            <el-button @click="confirmClick(1)">cancel</el-button>
            <el-button type="primary" @click="confirmClick(2)">confirm</el-button>

        </div>
        </template>
    </el-drawer>
    <!-- 你好呀 -->
    <div class="top">
        <div class="top-item">
            <span>页数</span>
            <el-cascader v-model="pageSize" :options="options" @change="handleChange(1)" />
        </div>
        <div class="top-item">
            <span>页张</span>
            <el-cascader  v-model="page" :options="options1" @change="handleChange(2)" />
        </div>
        <div class="top-item">
            <span>搜索</span>
            <el-autocomplete
                v-model="inputcontent"
                :fetch-suggestions="querySearchAsync"
                placeholder="Please input"
                @select="handleSelect"
            />
        </div>
        
    </div>
    <div class="middle">
        <div >        
            <miniButton @click="buttonClick(1)">查询</miniButton>
            
        </div>
        <div >        
            <miniButton @click="buttonClick(2)">删除</miniButton>
            
        </div>
        <div >        
            <miniButton @click="buttonClick(3)">添加</miniButton>
            <!-- <miniButton>添加<miniButton> -->
        
        </div>
    </div>
    <div class="bottom">
        <LoginLoading :isshow="isloading"></LoginLoading>
        <el-table 
            :data="tableData" 
            style="width: 100%" height="500" 
            :row-class-name="tableRowClassName"
            class="table-wrapper" border
            :default-sort="{ prop: 'date', order: 'descending' }"
            >
            <el-table-column fixed prop="id" show-overflow-tooltip label="id" sortable width="100" />
            <el-table-column prop="titleName"  show-overflow-tooltip label="题目名称" sortable width="150" />
            <el-table-column prop="createBy" label="创建者" sortable width="150" />
            <el-table-column prop="questionType" label="题目状态" sortable width="150" />
            <el-table-column prop="likes" label="点赞人数" sortable width="150" />
            <el-table-column prop="passPerson" label="通过用户" sortable width="150" />
            <el-table-column prop="createTime" label="创建时间" sortable width="190" />
            <el-table-column prop="updateTime" label="更新时间" sortable width="190" />
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click.prevent="deleteRow(scope.$index)"
                    >
                    删除
                    </el-button>
                    <el-button
                    link
                    type="primary"
                    size="small"
                    @click.prevent="passRow(scope.$index)"
                    >
                    通过
                    </el-button>
                </template>
            </el-table-column>      
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
.middle{
    height: 8%;
    width: 90%;
    display: flex;
    position: relative;
    left: 2%;
    justify-content: space-between;
}

.bottom{
    // background-color: azure;
    width: 90%;
    height: 70%;
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