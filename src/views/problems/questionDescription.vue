<script setup>
import {ref, onMounted} from 'vue'
const currentTab = ref(0)
const clickToLike = ref(false)
const article = ref({})
const clickTitleTab = (index) =>{
    currentTab.value = index
}
const titleName = ref('机智的小军')
const clickFooter = (type) => {
    console.log(clickToLike.value);
    if(type === 0){
        clickToLike.value = !clickToLike.value 
        // 发送点赞请求

    }
    // clickToLike.value = false
}
onMounted(()=>{
})
</script>

<template>
    <div class="item">
        <div class="top">
            <div @click="clickTitleTab(0)" class="title">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="memo" class="svg-inline--fa fa-memo absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path :fill=" currentTab !== 0 ? '#96C7FC' : '#1083FF'" d="M64 48c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm120 64H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 96h48c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
                题目描述
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div class="title" @click="clickTitleTab(1)">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="flask" class="svg-inline--fa fa-flask absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path><path :fill=" currentTab !== 1 ? '#96C7FC' : '#1083FF'" d="M176 196.8c0 20.7-5.8 41-16.6 58.7L119.7 320H328.3l-39.7-64.5c-10.9-17.7-16.6-38-16.6-58.7V48H176V196.8zM320 48V196.8c0 11.8 3.3 23.5 9.5 33.5L437.7 406.2c6.7 10.9 10.3 23.5 10.3 36.4c0 38.3-31.1 69.4-69.4 69.4H69.4C31.1 512 0 480.9 0 442.6c0-12.8 3.6-25.4 10.3-36.4L118.5 230.4c6.2-10.1 9.5-21.7 9.5-33.5V48h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h40H288h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8z"></path></svg>
                题解
            </div>
            <span style="position: relative; left: 8px; color: #E0E0E0;"> 
            |
            </span>
            <div @click="clickTitleTab(2)" class="title">
                <svg aria-hidden="true" focusable="false" width="16" height="16" data-prefix="far" data-icon="clock-rotate-left" class="svg-inline--fa fa-clock-rotate-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill=" currentTab !== 2 ? '#96C7FC' : '#1083FF'" d="M48 106.7V56c0-13.3-10.7-24-24-24S0 42.7 0 56V168c0 13.3 10.7 24 24 24H136c13.3 0 24-10.7 24-24s-10.7-24-24-24H80.7c37-57.8 101.7-96 175.3-96c114.9 0 208 93.1 208 208s-93.1 208-208 208c-42.5 0-81.9-12.7-114.7-34.5c-11-7.3-25.9-4.3-33.3 6.7s-4.3 25.9 6.7 33.3C155.2 496.4 203.8 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C170.3 0 94.4 42.1 48 106.7zM256 128c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path></svg>
                提交记录
            </div>
            <!-- --未来在实现TODO -->
            <svg style="left: 255px; position: relative;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="content">


            <mavon-editor ref="md" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="article.articleContent" @imgAdd="handleUpload" style="position: relative;  height: 670px; " />
            
            <div class="footer">
                <div @click="clickFooter(0)" class="footer-container">
                    <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="thumbs-up" class="svg-inline--fa fa-thumbs-up absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path :fill="clickToLike === true?'#01B328' : '#939393'" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.1s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"></path></svg>
                    <span style="color: rgb(59, 59, 61);">11.2k</span>
                </div>
                <span style="position: relative; padding-left: 5px; color: #E0E0E0;"> 
                |
                </span>
                <div @click="clickFooter(1)" class="footer-container">
                    <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="comment" class="svg-inline--fa fa-comment absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"></path></svg>
                   <span style="color: rgb(59, 59, 61);">13.2k</span> 
                </div>
                <span style="position: relative;  color: #E0E0E0;"> 
                |
                </span>
                <div class="footer-other">
                    
                    <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#939393" d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path></svg>
    
                    <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="arrow-up-right-from-square" class="svg-inline--fa fa-arrow-up-right-from-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M304 24c0 13.3 10.7 24 24 24H430.1L207 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l223-223V184c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V440c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"></path></svg>
    
                    <svg aria-hidden="true" focusable="false" width="18" height="18" data-prefix="far" data-icon="circle-question" class="svg-inline--fa fa-circle-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#939393" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg>
                </div>

            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.item{
    // top: 55px;
    left: 10px;
    position: relative;
    width: 560px;
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
        height: 40px;
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
        height: 670px   ;
        flex-direction: column;
        .footer{
            // left: 10px;
            align-items: center;                
            // top: 20px;
            border-radius: 0px 0px 10px 10px;
            position: relative;
            display: flex;
            width: 98% ;
            height: 50px;
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
            }
        }
        // border-left: 5px;
        // height: 100%;
        // height: calc(100% - 40px);
    }
}

</style>