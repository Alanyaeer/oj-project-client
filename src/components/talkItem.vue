<script setup>
import {ref, onMounted} from 'vue'
import hoverShowImg from './hoverShowImg.vue';
import drawerShowEditor from './drawerShowEditor.vue';
import talkSonItem from './talkISonltem.vue'
import dayjs from 'dayjs'
import { funLoading , picLoading} from '@/utils/loading';
const loading = ref(false)
const drawer = ref(false)
const isShowSonMsg = ref(false)
const talkInfo = ref({
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15
})
const chatList = ref([])
const changeStatus = (type) => {
    talkInfo.value.isFollow = type
    // 发送请求消息
}
const showTheEditor = () => {
    drawer.value = true
}
const showSonMsg = () => {
    isShowSonMsg.value = !isShowSonMsg.value
    let div = document.getElementsByClassName("footer-extension")[0]

    if(isShowSonMsg.value === true){
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
const ThumbOrNot = () => {
    talkInfo.value.isThumb = !talkInfo.value.isThumb
    // 发送请求事件
}
const sendMessage = (msg) => {

    console.log(msg);
    const preMsg = '```\n' + "@" +talkInfo.value.nickName + "\n"+  talkInfo.value.content.slice(0, 10) + (talkInfo.value.content.length > 10 ? '...' : '') +'\n```\n'
    // 将他修改为可以扩展的状态
    let div = document.getElementsByClassName("footer-extension")[0]
    div.style.height = 'auto'
    chatList.value.push(
    {
        content: preMsg + msg,  
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaeaere',
        updateTime: '2023-11-2',
        thumbNum: 32,
        isFollow: false,
        rank: 9999,
        description: 'fajefae',
        replyNum: 8,
        favourNum: 34,
        reads: 313,
        isFavour: false,
        isThumb: true,
        beFollow: 32,
        sonCommentNum: 15
    })
    drawer.value = false
}
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
onMounted(() => {
    funLoading(loading, test)()
    let obj = {
        content: 'faiejfaef',  
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaeaere',
        updateTime: '2023-11-2',
        thumbNum: 32,
        isFollow: false,
        rank: 9999,
        description: 'fajefae',
        replyNum: 8,
        favourNum: 34,
        reads: 313,
        isFavour: false,
        isThumb: true,
        beFollow: 32,
        sonCommentNum: 15
    }
    obj.updateTime = dayjs(obj.updateTime).fromNow()
    chatList.value.push(obj)
})
</script>

<template>
    <drawerShowEditor :nickName="talkInfo.nickName" style="z-index: 10000;" :drawer="drawer" @closeDrawer="drawer=false" @sendMessage="sendMessage" ></drawerShowEditor>
    <div class="containersss">
        <el-skeleton   :loading="loading" animated>
            <template #template>
                <div style="display: flex; gap: 8px;">
                    <el-skeleton-item variant="image" style="width: 40px; height: 40px; border-radius: 1000px;"></el-skeleton-item>
                    <el-skeleton style="top: 5px; position: relative;" :rows="4"></el-skeleton>
                    
                </div>
            </template>
            <template #default>
                <div class="top">
                    <div style="display: flex; gap: 10px; align-items: center; color: #8C8C8C;">
                        <hoverShowImg :userInfo="talkInfo" @followUser="changeStatus"></hoverShowImg>
                        <!-- <img style="width: 32px; height: 32px; border-radius: 100000000px;" :src="talkInfo.avatar" alt=""> -->
                        <div >{{ talkInfo.nickName }}</div>
                    </div>
                    <div style="display: flex; align-items: center; color: #8C8C8C; font-size: 12px;">{{ dayjs(talkInfo.updateTime).fromNow() }}</div>
                </div>
                <div class="bottom">
                    <mavon-editor class="content-showt" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="talkInfo.content" style="border: none; padding: none; width: 732px;" />
                    
                </div>
                <div class="footersssss" >
                    <div style="display: flex;gap: 15px; padding-bottom: 15px; transition: 0.5s; transition-delay: 0.1s;">
                        
                        <div @click="ThumbOrNot()" class="item-icon-status" :style="talkInfo.isThumb ? 'color:#2DB55D;': 'color: #929292'">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>
                            <div style="display: flex; align-items: center;">{{ talkInfo.thumbNum }}</div>
                        </div>
                        <div @click="showSonMsg" class="item-icon-status" style="width: 90px;">
                            <svg v-if="!isShowSonMsg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clip-rule="evenodd"></path></svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z" clip-rule="evenodd"></path></svg>
                            <div style="display: flex; align-items: center;"  v-if="!isShowSonMsg">回复</div>
                            <div style="display: flex; align-items: center;"  v-else>{{ "收起" }}</div>
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
                        
                        <div @click="showTheEditor" class="item-icon-status" style="left: 290px">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
                            <div style="display: flex; align-items: center;">添加回复</div>
                        </div>
                    </div>

                    <div class="footer-extension" >
                        <talkSonItem v-for="(item, index) in chatList" :key="item.id" :talkInfo="item"></talkSonItem>
                    </div>
                </div>
            </template>
        </el-skeleton>    
        
    </div>
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transform: scaleY(1);/* 这里可以根据需要调整过渡效果的时间和缓动函数 */
    transition: 0.5s;

}
.slide-enter, .slide-leave-to {
    transform: scaleY(0);
    transition: 0.5s;
    transform-origin: center top;

}
.containersss{
    display: flex;
    width: 732px;
    padding: 8px 16px;
    flex-direction: column;
    border-radius: 15px;
    position: relative;
    background-color: white;
    box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);

    // border-radius: ;

    .top{
        width: 100%;
        height: 30px;
        display: flex;
        position: relative;
        justify-content: space-between;
    }
    .bottom{
        .content-showt{
            min-height: auto;
        }
    }
    .footersssss{
     

        display: flex;
        // margin-bottom: 5px;
        border-top: 1px solid rgb(0,10,32,0.11);
        
        // padding-top: 3px;
        position: relative;
        // height: 40px;
        padding-bottom: 10px;
        // gap: 15px;
        top: 5px;
        // align-items: center;    
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
            // max-height: 1000px;
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
</style>