<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import { IconHeart, IconMessage, IconStar } from '@arco-design/web-vue/es/icon';
import {formatDate,  getRelativeTime} from '@/utils/dayUtils'
import {funLoading} from '@/utils/loading'
import { getArticleContent} from '@/api/article'
import drawerShowEditor from '@/components/drawerShowEditor.vue';
import {getCommentList,  addComment, followFriend,queryCommentImmediate, getUserInfo, getSonComment} from '@/api/user'
import hoverShowImg from '@/components/hoverShowImg.vue'
import talkSonItem from '@/components/talkISonltem.vue'

import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import highlight from '@bytemd/plugin-highlight' // 代码高亮
import talkISonltem from '@/components/talkISonltem.vue';
const router = useRouter()
const inputValue = ref('')
const article = ref({})
const isShowSonMsg = ref([])
const nowChoseReplyIndex = ref(0)
const loading = ref(true)
const myUserInfo  = ref({})
const nowChoseReplyInfo = ref({
    userInfo: {
        nickName: '2324'
    }
})
const drawer = ref(false)
const userInfo = ref({})
const plugins = [
    highlight(),
    gfm()
]
const commentInfoList = ref({
})
const sendMsgToSon = async (msg, talkInfoMsg, index) => {
    // const preMsg = '```\n' + "@" + nowChoseReplyInfo.value.userInfo.nickName + "\n"+  nowChoseReplyInfo.value.content.slice(0, 10) + (nowChoseReplyInfo.value.content.length > 10 ? '...' : '') +'\n```\n'
    // // 将他修改为可以扩展的状态
    let div = document.getElementsByClassName("footer-extension")[index]
    div.style.height = 'auto'
    var objs = {
        content: msg,
        userInfo: {
            ...talkInfoMsg.userInfo
        }
    }
    // 更新时间
    objs.updateTime = new Date()
    commentInfoList.value[index].commentSonList.push(
        objs
    )
    drawer.value = false
    // 发送请求
    let datas = {
        content: msg,
        articleId: article.value.id,
        userId: userInfo.value.id,
        articleType: 1,
        rootCommentId: commentInfoList.value[index].id,
        toCommentId: talkInfoMsg.id
    }
    console.log(datas);
    let obj = await addComment(datas)
    console.log(obj);
}
const showSonMsg = (index) => {
    isShowSonMsg.value[index] = !isShowSonMsg.value[index]
    let div = document.getElementsByClassName("footer-extension")[index]

    if(isShowSonMsg.value[index] === true){
        div.style.height = 'auto'
        const {height} = div.getBoundingClientRect()
        console.log(height);
        div.style.height = '0px'
        div.style.transition = '.5s'
        div.offsetHeight // 强制渲染
        div.style.height = height + 'px'

    }
    else {
        div.style.height = '0px'
        div.style.transition = '.5s'
    }
}
const followPersonImgFn = async (getStatus, personId) => {
    console.log(getStatus, personId);
    
    // userInfo.value.followPerson = !userInfo.value.followPerson
    let obj = await followFriend({friendId: personId, isNotFollow: !getStatus})
}
const showTheEditor = (index) => {
    drawer.value = true
    // console.log(commentInfoList.value[index]);
    nowChoseReplyInfo.value = commentInfoList.value[index]
    nowChoseReplyIndex.value = index
}
const sendCommentFn = async () => {
    let data = {
        content: inputValue.value,
        articleId: article.value.id,
        userId: userInfo.value.id,
        articleType: 1
    }
    let obj = await addComment(data)
    inputValue.value = ""
    
    // 获取刚刚添加的数据
    console.log(obj);
    if(obj.data === -1) {
        ElNotification({
            type: 'warning',
            title: '发送消息失败',
        })
    }
    else{
        ElNotification({
            type: 'success',
        })
    }
    let messageGet =  await queryCommentImmediate({id: obj.data})
    commentInfoList.value.unshift(messageGet.data)
}
const goToAllSolve = () => {
    // router.currentRoute.value.params.id
    router.push({
        path: '/problems' + "/" + router.currentRoute.value.params.id 
    })
}
const followPersonFn = async () => {
    userInfo.value.followPerson = !userInfo.value.followPerson
    let obj = await followFriend({friendId: userInfo.value.id, isNotFollow: !userInfo.value.followPerson})
    console.log(obj);
}
const sendMessage = async (msg) => {
    const preMsg = '```\n' + "@" + nowChoseReplyInfo.value.userInfo.nickName + "\n"+  nowChoseReplyInfo.value.content.slice(0, 10) + (nowChoseReplyInfo.value.content.length > 10 ? '...' : '') +'\n```\n'
    // // 将他修改为可以扩展的状态
    let div = document.getElementsByClassName("footer-extension")[nowChoseReplyIndex.value]
    div.style.height = 'auto'
    var objs = {
        content: preMsg + msg,
        userInfo: {
            ...myUserInfo.value
        }
    }
    objs.updateTime = new Date()
    console.log(objs);
    commentInfoList.value[nowChoseReplyIndex.value].commentSonList.push(
        objs
    )
    drawer.value = false

    // 发送请求
    let datas = {
        content: preMsg + msg,
        articleId: article.value.id,
        userId: userInfo.value.id,
        articleType: 1,
        rootCommentId: nowChoseReplyInfo.value.id,
        toCommentId: nowChoseReplyInfo.value.id
    }
    console.log(datas);
    let obj = await addComment(datas)
    console.log(obj);
}
onMounted(async () => {
    // console.log(router.currentRoute.value.params); 
    let key = router.currentRoute.value.params.pid
    let obj = await getArticleContent({id: key})    
    let commentUserObj = await getCommentList({articleId : key, page:1, pageSize: 10, articleType: 1})
    commentInfoList.value = commentUserObj.data
    article.value = obj.data
    userInfo.value = obj.data.userInfo
    for(let i = 0; i < commentInfoList.value.length ; ++i){
        var id = commentInfoList.value[i].id
        isShowSonMsg.value.push(false)
        let obj  = await getSonComment({rootId: id, page: 1, pageSize: 10, isExtension: true, articleType: 1})
        commentInfoList.value[i].commentSonList = obj.data
    }
    let _fn =  funLoading(loading, getUserInfo)
    let getUserInfoData = await _fn()
    myUserInfo.value = getUserInfoData.data
})
</script>

<template>
    <drawerShowEditor :nickName="nowChoseReplyInfo.userInfo.nickName" style="z-index: 10000;" :drawer="drawer" @closeDrawer="drawer=false" @sendMessage="sendMessage" ></drawerShowEditor>

    <el-skeleton   :loading="loading" animated>
      <template #template>
        <div style="display: flex; flex-direction: column; padding: 20px 20px; gap: 20px;">
            <el-skeleton-item variant="h3" style="width: 70%; height: 25px;" />
            <div style="display: flex; gap: 10px; ">
                <el-skeleton-item variant="image" style="width: 40px; height: 40px; border-radius: 1000px;" />
                <div style="display: flex; gap: 8px; flex-direction: column; ">
                    <el-skeleton-item variant="h3" style="width: 200px; height: 18px;" />
                    <div style="display: flex; gap: 5px;">
                        <el-skeleton-item variant="h3" style="width: 80px; height: 15px;" />
                        <el-skeleton-item variant="h3" style="width: 60px; height: 15px;" />
                        <el-skeleton-item variant="h3" style="width: 70px; height: 15px;" />
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <el-skeleton-item variant="text" style="width: 500px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 300px; height: 19px;"></el-skeleton-item>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <el-skeleton-item variant="text" style="width: 500px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 300px; height: 19px;"></el-skeleton-item>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <el-skeleton-item variant="text" style="width: 500px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 300px; height: 19px;"></el-skeleton-item>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <el-skeleton-item variant="text" style="width: 500px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 300px; height: 19px;"></el-skeleton-item>
                </div>
            </div>
            <div style="display: flex; gap: 20px;">
                <div style="display: flex; gap: 8px;">
                    <el-skeleton-item variant="text" style="width: 20px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 40px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 20px; height: 19px;"></el-skeleton-item>
                </div>
                <div style="display: flex; gap: 8px;">
                    <el-skeleton-item variant="text" style="width: 20px; height: 19px;"></el-skeleton-item>

                    <el-skeleton-item variant="text" style="width: 40px; height: 19px;"></el-skeleton-item>
                    <el-skeleton-item variant="text" style="width: 20px; height: 19px;"></el-skeleton-item>
                </div>
                <!-- <el-skeleton-item variant="text" style="width: 500px; height: 19px;"></el-skeleton-item> -->
            </div>
            <div style="display: flex; gap: 10px;">
                <el-skeleton-item variant="text" style="width: 250px; height: 50px;"></el-skeleton-item>
                <el-skeleton-item variant="text" style="width: 250px; height: 50px;"></el-skeleton-item>
            </div>
            <div style="display: flex; gap: 20px;">
                <el-skeleton-item variant="text" style="width: 100px; height: 40px;"></el-skeleton-item>
                <el-skeleton-item variant="text" style="width: 100px; height: 40px;"></el-skeleton-item>
            </div>
            <el-skeleton-item variant="text" style="width: 510px; height: 70px;"></el-skeleton-item>
            <div style="display: flex; gap: 10px; position: relative; top: -5px;">
                <el-skeleton-item variant="text" style="width: 80px; height: 20px;"></el-skeleton-item>
                <el-skeleton-item variant="text" style="width: 20px; height: 20px; border-radius: 100px;"></el-skeleton-item>
                <el-skeleton-item variant="text" style="width: 80px; height: 20px;"></el-skeleton-item>

                <el-skeleton-item variant="text" style="width: 20px; height: 20px; border-radius: 100px;"></el-skeleton-item>

            </div>
        </div> 
      </template>
      <template #default>
        <div class="containerssss">
            <div class="content">
                <div  class="top">
                    <div @click="goToAllSolve" style="display: flex; gap: 8px; cursor: pointer; ">
                        <svg aria-hidden="true" focusable="false" data-prefix="far" width="15" height="15" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path></svg>
                        <div>全部题解</div>
                    </div>
                </div>
                <div style="margin-left: 15px;">
                    <h3>{{  }}</h3>
                </div>
                <div class="middle">
                    <div class="middle-item">
                        <img :src="userInfo.avatar" style="height: 35px; width: 35px; border-radius: 1000px;" alt="">
                        <div style="display: flex; flex-direction: column; gap: 5px;">
                            <div style="display: flex; gap: 5px;">
                                <div>{{ userInfo.nickName }}</div>
                                <div v-if="userInfo.self === false" @click="followPersonFn" style= "cursor: pointer; align-items: center; display: flex; gap: 3px; color: #62C886;">
                                    <div v-show="userInfo.followPerson === false" style="display: flex; gap: 3px; cursor: pointer;">
                                        <svg aria-hidden="true" width="13" height="13" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path></svg>
                                        <div style="font-size: 13px;">  关注</div>
                                    </div>
                                    <div v-show="userInfo.followPerson === true" style="display: flex; gap: 3px; cursor: pointer;">
                                        <div style="font-size: 13px; color: #8A8A8E;"> 已关注</div>
                                    </div>
    
                                </div>
                            </div>
    
                            <div style="display: flex; gap: 4px; color: #A8A8A8;">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-text-tertiary dark:text-text-tertiary"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clip-rule="evenodd"></path></svg>
                                <div style="font-size: 12px; display: flex; align-items: center; color: #737373;" >{{ userInfo.reads }}</div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-text-tertiary dark:text-text-tertiary"><path fill-rule="evenodd" d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z" clip-rule="evenodd"></path></svg>
                                <div style="font-size: 12px; display: flex; align-items: center; color: #737373;">{{formatDate(article.updateTime, 'YYYY.MM.DD')}}</div>
                                <div style="margin-left: 20px; font-size: 12px; align-items: center; display: flex;">发布于&nbsp;未知归属地</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center; margin-left: 15px; margin-top: 15px;">
                        <div style="border-radius: 10px; padding: 1px 10px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-for="(item, index) in article.tags">{{ item }}</div>
                        <!-- <div style="border-radius: 10px; padding: 1px 10px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-if="article.tags.length > 4">{{ article.tags.length - 4 + "+" }}</div> -->
                    </div>
                    <Viewer :value="article.content" :plugins="plugins" style="margin: 0px 2.5%; width: 95%; min-height: 100px; margin-top: 10px;" ></Viewer>
                    <!-- <mavon-editor class="editor" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="article.content" style="position: relative;  border: none; overflow: auto;" /> -->
                </div>
                <div class="bottom">
                    <div style="display: flex; justify-content: space-between; width: 95%">
                        <div style="display: flex; justify-content: space-between; width: 100%;">

                            <div style="font-size: 18px; display: flex; gap: 10px; color: #8C8C8C;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="h-6 w-6 text-gray-6 dark:text-dark-gray-6"><path fill-rule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clip-rule="evenodd"></path></svg>
                                <div style="display: flex; align-items: center; font-size: 18px;">评论</div>
                                <div style="display: flex; align-items: center; font-size: 16px; color: #4E4E4E;">{{ "(" + commentInfoList.length + ")" }}</div>
                            </div>
                            <div style="display: flex; align-items: center; color: #4E4E4E; font-size: 11px;">
                                {{ "排序: " + "最热" }}
                            </div>
                        </div>
                    </div>
                    <div class="talk" >
                        <div class="talk-item">
                            <a-textarea v-model="inputValue"  placeholder="请输入评论" style="min-height: 120px;" auto-size allow-clear/>
                            <div style="display: flex; justify-content: center;">
                                <div style="display: flex; gap: 15px; width: 100%; margin-top: 20px; color: #828282;">
                                    <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M13.27 5.02c.456.1.764.562.727 1.06l-.015.116-2.181 12c-.099.541-.578.893-1.07.784-.457-.1-.765-.562-.728-1.06l.015-.116 2.181-12c.099-.541.578-.893 1.07-.784zm4.65.37l.07.096 3.857 6c.178.277.2.614.067.906l-.067.123-3.857 6c-.304.473-.962.627-1.47.342-.47-.264-.646-.812-.425-1.268l.058-.104L19.678 12l-3.525-5.485c-.283-.44-.161-1.001.264-1.307l.103-.065a1.123 1.123 0 011.4.246zm-11.84 0c.3-.365.83-.49 1.28-.305l.12.058.103.065a.96.96 0 01.326 1.194l-.062.113L4.322 12l3.525 5.485.058.104c.221.456.046 1.005-.425 1.268a1.123 1.123 0 01-1.4-.246l-.07-.097-3.857-6-.067-.122a.939.939 0 010-.784l.067-.123 3.857-6 .07-.096z" clip-rule="evenodd"></path></svg>
                                    <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M13 7a1 1 0 011-1h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 000-8h-2a1 1 0 01-1-1zm-3 10a1 1 0 01-1 1H8A6 6 0 018 6h1a1 1 0 010 2H8a4 4 0 100 8h1a1 1 0 011 1zm-1-6h6a1 1 0 110 2H9a1 1 0 110-2z" clip-rule="evenodd"></path></svg>
                                    <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="currentColor"><path d="M11.27 6.799l.146-.438c.075-.259.178-.437.308-.534.14-.108.345-.06.615.145.065.054.124.114.178.179a.45.45 0 01.114.226.976.976 0 01.032.373 2.21 2.21 0 01-.13.535l-1.182 3.434c-.054.151-.043.28.032.389a.399.399 0 00.308.146c.087 0 .232-.081.438-.243.205-.173.41-.405.615-.697.216-.292.405-.637.567-1.037a3.63 3.63 0 00.243-1.344c0-.519-.108-1-.324-1.442a3.458 3.458 0 00-.907-1.15 4.033 4.033 0 00-1.345-.778 4.76 4.76 0 00-1.684-.292 4.55 4.55 0 00-1.766.373 5.343 5.343 0 00-2.77 2.738c-.292.659-.438 1.393-.438 2.203 0 .691.13 1.296.389 1.814.26.519.616.95 1.07 1.296.453.335.982.589 1.587.762a7.555 7.555 0 001.96.243 9.97 9.97 0 001.328-.081c.4-.054.783-.151 1.15-.292a5.269 5.269 0 001.07-.6c.345-.258.707-.582 1.085-.971.076-.108.162-.162.26-.162.107-.011.21.01.307.065a.567.567 0 01.243.21.5.5 0 01.13.276.857.857 0 01-.081.55c-.076.162-.26.378-.551.648-.292.27-.61.524-.956.762a6.538 6.538 0 01-1.118.632c-.4.172-.837.307-1.312.405a7.016 7.016 0 01-1.555.162 8.817 8.817 0 01-2.527-.324 6.147 6.147 0 01-2.122-1.021 5.098 5.098 0 01-1.442-1.814c-.357-.735-.535-1.61-.535-2.625 0-1.09.19-2.057.567-2.9.389-.853.891-1.566 1.507-2.138a6.371 6.371 0 012.09-1.328A6.646 6.646 0 019.26 2.7c.875 0 1.674.13 2.398.389.734.259 1.36.62 1.879 1.085.518.465.918 1.02 1.199 1.669.291.648.437 1.36.437 2.138 0 .627-.119 1.237-.356 1.83a5.638 5.638 0 01-.94 1.556c-.389.454-.826.82-1.312 1.102-.486.27-.977.405-1.474.405-.378 0-.675-.087-.891-.26-.216-.172-.378-.437-.486-.793-.346.28-.637.496-.875.648-.238.15-.545.221-.923.21-.443-.01-.8-.102-1.07-.275a1.905 1.905 0 01-.631-.648 2.547 2.547 0 01-.308-.859 5.625 5.625 0 01-.081-.923c0-.465.092-.967.275-1.507.195-.55.46-1.053.794-1.506a4.519 4.519 0 011.247-1.15 2.928 2.928 0 011.62-.47c.227 0 .422.037.584.113.172.076.313.184.42.324.12.13.217.286.292.47.076.173.146.356.211.55zm-2.657 4.374c.324 0 .637-.12.94-.357.313-.248.578-.723.794-1.425.14-.432.243-.746.307-.94.065-.205.103-.373.114-.502.01-.205-.07-.389-.243-.551-.173-.173-.357-.26-.551-.26-.346 0-.659.087-.94.26-.27.173-.502.394-.696.664a3.53 3.53 0 00-.438.907 3.563 3.563 0 00-.178.972c0 .476.092.8.276.972.183.173.388.26.615.26z"></path></svg>
                                </div>
                                <div style="display: flex; gap: 10px; margin-top: 15px;">
                                    <div style="white-space: nowrap; display: flex; align-items: center;" :style="inputValue.length > 0 ? 'color: #8A8A8E': 'color: #C4C4C6'">预览</div>
                                    <div @click="sendCommentFn" style="cursor: pointer; border-radius: 10px; padding: 8px 10px; align-items: center; display: flex; font-size: 15px; white-space: nowrap;" :style="inputValue.length > 0 ? 'background-color: #2DB55D; color: #FFFFFF': 'color: #F9FDFB; background-color: #96DAAE;'">评论</div>
                                </div>
                            </div>
                        </div>
                        <div v-if="commentInfoList.length !== 0" class="talk-elem" v-for="(item, index) in commentInfoList" :key="item.id">
                            <div style="display: flex; justify-content: space-between; width: 96%; ">
                                <div style="display: flex; gap: 10px;">
                                    <hoverShowImg @followUser="followPersonImgFn" :userInfo="item.userInfo" :index="index"></hoverShowImg>
                                    <div style="display: flex ; align-items: center;">{{item.userInfo.nickName}}</div>
                                </div>
                                <div style="font-size: 12px; color: #8A8A8E; margin-top: 15px; ">
                                    {{ getRelativeTime(item.updateTime) }}
                                </div>
                                
                            </div>
                            <div style="display: flex; justify-content: center;">
                                <Viewer style="margin: 0px 20px; width: 95%; margin-bottom: 10px;" :plugins="plugins" :value="item.content"></Viewer>
                            </div>
                            <div class="footerss">
                                <div style="display: flex; justify-content: space-between; gap: 15px; padding-bottom: 15px; transition: 0.5s; transition-delay: 0.1s;">
                                    <div style="display: flex ; gap: 15px; transition: 0.5s; transition-delay: 0.1s;">
                                        <div @click="ThumbOrNot()" class="item-icon-status" :style="item.isThumb ? 'color:#2DB55D;': 'color: #929292'">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>
                                            <div style="display: flex; align-items: center;">{{ item.thumbNum }}</div>
                                        </div>
                                        <div @click="showSonMsg(index)" class="item-icon-status" style="width: 95px;">
                                            <svg v-if="!isShowSonMsg[index]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clip-rule="evenodd"></path></svg>
                                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z" clip-rule="evenodd"></path></svg>
                                            <div style="display: flex; align-items: center;"  v-if="(item.commentSonList !== undefined) && (!isShowSonMsg[index])" :style="item.commentSonList.length === 0 ? 'cursor: not-allowed': 'cursor: pointer'">{{item.commentSonList.length === 0 ? "暂无回复" : ("回复数：" + item.commentSonList.length)}}</div>
                                            <div style="display: flex; align-items: center;"  v-else>收起</div>
                                        </div>
                                        <div class="item-icon-status" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z" clip-rule="evenodd"></path></svg>
                                            <div style="display: flex; align-items: center;">收藏</div>
                                        </div>
                                        <div class="item-icon-status" >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.5 5.5a7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9 1 1 0 110 2z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M20.207 3.793a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M14.5 4.5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0v-3h-3a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                            <div style="display: flex; align-items: center;">分享</div>
                                        </div>
                                        <svg style="top: 10px; position: relative;" viewBox="0 0 24 24" width="22" height="22" class="css-1lc17o4-icon item-icon-status" fill="currentColor" ><path fill-rule="evenodd" d="M6 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>
                                    </div>
                                    <div @click="showTheEditor(index)" class="item-icon-status" style="display: flex; position: relative; right: 20px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
                                        <div style="display: flex; align-items: center;">添加回复</div>
                                    </div>
                                </div>
                                <div class="footer-extension" >
                                    <talkSonItem v-for="(items, indexs) in item.commentSonList" @sendMsgToSon="sendMsgToSon" :key="items.id" :talkInfo="items" :index="index"></talkSonItem>
                                </div>
                            </div>
                        </div>
                        <el-empty v-else description="快去评论吧" />
                    </div>
                </div>
            </div>
        </div>
      </template>
  </el-skeleton> 
   
</template>

<style lang="scss" scoped> 
    .containerssss{
        display :flex;
        flex-direction: column;
        padding: 5px   0px;

        height: 660px;
        .content{

     
            .top{
                padding-left: 15px;
                height: 25px;
                color: #737373;
 
                position: sticky; 
                top: 0px;
                z-index: 1000;
                background-color: white;
          
                display: flex;
                gap: 8px;
                border-bottom: 1px solid #0000000f;;
            }
            .middle{
                margin-top: 10px;
                display: flex;
                min-height: 40px;
                flex-direction: column;
                position: relative;
         
                .middle-item{
                    margin-left: 15px;
                    display: flex;  
                    gap: 10px;
                    align-items: center;
                }
            }
            .bottom{
                display: flex;
                margin-bottom: 20px;
                padding: 0px 15px;
                flex-direction: column;
                width: 100%;
                position: relative;
                top: 15px;
                justify-content: center;
                .talk{
                    display: flex;
                    margin-bottom: 20px;
                    flex-direction: column;
                    .talk-elem{
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin-bottom: 10px;

                        margin-top: 20px;
                        .footerss{
     

                            display: flex;
    
                            position: relative;
                  
                            padding-bottom: 10px;
                   
                            top: 5px;
           
                            color: #929292;
                            flex-direction: column;
                            transition: 0.5s;
                            transition-delay: 0.1s;
                            .footer-extension{
                                width: 100%;
                                position: relative;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                gap: 12px;
                                overflow: hidden;
                                height: 0px;
                        
                            }
                            .item-icon-status{
                                position: relative; display: flex; gap: 5px; 
                                top: 10px;
                                white-space: nowrap;
                                cursor: pointer;
                            }
                            .item-icon-status:nth-child(1):hover{
                                color: #2DB55D !important;
                            }
                            .item-icon-status:nth-child(2):hover{
                                color: #0A81FA !important;
                            }
                            .item-icon-status:nth-child(3):hover{
                                color: #FFA116 !important;
                            }
                            .item-icon-status:nth-child(4):hover{
                                color: #178BFF !important;
                            }
                            .item-icon-status:nth-child(5):hover{
                                color: #0A81FA !important;
                            }
                            .item-icon-status:nth-child(6):hover{
                                color:#0A81FA !important;
                            }
                        }
                    }
                    .talk-item{
                        display: flex;
                        // height: 150px;
                        border-radius: 15px;
                        flex-direction: column;
                        padding: 10px 2.5%;
                        width: 90%;
                        box-shadow: 0px 0px 10px 3px #0000000f;
                        .arco-textarea-wrapper:hover {
                            background-color: transparent; 
                            border-color: initial; 
                            
                        }
                        .arco-textarea-wrapper:focus-within {
                            background-color: transparent;
                            border: none;
                            
                        }
                        .arco-textarea-wrapper-focus{
                            background-color: transparent; 

                            border: none;
                        }
                        .arco-textarea-wrapper-focus:focus-within{
                            background-color: transparent; 

                            border: none;
                        }
                        .arco-textarea-wrapper-focus:focus{
                            background-color: transparent; 

                            border: none;
                        }
                        .arco-textarea-wrapper:focus{
                            background-color: transparent; 

                            border: none;
                        }
                        .arco-textarea-wrapper{
                            background-color: transparent; 

                            border: none;
                        }
                    }
                    padding: 0px 15px;
                    display: flex;
                    margin-top: 15px;
                    height: 150px;
                }
            }
        }
        // background-color: aqua;
    }
</style>