<script setup>
import {ref, onMounted, inject, watch, defineEmits} from 'vue'
import {getSubmitRecord, updateTheSubmitAnnotation, getLatestSubmitRecords} from '@/api/question'
import {formatDate} from '@/utils/dayUtils'
import { useRouter  } from 'vue-router'
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import highlight from '@bytemd/plugin-highlight' // 代码高亮
// v-infinite-scroll="load"
import {changeSerialize, changeCode} from '@/utils/textUtils'
const plugins = [
    highlight(),
    gfm()
]
const submitStatus =  inject('submitStatus')
const router = useRouter()
const emit = defineEmits('changeTab')
const isBottom = ref(false);
const tableData = ref([
])
const showLastSubmit = ref(false)
const pageNow = ref(1)
const updateAnnotation = ref(false)
const finalCode = ref('')
const submitStatusChange = async () => {
    emit('changeTab',2)
    showLastSubmit.value = true
    finalCode.value = '```' + submitStatus.value.language + '\n' + submitStatus.value.code + '\n```'
        
    let obj =  await getLatestSubmitRecords()
    if(obj.data.status === 2){
        
        obj.data.memory = obj.data.judgeInfo.memory
        obj.data.time = obj.data.judgeInfo.time
        if(obj.data.judgeInfo.indexof('成功') !== -1){
            obj.data.allStatus = '成功'
        }
        else if(obj.data.judgeInfo.indexof('编译错误') !== -1){
            obj.data.allStatus = '编译错误'
        }
        else if(obj.data.judgeInfo.indexof('超时') !== -1){
            obj.data.allStatus = '超时'
        }
        tableData.value.unshift(obj.data)
    }

    // 获取得到题解记录吗？？  获取到最新的题解记录 select * from  xx order by create_time desc limit 1 
}
const getColor = () => {
//     if(score < 1500) return 'color: #1CB8B8'
//    else if(score < 2100) return 'color: #FFB800'
//    else return 'color: #FF2800'
    if(submitStatus.value.judgeInfo.message === '成功') return "color: #2DB55D"
    else return "color:#EF4743"

}
const bottomFn = () => {
    console.log(window.scrollY);
}
const showTheRecord = () => {
    showLastSubmit.value = false
}
const getColorScope = (status) => {
    if(status === '成功') return "color: #2DB55D"
    else return "color:#EF4743"
}
const getMoreSubmit = async () => {
    pageNow.value += 1;
    let id = router.currentRoute.value.params.id
    let obj = {
        questionId: id,
        page: pageNow.value,
        pageSize: 15
    }
    let t = await getSubmitRecord(obj)
    for(let i = 0; i < t.data.length;++i){
        tableData.value.push(t.data[i])
    }
}
const updateAnnotationFun = async (value) => {
    updateAnnotation.value = true
    console.log(value);
    let obj = {
        submitId: value.id,
        annotation: value.annotation
    }
    let b = await updateTheSubmitAnnotation(obj)
    console.log(b);
    setTimeout(() => {
        updateAnnotation.value = false
    }, 100)
}
watch(() => submitStatus.value,
() => submitStatusChange())
onMounted(async() => {
    let id = router.currentRoute.value.params.id
    let obj = {
        questionId: id,
    }
    let t = await getSubmitRecord(obj)
    tableData.value = t.data
})
</script>

<template>
    <div  id="your-child-div-id">
        <el-table
            v-if="showLastSubmit === false"
            :data="tableData"
            stripe
        
            style="width: 100%"
            :header-cell-style="{ fontSize: '14px', fontWeight: '400',color:'black' }"
            :header-row-style="{fontWeight: '200px' }">
            <el-table-column
                prop="allStatus"
                label="所有状态"
                width="120">
                <template #default="scope">
                    <div style="position: relative; gap: 10px; display: flex; flex-direction: column;">
                        <div :style="getColorScope(scope.row.allStatus)">{{scope.row.allStatus}} </div>
                        <div style="color: #5C5C5C; font-size: small;">{{ formatDate(scope.row.createTime) }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="language"
                label="语言"
                width="120">
                    <template #default="scope">
                        <div v-if="scope.row.language==='CPP'"><svg t="1706197507575" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8476" width="24" height="24"><path d="M403.456 880.64c-202.752 0-368.64-165.888-368.64-368.64s165.888-368.64 368.64-368.64c116.736 0 223.232 54.272 292.864 145.408l-133.12 78.848c-40.96-44.032-98.304-70.656-158.72-70.656-117.76 0-215.04 96.256-215.04 215.04s96.256 215.04 215.04 215.04c60.416 0 117.76-26.624 158.72-70.656l134.144 78.848C628.736 826.368 520.192 880.64 403.456 880.64z" fill="#1D88E5" p-id="8477"></path><path d="M772.096 542.72h-60.416v61.44h-62.464v-61.44h-60.416v-61.44h60.416v-61.44h62.464v61.44h60.416v61.44z m217.088 0h-62.464v61.44h-60.416v-61.44h-62.464v-61.44h62.464v-61.44h60.416v61.44h62.464v61.44z" fill="#1D88E5" p-id="8478"></path></svg></div>
                        <div v-if="scope.row.language==='JAVA'"><svg t="1706197298645" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7423" width="24" height="24"><path d="M558.08 472.064c48.128 53.248-13.312 103.424-13.312 103.424s119.808-61.44 65.536-139.264c-51.2-71.68-91.136-107.52 122.88-232.448 0 1.024-335.872 86.016-175.104 268.288" fill="#FF0000" p-id="7424"></path><path d="M610.304 5.12s101.376 101.376-96.256 258.048C356.352 389.12 478.208 460.8 514.048 543.744 420.864 459.776 354.304 386.048 399.36 317.44 463.872 216.064 651.264 166.912 610.304 5.12" fill="#FF0000" p-id="7425"></path><path d="M720.896 757.76c183.296-95.232 98.304-188.416 39.936-175.104-15.36 3.072-21.504 5.12-21.504 5.12s5.12-8.192 16.384-11.264c117.76-40.96 207.872 120.832-37.888 186.368-1.024 0 2.048-3.072 3.072-5.12m-337.92 38.912s-37.888 21.504 26.624 29.696c76.8 8.192 117.76 8.192 202.752-8.192 0 0 23.552 15.36 53.248 26.624-191.488 80.896-433.152-5.12-282.624-48.128m-23.552-106.496s-43.008 31.744 23.552 37.888c82.944 8.192 149.504 10.24 261.12-13.312 0 0 16.384 16.384 40.96 24.576-231.424 68.608-490.496 5.12-325.632-49.152" fill="#6699FF" p-id="7426"></path><path d="M811.008 876.544s27.648 23.552-31.744 40.96c-111.616 34.816-460.8 45.056-558.08 2.048-34.816-15.36 31.744-35.84 51.2-40.96 21.504-5.12 34.816-3.072 34.816-3.072-38.912-28.672-251.904 52.224-107.52 75.776 390.144 62.464 712.704-28.672 611.328-74.752M400.384 578.56s-178.176 43.008-63.488 56.32c49.152 6.144 146.432 5.12 235.52-3.072 73.728-6.144 147.456-19.456 147.456-19.456s-26.624 11.264-45.056 24.576c-181.248 48.128-530.432 26.624-430.08-23.552 88.064-39.936 155.648-34.816 155.648-34.816" fill="#6699FF" p-id="7427"></path><path d="M418.816 1015.808c176.128 11.264 446.464-6.144 453.632-90.112 0 0-13.312 31.744-146.432 56.32-150.528 27.648-336.896 24.576-446.464 6.144 2.048 1.024 24.576 20.48 139.264 27.648" fill="#6699FF" p-id="7428"></path></svg></div>
                        <div v-if="scope.row.language==='GO'"><svg t="1706197312523" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7677" width="24" height="24"><path d="M501.76 402.432c-39.936 9.216-67.584 16.384-108.544 28.672-9.216 1.024-9.216 4.096-19.456-6.144-9.216-12.288-16.384-16.384-30.72-24.576-39.936-19.456-79.872-13.312-116.736 9.216-44.032 28.672-65.536 68.608-65.536 120.832 0 50.176 36.864 93.184 87.04 101.376 44.032 6.144 79.872-9.216 108.544-43.008 6.144-7.168 12.288-15.36 16.384-22.528H248.832c-13.312 0-16.384-7.168-12.288-19.456 7.168-19.456 22.528-52.224 31.744-68.608 1.024-4.096 6.144-9.216 15.36-9.216h234.496c1.024 18.432 1.024 34.816-1.024 52.224-7.168 46.08-24.576 89.088-52.224 125.952-46.08 59.392-105.472 98.304-182.272 108.544-61.44 7.168-120.832-4.096-171.008-43.008-50.176-37.888-73.728-83.968-81.92-143.36-7.168-68.608 12.288-133.12 53.248-186.368 46.08-59.392 105.472-96.256 179.2-110.592 59.392-12.288 117.76-4.096 169.984 30.72 34.816 22.528 58.368 52.224 73.728 90.112 6.144 5.12 3.072 8.192-4.096 9.216z m211.968 354.304c-58.368-1.024-111.616-16.384-156.672-56.32-37.888-31.744-61.44-73.728-68.608-123.904-12.288-71.68 7.168-138.24 52.224-192.512 46.08-61.44 102.4-93.184 179.2-105.472 65.536-12.288 126.976-6.144 182.272 31.744 50.176 34.816 80.896 80.896 90.112 142.336 12.288 87.04-13.312 156.672-73.728 216.064-43.008 43.008-95.232 68.608-153.6 80.896-18.432 5.12-35.84 5.12-51.2 7.168z m150.528-259.072c0-7.168 0-15.36-1.024-21.504-12.288-64.512-68.608-98.304-132.096-83.968-59.392 13.312-98.304 50.176-111.616 111.616-12.288 50.176 13.312 101.376 58.368 120.832 34.816 15.36 68.608 13.312 104.448-4.096 53.248-26.624 80.896-66.56 81.92-122.88z" fill="#2DBCAF" p-id="7678"></path></svg></div>
                        <div v-if="scope.row.language==='C'"><svg t="1706197363045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8178" width="24" height="24"><path d="M566.272 35.84c224.256 0 339.968 125.952 339.968 125.952L826.368 286.72s-105.472-97.28-251.904-97.28c-194.56 0-309.248 145.408-309.248 316.416 0 175.104 117.76 329.728 310.272 329.728 159.744 0 267.264-116.736 267.264-116.736L930.816 839.68S803.84 989.184 568.32 989.184C286.72 989.184 92.16 780.288 92.16 508.928 93.184 240.64 294.912 35.84 566.272 35.84z" fill="#1D88E5" p-id="8179"></path></svg></div>
                        <div v-if="scope.row.language==='PYTHON'"><svg t="1706197342325" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7927" width="24" height="24"><path d="M491.52 1007.616c-119.808-4.096-194.56-39.936-214.016-103.424l-2.048-7.168v-122.88c0-141.312 0-143.36 7.168-165.888 13.312-39.936 46.08-66.56 95.232-77.824l11.264-2.048h139.264c99.328 0 141.312 0 145.408-2.048 28.672-6.144 46.08-11.264 63.488-24.576 21.504-15.36 37.888-41.984 44.032-70.656 6.144-21.504 6.144-19.456 6.144-93.184v-68.608h99.328l9.216 2.048c51.2 15.36 90.112 63.488 105.472 137.216 6.144 28.672 6.144 30.72 6.144 103.424 0 70.656 0 70.656-6.144 95.232-6.144 22.528-11.264 41.984-21.504 61.44-19.456 37.888-48.128 64.512-83.968 76.8-21.504 7.168-4.096 6.144-204.8 7.168H509.952v34.816h240.64V911.36c-2.048 7.168-4.096 17.408-9.216 26.624-6.144 9.216-21.504 24.576-30.72 32.768-32.768 21.504-81.92 34.816-147.456 37.888h-71.68z m165.888-76.8c22.528-4.096 39.936-26.624 35.84-49.152-4.096-19.456-17.408-32.768-35.84-35.84-28.672-4.096-53.248 21.504-49.152 49.152 4.096 21.504 21.504 34.816 41.984 35.84h7.168zM141.312 755.712c-26.624-6.144-53.248-21.504-72.704-46.08-35.84-44.032-53.248-118.784-51.2-211.968 2.048-57.344 9.216-101.376 28.672-137.216 22.528-48.128 57.344-74.752 103.424-83.968 9.216-2.048 11.264-2.048 187.392-2.048h179.2c2.048 0 2.048-2.048 2.048-17.408v-17.408H277.504v-63.488c0-68.608 0-66.56 6.144-79.872 21.504-44.032 79.872-70.656 176.128-77.824 7.168 0 24.576-2.048 41.984-2.048C608.256 14.336 685.056 33.792 727.04 71.68c4.096 4.096 9.216 11.264 13.312 13.312 6.144 7.168 13.312 22.528 17.408 34.816l2.048 7.168v130.048c0 119.808 0 130.048-2.048 137.216-2.048 11.264-7.168 26.624-11.264 34.816-15.36 28.672-41.984 49.152-77.824 59.392-22.528 6.144-13.312 6.144-165.888 7.168-152.576 0-143.36 0-163.84 6.144-41.984 11.264-72.704 44.032-83.968 90.112-6.144 21.504-6.144 19.456-6.144 93.184v70.656h-46.08c-44.032 2.048-57.344 2.048-61.44 0z m253.952-580.608c17.408-7.168 28.672-28.672 24.576-46.08-4.096-17.408-15.36-30.72-30.72-34.816-24.576-7.168-51.2 7.168-55.296 34.816-4.096 21.504 7.168 41.984 28.672 48.128 4.096 2.048 7.168 2.048 15.36 2.048 10.24 0 12.288 0 17.408-4.096z" fill="#FED142" p-id="7928"></path><path d="M141.312 755.712c-26.624-6.144-53.248-21.504-72.704-46.08-35.84-44.032-53.248-118.784-51.2-211.968 2.048-57.344 9.216-101.376 28.672-137.216 22.528-48.128 57.344-74.752 103.424-83.968 9.216-2.048 11.264-2.048 187.392-2.048h179.2c2.048 0 2.048-2.048 2.048-17.408v-17.408H277.504v-63.488c0-68.608 0-66.56 6.144-79.872 21.504-44.032 79.872-70.656 176.128-77.824 7.168 0 24.576-2.048 41.984-2.048C608.256 14.336 685.056 33.792 727.04 71.68c4.096 4.096 9.216 11.264 13.312 13.312 6.144 7.168 13.312 22.528 17.408 34.816l2.048 7.168v130.048c0 119.808 0 130.048-2.048 137.216-2.048 11.264-7.168 26.624-11.264 34.816-15.36 28.672-41.984 49.152-77.824 59.392-22.528 6.144-13.312 6.144-165.888 7.168-152.576 0-143.36 0-163.84 6.144-41.984 11.264-72.704 44.032-83.968 90.112-6.144 21.504-6.144 19.456-6.144 93.184v70.656h-46.08c-44.032 2.048-57.344 2.048-61.44 0z m253.952-580.608c17.408-7.168 28.672-28.672 24.576-46.08-4.096-17.408-15.36-30.72-30.72-34.816-24.576-7.168-51.2 7.168-55.296 34.816-4.096 21.504 7.168 41.984 28.672 48.128 4.096 2.048 7.168 2.048 15.36 2.048 10.24 0 12.288 0 17.408-4.096z" fill="#3571A3" p-id="7929"></path></svg></div>
                        <!-- <div style=" background-color: #EBEBEB; font-size: small; display: flex; align-items: center; justify-content: center; border-radius: 10px;">{{ scope.row.language }}</div> -->
                    </template>
            </el-table-column>
            <el-table-column
                prop="time"
                label="执行时间"
                width="120">
                <template #default="scope">
                    <div style="display: flex; gap: 6px; color: rgb(55 191 222); white-space: nowrap; align-content: center;">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="15" height="15" data-icon="clock" class="svg-inline--fa fa-clock absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                        <div style="font-size: small; display: flex; align-content: center; position: relative; top: -3.5px;">{{ scope.row.time + " ms"}}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="memory"
                label="消耗内存"
                width="120">
                <template #default="scope">
                    <div style="display: flex; gap: 6px; color: rgb(45 137 211); white-space: nowrap; align-content: center;">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="15" height="15" data-icon="microchip" class="svg-inline--fa fa-microchip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V184h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM400 128V384c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16zM192 160c-17.7 0-32 14.3-32 32V320c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H192zm16 48h96v96H208V208z"></path></svg>
                        <div style="font-size: small; display: flex; align-content: center;  position: relative; top: -3.5px;">{{ (scope.row.memory / 1024 / 1024).toFixed(0) + " MB" }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="annotation"
                :content-style="{borderRadius: '15px'}"
                label="备注">
                <template #default="scope">
                    <a-popover title="备注" trigger="click">
                        <!-- <d</duv> -->
                        <a-button style="font-size: 10px width: 20px;" status="success">查看备注</a-button>
                        <template #content >
                            <div style="display: flex; flex-direction: column; gap: 10px">
                                <a-textarea v-model="scope.row.annotation" :max-length="36"  show-word-limit placeholder="添加提交备注" allow-clear/>
                                <a-button @click="updateAnnotationFun(scope.row)" type="primary" status="success" :loading="updateAnnotation">更新备注 </a-button>
                            </div>
                        </template>
                    </a-popover>
                    
                </template>
            </el-table-column>
        </el-table>
        <div v-else="showLastSubmit  === true">
            <!-- <icon-to-left  /> -->
            <div style="display: flex; gap: 5px;">
                <svg t="1706198935643" style="cursor: pointer; padding: 15px 2px 0px 10px;" @click="showTheRecord()" class="icon" viewBox="0 0 1307 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5288" width="20" height="20"><path d="M268.70922 566.468085h929.588652c36.312057 0 72.624113-29.049645 72.624114-72.624113 0-36.312057-29.049645-72.624113-72.624114-72.624114H305.021277l297.758865-297.758865c29.049645-29.049645 29.049645-72.624113 0-101.673759-29.049645-29.049645-72.624113-29.049645-101.673759 0L72.624113 450.269504c-14.524823 14.524823-21.787234 36.312057-21.787234 58.09929 0 21.787234 0 43.574468 21.787234 58.099291l428.48227 428.48227c29.049645 29.049645 72.624113 29.049645 101.673759 0 29.049645-29.049645 29.049645-72.624113 0-101.673759l-334.070922-326.808511z" fill="#515151" p-id="5289"></path></svg>
                <div @click="showTheRecord()" style="cursor: pointer; position: relative; left: 0px; top: 17px; font-size: 15px; color: #5C5C5C;">查看提交记录</div>
            </div>
            <h2 style="font-weight: 400; padding: 15px 25px;" :style="getColor()">{{submitStatus.judgeInfo.message}}</h2>
            <a-space style="padding: 0px 25px; gap: 15px; margin-bottom: 15px;">
                <div style="display: flex; flex-direction: column; gap: 15px;"  v-if="submitStatus.judgeInfo.message !== '成功'">
                    <a-alert v-if="submitStatus.judgeInfo.message !== '成功'" title="error" type="error" style="border-radius: 15px; width: 520px; white-space: pre-line; "></a-alert>
                    <mavon-editor class="editor" ref="md" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="submitStatus.errorMessage" style="position: relative;  border: none; overflow: auto ; width: 520px;" />
                    
                </div>
                <div style="display: flex; flex-direction: column; gap: 15px;"  v-if="submitStatus.judgeInfo.message === '成功'">
                    <a-alert v-if="submitStatus.judgeInfo.message  === '成功'" title="success" type="success" style="border-radius: 15px; width: 520px; height: 110px; white-space: pre-line;">
                        <div style="display: flex; position: relative; top: 20px;justify-content: space-around;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <svg width="18" height="18" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" class="svg-inline--fa fa-clock absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                                <div>执行时间</div>
                                <div style="font-size: 12px; ">{{ submitStatus.judgeInfo.time  + " ms"}}</div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <svg aria-hidden="true" width="18" height="18" focusable="false" data-prefix="far" data-icon="microchip" class="svg-inline--fa fa-microchip absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64h-8c-35.3 0-64 28.7-64 64v8H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v48H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v8c0 35.3 28.7 64 64 64h8v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h48v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h8c35.3 0 64-28.7 64-64v-8h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V184h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448v-8c0-35.3-28.7-64-64-64h-8V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM400 128V384c0 8.8-7.2 16-16 16H128c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16H384c8.8 0 16 7.2 16 16zM192 160c-17.7 0-32 14.3-32 32V320c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H192zm16 48h96v96H208V208z"></path></svg>
                                <div>消耗内存</div>
                                <div style="font-size: 12px; ">{{ (submitStatus.judgeInfo.memory /  1024).toFixed(0) + " KB" }}</div>
                            </div>
                        </div>
                    </a-alert>
                    <!-- <mavon-editor class="editor" ref="md" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="submitStatus.judgeInfo" style="position: relative;  border: none; overflow: auto ; width: 520px;" /> -->
                </div>
            </a-space>
            <Viewer :value="finalCode" :plugins="plugins" style="margin: 0px 2.5%; width: 95%; position: relative;"></Viewer>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tablesss{
    // padding: 0px 5px;
    // height: auto;
    .my-td{
        background-color: white;
        display:flex;
        font-weight: 400;
    }
}
</style>