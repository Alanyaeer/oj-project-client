<script setup>
import {ref, onMounted} from 'vue'
const bgStyle = ref('#E9EDF1')
const userInfo = ref({})
// remeber to change here 
import personTop from '../person/personTop.vue';
// import personMiddle from '../personMiddle.vue';
import personMiddle from '../person/personMiddle.vue';

onMounted(()=>{
    userInfo.value.nickName = 'alanyaeer'
    userInfo.value.avatar = 'https://picsum.photos/120/120'
    userInfo.value.userName = '1342343agarg-grg'
    userInfo.value.rank = 2344
    userInfo.value.desription = 'dfhajgorhgjgoarengpgaerg'
})
</script>

<template>
<div class="container">
    <div class="item">
        <div class="top">
            <el-avatar :size="100" style="border-radius: 10px;"  :src="userInfo.avatar"></el-avatar>
            <div style="display: flex; position: relative; flex-direction: column; left: 20px; gap: 10px;">
                <span style="font-size: xx-large;">{{ userInfo.nickName }}</span>
                <span style="font-size: small; color: gray;">{{ userInfo.userName }}</span>
                <span style="font-size: small; color: black;">全站排名：
                    <span >{{ userInfo.rank }}</span>
                </span>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-left">
                <div class="bottom-left-top">
                    <div class="bot-top-item" style="border-right: 2px solid gainsboro; left: 30px;">
                        <span style="display: flex; justify-content: center; position: relative;">关注了</span>
                        <span>1234</span>
                    </div>
                    <div class="bot-top-item">
                        <span>关注</span>
                        <span>1234</span>
                    </div>

                </div>
                <div class="bottom-left-middle">
                    <div class="button" style="background-color: #EFF9F2; color: #2DB55D;">编辑个人信息</div>
                    <div class="button" style="background-color: #F2F2F2; color: #595959;">更新简历信息</div>
                    <!-- <el-button type="success" round plain style=" width: 280px; position: relative;">编辑个人信息</el-button> -->
                    <!-- <el-button type="info" plain round   style=" width: 280px;  position: relative; left: -11px"></el-button> -->

                    <span>个人简介</span>
                    {{ userInfo.desription }}
                    <div style="display: flex; position: relative; gap: 20px; align-items: center;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="1em" height="1em" fill="currentColor" class="w-[15px] h-[15px] text-label-2 dark:text-dark-label-2"><path d="M6.486 5.5a.986.986 0 00-.986.986v7.596a.986.986 0 101.972 0V6.486a.986.986 0 00-.986-.986z"></path><path fill-rule="evenodd" d="M9.472 5.5a1 1 0 00-1 1v7.576a.992.992 0 101.984 0v-2.512h2.008c1.045 0 1.924-.225 2.545-.758.637-.546.919-1.34.919-2.286 0-.94-.279-1.729-.913-2.27-.62-.529-1.496-.75-2.539-.75H9.472zm.984 4.212v-2.36h1.96c.635 0 .995.125 1.199.3l.012.01.013.01c.166.124.304.364.304.848 0 .474-.134.734-.313.888-.21.172-.58.304-1.215.304h-1.96z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
                        <span>{{ "地球🌏"}}</span>
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="w-full h-full text-label-2 dark:text-dark-label-2"><path fill-rule="evenodd" d="M20.364 10.364c0 2.814-1.496 5.556-3.956 8.153a25.656 25.656 0 01-3.506 3.072c-.161.116-.28.198-.347.243a1 1 0 01-1.11 0 12.541 12.541 0 01-.347-.243 25.651 25.651 0 01-3.506-3.071c-2.46-2.598-3.956-5.34-3.956-8.154a8.364 8.364 0 0116.728 0zm-7.836 8.997a23.687 23.687 0 002.428-2.22c2.142-2.26 3.408-4.58 3.408-6.777a6.364 6.364 0 00-12.728 0c0 2.196 1.266 4.517 3.408 6.778A23.689 23.689 0 0012 19.769c.166-.124.342-.26.528-.408zM12 12.91a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        <span>{{ "二次元⛱️" }}</span>
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="w-full h-full text-label-2 dark:text-dark-label-2"><path fill-rule="evenodd" d="M16.008 12.124A1.017 1.017 0 0116 12V7.586l-1.121 1.121a1 1 0 11-1.415-1.414l2.829-2.829a1 1 0 011.414 0l2.828 2.829a1 1 0 11-1.414 1.414L18 7.586V12c0 .042-.003.083-.008.124A4.002 4.002 0 0117 20a4 4 0 01-.992-7.876zm-8.016-.248c.005.04.008.082.008.124v1h2a1 1 0 110 2H8v4a1 1 0 11-2 0v-4H4a1 1 0 110-2h2v-1c0-.042.003-.083.008-.124A4.002 4.002 0 017 4a4 4 0 01.992 7.876zM7 10a2 2 0 100-4 2 2 0 000 4zm10 4a2 2 0 100 4 2 2 0 000-4z" clip-rule="evenodd"></path></svg>
                        <span>{{ "直升飞机✈️" }}</span>
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="w-full h-full text-label-2 dark:text-dark-label-2"><path d="M13.465 3.862a3 3 0 00-2.957-.048L2.61 8.122a1 1 0 000 1.756L5 11.18v6.27c0 .59.26 1.15.74 1.491 1.216.86 3.75 2.409 6.26 2.409s5.044-1.548 6.26-2.409c.48-.34.74-.901.74-1.491v-6.27l1.4-.98v4.7a.9.9 0 101.8 0V9.572a1 1 0 00-.493-.862l-8.242-4.848zM18.82 9l-5.862 3.198a2 2 0 01-1.916 0L5.18 9l5.862-3.198a2 2 0 011.916 0L18.82 9zM17 16.687a.937.937 0 01-.413.788c-.855.565-2.882 1.774-4.587 1.774-1.705 0-3.732-1.209-4.587-1.774A.936.936 0 017 16.687V12.27l3.562 1.945a3 3 0 002.876 0L17 12.27v4.417z"></path></svg>
                        <span>{{ "学园都市🏟️" }}</span>
                    </div>
                </div>
                <div class="left-bottommore">
                    <div style="display: flex; position: relative; gap: 20px; size: 24px; color: aqua;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#5AC8FA" class="text-teal dark:text-dark-teal"><path fill-rule="evenodd" d="M5.438 4.417A1 1 0 016.251 4h11.498a1 1 0 01.813.417l3.952 5.512a1 1 0 01-.093 1.277l-8.982 9.304a2 2 0 01-2.878 0L1.58 11.206a1 1 0 01-.093-1.277l3.952-5.512zm2.27 4.876a1 1 0 00-1.415 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L12 13.586 7.707 9.293z" clip-rule="evenodd"></path></svg>
                       <div class="inner-style">
                        声望等级
                        <span style="color: gray; font-size: small;">224</span>
                       </div> 
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; size: 24px; color: aqua;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#007AFF" class="text-blue-s dark:text-dark-blue-s"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                      <div class="inner-style">
                        阅读总数
                        <span style="color: gray; font-size: small;">224</span>
                      </div>  
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; size: 24px; color: aqua;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#00AF9B" class="text-olive dark:text-dark-olive"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>
                      <div class="inner-style">
                        获得点赞
                        <span style="color: gray; font-size: small;">224</span>
                      </div>  
                    </div>
                    <div style="display: flex; position: relative; gap: 20px; size: 24px; color: aqua;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#FFA116" class="text-brand-orange dark:text-dark-brand-orange"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z" clip-rule="evenodd"></path></svg>
                      <div class="inner-style">
                        获得收藏
                        <span style="color: gray; font-size: small;">224</span>
                      </div>  
                    </div>
                </div>
                <div class="languageset">
            
                    语言
                    <div style="justify-content: space-between; display: flex;">
                        <div style="display: flex; border-radius: 10px; width: 40px; height: 15px; background-color: #F2F3F4;  align-items: center; padding: 3px 5px; justify-content: center;">C++</div>  
                        <span style="display: flex; color: #85858A;">解题数量: 32</span> 
                    </div>
                    <div style="justify-content: space-between; display: flex;">
                        <div style="display: flex; border-radius: 10px; width: 40px; height: 15px; background-color: #F2F3F4; align-items: center; padding: 3px 5px; justify-content: center;"> Go</div> 
                        <span style="display: flex; color: #85858A;">解题数量: 32</span> 
                    </div>
                    <div style="justify-content: space-between; display: flex;">
                        <div style="display: flex; border-radius: 10px; width: 40px; height: 15px; background-color: #F2F3F4; align-items: center; padding: 3px 5px; justify-content: center;">Java</div> 
                        <span style="display: flex; color: #85858A;">解题数量: 32</span> 
                    </div>
                   
                </div>
            </div>
            <div class="bottom-right">
                <personTop></personTop>
                <div class="t2"> 
                    <personMiddle></personMiddle>
                </div>
                <div class="t3"></div>
                <div class="t4"></div>
            </div>
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
    background-color: v-bind(bgStyle);
    .item{
        position: relative;

        top: 100px;
        height: 1700px;
        width: 1200px   ;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0px 50px;
        margin-bottom: 100px;

        .top {
            height: 100px;
            display: flex;
            position: relative;
        }
        .bottom{
            display: flex;
            position: relative;
            width: 100%;
            height: 900px;
            gap: 30px;
            .bottom-left{
                width: 300px    ;
                display: flex;
                flex-direction: column;
                position: relative;                
                padding: 0px 10px;
                background-color: white;
                box-shadow: 0px 0px 5px 0px #e6e6e6;
                border-radius: 15px;
                gap: 20px;
                height: 925px;
                // padding-bottom: 1000px;
                .bottom-left-top{
                    width:   300px;
                    display: flex;  
                    padding: 25px 0px;
                    position: relative;
                    // justify-content: center;
                    justify-content: space-around;
                    .bot-top-item{
                        display: flex;
                        position: relative;
                        height: 50px;
                        padding-right: 40px;
                        // justify-content: center;
                        align-items: center;
                        gap: 10px;
                        flex-direction: column;
                    }
                }
                .bottom-left-middle{
                    padding: 0px 10px;
                    position: relative;
                    display: flex;  
                    gap: 20px;
                    flex-direction: column;
                    padding-bottom: 20px;
                    border-bottom: 2px solid gainsboro;
                    .button{
                        width: 280px;
                        height: 40px;
                        display: flex;
                        border-radius: 10px;  
                        position: relative;
                        align-items: center;
                        cursor: pointer;
                        transition: 0.1s;
                        justify-content: center;
                    }
                    .button:hover{
                        scale: 1.02;
                    }
                }
                .left-bottommore{
                    padding: 0px 10px;
                    position: relative;
                    display: flex;  
                    gap: 20px;
                    flex-direction: column;
                    padding-bottom: 20px;
                    .inner-style{
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                        color: black;
                    }
                    border-bottom: 2px solid gainsboro;
                }
                .languageset{
                    padding: 0px 10px;
                    position: relative;
                    display: flex;  
                    gap: 15px;
                    flex-direction: column;
                    // padding-bottom: 20px

                    // .inner-style{
                    //     display: flex;
                    //     flex-direction: column;
                    //     gap: 5px;
                    //     color: black;
                    // }
                    // border-bottom: 2px solid gainsboro;
                }
            }   
            .bottom-right{
                width: 800px;
                border-radius: 15px;
                padding: 0px 10px; 
                display: flex;
                position: relative;        
                flex-direction: column; 
                gap: 20px;    
                   
                // background-color: white;
                .t1{
                    box-shadow: 0px 0px 5px 0px #e6e6e6;
                    width: 800px;
                    height: 225px;
                    min-height: 225px;
                    border-radius: 15px;
                    background-color: white;
                }
                .t2{
                    width: 800px;
                    height: 200px;
                    // min-height: 200px;
                    // background-color: white;
                    border-radius: 15px;
                    gap: 20px;
                    display: flex;
                    position: relative;
                }
                .t3{
                    box-shadow: 0px 0px 5px 0px #e6e6e6;

                    width: 800px;
                    height: 225px;
                    min-height: 225px;

                    border-radius: 15px;
                    gap: 10px;
                    background-color: white;
 
                }
                .t4{
                    box-shadow: 0px 0px 5px 0px #e6e6e6;
                    width: 800px;
                    min-height: 225px;

                    height: 225px;
                    border-radius: 15px;
                    background-color: white;
                }
            }

        }
    }

}
</style>