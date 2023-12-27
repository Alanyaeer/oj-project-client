<script setup>
import {ref, onMounted, onBeforeMount} from 'vue'
import {useRouter} from 'vue-router'
import {User, CirclePlus}from '@element-plus/icons-vue'
const bgStyle = ref('#E9EDF1')
const avatar = ref(new URL("@/assets/avatar/default-avatar.png", import.meta.url).href)
const drawer = ref(false)
const lastTouch = ref(-1)
const router = useRouter()
const routerList = ['learn', 'problemset', 'contest']
const innerShadow = ref('inset 2px 2px 2px #cccccc,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 1px #cccccc,\
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
    }
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
            <div >AttackCode</div>
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
                    <span style="display: flex; box-shadow:  2px 2px 1px #cccccc,-2px -2px 1px #ffffff; border-radius: 10px;width: 46%; position: relative;  left: 25%;">Top Question 🎢</span>

                    <div class="bottom-left-item-show">
                        <div v-for="(item, index) in topQuestionList" :key=item.id class="bottom-left-item-showFor">
                            {{ item }} - {{ index }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom-middle">
                <div class="middle-container">
                    
                   <span style="font-size:x-large ; display: flex; justify-content: center;">🎉Home🎉</span>
                    <div class="inner">
                        <div v-for="(item, index) in homeList" :key=item.id  class="inner-for">
                            {{ item.author }}
                        </div>
                        <!-- <div class="inner-wrapper"></div> -->
                    </div>

                </div>
            </div>

            <div class="bottom-right">
                <el-timeline style="width: 70%;">
                <el-timeline-item timestamp="2018/4/12" placement="top"  :type='primary'>
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top"  :type='primary'>
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top"  :type='primary'>
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/2 20:46</p>
                </el-card>
                </el-timeline-item>
            </el-timeline>
            </div>
        </div>
        <RouterView v-else></RouterView>
    </div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}

.top{

    background-color: v-bind(bgStyle);
    height: 10vh;
    width: 100vw;
    position: absolute;
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
        font-size: 3vh;
        // .left-font {
        font-family: 'my_font';

    }
    .top-middle{
        position: relative;
        display: flex;
        align-items: center;
        left: 18%;

        width: 53%;
        font-size: 3vh;
        // .left-font {
        font-family: 'my_font';
        gap: 15%;
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
            box-shadow:  2px 2px 1px #cccccc,
                        -2px -2px 1px #ffffff ;
            cursor: pointer;
            transition: 0.5s;
        }
        .top-middle-item:hover{
            scale: 1.03 !important;
            box-shadow: inset 2px 2px 2px #cccccc,
                        inset -1px -1px 2px #ffffff !important;    
            
        }
    }
    .top-right{
        display: -moz-box;/*兼容Firefox*/
        display: -webkit-box;/*兼容FSafari、Chrome*/
        position: relative;
        left: 30%;
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
    // background-color: v-bind(bgStyle);
    // background-color: aqua;
    top: 10%;
    height: 90vh;
    width: 100vw;
    position: absolute;
    background-color:  v-bind(bgStyle);

    // background-color:  v-bind(bgStyle);
    .bottom-left{
        width: 20%;
        height: 100%;
        // border: 1px solid #7F7F7F;
        // border-right: 1px solid #bab7b7;

        
        // border-color: #000000;
        // background-color: aqua;
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
                width: 90%;
                border-radius: 30px;
                padding: 4.5%;
                box-shadow: v-bind(outerShadow) !important;
                gap: 5%;
                display: flex;
                flex-direction: column;
                // justify-content: center;


                .bottom-left-item-showFor{
                    position: relative;
                    width:100%;
                    height: 15%;
                    // left: 5%;
                    border-radius: 15px;
                    box-shadow: v-bind(outerShadow) !important;

                }
                .bottom-left-item-showFor:hover{
                    box-shadow: v-bind(innerShadow) !important;
                }
            }
        }
        
    }
    .bottom-right{
        width: 20%;
        height: 100%;
        // background-color: aquamarine;
        // border-right: 1px solid #bab7b7;
    }   
    justify-content: center;

    .bottom-middle{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;

        .middle-container{
            top: 5%;
            position: relative;
            
            width: 80%;
            height: 80%;
            display: flex;
            border-radius: 20px;
            box-shadow: v-bind(outerShadow) !important;
            flex-direction: column;
            align-items: center;
            .inner{
                display: flex;
                width: 95%;
                height: 90%;
                border-radius: 30px;
                box-shadow: v-bind(innerShadow) !important;
                flex-direction: column;
                gap: 5%;
                align-items: center;
                justify-content: center;
                // top:5%;
                .inner-for{
                    
                    box-shadow: v-bind(outerShadow) !important;
                    height: 40%;
                    width: 90%;
                    position: relative;
                    border-radius: 20px;
                }   
                // padding-left: 10%;
            }
        }
        // background-color: antiquewhite;  
        // border-right: 1px solid #bab7b7;
    }
}
</style>