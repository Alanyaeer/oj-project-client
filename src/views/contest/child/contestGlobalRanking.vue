<script setup>
import {ref, onMounted} from 'vue'
import topTabNew from '@/components/topTabNew.vue';
import {getUserRanking, getMyRankInfo, getSingRank} from '@/api/question'
import {getUserInfo, queryTotalCount} from '@/api/user'
import hoverShowImg from '@/components/hoverShowImg.vue';
import { funLoading} from '@/utils/loading'
const page = ref(1)
const pageSize = ref(15)
const userList = ref([])
const userInfo = ref([])
const totalNumber = ref(0)
const loading = ref(true)
const loadData = async() => {
    loading.value = true
    let obj = await getUserRanking({page: page.value, pageSize: pageSize.value})
    if(obj.code === 200) userList.value = obj.data
    let objMy = await getMyRankInfo()
    userInfo.value = objMy.data
    let ranks = await getSingRank({id: objMy.data.id})
    if(ranks.code === 200){
        userInfo.value.rank = ranks.data
    }
    let _fn = funLoading(loading ,queryTotalCount)
    let totalNumRes = await _fn()   
    if(totalNumRes.code === 200)
        totalNumber.value = totalNumRes.data
    
    // let objUser =  await getUserInfo()
    // if(objUser.code === 200) userInfo.value = objUser.data
    // let objRanking = await getUserSink({id: objUser.id})
    // if(objRanking.code === 200) userInfo.value.rank = objRanking.data
}
const changePage =async (currentPage) => {
    page.value = currentPage
    loadData()
}
onMounted(() => {
    loadData()
    
})  
</script>

<template>
    <div class="containersssss">
        <topTabNew ></topTabNew>
        <div class="context">
            <div class="inners">
                <div @click="returnHome">
                    <a href="/contest" style="font-size: 18px; font-weight: 500; color: gray; display:flex; cursor: pointer; text-decoration: none;" class="returnIcon">
                        <svg t="1709807854147" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4404" width="18" height="18"><path d="M770.694737 843.452632L342.231579 512 770.694737 180.547368c18.863158-13.473684 21.557895-37.726316 8.08421-56.589473-13.473684-18.863158-37.726316-21.557895-56.589473-8.084211L250.610526 479.663158c-8.084211 8.084211-13.473684 18.863158-13.473684 32.336842s5.389474 24.252632 16.168421 32.336842l471.578948 363.789474c18.863158 13.473684 43.115789 10.778947 56.589473-8.084211 10.778947-18.863158 8.084211-43.115789-10.778947-56.589473z" fill="currentColor" p-id="4405"></path></svg>
                        <div style="position: relative; top: -.2vh; left: .6vw">返回竞赛主页</div>
                    </a>
                </div>
            </div>
            <div class="middle-title">
                <div>
                    <h1 style="color: #575757;">{{ "全国排名" }}</h1>
                </div>
            </div>
            <div class="wrapper" style="border-radius: 5px">
                <el-skeleton :loading="loading">
                    <template #template>
                        <div v-for="item in 25"  class="wrapper-item" style="gap: 10px;">
                            <el-skeleton-item variant="text" style="width: 1.0vw; height: 1.0vw; border-radius: 100px;">
                            </el-skeleton-item>
                            <el-skeleton-item variant="image" style="width: 5vh; height: 5vh; border-radius: 100px;">
                            </el-skeleton-item>
                            <div style="display: flex; flex-direction: column; gap: 1vh" >
                                <el-skeleton-item variant="text" style="width: 15vw; height: 2vh; ">
                                </el-skeleton-item>
                                <el-skeleton-item variant="text" style="width: 10vw; height: 1.5vh; ">
                                </el-skeleton-item>
                            </div> 
                        </div>  
                    </template>
                    <template #default>
                        <div class="wrapper-item" style="background-color: white; box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.08); overflow: hidden; border: 10px;">
                            <!-- userInfo -->
                            <div style="width: 1.5vw; color: #575757;">{{ userInfo?.rank }}</div>   
                            <div style="width: 3vw; justify-content: center; display: flex;">
                                <hoverShowImg  :userInfo="userInfo" :index="index"></hoverShowImg>

                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <div style="font-size: 15px; color: #262626;">{{ userInfo?.nickName + " (我)" }}</div>
                                <div style="font-size: 13px; color: #808080;">{{ "已经参加竞赛" + userInfo?.attendCopTimes + "次" }}</div>
                            </div>
                        </div>
                        <div v-for="(item, index) in userList" :key="index" class="wrapper-item">
                            <div style="width: 1.5vw; color: #575757;">{{ item.ranks }}</div>   
                            <div style="width: 3vw; justify-content: center; display: flex;">
                                <hoverShowImg  :userInfo="item" :index="index"></hoverShowImg>

                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <div style="font-size: 15px; color: #262626;">{{ item.nickName }}</div>
                                <div style="font-size: 13px; color: #808080;">{{ "已经参加竞赛" + item.attendCopTimes + "次" }}</div>
                            </div>
                        </div>  
                    </template>
                </el-skeleton>
                
            </div>
            <div style="justify-content: center; display: flex; padding: 2vh;">
                <!-- <a-pa -->
                    <a-pagination :total="totalNumber" @change="changePage" :default-page-size="pageSize" />
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.containersssss{
    display: flex;
    flex-direction: column;
    width: 98vw;

    .context{
        position: relative;
        height: max-content;
        padding: 0 20vw;
        .inners{
            margin-bottom: 5px;
            padding-top: 8vh ;
            display: flex;
            flex-direction: column;
            position: relative;
            .returnIcon{
                color: gray;
            }
            .returnIcon:hover{
                color: #0088D6 !important;
            }
            .middle-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
    
        }
        .wrapper{
            display: flex;
            flex-direction: column;
            width: 100%;
            .wrapper-item{
                height: 8vh;
                border-bottom: 1px dotted #dddddd;
                display: flex;
                padding: 0 2vw;
            
                align-items: center;
            }
        }
    }
}
</style>