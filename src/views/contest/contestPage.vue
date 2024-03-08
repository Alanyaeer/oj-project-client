<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

import cupMove  from '@/components/cupMove.vue'
import topThree from '@/components/topThree.vue';
import topList from '@/components/topList.vue';
import contentList from '@/components/contentList.vue';

import {queryCompetition,getUserRanking} from '@/api/question'
// import {} from '@/api/question'

const router = useRouter()
const userRanking = ref([])
/**
 * 获取到这个比赛的下标，这样我们才能传递给我们的子项目
 */
const whichIndex = ref(0)
const isSonPage = () => {
    let t = router.currentRoute.value.params?.id
    if(t == undefined || t == null){
        return true
    }
    else return false
}
/**
 * 比赛信息
 */
const contentInfoList = ref([])
const loadData = async () => {
    let form = {
        "page" : 1,
        "pageSize" : 10000
    }
    let obj = await queryCompetition(form)
    contentInfoList.value = obj.data
    let personRanksForm = {
        "page": 1,
        "pageSize": 10
    }
    let objRanking =  await getUserRanking(personRanksForm)
    console.log(objRanking);
    if(objRanking.code === 200){
        userRanking.value = objRanking.data
    }
}
const changeIndex = (index) => {
    whichIndex.value = index
    console.log('下标发生了变化 '+  index);

    // router.push("/contest/" + props.contentList[index].id)

}
onMounted(async() => {
    loadData()
})
</script>

<template>
    <router-view v-show="!isSonPage()" :data="contentInfoList"></router-view>
    <div v-show="isSonPage()" class="containersss">
        <div class="topsssss">
            <cupMove style="top: -55px; position: relative;"></cupMove>
            <div style="font-family: fantasy; color: #71B0E4; font-size: 45px; top: -55px; position: relative;">AttackCode </div>
            <div style="font-size: 45px; top: -55px; position: relative; color: #F9C52D;">Contest</div>
        </div>
        <div class="bottomssss">
            <div class="bottom-innersss">
                <div class="leftsss">
                    <div class="left-topsss">

                        <img style="width: 100px; height: fit-content;" src="@/assets/icon/china_map.e6e137c72.svg">
                        <div style="position: relative ; top: 20px;">全国排名</div>
                    </div>
                    <div class="left-middlesss">
                        <topThree :userRanking="userRanking.slice(0, 3)" ></topThree>
                    </div>
                    <div >
                        <topList :userRanking="userRanking.slice(3)"></topList>
                    </div>
                </div>
                <div class="rightsss">
                    <contentList :contentList="contentInfoList" :whichIndex="whichIndex" @changeIndex="changeIndex"></contentList>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.containersss{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    left: 0px;
    .singleContest{
       position: absolute; 
    //    background-image: ;
       width: 455px;
       height: 220px;
       padding: 20px 20px 0px 20px;
    //    background-color: white;
       top: 400px;
       border-radius: 15px;
       left: 280px;
    }
    .doubleContest{
       border-radius: 15px;

        position: absolute; 
        // background-color: white;
        top: 400px;
        left: 880px;
        width: 305px;
        height: 220px;
        padding: 20px 20px 0px 20px;
    }
    .topsssss{
        width: 1520px;
        height: 460px;
        // background-color: aqua;
        background-color: #303030;
        display: flex;
        font-family: fantasy;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .bottomssss{
        width: 920px;
        height: 1060px;
        background-color: #FAFAFA;
        padding: 0px 300px;
        .bottom-innersss{
            position: relative;
            top: 50px;
            display: flex;
            gap: 45px;
            .leftsss{
                position: relative;
                display: flex;
                gap: 20px;
                flex-direction: column;
                .left-topsss{
                    font-size: 33px;
                    font-weight: bold;
                    color: #BCC2C6;
                    display: flex;
                    gap: 10px;
                }
                .left-middlesss{
                    display: flex;
                }
            }
            .rightsss{
                position: relative;
            }
        }
    }
}
</style>