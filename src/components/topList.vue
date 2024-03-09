<script setup>
import {ref, onMounted, watch, defineProps} from 'vue'
import {useRouter} from 'vue-router'
import {getUserRanking} from '@/api/question'
import hoverShowImg from '@/components/hoverShowImg.vue'
const props = defineProps({
    userRanking: Object
})
const getUserRankingFn = () => {
}
watch(() => props?.userRanking,
() => getUserRankingFn(),{deep: true})
onMounted(() =>{

})
</script>

<template>
<div class="containerssss" style="position: relative; top: -10px;">
    <div class="wrapper">
        <a class="item" v-for="(item, index) in props?.userRanking" :href="'/u/' + item.id" style="text-decoration: none;">
            <div style="font-size: 15px; align-items: center; display: flex; width: 40px; left: 20px;position: relative; color: #575757;">{{index + 4}}</div>
            <!-- <img style="width: 30px; height: 30px; border-radius: 1000px; left: 20px; position: relative;" :src="item?.avatar" alt="">
             -->
            <div style="left: 0px; position: relative;">

                <hoverShowImg :userInfo="item" :index="index + 4" ></hoverShowImg>
            </div>
            <div style="display: flex; flex-direction: column; left: 20px; position: relative;">
                <div style="font-size: 15px; color: #FFA116;">{{ item?.nickName }}</div>
                <div style="font-size: 10px; color:  #808080;">{{"参加比赛次数" +  item?.attendCopTimes }}</div>
            </div>
        </a>
        <div style="display: flex; justify-content: center; align-items: center; position: relative; text-decoration: none; height: 40px;" >
            <a href="/rank/globalRanking" style="display: flex; justify-content: center; position: relative; text-decoration: none; align-items: center; font-size: 16px; color: #0088CC;">
                展示更多
            </a>

        </div>
    </div>
</div>
    
</template>

<style lang="scss" scoped>
.containerssss{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.15);;
    position: relative;
    width: 345px;
    height: 480px;
    left: 15px;
    background-color: FAFAFA;
    cursor: pointer;
    transition: .4s;
    border-radius: 20px;


    .wrapper{
        display: flex;
        flex-direction: column;

        align-items: center;
        .item{
            align-items: center;
            display: flex;
            gap: 10px;
            position: relative;
            height: 62px;
            width: 345px;
            border-bottom: 1px dotted #dddddd;
        }
        .item:nth-child(1){
            border-radius: 20px 20px 0 0;
        }
        .item:nth-child(8){
            border-radius: 0px 0px 20px 20px;
        }
        .item:hover{
           background-color: #ECF0F1;
        }
    }

}
.container:hover{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.3);
}
</style>