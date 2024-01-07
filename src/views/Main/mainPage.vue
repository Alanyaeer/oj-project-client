<script setup>
import {ref, onMounted, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import {User, CirclePlus}from '@element-plus/icons-vue'
import neoTaiclock from '@/components/neoTaiclock.vue';
import userInfoCom from './userInfoCom.vue';
import articleCom from './articleCom.vue';
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
onMounted(() =>{
    // 后续发请求来替代这里
    userInfo.value.nickName = 'alanyaeer'

    // userInfo.avatarUrl = '111'
})
</script>
<template>  

    <el-drawer  style=" border-top-left-radius: 20px; border-bottom-left-radius: 20px;" v-model="drawer" size="300px" title="I am the title" :with-header="false">
        <div class="drawer-top">
            <div style="display: flex; align-items: center; position: relative;">
                <el-avatar style="cursor: pointer; " @click="asideShow" :size="50" :src="avatar" />

                <span style="position: relative; left: 10px;">alanyaeer</span>
            </div>
            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="20" height="20"><path fill="gray" d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"></path></svg>
                个人信息
            </div>
            <div class="drawer-item" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""  width="20" height="20"><path fill="gray" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"></path><path fill="gray" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg>
                添加好友
            </div>
            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="20" height="20"><path fill="gray" d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"></path></svg>
                你的收藏
            </div>

            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="20" height="20"><path fill="gray" d="M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128M359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32z"></path></svg>
                你的点赞
            </div>
            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="20" height="20"><path fill="gray" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"></path></svg>
                设置
            </div>
            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728="" width="20" height="20"><path fill="gray" d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"></path><path fill="gray" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32"></path></svg>
                退出登录
            </div>
            <img src="@/assets/avatar/default.gif" alt="">
            
        </div>
    </el-drawer>
        <div class="top">
        <div class="top-left">
            <img @click="router.push('/')" style="cursor: pointer; border-radius: 40px; box-shadow:  -2px 2px 4px #c3cbd0, 2px -2px 4px #eff9fe;cursor: pointer;" src="@/assets/icon/iconTitle.png" alt="">    
            <div style="color: #7e8ac5;">AttackCode</div>
        </div>
        <div class="top-middle">
            <div class="top-middle-item" @click="routeTo(0)" >学习</div>
            <div class="top-middle-item" @click="routeTo(1)" >题库</div>
            <div class="top-middle-item" @click="routeTo(2)" >竞赛</div>

        </div>

        <div class="top-right">

            <el-avatar style="cursor: pointer;" @click="asideShow" :size="50" :src="avatar" />
        </div>
        </div>

        <div class="bottom">

            <div v-if="check()" style="width: 100%; height: 100%; position: relative; display: flex;">

                <div class="bottom-left">

                    <div class="bottom-left-item">

                        <span style="display: flex; box-shadow:  2px 2px 1px #cccccc,-2px -2px 1px #ffffff; border-radius: 10px;width: 130px; position: relative;  left: 25%; color: #7e8ac5;">Top Question 🎢</span>

                        <div class="bottom-left-item-show">
                            <topQuestionInner v-for="(item, index) in topQuestionList" :key="item.id"> </topQuestionInner>
                        </div>
                    </div>
                </div>

                <div class="bottom-middle">
                    <div class="middle-container">
                        
                      <span style="font-size:x-large ; display: flex; justify-content: center; color: #9baacf;">🎉Home🎉</span>
                          <div class="inner">
                              <!-- <div v-for="(item, index) in homeList" :key=item.id  class="inner-for">
                                  {{ item.author }}
                              </div> -->
                              <articleCom v-for="(item, index) in homeList" :key="item.id" class="inner-for"></articleCom>
                          </div>
                      <!-- <div class="clear"></div> -->
                    </div>
                </div>

                <div class="bottom-right" >
                    <!-- 个人信息卡片 -->
                    <div class="bottom-person-card">
                        <div class="bottom-top-img">
                            <img style="width: 100px; height: 100px; border-radius: 1000px;" src="https://cdn.jsdelivr.net/gh/Alanyaeer/web-component@master/assets/202312291010755.webp" alt="">
                            
                        </div>
                        <span style="color: gray; display: flex; justify-content: center;"> {{ userInfo.nickName }}</span>
                        <div class="bottom-bottom-info">
                            <userInfoCom></userInfoCom>
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
        border-radius: 5px;
    }
    .drawer-item:hover{
        background-color: #F0F2F4;
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

          // align-items: center;
          background-color:  v-bind(bgStyle);
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
