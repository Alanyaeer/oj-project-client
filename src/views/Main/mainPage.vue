<script setup>
import {ref, onMounted} from 'vue'
import {User, CirclePlus}from '@element-plus/icons-vue'
const bgStyle = ref('#E5E5E5')
const avatar = ref(new URL("@/assets/avatar/default-avatar.png", import.meta.url).href)
const drawer = ref(false)
const asideShow = () => {
    drawer.value = true
}

</script>
<template>  
    <el-drawer v-model="drawer" size="300px" title="I am the title" :with-header="false">
        <div class="drawer-top">
            <el-avatar style="cursor: pointer;" @click="asideShow" :size="50" :src="avatar" />
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
            <img style="cursor: pointer;" src="@/assets/icon/iconTitle.png" alt="">    
            <div>AttackCode</div>
        </div>
        <div class="top-middle">
            <div class="top-middle-item">学习</div>
            <div class="top-middle-item">题库</div>
            <div class="top-middle-item">竞赛</div>
        </div>
        <div class="top-right">
            <el-avatar style="cursor: pointer;" @click="asideShow" :size="50" :src="avatar" />
        </div>
        </div>

    <div class="bottom">


        <RouterView></RouterView>
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
        left: 30%;

        width: 53%;
        font-size: 3vh;
        // .left-font {
        font-family: 'my_font';
        gap: 3%;
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