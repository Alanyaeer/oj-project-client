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
const asideShow = () => {
    drawer.value = true
}

/**
 * 
 * @param {number} type 
 * @returns 页面跳转
 */
const routeTo = (type)=>{
    if(lastTouch.value != -1){
        let lastStyle = document.getElementsByClassName('top-middle-item')[lastTouch.value].style
        lastStyle.boxShadow = outerShadow.value
    }
    router.push(`/${routerList[type]}`)
    const styles = document.getElementsByClassName('top-middle-item')[type].style
    styles.boxShadow = innerShadow.value
    lastTouch.value = type
}
const check = ()=>{
    console.log(window.location.pathname);
    if(window.location.pathname !== '/') return false
    return true
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
        <div v-if="check()">
            你好这是首页
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
    .line{

    }
}
</style>