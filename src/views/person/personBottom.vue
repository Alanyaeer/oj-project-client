<script setup>
import {ref, onMounted, defineEmits} from 'vue'
import { getSubmitRecord, getSubmitContentById} from '@/api/question'
import dayjs from 'dayjs'
import {RouterView, useRouter} from 'vue-router'
// import {useRouter} from 'vue-router'
import {funLoading} from '@/utils/loading'
const emits = defineEmits('closeSon')
const loading = ref(true)
const router = useRouter()
// const router = user
const current = ref(0)
const questionList = ref([])
const clickWhich = (type)=>{
    let postt = document.getElementsByClassName("iteminner")[current.value]
    let postst = postt.getElementsByClassName("font-st")[0] 
    postst.style.color="gray"
    postt.style.color="gray"
    postt.style.backgroundColor="white"
    let t = document.getElementsByClassName("iteminner")[type]
    let st = t.getElementsByClassName("font-st")[0]
    st.style.color = "#000000"
    t.style.backgroundColor="#F2F3F4"
    t.style.color = "#000000"
    current.value = type

}
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
const getSubmitContentFn = async (id) => {
    let obj = await getSubmitContentById({id: id})
    console.log(obj.data);
    
}
const routerTosubmit = () => {
    emits('closeSon')
    router.push('/profile/progress')
}
onMounted(async ()=>{ 
    clickWhich(0)
    let _fn = funLoading(loading,getSubmitRecord)
    let obj = {
        page: 1,
        pageSize: 15,
        userId: window.location.pathname.split('/')[2]
    }
    let rep = await  _fn(obj)
    if (rep.code == 200) {
        questionList.value = rep.data
    }
})
</script>

<template>
    <div class="item-button">
        <div class="top">
            <div style="position: relative; display: flex; gap: 10px;">
                <div class="iteminner" @click="clickWhich(0)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z" clip-rule="evenodd"></path></svg>
                    <div class="font-st">最近通过</div>    
                </div>
                <div class="iteminner" @click="clickWhich(1)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M10.763 12.827l-1.06-1.06a1 1 0 00-1.415 1.414l1.415 1.414a1.5 1.5 0 002.12 0l3.889-3.888a1 1 0 00-1.415-1.414l-3.534 3.534z" clip-rule="evenodd"></path></svg>
                    <div class="font-st">题解</div>

                </div>
                <div class="iteminner" @click="clickWhich(2)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clip-rule="evenodd"></path></svg>
                    <div class="font-st">讨论发布</div>

                </div>
            </div>
            <div style="position: relative; display: flex; gap: 10px;">
                <div @click="routerTosubmit" class="iteminner">
                    <div  style="font-size: medium; color: black; white-space: nowrap;">提交记录</div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12" fill="currentColor" class="ml-1"><path fill-rule="evenodd" d="M7.913 19.071l7.057-7.078-7.057-7.064a1 1 0 011.414-1.414l7.764 7.77a1 1 0 010 1.415l-7.764 7.785a1 1 0 01-1.414-1.414z" clip-rule="evenodd"></path></svg>

                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-wrapper">
                <el-empty description="暂无提交记录" v-if="loading || questionList === null || questionList.length === 0" />
                <el-skeleton :loading="loading" animated>
                    <template #template>
                        <div style="display: flex; gap: 15px; left: 10px; position: relative; flex-direction: column;">
                            <el-skeleton-item style="width: 730px; height: 30px;"></el-skeleton-item>
                            <el-skeleton-item style="width: 730px; height: 30px;"></el-skeleton-item>
                            <el-skeleton-item style="width: 730px; height: 30px;"></el-skeleton-item>
                            <el-skeleton-item style="width: 730px; height: 30px;"></el-skeleton-item>
                            <el-skeleton-item style="width: 730px; height: 30px;"></el-skeleton-item>
                        </div>
                    </template>
                </el-skeleton>

                <div class="content-inner" v-for="(item, index) in  questionList" :key="item.id" :style="{background: (index & 1) ? '#ffffff': '#F7F7F8'}">
                    <el-skeleton   :loading="loading" animated>
                        <template #template>
                            <div style="display: flex; gap: 15px; left: 10px; position: relative;">
                                <el-skeleton-item style="width: 180px; height: 15px;"></el-skeleton-item>
                                <el-skeleton-item style="width: 180px; height: 15px;"></el-skeleton-item>
                            </div>
                        </template>
                        <template #default>
                            <div class="content-title" @click="getSubmitContentFn(item.id)">{{ item.titleId + ". " + item.titleName }}</div>
                            <div class="content-title"  >
                                <p style="color: #87878B; font-size:14px;">
                                    {{ dayjs(item.createTime).fromNow() }}
                                </p>
                            </div>
                        </template>
                    </el-skeleton>  
                    <!-- <div.content-title></div.content-title> -->
                   
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.item-button{
    gap: 5px;
    margin-bottom: 20px;
    // 1751047539855630338
    .top{
        padding: 15px 10px;
        display: flex;
        position: relative;
        justify-content: space-between;
        height: 50px;
        // top: 10px;
        .iteminner{
            display: flex;
            position: relative;
            height: 30px;
            border-radius: 10px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: white;
            padding: 10px ;
            gap: 5px;
            transition: 0.5s;
            color: gray;
        }
        .iteminner:hover{
            // background-color: rgb(216, 216, 216); 
            color:black !important;
        }
        .iteminner:hover .font-st{

            color: black !important
        }
        .font-st{
            // font-size: medium;
            // font-size: large;
            font-size: medium;
            font-weight: bold;
            color: gray;
            white-space: nowrap;
            
        }
    }
    .content{
        padding: 2px 10px;
        display: flex;
        position: relative;
        // width: ;
        // remeber to delete
        justify-content: center;
        .content-wrapper{
            padding: 10px 10px;
            position: relative;
            display: flex;
            flex-direction: column;
            width: 750px;
            margin-bottom: 15px;
            // height: 300px;
            align-items: center;
            .content-inner{
                width: 100%;
                display: flex;
                position: relative;
                height: 60px;
                border-radius: 6px;
                padding: 0px 5px;
                justify-content: space-between;
                align-items: center;
                .content-title{
                    position: relative;
                    padding: 0px 10px;
                    cursor: pointer;
                    font-size: medium;
                    color: rgb(21, 21, 21);
                }
            }
        }
    }
}

</style>