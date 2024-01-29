<script setup>
import {onMounted, ref} from 'vue'
import {getUserInfo} from '@/api/user'
import {RouterView, useRouter} from 'vue-router'
import steamLoading from '@/components/steamLoading.vue'
import topTabNew from '@/components/topTabNew.vue'
const userInfo = ref({})
const router = useRouter()
const loading = ref(true)
onMounted(async() => {
    let obj =  await getUserInfo()
    userInfo.value = obj.data
    setTimeout(() => {
        loading.value = false
    }, 1000)
    // router.push('/profile/info') 
})
</script>
<template>
    <steamLoading v-if="loading">

    </steamLoading>
    <div  class="containersss">
        <topTabNew></topTabNew>
        <div class="itemss" >
            <div style="display: flex; gap: 15px;">
                <div style="width:240px; height: 624px;">
                    <div style="display: flex; flex-direction: column; justify-content: center; gap: 15px; border-bottom: 1px solid #E5E5E5; margin-bottom: 15px;">
                        <img :src="userInfo.avatar" style="width: 80px; height: 80px; border-radius: 5px; justify-content: center; position: relative; left: 75px;" alt="">
                        <div style="font-size: 15px; font-weight: 500; color: #262626; position: relative; padding: 5px 10px; text-align: center;">{{userInfo.nickName}}</div>
                    </div>
                    <a class="sonstyle" href="/profile/favour" style="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M15.392 8.23l5.695.832a.942.942 0 01.521 1.607l-4.12 4.013.972 5.67a.942.942 0 01-1.367.993L12 18.667l-5.093 2.678a.942.942 0 01-1.367-.993l.972-5.67-4.12-4.013a.942.942 0 01.52-1.607l5.696-.833 2.547-5.16a.942.942 0 011.69 0l2.547 5.16zm-1.329 1.826L12 5.876l-2.063 4.18-4.615.675 3.34 3.252-.789 4.594L12 16.407l4.127 2.17-.788-4.594 3.34-3.252-4.616-.675z" clip-rule="evenodd"></path></svg>
                        <div>收藏夹</div>
                    </a>
                    <a class="sonstyle" href="/profile/notes" style="border-bottom: 1px solid #E5E5E5; margin-bottom: 15px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M4 18.5a1 1 0 00.045.298c.255 1.53 1.56 2.702 3.143 2.702H19a1 1 0 001-1v-17a1 1 0 00-1-1H7.187C5.421 2.5 4 3.961 4 5.75v12.5c0 .043 0 .087.002.13L4 18.5zm3.5-14h-.313C6.538 4.5 6 5.053 6 5.75v9.965c.368-.139.77-.215 1.188-.215H18v-11h-3.5v6.792a1.1 1.1 0 01-1.787.859L11 10.78l-1.713 1.37a1.1 1.1 0 01-1.787-.86V4.5zm-.313 13H18v2H7.187c-.605 0-1.113-.48-1.18-1.11.065-.484.553-.89 1.18-.89zM9.5 9.42V4.5h3v4.92l-.813-.65a1.1 1.1 0 00-1.374 0l-.813.65z" clip-rule="evenodd"></path></svg>
                        <div>个人笔记</div>
                    </a>
                    <a class="sonstyle" href="/profile/article">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M17 2H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zM6 5a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1V5zm2 5a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
                        <div>我的题解</div>
                    </a>
                    <a class="sonstyle" href="/profile/rewards">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M12 5.236C10.56 4.156 9.12 3.47 7.68 3.47c-2.16 0-5.399 1.62-5.399 5.94 0 3.835 2.782 7.381 8.345 10.638l.384.221a2 2 0 001.98 0c5.82-3.317 8.729-6.936 8.729-10.86 0-4.319-3.24-5.939-5.4-5.939-1.439 0-2.88.688-4.319 1.767zm-1.2 1.6l1.2.9 1.2-.9c1.238-.928 2.267-1.367 3.12-1.367 1.804 0 3.399 1.396 3.399 3.94 0 2.993-2.346 5.981-7.357 8.912l-.362.21c-5.26-2.998-7.719-6.058-7.719-9.122 0-2.544 1.595-3.94 3.4-3.94.852 0 1.881.44 3.119 1.367z" clip-rule="evenodd"></path></svg>
                        <div>创作激励</div>
                    </a>
                    <a class="sonstyle" href="/profile/progress">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M19.364 15.178a1 1 0 111.842.779A10.048 10.048 0 117.933 2.834a1 1 0 01.8 1.833 8.048 8.048 0 1010.631 10.51zM22 12.048a1 1 0 01-1 1h-9.048a1 1 0 01-1-1V3a1 1 0 011-1A10.048 10.048 0 0122 12.048zm-9.048-1h6.986a8.048 8.048 0 00-6.986-6.986v6.986z" clip-rule="evenodd"></path></svg>
                        <div>做题分析</div>
                    </a>
                    <a class="sonstyle" href="/profile/session" style="border-bottom: 1px solid #E5E5E5; margin-bottom: 15px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M19 3a3 3 0 013 3v12a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h14zm0 2H5a1 1 0 00-.993.883L4 6v12a1 1 0 00.883.993L5 19h14a1 1 0 00.993-.883L20 18V6a1 1 0 00-.883-.993L19 5zM8 10a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-3a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1zm4 6a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        <div>进度管理</div>
                    </a>
                    <a class="sonstyle" href="/profile/info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="currentColor" class="css-1rhb60f-Svg ea8ky5j0"><path fill-rule="evenodd" d="M7.583 5.833a2.417 2.417 0 114.299 1.517A3.246 3.246 0 0113.25 10a.75.75 0 01-1.5 0 1.75 1.75 0 00-3.5 0 .75.75 0 01-1.5 0c0-1.094.54-2.061 1.368-2.65a2.407 2.407 0 01-.535-1.517zm3.334 0a.917.917 0 11-1.834 0 .917.917 0 011.834 0z" clip-rule="evenodd"></path><path d="M6.75 12.917a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zM7.5 14.667a.75.75 0 000 1.5h2.917a.75.75 0 000-1.5H7.5z"></path><path fill-rule="evenodd" d="M5 .833a2.5 2.5 0 00-2.5 2.5v13.334a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V3.333a2.5 2.5 0 00-2.5-2.5H5zm-.833 2.5c0-.46.373-.833.833-.833h10c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H5a.833.833 0 01-.833-.833V3.333z" clip-rule="evenodd"></path></svg>
                        <div>个人资料</div>
                    </a>
                </div>
                <div class="innerRouter">
                    <RouterView :userInfo="userInfo"></RouterView>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.containersss{
    // width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    // background-color: ;
    background-color: #F7F8FA;
    .itemss{
        position: relative;

        top: 50px;
        height: 1100px;
        width: 1200px   ;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0px 50px;
        margin-bottom: 100px;
        .sonstyle{
            padding: 14px 18px;
            border-radius: 5px;
            font-size: 16px;
            color: #8C8C8C;
            display: flex;
            width: 204px;
            height: 20px;
            text-decoration:none;
            gap: 8px;
        }
        .innerRouter{
            width: 768px;
            padding: 24px;
            height: 1071px;
            border-radius: 10px;
            background-color: white;    
        }
        .sonstyle:hover{
            // color: ;
            background-color: #EDEEF0;
        }
        .sonstyle:active{
            color: #0A84FF
        }
        .top {
            left: 15px;

            height: 100px;
            display: flex;
            position: relative;
            // background-color: aqua;
        }
        .bottom{

            display: flex;
            position: relative;
            width: 100%;
            left : 15px;
            height: 900px;
            gap: 15px;
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
                height: 1150px;
                // padding-bottom: 20px;
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
               
                }
                .leidaChart{
                    position: relative;
                    display: flex;  
                    justify-content: center;
                    border-bottom: 2px solid gainsboro;

                    // background-color: antiquewhite;
                }
            }   
            .bottom-right{
                width: 800px;
                border-radius: 15px;
                padding: 0px 10px; 
                margin-bottom: 20px;
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
                    height: 200px;
                    min-height: 200px;
                    border-radius: 15px;
                    gap: 10px;
                    background-color: white;
 
                }
                .t4{
                    box-shadow: 0px 0px 5px 0px #e6e6e6;
                    width: 800px;
                    // top: 20px;
                    justify-content: center;
                    // min-height: 225px;
                    position: relative;
                    display: flex;
                    // height: 225px;
                    border-radius: 15px;
                    background-color: white;
                    
                }
            }

        }
    }

}
</style>