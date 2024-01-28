<script setup>
import {ref, onMounted, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import dayjs from 'dayjs'   
import {User, CirclePlus}from '@element-plus/icons-vue'
import neoTaiclock from '@/components/neoTaiclock.vue';
import userInfoCom from './userInfoCom.vue';
import articleCom from './articleCom.vue';
import topTabNew from '@/components/topTabNew.vue';
import topQuestionInner from './topQuestionInner.vue';
const bgStyle = ref('#E9EDF1')
const avatar = ref(new URL("@/assets/avatar/default-avatar.png", import.meta.url).href)
const drawer = ref(false)
const lastTouch = ref(-1)
const router = useRouter()
const currentColor = 'gray'
const routerList = ['learn', 'problemset', 'contest']
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const currentType = ref(-1)
const userInfo = ref({})
const asideShow = () => {
    drawer.value = true
}
const topQuestionList = ref([1, 2,3, 5,5])
const homeList = ref([
    {
        author: 'alan',
        message: '11'
    },
    {
        author: 'wwan',
        message: '35'
    },    {
        author: 'alan',
        message: '11'
    },
    {
        author: 'wwan',
        message: '35'
    },
    {
        author: 'wwan',
        message: '35'
    },
])

/**
 * 
 * @param {number} type 
 * @returns 页面跳转
 */
const routeTo = (type)=>{
    if(localStorage.getItem('token') === null){
        router.push('/login')
        return
    }

    if(lastTouch.value !== -1){
        let lastStyle = document.getElementsByClassName('top-middle-item')[lastTouch.value].style
        lastStyle.boxShadow = outerShadow.value
    }
    router.push(`/${routerList[type]}`)

    const styles = document.getElementsByClassName('top-middle-item')[type].style
    styles.boxShadow = innerShadow.value
    lastTouch.value = type
    currentType.value =  type

}
const gotoFun = (url) => {
    window.location.replace(url)
}
/**
 * 无法解决 点击回到首页之后，在跳转的切换问题
 */
// 这里记得需要修改 todo 
const check = ()=>{
    console.log(window.location.pathname !== '/');
    if(window.location.pathname !== '/') return false
    else {
        lastTouch.value = -1
        return true
    }
}
const goFun = () => {

}
onMounted(() =>{
    // 后续发请求来替代这里
    userInfo.value.nickName = 'alanyaeer'
    dayjs.locale('zh-cn')

    const today =  dayjs()
    console.log(today);
    // const dataDate =  dayjs(this.dataDate)
    // console.log(dataDate);
    // userInfo.avatarUrl = '111'
})
</script>
<template>  
        <topTabNew></topTabNew>
        <div class="bottom">
            <div v-if="check()" style="width: 100%; height: 100%; position: relative; display: flex; background-color: white;">
                <div style="top: 36px ;padding: 60px 288px; position:relative; display:flex; flex-direction:column; width: 960px; min-width:960px; height: 190px;">
                    <div class="fontsss">
                        <div>The</div>
                        <div class="fontk">AttackCode</div>
                    </div>
                    <div class="fontsss">
                        <div> OnlineJudge Platform</div>
                    </div>
                    <div class="fontoter">
                        <div>An  efficient,&nbsp;sleek  and innovative judging platform with comprehensive functionality.</div>
                    </div>
                    <div class="box" style="margin-bottom: 100px">
                       
                        <el-popover
                            placement="left"
                            :width="40"
                            popper-style=" border-radius: 10px;"
                            trigger="hover"
                        >
                            <template #reference>
                                <div class="githubShow">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="40" height="40" focusable="false" viewBox="0 0 24 24" fill="currentColor" class="vt-social-link-icon"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                                </div>
                            </template>
                            <template #default>
                               <div style="display:flex; flex-direction:column; gap: 20px">
                                    <div style="display:flex; gap: 10px">
                                        <div>
                                            <svg t="1706426879597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12709" width="20" height="20"><path d="M292.6 691.9c-98.3 0-173.6-13-207.4-38.2-13.1-9.7-20.6-21.4-22.4-34.6-2.8-20.3 8.4-40.8 33.2-60.9 2.9-2.3 46.1-26.3 53.1-27.9 9.8-2.1 19.3 3.9 21.5 13.6 2.1 9.1-3.1 18.1-11.7 21-5.9 2.6-37.1 19.4-41.3 22.1-12.4 10.1-20 20.6-19.1 27.2 0.6 4.1 4.8 8.1 8.3 10.7 42 31.3 199.1 45.3 418 11.6C797.3 594.4 932.1 516 928 485.7c-1.2-8.7-18.9-27.8-63.7-27.8-10 0-18-8.1-18-18s8.1-18 18-18c62.7 0 95.5 30.6 99.4 58.9 12.3 89.4-252.4 163.4-433.3 191.3-86.6 13.3-168.1 19.8-237.8 19.8zM260.4 472.4c-0.6 0-1.1-0.1-1.7-0.2-4.9-0.9-8.1-5.6-7.2-10.5 3.2-16.9 8.1-33.6 14.6-49.6 1.9-4.6 7.1-6.8 11.7-5 4.6 1.9 6.8 7.1 5 11.7-6 14.9-10.6 30.5-13.6 46.2-0.8 4.4-4.6 7.4-8.8 7.4z m52.5-113.1c-2 0-4-0.7-5.7-2-3.9-3.1-4.5-8.8-1.3-12.7 39.6-49 95.3-82.5 156.8-94.3 4.9-0.9 9.6 2.3 10.5 7.2 0.9 4.9-2.3 9.6-7.1 10.5-57.4 11-109.3 42.2-146.2 87.9-1.8 2.2-4.4 3.4-7 3.4z" fill="#42D392" p-id="12710"></path><path d="M513.1 892.2c-209.7 0-380.4-170.6-380.4-380.4 0-10.2 0.4-20.5 1.2-30.5 1.1-13.7 2.9-27.5 5.5-41.1C173.5 261.3 330.6 131.4 513 131.4c139.9 0 268.1 76.5 334.8 199.6 4.7 8.7 1.5 19.7-7.3 24.4-8.7 4.7-19.7 1.5-24.4-7.3C755.8 236.6 639.6 167.4 513 167.4 348 167.5 205.7 285 174.9 447c-2.3 12.2-4 24.7-5 37.2-0.7 9.1-1.1 18.4-1.1 27.7 0 189.9 154.5 344.3 344.3 344.3s344.3-154.5 344.3-344.3c0-22.9-2.3-45.8-6.7-68.1-2-9.7 4.4-19.2 14.1-21.2S884 427 886 436.7c4.9 24.6 7.4 49.9 7.4 75.2 0.1 209.7-170.5 380.3-380.3 380.3z" fill="#42D392" p-id="12711"></path></svg>
                                        </div>
                                        <a href="https://github.com/Alanyaeer/oj-project-client" style="font-size: 14px; font-weight: 600; color: #42D392;text-decoration:none">
                                            前端地址
                                        </a>

                                    </div>
                                    <div style="display:flex; gap: 10px">
                                        <div>
                                            <svg t="1706426879597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12709" width="20" height="20"><path d="M292.6 691.9c-98.3 0-173.6-13-207.4-38.2-13.1-9.7-20.6-21.4-22.4-34.6-2.8-20.3 8.4-40.8 33.2-60.9 2.9-2.3 46.1-26.3 53.1-27.9 9.8-2.1 19.3 3.9 21.5 13.6 2.1 9.1-3.1 18.1-11.7 21-5.9 2.6-37.1 19.4-41.3 22.1-12.4 10.1-20 20.6-19.1 27.2 0.6 4.1 4.8 8.1 8.3 10.7 42 31.3 199.1 45.3 418 11.6C797.3 594.4 932.1 516 928 485.7c-1.2-8.7-18.9-27.8-63.7-27.8-10 0-18-8.1-18-18s8.1-18 18-18c62.7 0 95.5 30.6 99.4 58.9 12.3 89.4-252.4 163.4-433.3 191.3-86.6 13.3-168.1 19.8-237.8 19.8zM260.4 472.4c-0.6 0-1.1-0.1-1.7-0.2-4.9-0.9-8.1-5.6-7.2-10.5 3.2-16.9 8.1-33.6 14.6-49.6 1.9-4.6 7.1-6.8 11.7-5 4.6 1.9 6.8 7.1 5 11.7-6 14.9-10.6 30.5-13.6 46.2-0.8 4.4-4.6 7.4-8.8 7.4z m52.5-113.1c-2 0-4-0.7-5.7-2-3.9-3.1-4.5-8.8-1.3-12.7 39.6-49 95.3-82.5 156.8-94.3 4.9-0.9 9.6 2.3 10.5 7.2 0.9 4.9-2.3 9.6-7.1 10.5-57.4 11-109.3 42.2-146.2 87.9-1.8 2.2-4.4 3.4-7 3.4z" fill="#6089F1" p-id="12710"></path><path d="M513.1 892.2c-209.7 0-380.4-170.6-380.4-380.4 0-10.2 0.4-20.5 1.2-30.5 1.1-13.7 2.9-27.5 5.5-41.1C173.5 261.3 330.6 131.4 513 131.4c139.9 0 268.1 76.5 334.8 199.6 4.7 8.7 1.5 19.7-7.3 24.4-8.7 4.7-19.7 1.5-24.4-7.3C755.8 236.6 639.6 167.4 513 167.4 348 167.5 205.7 285 174.9 447c-2.3 12.2-4 24.7-5 37.2-0.7 9.1-1.1 18.4-1.1 27.7 0 189.9 154.5 344.3 344.3 344.3s344.3-154.5 344.3-344.3c0-22.9-2.3-45.8-6.7-68.1-2-9.7 4.4-19.2 14.1-21.2S884 427 886 436.7c4.9 24.6 7.4 49.9 7.4 75.2 0.1 209.7-170.5 380.3-380.3 380.3z" fill="#6089F1" p-id="12711"></path></svg>
                                        </div>
                                        <a href="https://github.com/Alanyaeer/oj-project-server" style="font-size: 14px; font-weight: 600; color: #6089F1;text-decoration:none">
                                            后端地址
                                        </a>
                                    </div>
                               </div>
                            </template>
                        </el-popover>
                        <div class="boxinner" @click="routeTo(1)" >
                            <div @click="routeTo(1)" style="font-size: 16px; text-align :center;">
                                Get&nbsp;Started  
                            </div>     
                            <div class="innersvg"><svg t="1706425580952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7730" width="20" height="20"><path d="M881 562H81c-27.6 0-50-22.4-50-50s22.4-50 50-50h800c27.6 0 50 22.4 50 50s-22.4 50-50 50z" p-id="7731" fill="#ffffff"></path><path d="M907.6 540.7L695.5 328.6c-19.5-19.5-19.5-51.2 0-70.7s51.2-19.5 70.7 0L978.4 470c19.5 19.5 19.5 51.2 0 70.7-19.6 19.6-51.2 19.6-70.8 0z" p-id="7732" fill="#ffffff"></path><path d="M695.5 695.4l212.1-212.1c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7L766.2 766.1c-19.5 19.5-51.2 19.5-70.7 0s-19.5-51.2 0-70.7z" p-id="7733" fill="#ffffff"></path></svg></div>

                        </div>
                        <div class="boxinner" style="background:#F1F1F1; color:#476582">
                            <a href="https://www.alanyaeer.fun/" style="font-size: 16px; text-align: center; text-decoration:none; color: #213547">
                                My&nbsp;Blog
                            </a>
                            <div class="innersvgrocket"><svg t="1706428150338" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14230" width="20" height="20"><path d="M780.288 750.592H244.736V415.744C244.736 229.376 396.288 79.872 460.8 24.576c29.696-24.576 71.68-24.576 101.376 0 65.536 55.296 217.088 204.8 217.088 391.168v334.848z m-453.632-81.92h371.712V415.744c0-150.528-128-277.504-186.368-326.656-57.344 49.152-186.368 176.128-186.368 326.656v252.928zM509.952 87.04z" fill="#213547" p-id="14231"></path><path d="M326.656 750.592H148.48c-43.008 0-78.848-34.816-78.848-78.848v-76.8c0-26.624 13.312-51.2 34.816-65.536l221.184-146.432v367.616z m-175.104-81.92h92.16v-133.12l-92.16 61.44v71.68zM875.52 750.592H697.344V384l221.184 146.432c22.528 14.336 34.816 38.912 34.816 65.536v76.8c1.024 41.984-34.816 77.824-77.824 77.824z m-96.256-81.92h92.16v-71.68l-92.16-61.44v133.12zM513.024 489.472c-64.512 0-116.736-52.224-116.736-116.736S449.536 256 513.024 256s116.736 52.224 116.736 116.736-52.224 116.736-116.736 116.736z m0-151.552c-18.432 0-34.816 15.36-34.816 34.816s15.36 34.816 34.816 34.816 34.816-15.36 34.816-34.816S532.48 337.92 513.024 337.92zM512 1017.856c-22.528 0-40.96-18.432-40.96-40.96v-163.84c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v163.84c0 22.528-18.432 40.96-40.96 40.96zM351.232 953.344c-22.528 0-40.96-18.432-40.96-40.96v-66.56c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v66.56c0 22.528-18.432 40.96-40.96 40.96zM673.792 953.344c-22.528 0-40.96-18.432-40.96-40.96v-66.56c0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96v66.56c0 22.528-18.432 40.96-40.96 40.96z" fill="#213547" p-id="14232"></path></svg></div>

                        </div>
                    </div>
                    <div class="botm" >

                        <div class="botmFont">Contributors</div>
                        <div style="display:flex; gap: 20px;">
                            <img @click="gotoFun('https://github.com/Alanyaeer')"  class="imgStyle" style="width: 80px; height: 80px; border-radius: 10px; cursor: pointer" src="https://avatars.githubusercontent.com/u/106466417?v=4">
                            <img @click="gotoFun('https://github.com/lawrence123-coder')"  class="imgStyle" style="width: 80px; height: 80px; border-radius: 10px; cursor: pointer" src="https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401281629573.webp">
                        </div>
                      
                    </div>
                </div>
            </div>
            <RouterView style="width: 1520px; height: 100%; position: relative; display: flex;" v-else></RouterView>
        </div>
    
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.fontsss{
    font-family: "Inter var experimental", "Inter var", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size:76px;
    text-align: center;
    display: flex;
    justify-content: center;
    line-height: 1.25;
    text-rendering:optimizeLegibility;
    font-weight: 900;
    color: #213547;
    letter-spacing: -1.5px;
    gap: 15px;
    .fontk{
        background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        display: flex;
        align-content: center;
        height: 98px;
        // height: 420px;
    }
  
}
.fontoter{
    max-width: 960px;
    line-height: 1.5;
    color: rgba(60, 60, 60, .7);
    transition: color .5s;
    font-size: 22px;
    margin: 24px auto 40px;
}
.box{
    margin: 24px auto 40px;
    display:flex;
    justify-content:center;
    
    color: #FFFFFF;
    .boxinner{
        border-radius: 8px;
        cursor: pointer;
        height: 24px;
        font-weight: 600;
        font-size: 16px;
        display:flex;
        gap: 5px;
        text-align: center;
        // text-align: center;
        padding: 10px 16px 8px 16px;
        // padding: 8px 1em 8px 3em;
        margin-left: 18px;
        // margin-right: 18px;
        background: #42B883;
        .innersvg{
            display:flex;
            transition: 0.5s;
        }
        .innersvgrocket{
            display:flex;
            transition: 0.5s;
        }
    }
    .boxinner:nth-child(1):hover{
        background: #E5E5E5 !important;
    }
    .boxinner:nth-child(2):hover{
        background: #33A06F;
    }
    .githubShow{
        display:flex;
        cursor: pointer;
        color: black;
        transition: 0.5s;

    }
    .boxinner:hover .innersvg{
        transform: translateX(5px);
    }
    .boxinner:hover .innersvgrocket{
        transform: rotate(90deg);
    }
}
.botm{
    border-top: 1px solid rgba(60, 60, 60, .12);;
    border-bottom: 1px solid rgba(60, 60, 60, .12);;
    padding: 12px 384px;
    // width: 1520.8px;
    gap: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .botmFont{
        background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        font-weight: 800;
        // margin-top: 200px;
        font-size: 18px;
        vertical-align: middle;
        flex: 1;
    }
    .imgStyle{
        display:flex;   
        transition: 0.5s
    }
    .imgStyle:hover{
        box-shadow: 0 0 10px rgba(0, 0,0,0.5);
        filter: blur(1px)
        // filter:blur(0.8);
    }
}
.drawer-top{
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 15px;
    .drawer-item{
        display: flex;
        position: relative;
        gap: 15px;
        cursor: pointer;
        // padding: 5px;
        padding: 10px 5px;
        padding-left: 10px;
        // background-color: #ffffff;
        // opacity: 0.3;
        font-weight: bold;
        border-radius: 5px;
        filter: blur();
    }
    .drawer-item:hover{
        background-color: #f3f3f3;
    }
}
    .top{

        background-color: v-bind(bgStyle);
        height: 10vh;
        min-width: 1520px;
        min-height: 75px;
        
        position: relative;
        display: flex;
        align-content: center;
        // border-bottom: 2px  rgb(170, 168, 168);
        .top-left {
            position: relative;
            height: 100%;
            display: -moz-box;/*兼容Firefox*/
            display: -webkit-box;/*兼容FSafari、Chrome*/
            -moz-box-align: center;/*兼容Firefox*/
            -webkit-box-align: center;/*兼容FSafari、Chrome */

            -moz-box-pack: center;/*兼容Firefox*/
            -webkit-box-pack: center;/*兼容FSafari、Chrome */
            font-size: 25px;
            // .left-font {
            font-family: 'my_font';

        }
        .top-middle{
            position: relative;
            display: flex;
            align-items: center;
            left: 18%;

            width: 53%;
            font-size: 23px;
            // .left-font {
            font-family: 'my_font';
            gap: 15%;
            color: #9BAACF;
            .top-middle-item{
                display: -moz-box;/*兼容Firefox*/
                display: -webkit-box;/*兼容FSafari、Chrome*/
                -moz-box-align: center;/*兼容Firefox*/
                -webkit-box-align: center;/*兼容FSafari、Chrome */

                -moz-box-pack: center;/*兼容Firefox*/
                -webkit-box-pack: center;/*兼容FSafari、Chrome */
                width: 15%;
                height: 70%;
                border-radius: 10px;
                box-shadow:  v-bind(outerShadow);
                cursor: pointer;
                transition: 0.5s;
                color: #7e8ac5;
            }
            .top-middle-item:hover{
                scale: 1.03 !important;
                box-shadow: v-bind(innerShadow);
                
            }
        }
        .top-right{
            display: -moz-box;/*兼容Firefox*/
            display: -webkit-box;/*兼容FSafari、Chrome*/
            position: relative;
            left: 450px;
            -moz-box-align: center;/*兼容Firefox*/
            -webkit-box-align: center;/*兼容FSafari、Chrome */

            -moz-box-pack: center;/*兼容Firefox*/
            -webkit-box-pack: center;/*兼容FSafari、Chrome */
            font-size: 3vh;
            // .left-font {
            font-family: 'my_font';
        }
        }
        .bottom{
          position: relative;
          display: flex;
          min-width: 1520px;
          margin-bottom: 0px;

        //   padding-bottom: 25px;
            // filter: invert();
          // align-items: center;
          background-color:  #F7F8FA;
        .bottom-left{
          position: fixed;
            width: 20vw;
            height: 90vh;
            min-height: 684px;
            .bottom-left-item{
                gap: 3%;
                position: relative;
                display: flex;
                top: 5%;
                left: 10%;
                flex-direction: column;
                height: 90%;
                width: 90%;
                
                .bottom-left-item-show{
                    height: 70%;
                    width: 100%;
                    border-radius: 30px;
                    padding: 4.5%;
                    box-shadow: v-bind(outerShadow) !important;
                    gap: 5%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .bottom-left-item-showFor{
                        position: relative;
                        width:90%;
                        height: 15%;
                        // left: 5%;
                        border-radius: 15px;
                        box-shadow: v-bind(outerShadow) !important;
                        transition: 0.5s;
                        cursor: pointer;
                    }
                    .bottom-left-item-showFor:hover{
                        box-shadow: v-bind(innerShadow) !important;
                        scale: 1.05;
                    }
                }
            }
            
        }
        .bottom-right{
            width: 20vw;
            min-height: calc(90vh);
            left: 280px;
            position: relative;
            min-height: 684px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;
            .bottom-person-card{    
                width: 100%;
                position: relative;
                height: 400px;
                top: 50px;
                gap: 5px;
                // border: 1px solid #bab7b7;   
                border-radius: 15px;
                background-color: v-bind(bgStyle);
                margin: 10px;   
                display: flex;

                align-content: center;
                flex-direction: column;
                box-shadow: v-bind(outerShadow);
                // justify-content: center;
                .bottom-top-img{
                    position: relative;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    // align-content: center;
                    gap: 10px;
                }
                .bottom-bottom-info{
                    position: relative;
                    display: flex;
                    justify-content: center;

                    height: 250px;
                    width: 100%;
                }
            }   
            // background-color: aquamarine;
            // border-right: 1px solid #bab7b7;
        }   

        .bottom-middle{
          position: relative;
            left: 20%;
            width: 60vw;
            // height: auto;
            // height: 2000px;
            display: flex;
            // min-height: 684px;
            justify-content: center;  
            background-color: v-bind(bgColor);
            margin-bottom: 100px;
            .middle-container{
                top: 25px;
                position: relative;
                width: 80%;
                // height: auto;
                // min-height: 685px;
                // TODO 这里感觉不对劲啊
                // max-height: calc(92%);
                display: flex;
                border-radius: 20px;
                box-shadow: v-bind(outerShadow) !important;
                flex-direction: column;
                align-items: center;
                .inner{
                  // top: auto;
                    display: flex;
                    width: 95%;
                    // height: 90%;
                    padding: 30px 0px;
                    border-radius: 30px;
                    box-shadow: v-bind(innerShadow) !important;
                    flex-direction: column;
                    gap: 75px;
                    margin-bottom: 20px;

                    align-items: center;
                    .inner-for{
                        
                        box-shadow: v-bind(outerShadow) !important;
                        // height: 40%; 
                        height: 200px;
                        width: 90%;
                        position: relative;
                        cursor: pointer;
                        // background-color: rgb(230, 235, 243) !important;
                        border-radius: 20px;
                    }   
                    // padding-left: 10%;
                }
            }
           
        }
    }

</style>
