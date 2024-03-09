<script setup>
import {ref, onMounted,defineProps, watch} from 'vue'
import {getDistanceTime}from '@/utils/dayUtils'
import { useRouter } from 'vue-router';
import {attendCompetition, queryAttendCompetition, getAttendRankInCop} from '@/api/question'
import { ElNotification } from 'element-plus';
const goHome = ref(false);
const registerOk = ref(false)
const competitionRanking = ref([])
const router = useRouter()
const currentIndex = ref(0)
/**
 * 传递进来数据
 */
const props = defineProps(
    {
        data: Object
    }
)
const returnHome = () => {
    goHome.value = true;
}

/**
 * 判断当前时间是否正确
 */
const isTimeRight = () => {
    let currentDate =  new Date()
    let beginDate = new Date(props?.data[currentIndex.value]?.startTime)
    let endDate = new Date(props?.data[currentIndex.value]?.endTime)
    if(currentDate < beginDate) {
        return -1;
    }
    else if(currentDate < endDate && currentDate >= beginDate){
        return 0;
    } 
    else return 1;
}
/**
 * 根据当前时间的返回来得出当前比赛的状态
 */
const competitionStatus = () => {
    let number = isTimeRight()
    if(number == -1) return "比赛尚未开始";
    else if(number == 0) return "比赛正在进行中";
    else return "比赛已经结束";
}
/**
 * 报名比赛
 */
const registerComp = async () => {
    let form = {
        competitionId: props?.data[currentIndex.value]?.id
    }
    let obj =  await attendCompetition(form)
    if(obj.data === true){
        ElNotification({
            type: 'success',
            title: '报名成功'
        })
    }
    else {
        ElNotification({
            type: 'error',
            title: '报名失败'
        })
    }
    registerOk.value = true
}
const loadData = async () => {
    getDataFromBaseCop()
}
const getDataFromBaseCop = async () => {
    let path = router.currentRoute.value.params.id
    console.log(props?.data);
    for(let i = 0; i < props?.data.length; ++i){
        console.log(props?.data[i].id, path);
        if(props?.data[i].id == path){
            currentIndex.value = i;
            break;
        }
    }
    let form = {
        competitionId: props?.data[currentIndex.value]?.id
    }
    let obj =  await queryAttendCompetition(form)
    if(obj.data === true){
        registerOk.value = true
    }

    let formForRanking = {
        "page": 1,
        "pageSize": 10,
        "competitionId": router.currentRoute.value.params.id
    }
    let formForRankingObj = await getAttendRankInCop(formForRanking)
    if(formForRankingObj.code === 200)
        competitionRanking.value = formForRankingObj.data
    else {
        ElNotification({
            type: 'warning',
            title: '获取排名失败'
        })
    }
}
watch(() => props.data,
() => getDataFromBaseCop(),
{deep: true})
onMounted(async() => {
    loadData()
})
</script>
<template>
<div class="containersssss">
    <div class="inners">
        <div @click="returnHome">
            <a href="/contest" style="font-size: 18px; font-weight: 500; color: gray; display:flex; cursor: pointer; text-decoration: none;" class="returnIcon">
                <svg t="1709807854147" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4404" width="18" height="18"><path d="M770.694737 843.452632L342.231579 512 770.694737 180.547368c18.863158-13.473684 21.557895-37.726316 8.08421-56.589473-13.473684-18.863158-37.726316-21.557895-56.589473-8.084211L250.610526 479.663158c-8.084211 8.084211-13.473684 18.863158-13.473684 32.336842s5.389474 24.252632 16.168421 32.336842l471.578948 363.789474c18.863158 13.473684 43.115789 10.778947 56.589473-8.084211 10.778947-18.863158 8.084211-43.115789-10.778947-56.589473z" fill="currentColor" p-id="4405"></path></svg>
                <div style="position: relative; top: -.2vh; left: .6vw">返回竞赛主页</div>
            </a>
        </div>
        <div class="middle-title">
            <div>
                <h1 style="color: #575757;">{{ props?.data[currentIndex]?.competitionName }}</h1>
            </div>
            <div style="display: flex; gap: 3vw;">
                <div style="display: flex; gap: 1.5vw">
                    <div>时间:</div>
                    <div>{{ props?.data[currentIndex]?.startTime }}</div>
                </div>
                <div>
                    <div>{{ "时长: " + getDistanceTime(props?.data[currentIndex]?.startTime, props?.data[currentIndex]?.endTime) }}</div>
                </div>
            </div>
        </div>
        <div>
            <a-alert style="font-size: 16px;">{{ competitionStatus() }}</a-alert>
        </div>
        <div class="middle-title-down">
            <h2 style="color: #252525;">
                {{ "欢迎来到" + props?.data[currentIndex]?.competitionName + "竞赛" }}
            </h2>
        </div>
        <div class="middle-title-down">
            <a-button @click="registerComp()" v-if="!registerOk" style="background-color: #5CB85C; color: #FFFFFF; border-radius: 10px;" >报名比赛</a-button>
            <a-button v-else style="background-color: #D9534F; color: #FFFFFF; border-radius: 10px;" >已报名</a-button>
        </div>
        <div style="margin-top: 4vh; display: flex; justify-content: space-between;">
            <a-card :style="{ width: '35vw' }" style="box-shadow: 0px 5px 15px 0 rgba(0,0,0,0.08); height:fit-content; " title="题目">
                <template #extra>
                    <div style="font-size: 15px; ">得分</div>
                </template>
                <div class="wrappers" >
                    <div  v-for="(item, index) in props?.data[currentIndex]?.questionList" style="width: 100%;
                        border-bottom: 1px solid #DDDDDD;
                        position: relative;
                        justify-content: space-between;
                        height: 6vh;
                        display: flex;
                        align-items: center;
                        color: #1890FF;
                        font-size: 18px;"
                         >
                        <a :href="'/problems/' + item.id" style="text-decoration: none;     color: #1890FF;">{{ item.name }}</a>
                        <div>
                            <a-badge
                                :count="item.score"
                                :dotStyle="{ background: '#777777', color: '#FFFFFF' }"
                            />
                        </div>
                    </div>
                </div>
            </a-card>
            <a-card :style="{ width: '35vw' }" style="box-shadow: 0px 5px 15px 0 rgba(0,0,0,0.08) ; height: 45vh" title="竞赛榜">
                <template #extra>
                    <div style="font-size: 15px; ">排行榜</div>
                </template>
                <div style="display: flex; flex-direction: column;">
                    <div style="display: flex; padding: 0 .2vw;">
                        <div style="position: relative; width: 10%; font-size: 15px; color: #595959; font-weight: 800;">
                            排名
                        </div>
                        <div style="position: relative; width: 60%; font-size: 15px; color: #595959; font-weight: 800;">
                            用户名
                        </div>
                        <div style="position: relative; width: 15%; font-size: 15px; color: #595959; font-weight: 800;">
                            得分
                        </div>
                        <div style="position: relative; font-size: 15px; color: #595959; font-weight: 800;">
                            完成时间
                        </div>
                    </div>
                </div>
                <div style="justify-items: center; display: flex;">
                    <a-empty style="position: relative; top: 8vh">

                    </a-empty>
                </div>
            </a-card>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.containersssss{
    width: 100vw;
    position: relative;
    padding: 0px 20vh;
    height: max-content;
    .inners{
        margin-bottom: 5px;
        width: 100% ;
        padding: 8vh 0;
        height: 100%;
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
            margin-top: 1vh;
            padding: 0 2vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .middle-title-down{
            margin-top: 2vh;
            padding: 0 4vh;
        }
        .question-region{
            margin-top: 4vh;
            padding: 0 4vw;
            .wrappers{
                display:flex;
                flex-direction: column;
                .wrappers-list{
                    width: 100%;
                    border-top: 1px solid #DDDDDD;
                    position: relative;
                    justify-content: space-between;
                    height: 10vh;
                    display: flex;
                    padding: 0px 0.5vw;
                    align-items: center;

                }
            }
        }
    }
}
</style>