<script setup>
import inputCop from '@/components/inputCop.vue';
import { onMounted ,ref} from 'vue';
import hoverShowImg from '@/components/hoverShowImg.vue';
import {followFriend} from '@/api/user'
import {getQuestionSolveArticleList} from '@/api/article'
const pageNow = ref(1)
const customStyle =  {
    borderRadius: '6px',
    border: 'none',
    overflow: 'hidden',
    backgroundColor : 'white',
    width: '570px'
}
const changeStyle = () => {
    let obj = document.getElementsByClassName('arco-collapse-item-content')[0]
    console.log(obj);
    obj.style.backgroundColor = 'white'
}
const followUser = async (status, index) => {
    console.log(status);
    solveList.value[index].self = status
    let params = {
        friendId: solveList.value[index].userId,
        isNotFollow: !status 
    }
    let obj = await followFriend(params)
    console.log(obj.data);
}
const tagList = ref(['不限','动态规划','图论','图论','图论', '二分查找','动态规划', '数学',  '二分查找'])
const getMoreSolveFn = async () => { 
    pageNow.value += 1
    // 继续添加 新的元素
    let params   = {
        page: pageNow.value,
        pageSize: 15,
        questionId: window.location.pathname.split('/')[2]
    }
    let obj = await getQuestionSolveArticleList(params)
    for(let i = 0; i < obj.data.length; ++i){
        solveList.value.push(obj.data[i])
    }
}
const seeTheDetailFn = () => {

}
const solveList = ref([
])
onMounted(async () => {
    changeStyle()
    let params   = {
        page: 1,
        pageSize: 15,
        questionId: window.location.pathname.split('/')[2]
    }
    let obj = await getQuestionSolveArticleList(params)
    console.log(obj.data);
    solveList.value = obj.data
    console.log(solveList.value);
})
</script>

<template>
    <div class="containerssssss">
        <div class="box">
            <div class="top">
                <inputCop></inputCop>
                <div style="height: 15px; margin-top: 10px;" class="fontstyle">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-down-wide-short" width="18" height="18"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M15 377l96 96c9.4 9.4 24.6 9.4 33.9 0l96-96c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55V56c0-13.3-10.7-24-24-24s-24 10.7-24 24V398.1L49 343c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zM312 480h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0-128H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0-128H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24zm0-128H552c13.3 0 24-10.7 24-24s-10.7-24-24-24H312c-13.3 0-24 10.7-24 24s10.7 24 24 24z"></path></svg>
                    <div style="white-space: nowrap;">热度最高</div>
                </div>
            </div>
            <div class="middle">
                <a-collapse 
                    expand-icon-position=right
                >
                    <a-collapse-item  :style="customStyle" style="border: none;">
                        <template #header>
                            <div class="wrapper-list">
                                <div v-for="(item, index) in tagList" :key="item.id" class="wrapper">{{ item }}</div>
                            </div>
                        </template>
                        <div>dfaef</div>
                    </a-collapse-item>
                </a-collapse>
            </div>
            <div class="bottom">
                <div class="wrapper-listb">
                    <div  v-infinite-scroll="getMoreSolveFn"  v-for="(item, index) in solveList" :key="item.id" class="wrapperb"> 
                        <div @click="seeTheDetailFn" class="item-top" style="cursor: pointer;">
                            <hoverShowImg @followUser="followUser" :index="index" :userInfo="item" style=" align-items: center; position: relative; top: 10px;"></hoverShowImg>
                            <!-- <img :src="item.avatar" style="width: 30px; height: 30px; border-radius: 100px;"> -->
                            <div class="right-item" >
                                <div>{{item.nickName}}</div>
                                <div style="color: #262626;">{{ item.titleName }}</div>
                                <div style="color: #5C5C5C; line-height: 1.25rem;">{{ item.content.length >= 35 ? item.content.slice(0, 32) + "..." : item.content }}</div>
                                <div style="display: flex; gap: 10px;">
                                    <div style="border-radius: 10px; padding: 1px 8px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-for="(item, index) in item.tags.slice(0, 4)">{{ item }}</div>
                                    <div style="border-radius: 10px; padding: 1px 8px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-if="item.tags.length > 4">{{ item.tags.length - 4 + "+" }}</div>
                                </div>
                                <div style="display: flex; gap: 20px; margin-top: 5px; color: #737373;">
                                    <div style="display: flex; gap: 8px; ">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="16" height="16" data-icon="triangle" class="svg-inline--fa fa-triangle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5H62.5c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480h387c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3z"></path></svg>
                                        <div>{{ item.articleThumbNums }}</div>
                                    </div>
                                    <div  style="display: flex; gap: 8px; ">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="16" height="16" data-icon="eye" class="svg-inline--fa fa-eye absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"></path></svg>
                                        <div>{{item.articleReads}}</div>
                                    </div>
                                    <div style="display: flex; gap: 8px;">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="16" height="16" data-icon="comment" class="svg-inline--fa fa-comment absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg>
                                        <div>{{ item.articleTalks }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerssssss{
    display :flex;
    flex-direction: column;
    padding: 5px   10px;
    height: 660px;
    .box{
        width: 100%;
        height: 100%;
        // border-radius: 10px;
        // background-color: aqua;
        .top{
            display:flex;
            gap: 5px;
            justify-content: space-between;
            // height: 14px;
            position: relative;
            border-bottom: 1px solid #0000000f;
            .fontstyle{
                font-size: 15px;
                color: #A8A8A8;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                gap: 5px;
            }
            .fontstyle:hover{
                color:#737373;
                
            }
        }
        .middle{
            display: flex;
            position: relative;
            margin-top: 5px;
            .arco-collapse{
                border: none !important;

            }
            .wrapper-list{
                gap: 10px;
                // overflow-x: hidden;
                display: flex;
                .wrapper{
                    border-radius: 20px;
                    white-space: nowrap;
                    font-size: 10px;
                    padding: 0px 10px;
                    background-color: #F2F3F4;
                    color: #4E4E4E;
                }
                .wrapper:nth-child(1){
                    color: #FFFFFF;
                    background-color: #1A1A1A;
                }
            }
        }
        .bottom{
            display: flex;
            position: relative;
            height: 570px;
            flex-direction: column;
            // background-color: #1A1A1A;  
            // padding: ;
            .wrapper-listb{
                display: flex;
                flex-direction: column;
                .wrapperb{
                    display: flex;
                    position: relative;
                    // flex-direction: column;
                    width: 542px;
                    height: 142px;
                    padding: 12px 16px 0px 16px;
                    border-bottom: 1px solid #0000000f;

                    .item-top{
                        display: flex;
                        width: 100%;
                        .right-item{
                            margin-left: 15px ; 
                            color: #737373;
                            gap: 10px;
                            font-size: 15px;
                            display: flex;
                            flex-direction: column;
                        }
                    }
                    // justify-content: space-between;
                }
            }
        }
    }
}
</style>