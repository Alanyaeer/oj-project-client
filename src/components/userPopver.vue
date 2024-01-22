<script setup>
import {ref, onMounted, defineProps, defineEmits } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const visible = ref(false)
const props = defineProps({
    avatar: String,
    nickName: String,
    description: String,
})
const item = ref(['收藏夹','笔记本', '我的题解', '做题分析', '积分', '进度管理'])
const itemImg = ref([
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623105.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623437.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623430.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623414.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623044.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401171623612.webp'
])
const wrapperList = ref(['体验新功能', '订单', '我的Playgrounds', '账号设置', '题目以英文显示', '外观', '退出'])
const routerToProfile = () => {
    router.push('/profile')
}
const funToRouter = (type) => {


    if(type === 6){
        router.push('/login')
    }
}
onMounted(()=>{
   
})
</script>
<template>
    <el-popover
        :width="296"
        trigger="click"
        popper-style="padding: 16px; border-radius: 10px;"

    >
        <template #reference>
            <div style="width: 30px; height: 30px;">
                <img style="width: 30px; height: fit-content; display: flex; border-radius: 1000px; cursor: pointer;" :src="props.avatar" alt="">

            </div>

        </template>
        <template #default>
            <div class="container">
                <div class="top">

                    <img @click="routerToProfile" style="width: 60px; height: fit-content; display: flex; border-radius: 1000px; cursor: pointer;" :src="props.avatar" alt="">
                    <div class="top-right">
                        <div @click="routerToProfile"  style="top: -0px; left: 5px; position: relative; cursor: pointer;">{{ props.nickName }}  </div>  
                        <div style="left: 5px; position: relative; color: #FFA116; font-size: small; white-space: nowrap;">{{ props.description.slice(0, 15)  }}</div>
                    </div>
                </div>
                <div class="middle">
                    <div class="middle-item" v-for="(item, index) in item " :key="item.id">
                        <div style="display: flex; flex-direction: column;  gap: 5px; align-items: center;">
                            <img style=" width: 40px; height: fit-content;" :src="itemImg[index]" alt="">
                            <div style="display: flex; color: #6E6E6E; font-size: small;">{{ item }}</div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom-wrapper">
                        <div class="bottom-wrapper-item" v-for="(item ,index) in wrapperList" :key="item.id" @click="funToRouter(index)">
                            <svg v-if="index === 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M6.979 3.552a.9.9 0 01.9-.9h8.132a.9.9 0 110 1.8h-.391v6.125l4.293 6.201c1.454 2.1-.05 4.97-2.604 4.97H6.852c-2.532 0-4.04-2.824-2.632-4.929l4.173-6.234V4.452h-.514a.9.9 0 01-.9-.9zm3.214.9v1.45h1.397a.9.9 0 110 1.8h-1.397v1.545h1.397a.9.9 0 110 1.8h-1.397v.084l-4.477 6.69a1.367 1.367 0 001.136 2.127H17.31c1.103 0 1.752-1.239 1.124-2.145l-4.613-6.664V4.452h-3.627z" clip-rule="evenodd" role="none"></path></svg>
                            <svg v-if="index === 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M14 2a2 2 0 011.995 1.85L16 4v1a2 2 0 01-1.85 1.995L14 7h-4a2 2 0 01-1.995-1.85L8 5V4a2 2 0 011.85-1.995L10 2h4zm3.96 2H18a3 3 0 012.995 2.824L21 7v12a3 3 0 01-2.824 2.995L18 22H6a3 3 0 01-2.995-2.824L3 19V7a3 3 0 012.824-2.995L6.056 4a1 1 0 01.117 1.993L6.056 6H6a1 1 0 00-.993.883L5 7v12a1 1 0 00.883.993L6 20h12a1 1 0 00.993-.883L19 19V7a1 1 0 00-.883-.993L18 6h-.04a1 1 0 01-.116-1.993L17.961 4zM15 14a1 1 0 01.117 1.993L15 16H9a1 1 0 01-.117-1.993L9 14h6zm1-3a1 1 0 00-1-1H9l-.117.007A1 1 0 009 12h6l.117-.007A1 1 0 0016 11zm-6-7h4v1h-4V4z" clip-rule="evenodd" role="none"></path></svg>
                            <svg v-if="index === 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M12 18a1 1 0 110 2H5.7C3.663 20 2 18.383 2 16.375v-8.75C2 5.617 3.663 4 5.7 4h12.6C20.337 4 22 5.617 22 7.625v4.813a1 1 0 11-2 0V7.625C20 6.734 19.245 6 18.3 6H5.7C4.755 6 4 6.734 4 7.625v8.75C4 17.266 4.755 18 5.7 18H12zm5-2v-1.5a1 1 0 012 0V16h1.5a1 1 0 010 2H19v1.5a1 1 0 01-2 0V18h-1.5a1 1 0 010-2H17zm-7.973-4L6.906 9.879A1 1 0 018.32 8.464l2.475 2.475a1.5 1.5 0 010 2.122L8.32 15.536a1 1 0 11-1.414-1.415L9.027 12z" clip-rule="evenodd" role="none"></path></svg>
                            <svg v-if="index === 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M7.583 5.833a2.417 2.417 0 114.299 1.517A3.246 3.246 0 0113.25 10a.75.75 0 01-1.5 0 1.75 1.75 0 00-3.5 0 .75.75 0 01-1.5 0c0-1.094.54-2.061 1.368-2.65a2.407 2.407 0 01-.535-1.517zm3.334 0a.917.917 0 11-1.834 0 .917.917 0 011.834 0z" clip-rule="evenodd" role="none"></path><path d="M6.75 12.917a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zM7.5 14.667a.75.75 0 000 1.5h2.917a.75.75 0 000-1.5H7.5z" role="none"></path><path fill-rule="evenodd" d="M5 .833a2.5 2.5 0 00-2.5 2.5v13.334a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V3.333a2.5 2.5 0 00-2.5-2.5H5zm-.833 2.5c0-.46.373-.833.833-.833h10c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H5a.833.833 0 01-.833-.833V3.333z" clip-rule="evenodd" role="none"></path></svg>
                            <svg v-if="index === 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M11.581 7H3a1 1 0 010-2h5V4a1 1 0 012 0v1h5a1 1 0 110 2h-1.37c-.566 2.69-1.671 5.05-3.307 7.07a14.419 14.419 0 002.274 2.128 1 1 0 01-1.194 1.604 16.292 16.292 0 01-2.439-2.249c-1.316 1.275-2.884 2.387-4.7 3.334a1 1 0 01-.925-1.774c1.71-.89 3.165-1.932 4.369-3.128-.96-1.326-1.831-2.85-2.617-4.57a1 1 0 011.819-.83c.659 1.441 1.377 2.725 2.152 3.85C10.26 10.85 11.098 9.04 11.582 7zM15.8 18.98l-.86 2.362a1 1 0 11-1.879-.684l4-11c.32-.877 1.56-.877 1.88 0l4 11a1 1 0 11-1.88.684l-.859-2.362c-.065.013-.132.02-.201.02h-4c-.069 0-.136-.007-.201-.02zM18 12.926L19.481 17H16.52L18 12.926z" clip-rule="evenodd" role="none"></path></svg>
                            <svg v-if="index === 5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" stroke="currentColor" fill="none" role="none"><g role="none"><g role="none"><path d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke-width="1.5" role="none"></path><path d="M12.4839 6.69728C12.9641 7.58846 12.7542 8.63364 12.0152 9.03176C11.2763 9.42988 10.288 9.03019 9.80787 8.13902C9.32775 7.24785 9.5376 6.20267 10.2766 5.80454C11.0156 5.40642 12.0038 5.80611 12.4839 6.69728Z" stroke-width="1.5" role="none"></path></g></g></svg>
                            <svg v-if="index === 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" role="none"><path fill-rule="evenodd" d="M18.586 13h-8.083c-.523 0-.947-.448-.947-1s.424-1 .947-1h8.083l-2.738-2.737a1 1 0 011.415-1.415l4.444 4.445a1 1 0 010 1.414l-4.444 4.445a1 1 0 01-1.415-1.415L18.586 13zM9 5H6a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 010 2z" clip-rule="evenodd" role="none"></path></svg>
                            {{ item }}
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </el-popover>

</template>

<style lang="scss" scoped> 
.container{
    display: flex;
    gap: 10px;
    flex-direction: column;
    position: relative;
    .top{
        position: relative;
        left: 6px;
        display: flex;
        height: 60px;
        align-items: center;
        clear: both;
        .top-right{
            font-size: 20px;
            display: flex;
            flex-direction: column;
            color: #595959;
            gap: 5px;
        }
    }
    .middle{
        display: flex;
        left: 3px;
        flex-wrap: wrap;
        padding: 10px 0px;
        gap: 11px;
        row-gap: 10px;
        height: 170px;
        .middle-item{
            border-radius: 10px;
            background-color: #F5F5F5;
            width: 60px;
            height: 60px;
            padding: 10px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .middle-item:hover{
            background-color: #F0F0F0;
        }
    }
    .bottom{
        display: flex;
        position: relative;
        .bottom-wrapper{
            gap: 3px;
            position: relative;
            display: flex;
            flex-direction: column;

            .bottom-wrapper-item{
                width: 248px;
                height: 21px;
                padding: 10px 8px;
                border-radius: 5px;
                height: 20px;
                color: #595959;
                display: flex;
                align-items: center;
                gap: 10px;
                cursor: pointer;
                font-size: medium;
            }       
            .bottom-wrapper-item:hover{
                background-color: #F5F5F5;
            }
        }
    }
}
</style>
