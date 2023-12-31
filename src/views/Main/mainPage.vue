<script setup>
import {ref, onMounted, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import {User, CirclePlus}from '@element-plus/icons-vue'
import neoTaiclock from '@/components/neoTaiclock.vue';
const bgStyle = ref('#E9EDF1')
const avatar = ref(new URL("@/assets/avatar/default-avatar.png", import.meta.url).href)
const drawer = ref(false)
const lastTouch = ref(-1)
const router = useRouter()
const routerList = ['learn', 'problemset', 'contest']
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')
const currentType = ref(-1)
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
</script>
<template>  

    <el-drawer style="border-top-left-radius: 20px; border-bottom-left-radius: 20px;" v-model="drawer" size="300px" title="I am the title" :with-header="false">
        <div class="drawer-top">
            <el-avatar style="cursor: pointer; " @click="asideShow" :size="50" :src="avatar" />
      
            <span>名字</span>
            <hr>
            <el-icon size="20px"><User /></el-icon> 
            个人信息
            <el-icon size="20px"><CirclePlus /></el-icon>
            添加好友
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

                        <span style="display: flex; box-shadow:  2px 2px 1px #cccccc,-2px -2px 1px #ffffff; border-radius: 10px;width: 130px; position: relative;  left: 25%;">Top Question 🎢</span>

                        <div class="bottom-left-item-show">
                            <div v-for="(item, index) in topQuestionList" :key=item.id class="bottom-left-item-showFor">
                                {{ item }} - {{ index }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bottom-middle">
                    <div class="middle-container">
                        
                      <span style="font-size:x-large ; display: flex; justify-content: center; color: #9baacf;">🎉Home🎉</span>
                          <div class="inner">
                              <div v-for="(item, index) in homeList" :key=item.id  class="inner-for">
                                  {{ item.author }}
                              </div>
                          </div>
                      <!-- <div class="clear"></div> -->
                    </div>
                </div>

                <div class="bottom-right" >

                    <el-timeline style="position: relative; width: 60%;">
                        <el-timeline-item timestamp="2018/4/12" placement="top" color="#0bbd87">
                        <el-card>
                            <h4>AC</h4>
                            <p>Tom committed 2018/4/12 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/3" placement="top" color="#ED1A4F">
                        <el-card>
                            <h4>Wrong Answer</h4>
                            <p>Tom committed 2018/4/3 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/2" placement="top" color="#ED1A4F">
                        <el-card>
                            <h4>Time Out Limit</h4>
                            <p>Tom committed 2018/4/2 20:46</p>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline> 
                </div>
            </div>
            <RouterView style="width: 100%; height: 100%; position: relative; display: flex;" v-else></RouterView>
        </div>
    
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
    .top{

        background-color: v-bind(bgStyle);
        height: 10vh;
        width: 100%;
        min-height: 75px;
        
        position: relative;
        display: flex;
        align-content: center;
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
          width: 100%;
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
                    }
                    .bottom-left-item-showFor:hover{
                        box-shadow: v-bind(innerShadow) !important;
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
            .middle-container{
                top: 25px;
                position: relative;
                width: 80%;
                // height: auto;
                min-height: 685px;
                max-height: calc(92%);
                display: flex;
                border-radius: 20px;
                box-shadow: v-bind(outerShadow) !important;
                flex-direction: column;
                align-items: center;
                .inner{
                  // top: auto;
                    display: flex;
                    width: 95%;
                    height: 90%;
                    padding: 30px 0px;
                    border-radius: 30px;
                    box-shadow: v-bind(innerShadow) !important;
                    flex-direction: column;
                    gap: 75px;
                    align-items: center;
                    .inner-for{
                        
                        box-shadow: v-bind(outerShadow) !important;
                        // height: 40%; 
                        height: 200px;
                        width: 90%;
                        position: relative;
                        border-radius: 20px;
                    }   
                    // padding-left: 10%;
                }
            }
           
        }
    }

</style>
