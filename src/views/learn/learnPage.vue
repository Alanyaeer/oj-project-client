<script setup>
import {ref, onMounted} from 'vue'
import searchBox from '@/components/searchBox.vue';
import learnFixCard from '@/components/learnFixCard.vue';
const fontRef = ref(['求职面试', '职场与内推', '技术分享','学习记录', '意见反馈'])
const currentClick = ref(0)
const currentDivTop = ref(0)
const colorRef = ref(['#0E81FF','#34D566','#BA5AEB', '#FFAF38', '#37B5FC'])
// ;  
const imgRef = ref([  
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110024280.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110025341.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110026945.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028128.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028423.webp'
])
const imgRefRev = ref([
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027401.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027933.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027199.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028262.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028295.webp'

])
const clickBox = (type) => {
        let c = currentClick.value
        let pgtn = document.getElementsByClassName("stc")
        pgtn[c].style.backgroundColor = '#ffffff'
        pgtn[c].getElementsByClassName('stcf')[0].style.color = 'rgb(44, 44, 44)'


        let ngtn = document.getElementsByClassName("stc")
        ngtn[type].style.backgroundColor = colorRef.value[type]
        ngtn[type].getElementsByClassName('stcf')[0].style.color = '#ffffff'
        currentClick.value = type
}
const clickBoxright = (type) => {
}
onMounted(()=>{
    clickBox(0)
})
</script>

<template>
    <div class="container">
        <div class="fix-card">
            <learnFixCard></learnFixCard>
        </div>
        <!-- faefae -->
        <div class="outer-container">
            <div class="top-container">
                <div class="stc box-top" v-for="(item, index) in [0, 1, 2]" :key="item.id"  @click="clickBox(index)">

                    <div class="box-font stcf">
                        {{ fontRef[index] }}
                    </div> 
                    <div class="img-box">
                        <img v-if="currentClick !== index" style="width: 110px; height: fit-content;"  :src="imgRef[index]" draggable="false" alt="">
                        <img v-else style="width: 110px; height: fit-content;"  :src="imgRefRev[index]" draggable="false" alt="">
                    </div>
                    
                </div>
                <div class="box-top-right ">
                    <div class="box-top-right-item stc" v-for="(item, index) in [3, 4]"  @click="clickBox(item )">
                        <div class="box-right-font stcf">{{ fontRef[item] }}</div>
                        <div>
                            <img v-if="currentClick != item" style="width: fit-content; height: 50px; position: relative; top: 5px;" :src="imgRef[index + 3]" alt="">
                            <img v-else style="width: fit-content; height: 50px; position: relative; top: 5px;" :src="imgRefRev[index + 3]" alt="">
                        </div> 
                    </div>
                </div>
    
            </div>
            <div class="bottom-container">
                <div class="bottom-top">
                    <div class="bottom-top-title">
                        <!-- #262626 -->
                        <div style="display: flex; gap: 15px; position: relative; color: #5C5C5C; ">
                            <a style="text-decoration: none; color: #5C5C5C;"   :style="currentDivTop === 0 ? ' color: black; border-bottom: 2px solid #262626;': 'color: #5C5C5C'" href="/learn/newest" >最新</a>
                            <a style="text-decoration: none; color: #5C5C5C;"   :style="currentDivTop === 1 ? ' color: black; border-bottom: 2px solid #262626;': 'color: #5C5C5C'" href="/learn/hottest" >最热</a>
                            <a style="text-decoration: none; color: #5C5C5C;"   :style="currentDivTop === 2 ? ' color: black; border-bottom: 2px solid #262626;': 'color: #5C5C5C'" href="/learn/recommended" >推荐</a>
                        </div>
                        <div style="position: relative; left: 145px;"><searchBox></searchBox></div>
                        <div style="padding: 3px 2px; gap: 3px; align-items: center; justify-content: center; display: flex; position: relative; color: #FFFFFF; border-radius: 20px; width: 100px; height: 30px; background-color: #2DB55D; font-size: medium;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
                            <div>发起讨论</div> 
                        </div>
 
                    </div>
                </div>
                <div class="bottom-middle">
                    <div class="bottom-middle-tags">Java</div>
                    <div class="bottom-middle-tags">CPP</div>
                    <div class="bottom-middle-tags">Go</div>
                    <div class="bottom-middle-tags">学习</div>
                    <div class="bottom-middle-tags">算法</div>
                </div>
                <div class="bottom-bottom">
                    <!-- 在写一个组件 -->
                </div>
            </div>
        </div>

        <div class="right-icon">
            <div class="right-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.502.502 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.506.506 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918a2.5 2.5 0 01-.98.712c-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.496.496 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.501 2.501 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262zm.493 1.939c-.023.013-.132.089-.34.41-.271.418-.58 1.042-1.045 1.982l-.364.738-.05.103c-.213.434-.428.872-.788 1.197a2.5 2.5 0 01-.43.312c-.42.241-.903.31-1.381.379a52.6 52.6 0 00-.114.016l-.815.119c-1.037.15-1.725.252-2.207.38-.37.099-.476.18-.495.197a.5.5 0 00-.07.216c.005.025.044.153.285.45.314.386.811.874 1.562 1.605l.59.575.082.08c.346.336.697.676.895 1.118.072.162.127.332.164.506.1.474.016.955-.067 1.431l-.02.113-.138.811c-.178 1.033-.294 1.72-.32 2.217-.02.382.023.508.034.532.05.058.113.103.183.133.026.003.16.006.516-.132.465-.18 1.082-.502 2.01-.99l.728-.382.102-.054c.427-.226.859-.454 1.34-.505.177-.02.355-.02.532 0 .481.051.913.28 1.34.505l.102.054.728.383c.928.487 1.545.81 2.01.99.357.137.49.134.516.13a.499.499 0 00.183-.132c.01-.024.055-.15.034-.532-.026-.497-.142-1.184-.32-2.217l-.139-.81-.02-.114c-.082-.476-.166-.957-.066-1.431.037-.174.092-.344.164-.506.198-.442.549-.782.895-1.118a20.8 20.8 0 00.083-.08l.59-.575c.75-.731 1.247-1.219 1.561-1.606.241-.296.28-.424.285-.45a.5.5 0 00-.07-.215c-.02-.017-.126-.098-.495-.196-.482-.129-1.17-.23-2.207-.381l-.815-.119-.113-.016c-.479-.068-.963-.138-1.382-.379a2.5 2.5 0 01-.43-.312c-.36-.325-.575-.763-.788-1.197a31.757 31.757 0 00-.05-.103l-.364-.738c-.464-.94-.774-1.564-1.045-1.982-.208-.321-.317-.397-.34-.41a.5.5 0 00-.226 0zm8.326 6.044v.002-.002zm-3.246 9.575h-.002.002zm-9.934 0h.002-.002zm-3.246-9.575v.002-.002z" clip-rule="evenodd"></path></svg>
                <div style="font-size: small; color: #5C5C5C; display: flex; justify-content: center; position: relative; left: 2px; white-space: nowrap;">收藏</div>
            </div>
            <div class="right-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path d="M2.59898 14.8894L1.9191 14.4075L1.9191 14.4075L2.59898 14.8894ZM3.68927 11.5762L2.85593 11.5666V11.5762H3.68927ZM3.71215 9.57295L4.54549 9.58247V9.57295H3.71215ZM17.4069 14.9055L18.0961 14.437L18.0961 14.437L17.4069 14.9055ZM16.3576 11.5762L15.5243 11.5661V11.5762H16.3576ZM16.3805 9.67222L17.2138 9.68224V9.67222H16.3805ZM7.5 18.0005C7.03976 18.0005 6.66667 18.3736 6.66667 18.8339C6.66667 19.2941 7.03976 19.6672 7.5 19.6672V18.0005ZM12.5 19.6672C12.9602 19.6672 13.3333 19.2941 13.3333 18.8339C13.3333 18.3736 12.9602 18.0005 12.5 18.0005V19.6672ZM3.27885 15.3713C3.90394 14.4894 4.5226 13.1762 4.5226 11.5762H2.85593C2.85593 12.7411 2.40361 13.7239 1.9191 14.4075L3.27885 15.3713ZM4.52255 11.5857L4.54543 9.58247L2.87887 9.56344L2.85599 11.5666L4.52255 11.5857ZM18.0961 14.437C17.6317 13.7538 17.1909 12.76 17.1909 11.5762H15.5243C15.5243 13.1762 16.1176 14.491 16.7176 15.3739L18.0961 14.437ZM17.1909 11.5862L17.2137 9.68224L15.5472 9.66221L15.5243 11.5661L17.1909 11.5862ZM17.2138 9.67222C17.2138 5.49066 14.0375 2.00065 10 2.00065V3.66732C13.0102 3.66732 15.5471 6.30048 15.5471 9.67222H17.2138ZM17.025 16.6672C17.6893 16.6672 18.0764 16.1731 18.223 15.8041C18.3729 15.4267 18.404 14.8901 18.0961 14.437L16.7176 15.3739C16.6761 15.3129 16.6681 15.2604 16.6669 15.2375C16.6657 15.2153 16.6692 15.201 16.674 15.1889C16.6782 15.1783 16.6948 15.1411 16.7452 15.0987C16.8018 15.051 16.8999 15.0005 17.025 15.0005V16.6672ZM4.54549 9.57295C4.54549 6.25604 7.041 3.66732 10 3.66732V2.00065C6.01364 2.00065 2.87882 5.44621 2.87882 9.57295H4.54549ZM2.97591 15.0005C3.10377 15.0005 3.20299 15.053 3.25901 15.1011C3.30867 15.1436 3.32388 15.18 3.32719 15.1886C3.33115 15.1988 3.3344 15.2116 3.33302 15.2331C3.33158 15.2552 3.323 15.309 3.27885 15.3713L1.9191 14.4075C1.597 14.8619 1.62552 15.4076 1.77192 15.7877C1.91467 16.1582 2.30076 16.6672 2.97591 16.6672V15.0005ZM17.025 15.0005H2.97591V16.6672H17.025V15.0005ZM7.5 19.6672H12.5V18.0005H7.5V19.6672Z" fill="currentColor"></path></svg>

                <div style="font-size: small; color: #5C5C5C; display: flex; justify-content: center; position: relative; left: 2px; white-space: nowrap;">订阅 </div>
            </div>
            <div class="right-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clip-rule="evenodd"></path></svg>

                <div style="font-size: small; color: #5C5C5C; display: flex; justify-content: center; position: relative; left: 2px; white-space: nowrap;">讨论</div>
            </div>
            <div class="right-icon-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M11 20c0-.918-.758-1.667-1.7-1.667H3a1 1 0 01-1-1V4a1 1 0 011-1h5.4A4.61 4.61 0 0112 4.72 4.61 4.61 0 0115.6 3H21a1 1 0 011 1v13.333a1 1 0 01-1 1h-6.3c-.942 0-1.7.75-1.7 1.667 0 1.333-2 1.333-2 0zm2-12.444v9.186a3.712 3.712 0 011.7-.409H20V5h-4.4C14.161 5 13 6.147 13 7.556zm-2 0C11 6.147 9.839 5 8.4 5H4v11.333h5.3c.613 0 1.19.148 1.7.41V7.556z" clip-rule="evenodd"></path></svg>
                <div style="font-size: small; color: #5C5C5C; display: flex; justify-content: center; position: relative; left: 2px; white-space: nowrap;">文章</div>
            </div>

            <!--  文章 -->
        </div>

    </div>

</template>

<style lang="scss" scoped>
.container{
    --dsw-black-light-rgb: 0,0,0;

    /* width: ; */
    position: relative;
    // top: 10pc;
    // background-color: aquamarine;
    min-height: 900px;
    width: 1350px;
    display: flex;
    justify-content: center;
    .fix-card{
        position: fixed;
        display: flex;
        left: 1030px;
        width: 250px;
        top: 150px;
        height: 600px;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0px 1px 2px rgba(var(--dsw-black-light-rgb), 0.1),0px 2px 8px rgba(var(--dsw-black-light-rgb), 0.08);
    }
    
    .right-icon{
            // height: 70px;
        top: 10px;
        gap: 30px;
        width: 230px;
        height: 70px;
        // overflow-x: hidden;
        display: flex;
        position: relative;
        left: -30px;
        cursor: pointer;
        .right-icon-item{
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 5px;   
            // justify-content: center;
            color: #aeaeae;
            align-items: center;
        }
    }
    .outer-container{
        display: flex;
        flex-direction: column;
        width: 840px;
        height: 810px;
        gap: 10px;
        .bottom-container{

            width: 792px;
            height: 710px;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .bottom-top{
                padding: 0px 10px;
                height: 30px;
                width: 772px;
                position: relative;
                gap: 10px;
                display: flex;
                .bottom-top-title{
                    display: flex;
                    justify-content: space-between;
                    width: 772px;
                }
                
            }
            .bottom-middle{
                padding: 0px 10px;
                height: 40px;
                display: flex;
                gap: 10px ;
                width: 772px;
                position: relative;
                align-items: center;
                .bottom-middle-tags{
                    height: 20px;
                    padding: 0px 10px;
                    // width: 50px;
                    border-radius: 5px;
                    color: #007AFF;
                    font-size: small;
                    background-color: #e3e3e3;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                }
            }
            .bottom-bottom{
                
                
            }
        }
        .top-container{
            height: 140px;
            width: 840px;
            display: flex;
            position: relative;
            top: 10px;
            gap: 10px;
            // background-color: black;
            .box-top{
                width: 200px;
                height: 110px;
                position: relative;
                display: flex;
                border-radius: 10px;
                background-color: white;
                box-shadow: 0 1px 2px rgba(0,10,32,0.1),0 2px 8px rgba(0,10,32,0.05);
                cursor: pointer;
                transition: 0.5s;
                box-shadow: 0px 0px 5px 0px #aeaeae;

                .box-font{
                    left: 15px;
                    top: 10px;
                    position: relative;
                    color: #5C5C5C;
                }
                .img-box{
                    position: relative;
                    display: flex;
                    left: 15px;
                    top: 29px;
                }
            }
            .box-top-right{
                width: 165px;
                height: 110px;
                position: relative;
                display: flex;
                border-radius: 10px;
                // background-color: white;
                flex-direction: column;
                // align-items: center;
                // overflow-y: hidden;
                gap: 10px;
                .box-top-right-item{
                    padding: 5px 5px;
                    cursor: pointer;
                    box-shadow: 0px 0px 5px 0px #aeaeae;

                    width: 150px;
                    height: 40px;
                    position: relative;
                    align-items: center;
                    justify-content: space-around;
                    display: flex;
                    transition: 0.5s;
                    border-radius: 10px;
                    background-color: white;
                    .box-right-font{
                        color: #5C5C5C;
                    }
                }
            }
        }
    }
    
}
</style>