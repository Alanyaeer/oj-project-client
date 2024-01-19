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
    dayjs.locale('zh-cn')

    const today =  dayjs()
    console.log(today);
    // const dataDate =  dayjs(this.dataDate)
    // console.log(dataDate);
    // userInfo.avatarUrl = '111'
})
</script>
<template>  

    <!-- <el-drawer  style="background-image: url(https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401072106310.webp);   border-top-left-radius: 20px; border-bottom-left-radius: 20px;" v-model="drawer" size="300px" title="I am the title" :with-header="false">
        <div class="drawer-top">
            <div style="display: flex; align-items: center; position: relative;">
                <el-avatar style="cursor: pointer; " @click="asideShow" :size="50" :src="avatar" />

                <span style="position: relative; left: 10px;">alanyaeer</span>
            </div>
            <div class="drawer-item">
                <svg t="1704632048147" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11311" width="20" height="20"><path d="M502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM502.496 63.136c125.888 0 227.936 100.384 227.936 224.192 0 123.84-102.048 224.224-227.936 224.224-125.888 0-227.936-100.384-227.936-224.224C274.56 163.488 376.64 63.136 502.496 63.136L502.496 63.136zM417.024 586.304l189.984 0c162.624 0 294.432 129.632 294.432 289.6l0 18.656c0 63.04-131.84 65.44-294.432 65.44l-189.984 0c-162.624 0-294.432-0.096-294.432-65.44l0-18.656C122.592 715.936 254.4 586.304 417.024 586.304L417.024 586.304zM417.024 586.304" fill="#d5786b" p-id="11312"></path></svg>
                个人信息
            </div>
            <div class="drawer-item" >
                <svg t="1704631999024" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10345" id="mx_n_1704631999024" width="20" height="20"><path d="M821.326552 629.285866a197.24857 197.24857 0 1 0 198.984531 197.248569A197.899555 197.899555 0 0 0 821.326552 629.285866z m88.100021 224.80695h-62.494596v63.362577a27.124391 27.124391 0 0 1-54.031786 0v-63.145582h-59.67366a26.25641 26.25641 0 0 1-26.6904-27.558381 26.690401 26.690401 0 0 1 26.6904-26.6904h59.67366v-65.098538a27.124391 27.124391 0 0 1 54.031786 0v65.098538h62.494596A26.039415 26.039415 0 0 1 936.767959 826.75143a26.907396 26.907396 0 0 1-26.473405 27.558381z" fill="#9953b2" p-id="10346"></path><path d="M580.895953 826.75143a238.694639 238.694639 0 0 1 198.98453-233.920746 443.755033 443.755033 0 0 0-209.183301-134.102987 234.354736 234.354736 0 0 0 123.904217-214.60818 246.940453 246.940453 0 0 0-493.663912 0 233.269761 233.269761 0 0 0 120.2153 214.60818A449.179911 449.179911 0 0 0 3.688917 886.42509c0 80.722187 2.820937 85.279085 91.788938 86.79805h534.892986a243.468531 243.468531 0 0 1-49.474888-146.47171z" fill="#9953b2" p-id="10347"></path></svg>
                添加好友
            </div>
            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#FFA116" class="text-brand-orange dark:text-dark-brand-orange"><path fill-rule="evenodd" d="M11.394 2.074a2.5 2.5 0 011.212 0c.723.181 1.185.735 1.526 1.262.342.528.703 1.259 1.131 2.127l.392.795c.302.61.348.667.386.7a.498.498 0 00.086.063c.043.025.11.052.786.15l.877.128c.958.139 1.764.256 2.372.418.606.162 1.276.43 1.671 1.062a2.5 2.5 0 01.375 1.152c.052.744-.333 1.354-.728 1.841-.397.489-.98 1.058-1.674 1.733l-.634.619c-.489.476-.527.537-.548.583a.5.5 0 00-.033.101c-.01.05-.015.122.1.794l.15.873c.164.954.302 1.758.335 2.386.034.627-.014 1.346-.493 1.918-.263.314-.6.558-.98.712-.692.279-1.39.102-1.976-.124-.588-.226-1.309-.605-2.165-1.056l-.785-.412c-.603-.317-.674-.335-.724-.34a.497.497 0 00-.106 0c-.05.005-.12.023-.724.34l-.785.412c-.856.45-1.577.83-2.165 1.056-.585.226-1.284.403-1.976.124a2.5 2.5 0 01-.98-.712c-.48-.572-.527-1.291-.493-1.918.033-.628.171-1.431.335-2.386l.15-.873c.115-.672.11-.745.1-.794a.5.5 0 00-.033-.101c-.02-.046-.06-.107-.548-.583l-.634-.619c-.694-.675-1.277-1.244-1.674-1.733-.395-.487-.78-1.097-.728-1.841a2.5 2.5 0 01.375-1.152c.395-.633 1.065-.9 1.67-1.062.61-.162 1.415-.28 2.373-.418l.877-.128c.675-.098.743-.125.786-.15a.5.5 0 00.086-.062c.038-.034.084-.09.386-.701l.392-.795c.428-.868.789-1.599 1.131-2.127.341-.527.803-1.08 1.526-1.262z" clip-rule="evenodd"></path></svg>

                你的收藏
            </div>

            <div class="drawer-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="20" fill="#00AF9B" class="text-olive dark:text-dark-olive"><path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02z" clip-rule="evenodd"></path></svg>

                你的点赞
            </div>
            <div class="drawer-item">
                <svg t="1704631533312" class="icon" viewBox="0 0 1024 1024"   version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4223" width="24" height="20"><path d="M238.765 196.903c15.986 47.357 12.182 101.21-14.998 148.057-27.397 47.218-72.867 77.53-122.534 87.184-5.095 25.97-7.765 52.802-7.765 80.254 0 26.005 2.395 51.453 6.977 76.137 49.975 9.486 95.78 39.869 123.322 87.336 27.766 47.856 31.137 103.026 13.937 151.109 39.66 34.275 85.866 61.246 136.502 78.808 33.248-38.99 82.852-63.734 138.263-63.734 55.292 0 104.802 24.637 138.048 63.483 50.186-17.51 96.003-44.268 135.387-78.22-17.339-48.162-14.016-103.477 13.815-151.445 27.64-47.638 73.672-78.067 123.853-87.436 4.57-24.654 6.958-50.068 6.958-76.038 0-27.416-2.661-54.215-7.743-80.153-49.876-9.54-95.572-39.9-123.068-87.287C772.473 298 768.716 244 784.837 196.56c-39.144-33.514-84.587-59.948-134.32-77.299-33.246 38.844-82.756 63.482-138.048 63.482-55.411 0-105.015-24.744-138.263-63.734-50.185 17.406-96.019 44.053-135.44 77.892v0.001z m-61.053-70.423c48.672-41.778 104.857-74.18 165.733-95.294 36.485-12.654 77.034-1.665 102.032 27.651 16.658 19.534 40.794 30.901 66.993 30.901 26.144 0 50.232-11.318 66.888-30.778 25.053-29.271 65.623-40.186 102.085-27.465 60.332 21.049 116.036 53.194 164.36 94.567 28.868 24.72 39.777 64.393 27.578 100.292-8.069 23.744-5.67 49.771 7.285 72.101 13.075 22.534 34.805 37.682 59.766 42.457 37.468 7.166 66.798 36.275 74.098 73.54 6.283 32.07 9.47 64.832 9.47 97.947 0 31.38-2.862 62.445-8.51 92.909-7.01 37.82-36.691 67.445-74.678 74.54-25.112 4.688-47.004 19.876-60.146 42.527-13.233 22.808-15.443 49.48-6.768 73.58 13.01 36.141 2.368 76.524-26.791 101.66-48.62 41.913-104.785 74.45-165.664 95.69-36.462 12.721-77.032 1.806-102.085-27.465-16.656-19.461-40.744-30.778-66.888-30.778-26.2 0-50.336 11.367-66.993 30.9-24.998 29.317-65.547 40.306-102.032 27.652-61.42-21.303-118.063-54.095-167.03-96.412-29.045-25.101-39.669-65.346-26.767-101.411 8.608-24.062 6.377-50.661-6.826-73.416-13.096-22.571-34.88-37.732-59.89-42.48-37.855-7.185-67.399-36.754-74.4-74.465C2.87 574.928 0 543.822 0 512.4c0-33.16 3.196-65.963 9.495-98.075 7.289-37.154 36.48-66.205 73.818-73.463 24.858-4.831 46.48-19.953 59.508-42.407 12.926-22.277 15.342-48.232 7.34-71.935-12.091-35.82-1.202-75.358 27.55-100.04z m334.287 575.39c104.965 0 190.053-84.674 190.053-189.122 0-104.449-85.088-189.122-190.053-189.122-104.964 0-190.052 84.673-190.052 189.122 0 104.448 85.088 189.122 190.052 189.122z m0-93.006c-53.34 0-96.584-43.032-96.584-96.116 0-53.083 43.243-96.115 96.584-96.115 53.342 0 96.585 43.03 96.585 96.115 0 53.084-43.243 96.115-96.585 96.115z" p-id="4224" fill="#1296db"></path></svg>
                设置
            </div>
            <div class="drawer-item">
                <svg t="1704631682178" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5465" width="20" height="20"><path d="M514.304 958.977c-57.876 0-114.084-10.893-166.954-32.489-51.101-20.758-96.927-50.515-136.313-88.434-39.386-37.919-70.293-82.105-91.922-131.269-22.363-50.902-33.711-104.984-33.711-160.737 0-66.712 16.989-132.941 49.098-191.619 31.041-56.686 76.133-106.462 130.439-143.931 15.086-10.412 36.047-7.037 46.828 7.455 10.781 14.493 7.344 34.642-7.743 44.989-45.894 31.749-83.979 73.717-110.146 121.565-27.47 50.162-41.388 104.502-41.388 161.541 0 93.061 37.65 180.563 106.007 246.342 68.324 65.812 159.177 102.059 255.805 102.059 96.595 0 187.482-36.248 255.839-102.06 68.357-65.78 105.974-153.281 105.974-246.342 0-56.975-13.885-111.411-41.388-161.54-26.167-47.816-64.285-89.816-110.179-121.502-15.054-10.346-18.558-30.495-7.744-44.989 10.814-14.492 31.743-17.898 46.795-7.454 54.339 37.469 99.498 87.245 130.507 143.93 32.142 58.678 49.131 124.907 49.131 191.619 0 55.754-11.348 109.836-33.744 160.769-21.597 49.166-52.537 93.351-91.923 131.269-39.385 37.919-85.212 67.643-136.313 88.499-52.903 21.466-109.078 32.327-166.954 32.327h-0.001v0.002z m10.08-448.084c-18.524 0-33.544-14.397-33.544-32.264V96.164c0-17.803 15.02-32.296 33.544-32.296 18.525 0 33.578 14.493 33.578 32.296v382.465c0 17.867-15.052 32.264-33.578 32.264z" p-id="5466" fill="#13227a"></path></svg>
                退出登录
            </div>
            
        </div>
    </el-drawer> -->
        <!-- <div class="top">
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
        </div> -->
        <topTabNew></topTabNew>
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
