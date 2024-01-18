<script setup>
import {ref, onMounted} from 'vue'
import learnItemTop from './learnItemTop.vue'
import learnItemAsideMiddle from './learnItemAsideMiddle.vue';
import learnTalk from './learnTalk.vue';
const article = ref(
    {
        title:'如何优雅的使用LeetCode刷题？',
        content:'本文将介绍如何使用LeetCode刷题，包括如何注册账号、如何选择题目、如何解答题目以及如何跟踪自己的进度。',
        date:'2022-01-01',
        favourNum: 13,
        thumbNum: 24,
        avatar: 'https://picsum.photos/60/60',
        articleType: '算法文章',
        isfollow: true,
        nickName: 'alanyaeer',
        
    }
)
const topComment = ref(
[
    {
        content: '这篇文章写的真好！',
        date: '2022-01-01',
        nickName: 'alanyaeer',
        avatar: 'https://picsum.photos/60/60'
    },
    {
        content: '这篇写的真好！',
        date: '2022-01-01',
        nickName: 'alanyaeaefer',
        avatar: 'https://picsum.photos/60/60'
    },
])
const followUser = () => {
    // ui 逻辑显示
    article.value.isfollow =  !article.value.isfollow

    // 关注用户逻辑
}
onMounted(()=>{
   
})
</script>

<template>
<div class="container">
    <div class="left">
        <div class="content">
            <div class="top">
                <div>学习</div>
                <div>/</div>
                <div>{{ article.articleType }}</div>
                <div>/</div>
                <div>{{ article.title.slice(0, 15) + ". . ." }}</div>
            </div>
            <div class="top-status">
                <div style="display: flex; gap: 10px; align-items: center;">
                    <img style="width: 32px; height: 32px; border-radius: 100000000px;" :src="article.avatar" alt="">
                    <div >{{ article.title }}</div>
                </div>

                <div v-if="article.isfollow" class="button-follow" @click="followUser">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z" clip-rule="evenodd"></path></svg>
                    关注TA
                </div>
                <el-button @click="followUser" style="border-radius: 5px;" v-else>
                    已关注
                </el-button>
            </div>
            <div class="middle-status">
                <div>{{ article.nickName }}</div>
                <div>{{ "发起于" + "  "+ article.date }}</div>
            </div>
            <div class="content-content">
                <mavon-editor class="content-showt" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="article.content" style="border: none; padding: none; width: 800px;" />

            </div>
            <div class="bottom-status">
                <div class="icon-status">
                    <div style="position: relative; display: flex; gap: 5px; align-items: center; " class="item-icon-status" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>
                        <div>{{ article.thumbNum }}</div>
                    </div>
                    <div style="position: relative; display: flex; gap: 5px; align-items: center;" class="item-icon-status" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z" clip-rule="evenodd"></path></svg>
                        <div>收藏</div>
                    </div>
                    <div style="position: relative; display: flex; gap: 5px; align-items: center;" class="item-icon-status" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.5 5.5a7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9 1 1 0 110 2z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M20.207 3.793a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M14.5 4.5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 11-2 0v-3h-3a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <div>分享</div>
                    </div>
                    <svg viewBox="0 0 24 24" width="22" height="22" class="css-1lc17o4-icon item-icon-status" fill="currentColor" ><path fill-rule="evenodd" d="M6 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm12 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-6 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>
                </div>
                <div style="display: flex; position: relative; gap: 10px;">
                    <div class="button-follow" style="background-color: #2DB55D; color: white;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>

                        <div>回复讨论</div>
                    </div>
                    <div class="button-follow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18" fill="none" class="css-1rhb60f-Svg ea8ky5j0"><path d="M2.59898 14.8894L1.9191 14.4075L1.9191 14.4075L2.59898 14.8894ZM3.68927 11.5762L2.85593 11.5666V11.5762H3.68927ZM3.71215 9.57295L4.54549 9.58247V9.57295H3.71215ZM17.4069 14.9055L18.0961 14.437L18.0961 14.437L17.4069 14.9055ZM16.3576 11.5762L15.5243 11.5661V11.5762H16.3576ZM16.3805 9.67222L17.2138 9.68224V9.67222H16.3805ZM7.5 18.0005C7.03976 18.0005 6.66667 18.3736 6.66667 18.8339C6.66667 19.2941 7.03976 19.6672 7.5 19.6672V18.0005ZM12.5 19.6672C12.9602 19.6672 13.3333 19.2941 13.3333 18.8339C13.3333 18.3736 12.9602 18.0005 12.5 18.0005V19.6672ZM3.27885 15.3713C3.90394 14.4894 4.5226 13.1762 4.5226 11.5762H2.85593C2.85593 12.7411 2.40361 13.7239 1.9191 14.4075L3.27885 15.3713ZM4.52255 11.5857L4.54543 9.58247L2.87887 9.56344L2.85599 11.5666L4.52255 11.5857ZM18.0961 14.437C17.6317 13.7538 17.1909 12.76 17.1909 11.5762H15.5243C15.5243 13.1762 16.1176 14.491 16.7176 15.3739L18.0961 14.437ZM17.1909 11.5862L17.2137 9.68224L15.5472 9.66221L15.5243 11.5661L17.1909 11.5862ZM17.2138 9.67222C17.2138 5.49066 14.0375 2.00065 10 2.00065V3.66732C13.0102 3.66732 15.5471 6.30048 15.5471 9.67222H17.2138ZM17.025 16.6672C17.6893 16.6672 18.0764 16.1731 18.223 15.8041C18.3729 15.4267 18.404 14.8901 18.0961 14.437L16.7176 15.3739C16.6761 15.3129 16.6681 15.2604 16.6669 15.2375C16.6657 15.2153 16.6692 15.201 16.674 15.1889C16.6782 15.1783 16.6948 15.1411 16.7452 15.0987C16.8018 15.051 16.8999 15.0005 17.025 15.0005V16.6672ZM4.54549 9.57295C4.54549 6.25604 7.041 3.66732 10 3.66732V2.00065C6.01364 2.00065 2.87882 5.44621 2.87882 9.57295H4.54549ZM2.97591 15.0005C3.10377 15.0005 3.20299 15.053 3.25901 15.1011C3.30867 15.1436 3.32388 15.18 3.32719 15.1886C3.33115 15.1988 3.3344 15.2116 3.33302 15.2331C3.33158 15.2552 3.323 15.309 3.27885 15.3713L1.9191 14.4075C1.597 14.8619 1.62552 15.4076 1.77192 15.7877C1.91467 16.1582 2.30076 16.6672 2.97591 16.6672V15.0005ZM17.025 15.0005H2.97591V16.6672H17.025V15.0005ZM7.5 19.6672H12.5V18.0005H7.5V19.6672Z" fill="currentColor"></path></svg>

                    <div>接受动态</div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="talk-inner">
            <!-- fajefaejf -->
            <div>{{ "共 " +  topComment.length + " 个回复" }}</div>
            <div class="right-talk">
                <div>回复</div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M9 4a1 1 0 012 0v15a2 2 0 01-3.414 1.414l-3.293-3.293a1 1 0 111.414-1.414L9 19V4zm6 16a1 1 0 11-2 0V5a2 2 0 013.414-1.414l3.293 3.293a1 1 0 01-1.414 1.414L15 5v15z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
        <div class="talk">
            <learnTalk></learnTalk>
        </div>
    </div>

    <div class="aside">
        <div class="aside-item">
            <learnItemTop></learnItemTop>
        </div>
        <div class="aside-item">
            <learnItemAsideMiddle></learnItemAsideMiddle>
        </div>
    </div>
    
</div>

</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.container{
    // width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #F7F8FA;
    gap: 8px;
    position: relative;
    padding-bottom: 50px;
    padding-top: 100px;
    .left{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .talk-inner{
            display: flex;
            position: relative;
            width: 732px;
            height: 40px;
            border-radius: 12px;
            box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
            align-items: center;    
            background-color: #FFFFFF;
            padding: 0px 16px;
            font-size: 12px;
            color: rgba(191,191,191, 1);
            gap: 3px;
            justify-content: space-between;
            .right-talk{
                display: flex; 
                position: relative;
                align-items: center; 
                gap: 5px; color: #8C8C8C;
                cursor: pointer;
            }
            .right-talk:hover{
                color: #0A84FF;
            }
        }
        .talk{
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .content{
        // top: 10px;

            width: 734px;
            // height: 900px;
            // background-color: rgb(67, 91, 113);
            background-color: white;
            display: flex;
            flex-direction: column;
            position: relative;
            border-radius: 15px;
            padding: 5px  16px;
            padding-bottom: 0px;
            gap: 10px;
            box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
            // justify-content: center;
            .top{
                gap: 5px;
                top: 5px;
                display: flex;
                // font-size: small;
                size: 25px;
                height: 25px;
                position: relative;
                color:rgb(140,140,140);
                width: 733px;
                border-bottom: 1px solid #e2e2e2;
            }
            .top-status{
                margin-top: 10px;
                height: 32px;
                display: flex;
                width: 733px;
                gap: 10px;
                font-size: 20px;
                white-space: nowrap;
                align-items:center;
                justify-content: space-between;
                .button-follow{
                    align-items: center;
                    justify-content: center;
                    width: 94px;
                    border-radius: 8px;
                    height: 32px;
                    color: #2DB55D;
                    border: 1px solid #2DB55D;
                    display: flex;
                    gap: 5px;
                    cursor: pointer;
                    font-size: medium;
                }
            }
            .middle-status{
                display: flex;
                position: relative;
                height: 20px;
                gap: 5px;
                font-size: small;
                color: rgb(191,191,191);
            }
            .content-content{
                display: flex;
                position: relative;
                // height: 720px;
                .content-showt{
                    min-height: auto;
                }
            }
            .bottom-status{
                display: flex;
                position: sticky;
                background-color: #FFFFFF;
                border-top: 1px solid rgb(0,10,32,0.11);
                bottom: 0px;
                height: 62px;
                align-items: center;
                justify-content:space-between;
                gap: 10px;
                // z-index: 1;
                .icon-status{
                    display: flex;
                    position: relative;
                    gap: 15px;
                    align-items: center;
                    color: #929292;
                    cursor: pointer;
                    .item-icon-status{
                        position: relative;
                    }
                    .item-icon-status:nth-child(1):hover{
                        color: #2DB55D !important;
                    }
                    .item-icon-status:nth-child(2):hover{
                        color: #FFA116 !important;
                    }
                    .item-icon-status:nth-child(3):hover{
                        color: #178BFF !important;
                    }
                    .item-icon-status:nth-child(4):hover{
                        color: #0A81FA !important;
                    }
                }
                // .icon-status:nth-child(1):hover > .item-icon-status:nth-child(1){
                //     color: #2DB55D !important;
                // }
                // .icon-status:nth-child(2):hover > .item-icon-status:nth-child(2){
                //     color: #FFA116 !important;
                // }
                
                .button-follow{
                    align-items: center;
                    justify-content: center;
                    width: 94px;
                    border-radius: 8px;
                    height: 32px;
                    color: #2DB55D;
                    border: 1px solid #2DB55D;
                    display: flex;
                    gap: 5px;
                    padding: 0px 3px;
                    cursor: pointer;
                    font-size: medium;
                }
            }
        }
    }
    
    .aside{
        position: relative;
        display: flex;
        flex-direction: column;
        // width: 256px;
        gap: 8px;
        .aside-item{
            background-color: white;

            width: 226px;
            // height: 256px;
            border-radius: 15px;

            box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);

            padding: 20px 15px;
        }
    }
}
</style>