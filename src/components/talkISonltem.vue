<script setup>
import {ref, onMounted, defineEmits} from 'vue'
import hoverShowImg from './hoverShowImg.vue';
import drawerShowEditor from './drawerShowEditor.vue';
import gfm from '@bytemd/plugin-gfm'
import { Editor, Viewer } from '@bytemd/vue-next'
import highlight from '@bytemd/plugin-highlight' // 代码高亮
import {formatDate} from '@/utils/dayUtils'
const drawer = ref(false)
const isShowSonMsg = ref(false)
const emits = defineEmits(['sendMsgToSon'])
const props = defineProps({
    talkInfo: Object,
    index: Number
})
const plugins = [
    highlight(),
    gfm()
]
const talkInfo = ref(props.talkInfo)
const changeStatus = (type) => {
    talkInfo.value.isFollow = type
    // 发送请求消息
}
const showTheEditor = () => {
    console.log('fdafje');
    drawer.value = true
}
const showSonMsg = () => {
    isShowSonMsg.value = !isShowSonMsg.value
}
const ThumbOrNot = () => {
    talkInfo.value.isThumb = !talkInfo.value.isThumb
    // 发送请求事件
}
const sendMessage = (msg) => {
    const preMsg = '```\n' + "@" +talkInfo.userInfo.nickName + "\n"+  talkInfo.value.content.slice(0, 10) + (talkInfo.value.content.length > 10 ? '...' : '') +'\n```\n'
    emits('sendMsgToSon', preMsg + msg, talkInfo.value, props.index)
    drawer.value = false
}
onMounted(() => {
    // console.log(props.talkInfo);
})
</script>

<template>
    <drawerShowEditor v-if="talkInfo.userInfo !== undefined" :nickName="talkInfo.userInfo.nickName" style="z-index: 10000;" :drawer="drawer" @closeDrawer="drawer=false" @sendMessage="sendMessage"></drawerShowEditor>
    <div class="containersss">
        <div class="top">
            <div style="display: flex; gap: 10px; align-items: center; color: #8C8C8C;">
                <hoverShowImg :userInfo="talkInfo.userInfo" @followUser="changeStatus"></hoverShowImg>
                <!-- <img style="width: 32px; height: 32px; border-radius: 100000000px;" :src="talkInfo.avatar" alt=""> -->
                <div  v-if="talkInfo.userInfo !== undefined">{{ talkInfo.userInfo.nickName }}</div>
            </div>
            <div style="display: flex; align-items: center; color: #8C8C8C; font-size: 12px;">{{ formatDate(talkInfo.updateTime) }}</div>
        </div>
        <div class="bottom">
            <!-- <mavon-editor class="content-showt" ref="md" previewBackground="#F7F7F7" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="talkInfo.content" style="position: relative; border: none; padding: none; width: 100%;" /> -->
            <Viewer :value = talkInfo.content :plugins="plugins"> </Viewer>
        </div>
        <div class="footersss">
            <div style="display: flex; gap: 10px;">
                <div class="item-icon-status" :style="talkInfo.isThumb ? 'color:#2DB55D;': 'color: #929292'" @click="ThumbOrNot()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>
                    <div style="align-items: center; display: flex;">{{ talkInfo.thumbNum }}</div>
                </div>
                <div class="item-icon-status" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z" clip-rule="evenodd"></path></svg>
                    <div style="align-items: center; display: flex;">收藏</div>
                </div>
                <div class="item-icon-status" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.5 5.5a7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9 1 1 0 110 2z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M20.207 3.793a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M14.5 4.5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0v-3h-3a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <div style="align-items: center; display: flex;">分享</div>
                </div>
                <svg style="top: 10px; position: relative;" viewBox="0 0 24 24" width="22" height="22" class="css-1lc17o4-icon item-icon-status" fill="currentColor" ><path fill-rule="evenodd" d="M6 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>
            </div>
           
            <div @click="showTheEditor" class="item-icon-status" style="right: 20px;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
                <div style="align-items: center; display: flex;">添加回复</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containersss{
    display: flex;
    width: 90%;
    padding: 8px 16px;
    flex-direction: column;
    border-radius: 15px;
    transition: 0.5s;
    position: relative;
    background-color: #F7F7F7;
    border: 1px solid #E6E6E6;
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
    .footersss{
        display: flex;
        // margin-bottom: 5px;
        border-top: 1px solid rgb(0,10,32,0.11);
        
        // padding-top: 3px;
        position: relative;
        // height: 40px;
        padding-bottom: 15px;
        justify-content: space-between;
        gap: 15px;
        top: 5px;
        // align-items: center;    
        color: #929292;
        transition: 0.5s;
     
        transition-delay: 0.1s;
        .footer-extension{
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
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
        .item-icon-status:nth-child(3):hover{
            color: #0A81FA !important;
        }
        .item-icon-status:nth-child(2):hover{
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