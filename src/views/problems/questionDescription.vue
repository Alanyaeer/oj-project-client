<script setup>
import {ref, onMounted, defineProps, watch} from 'vue'
import submitRecordShow from '@/components/submitRecordShow.vue';
import {thumbQuestionOrArticleOrComment, favourQuestionOrArticleOrComment} from '@/api/user'
import { useQRCode } from '@vueuse/integrations/useQRCode'
import questionSolve from '@/components/questionSolve.vue';
const currentTab = ref(0)
const clickToLike = ref(false)
const clickToFavour = ref(false)
const share = ref(false)
const article = ref({})
const url = ref(window.location.href)
const qrcode = useQRCode(url)
const props = defineProps({
    loading: {
        type: Boolean,
        default: true
    },
    rep: {
        type: Object,
        default: null
    }
})
const clickTitleTab = (index) =>{
    currentTab.value = index
}
const titleName = ref('机智的小军')
const clickFooter = async (type) => {
    if(type === 0){
        console.log(clickToLike.value);
        clickToLike.value = (clickToLike.value === true ? false : true) ;

   
        // boolean isThumb, String sourceId, Integer type , HttpServletRequest request, Integer articleType
        let obj = {
            isThumb: clickToLike.value,
            sourceId: props.rep.id,
            type: 1,
            articleType: -1
        }
        let rep = await thumbQuestionOrArticleOrComment(obj);
        
        if(clickToLike.value === true)
            article.value.likes += 1;
        else  article.value.likes -= 1;
    }
    else if(type === 1){
        // boolean isFavour, String sourceId, Integer type, HttpServletRequest request, Integer articleType
        clickToFavour.value = (clickToFavour.value === true ? false : true) ;
        console.log(clickToFavour.value);
        let obj = {
            isFavour: clickToFavour.value,
            sourceId: props.rep.id,
            type: 1,
            articleType: -1
        }
        let rep = await favourQuestionOrArticleOrComment(obj)
    
        if(clickToFavour.value === true){
            article.value.favourNum += 1;
        }
        else article.value.favourNum -= 1
    }
    // clickToLike.value = false
}
const scoreJudge = (score) => {
    if(score < 1500) return '简单'
    else if(score < 2100) return '中等'
    else return '困难'
}
const judgeColor = (score) => {
   if(score < 1500) return 'color: #1CB8B8'
   else if(score < 2100) return 'color: #FFB800'
   else return 'color: #FF2800'
}
const initFun = () => {
    if(props.rep !== null){
        article.value = props.rep
        clickToLike.value = props.rep.isThumb;
        clickToFavour.value = props.rep.isFavour;
    }
}
const changeTab = (index) => {
    console.log(index);
    currentTab.value = index;
}
watch(() => props.rep,
() => initFun())
onMounted(async ()=>{
    // obj.
})
</script>

<template>
    <div class="item">
        <div class="top">
            <div @click="clickTitleTab(0)" class="title" :style="currentTab === 0 ? 'color: black': 'color:gray'">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="memo" class="svg-inline--fa fa-memo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path :fill=" currentTab !== 0 ? '#96C7FC' : '#1083FF'" d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                题目描述
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div class="title" @click="clickTitleTab(1)" :style="currentTab === 1 ? 'color: black': 'color:gray'">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="flask" class="svg-inline--fa fa-flask absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path></svg>
                题解
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div @click="clickTitleTab(2)" class="title" :style="currentTab === 2 ? 'color: black': 'color:gray'">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="clock-rotate-left" class="svg-inline--fa fa-clock-rotate-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill=" currentTab !== 2 ? '#96C7FC' : '#1083FF'" d="M48 106.7V56c0-13.3-10.7-24-24-24S0 42.7 0 56V168c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H80.7c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5c-11-7.3-25.9-4.3-33.3 6.7s-4.3 25.9 6.7 33.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM256 128c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path></svg>
                提交记录
            </div>
            <!-- --未来在实现TODO -->
            <!-- <svg style="float: right; position: relative;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg> -->
        </div>
        <div class="content" v-show="currentTab === 0">
            <el-skeleton   :loading="props.loading" :throttle="10" animated>
                <template #template>
                    <el-skeleton style="padding: 10px 20px; width: 530px;" :rows="17"></el-skeleton>

                </template>
                <template #default>
                    <div >
                        <div class="topsss">  
                            <div style="display: flex; justify-content: space-between;">
                                <div style="position: relative; font-size: 25px; font-weight: bold;">{{ rep.titleId + ". " + rep.titleName }}</div>    
                                <div v-if="rep.status === true" style="position: relative;  top: 8px; display: flex; align-items: center; gap: 5px;" > 
                                    <div style="color: #737373;">已解答</div>
                                    <svg style="color: #35C254;" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill:none viewBox="0 0 14 14" width="1em" height="1em"><path stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="1.2" d="M12.598 7a5.6 5.6 0 11-3.15-5.037m2.1 1.537l-4.9 4.9-1.4-1.4"></path></svg>
                                </div>
                            </div>
                            <div style="display: flex; gap: 5px;">
                                <div style="cursor: pointer; padding: 5px 8px; border-radius: 10px; background-color: #F0F0F0; font-size: 12px;" >
                                    <div :style="judgeColor(rep.score)">{{scoreJudge(rep.score)}}</div>
                                </div>
                                <div style="cursor: pointer; padding: 5px 8px; border-radius: 10px; background-color: #F0F0F0; color: #18181B; font-size: 12px; display: flex; gap: 3px; align-items: center;">
                                    <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="far" data-icon="tag" class="svg-inline--fa fa-tag absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M197.5 32c17 0 33.3 6.7 45.3 18.7l176 176c25 25 25 65.5 0 90.5L285.3 450.7c-25 25-65.5 25-90.5 0l-176-176C6.7 262.7 0 246.5 0 229.5V80C0 53.5 21.5 32 48 32H197.5zM48 229.5c0 4.2 1.7 8.3 4.7 11.3l176 176c6.2 6.2 16.4 6.2 22.6 0L384.8 283.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-3-3-7.1-4.7-11.3-4.7H48V229.5zM112 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                                    <div>相关标签</div> 
                                </div>
                                <div style="cursor: pointer; padding: 5px 8px; border-radius: 10px; background-color: #F0F0F0; color: #18181B; font-size: 12px; display: flex; gap: 3px; align-items: center;">
                                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" class="h-3.5 w-3.5"><path fill-rule="evenodd" d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg>
                                    <div>相关企业</div>
                                </div>
                                <div style="cursor: pointer; padding: 5px 8px; border-radius: 10px; background-color: #F0F0F0; color: #18181B; font-size: 12px; display: flex; gap: 3px; align-items: center;">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" class="h-3.5 w-3.5"><path fill-rule="evenodd" d="M10.946 15l1.105 3.316a1 1 0 001.898-.632L9.423 4.107c-.456-1.368-2.39-1.368-2.846 0L2.051 17.684a1 1 0 101.898.632L5.054 15h5.892zm-.667-2L8 6.162 5.72 13h4.56z" clip-rule="evenodd"></path><path d="M13 10a1 1 0 011-1h3V8a1 1 0 112 0v1h3a1 1 0 110 2h-.233l-.113.445v.002c-.319 1.26-.717 2.836-1.364 4.301-.172.389-.364.777-.58 1.158.803.906 1.718 1.69 2.737 2.2a1 1 0 11-.894 1.788c-1.157-.578-2.16-1.403-3.016-2.307a8.798 8.798 0 01-3.13 2.327 1 1 0 11-.813-1.828 6.86 6.86 0 002.644-2.066c-.946-1.289-1.657-2.601-2.136-3.58a1 1 0 011.796-.88c.361.738.852 1.654 1.47 2.585l.092-.205c.573-1.297.905-2.608 1.214-3.83l.028-.11H14a1 1 0 01-1-1z"></path></svg>
                                </div>
                            </div>
                        </div>
                        <mavon-editor class="editor" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="article.content" style="position: relative;  border: none; overflow: auto; top: -30px ; left: -10px; min-height: 505px;" />
                        <div class="footer">
                            <div @click="clickFooter(0)" class="footer-container">
                                <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="thumbs-up" class="svg-inline--fa fa-thumbs-up absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill="clickToLike === true?'#01B328' : '#939393'" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"></path></svg>
                                <span style="color: rgb(59, 59, 61);"> {{ article.likes}}</span>
                            </div>
                            <span style="position: relative; padding-left: 5px; padding-right: 5px; bottom: 2.5px; color: #E0E0E0;"> 
                            |
                            </span>
                            <div @click="clickFooter(2)" class="footer-container">
                                <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="comment" class="svg-inline--fa fa-comment absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg>
                            <span style="color: rgb(59, 59, 61);">{{  article.commentNum }}</span> 
                            </div>
                            <span style="position: relative;  color: #E0E0E0; bottom: 2.5px; padding-left: 5px; padding-right: 5px;"> 
                            |
                            </span>
                            <div class="footer-other">
                                <div @click="clickFooter(1)" :style="clickToFavour === false?  'color: #939393' : 'color: #FFA116'">
                                    <svg aria-hidden="true" focusable="false" width="20" height="20" data-prefix="fas" data-icon="star"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg>
                                </div>
                                <el-popover
                                    :width="150"
                                    trigger="click"
                                    popper-style="border-radius: 15px;"

                                >
                                    <template #reference>
                                        <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="arrow-up-right-from-square" class="svg-inline--fa fa-arrow-up-right-from-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path></svg>
                                    </template>
                                    <template #default>
                                        <div style="display: flex; flex-direction: column;">
                                            <div style="display: flex; justify-content: space-evenly; position: relative;top: 5px; left: 5px; border-radius: 10px;">
                                                <div style="border-radius: 1000px; width: 30px;height: 30px;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#00CA00" class="ewspj560 css-1ocvhs9-Svg-SocialIcon ea8ky5j0" data-v-2bc0a466=""><path fill-rule="evenodd" d="M16.128 8.799c-3.665 0-6.627 2.536-6.627 5.664 0 .481.074.962.223 1.425-.185.018-.352.018-.518.018a9.119 9.119 0 01-2.259-.296.554.554 0 00-.481.056L4.3 16.96c-.13.075-.277-.055-.24-.184l.555-1.963c.018-.13-.019-.259-.13-.332-1.592-1.111-2.61-2.777-2.61-4.628 0-3.35 3.276-6.053 7.33-6.053 3.61 0 6.608 2.166 7.2 4.998h-.277zm-3.48-.815a.987.987 0 00-.981-.98.988.988 0 00-.981.98c0 .538.444.982.98.982a.987.987 0 00.982-.982zm-5.905.982a.987.987 0 01-.981-.982c0-.537.444-.98.98-.98.538 0 .982.443.982.98a.975.975 0 01-.981.982zm9.31.37c3.35 0 6.072 2.295 6.072 5.108 0 1.573-.833 2.962-2.13 3.906a.45.45 0 00-.184.48l.296 1.204c.037.11-.092.204-.185.148l-1.5-.814a.835.835 0 00-.518-.056 6.53 6.53 0 01-1.832.24c-3.35 0-6.072-2.294-6.072-5.108 0-2.813 2.703-5.108 6.053-5.108zm-2.998 3.61c0 .462.37.832.833.832a.83.83 0 00.833-.833.83.83 0 00-.833-.832.83.83 0 00-.833.832zm4.924.832a.83.83 0 01-.833-.833.83.83 0 01.833-.832.83.83 0 01.833.832.841.841 0 01-.833.833z" clip-rule="evenodd" data-v-2bc0a466=""></path></svg>
                                                </div>
                                                <div style="border-radius: 1000px; width: 30px;height: 30px;">
                                                    <svg data-v-2bc0a466="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#4A9AFD" class="ewspj560 css-1n5wd5l-Svg-SocialIcon ea8ky5j0"><path data-v-2bc0a466="" fill-rule="evenodd" d="M20.174 14.188a9.978 9.978 0 00-.63-1.166 7.274 7.274 0 00-.555-.768c-.335-.397-.663-.645-.949-.765.045-.37.067-.802.067-1.217 0-.957-.127-1.839-.337-2.484a6.196 6.196 0 00-6.192-5.77c-3.279 0-5.964 2.551-6.194 5.772-.212.647-.344 1.516-.344 2.484 0 .44.027.826.076 1.217-.281.159-.596.489-.913.886-.205.257-.41.558-.607.89-.167.284-.33.592-.48.92-.83 1.806-1.004 3.498-.388 3.782.39.18 1.006-.253 1.616-1.054a7.99 7.99 0 001.982 2.63c-.964.323-1.605.892-1.605 1.544 0 1.007 1.538.895 3.437.895 1.574 0 2.9.076 3.309-.47h.109c.053 0 .107 0 .16-.003.407.55 1.735.471 3.309.471 1.897 0 3.437.112 3.437-.895 0-.659-.656-1.234-1.643-1.556a7.98 7.98 0 002.02-2.732c.636.873 1.293 1.355 1.701 1.168.619-.28.445-1.974-.386-3.78z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                <div style="border-radius: 1000px; width: 30px;height: 30px;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="#E90E24" class="ewspj560 css-152dov6-Svg-SocialIcon ea8ky5j0" data-v-2bc0a466=""><path fill-rule="evenodd" d="M15.597 4.116a5.293 5.293 0 015.039 1.631 5.291 5.291 0 011.108 5.178v.003a.766.766 0 01-1.458-.472 3.764 3.764 0 00-4.37-4.842.766.766 0 11-.32-1.498zM4.017 15.672c.216 2.174 3.074 3.67 6.385 3.344 3.31-.328 5.82-2.355 5.606-4.53-.215-2.173-3.073-3.67-6.385-3.342-3.31.328-5.82 2.355-5.606 4.528zm12.68-4.384c-.148.37.046.428.327.511 1.147.356 2.424 1.217 2.424 2.733 0 2.509-3.618 5.669-9.057 5.669C6.24 20.2 2 18.19 2 14.883c0-1.73 1.095-3.729 2.982-5.616 2.52-2.518 5.457-3.665 6.561-2.56.488.487.535 1.33.222 2.337-.155.481.412.254.471.23a.061.061 0 01.005-.002c2.036-.853 3.813-.903 4.462.025.346.494.313 1.187-.006 1.99zm1.922-3.72a2.577 2.577 0 00-2.455-.794.66.66 0 10.275 1.289 1.26 1.26 0 011.463 1.621.66.66 0 101.255.406 2.574 2.574 0 00-.538-2.522zm-8.607 7.722c.2.082.456-.013.572-.211.11-.2.04-.424-.16-.497-.197-.078-.444.017-.56.21-.111.195-.05.416.148.498zm-2.005 1.642c.516.236 1.202.012 1.522-.499.315-.516.15-1.106-.37-1.327-.512-.215-1.175.007-1.49.502-.322.498-.171 1.092.338 1.324zm-1.315-2.351c.684-1.389 2.465-2.174 4.04-1.764 1.631.421 2.463 1.96 1.796 3.454-.675 1.528-2.619 2.343-4.268 1.811-1.591-.514-2.265-2.086-1.568-3.501z" clip-rule="evenodd" data-v-2bc0a466=""></path></svg>
                                                </div>  
                                            </div>
                                            <img :src="qrcode" alt="QR Code">

                                            <!-- <div></div> -->
                                        </div>
                                    </template>
                                </el-popover>

                                
                                <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="circle-question" class="svg-inline--fa fa-circle-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
                            </div>

                        </div>
                    </div>
                   
                   
                </template>
            </el-skeleton> 
        </div>
        <div class="content" v-show="currentTab === 1">
            <questionSolve></questionSolve>

        </div>
        <div class="content" v-show="currentTab === 2" style="height: 701px;">
            <submitRecordShow @changeTab="changeTab"></submitRecordShow>
        </div>
        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item{
    // top: 55px;
    // left: 10px;
    position: relative;
    width: 100%;
    // align-items: center;
    height: 701px;
    // height: 875px;
    border-radius: 10px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    // padding-left: 10px;
    .top {
        // position: relative;
        // left: 10px;
        // width: 99%;
        // height: 50px;
        min-height: 30px;
        max-height: 30px;
        border-radius: 10px 10px 0px 0px;
        background-color: #FAFAFA;
        align-items: center;
        display: flex;
        gap: 10px;
        .title{
            display: flex;
            position: relative;
            left: 10px;
            align-items: center;
            gap: 3px;
            cursor: pointer;
            transition: 0.5s;
        }
        
    }
    .content{
        // top: 40px;
        position: relative;
        display: flex;
        width: 100%;
        // padding-left: 10px;
        overflow-x: hidden;
        flex-direction: column;
        .topsss{
            display: flex;
            flex-direction: column;
            position: relative;
            background-color: #FFFFFF;
            height: 100px;
            gap: 10px;
            padding: 15px 15px 0px 15px;
        }
        .footer{
            // left: 10px;
            align-items: center;                
            // top: 20px;
            border-radius: 0px 0px 10px 10px;
            position: relative;
            display: flex;
            width: 98% ;
            height: 50px;
            max-height: 50px;
            padding-left: 10px;
            
            // gap: 20px ;
            .footer-container{
                align-items: center;
                position: relative;
                display: flex;
                cursor: pointer;
                justify-content: space-around;
                width: 70px;
                height: 50%;
                border-radius: 5px;
                font-size: small;
            }   

            .footer-container:nth-child(1){
                
                background-color: #e6e6e6;
            }
            .footer-container:nth-child(1):hover{
                background-color: #E2E2E2;
            }
            .footer-container:hover{
                background-color: #e6e6e6;

            }
            .footer-other{
                left: 20px;
                gap: 30px;
                align-items: center;
                position: relative;
                display: flex;
                cursor: pointer;
                justify-content: space-around;
                .fa-star:active{
                    color: yellow;
                }
            }
        }
        // border-left: 5px;
        // height: 100%;
        // height: calc(100% - 40px);
    }
}

</style>