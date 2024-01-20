<script setup>
import {ref, onMounted} from 'vue'
import {picLoading, funLoading} from '@/utils/loading'
const currentClick = ref(0)

const choseWhichDate = (type)=>{
    let pstv = currentClick.value
    let ptn = document.getElementsByClassName("topsstr-tt")[pstv]
    ptn.style.backgroundColor = '#ffffff'
    document.getElementsByClassName("topsstr-tt")[type].style.backgroundColor = '#ebebeb'
    currentClick.value = type
}
const loading = ref(false)
const articleList = ref(
    [
        {
            id: '132342',
            titleName: '如何使用Vue3和T',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
        {
            id: '13234532',
            titleName: '如何使用Vue3',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#8'
        },
        {
            id: '132342',
            titleName: '如peScript开发一个项目',
            description: '这是一个关于发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
        {
            id: '132342',
            titleName: '如何个项目',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文faefaefaef章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#2'
        },
        {
            id: '132342',
            titleName: '如何使项目',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
        {
            id: '132342',
            titleName: '如何使用Vue3和T',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
        {
            id: '13234532',
            titleName: '如何使用Vue3',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#8'
        },
        {
            id: '132342',
            titleName: '如peScript开发一个项目',
            description: '这是一个关于发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
        {
            id: '132342',
            titleName: '如何个项目',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文faefaefaef章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#2'
        },
        {
            id: '132342',
            titleName: '如何使项目',
            description: '这是一个关于如何使用Vue3和TypeScript开发一个项目的文章。',
            date: '2022-01-01',
            userId: '2424242',
            avatar: 'https://picsum.photos/60/60#1'
        },
    ]
)
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
onMounted(()=>{
    choseWhichDate(0)
    funLoading(loading, test)()
})
</script>

<template>
<div class="container">
     
    <div class="topsst">
        <div>必读榜</div>
        <div class="topsstr">
           <div  class="topsstr-tt" @click="choseWhichDate(0)">日</div>
           <div  class="topsstr-tt" @click="choseWhichDate(1)" >月</div>
           <div  class="topsstr-tt" @click="choseWhichDate(2)">年</div>
        </div>
    </div>
    <div class="content">
        <div  class="content-wrapper" v-for="(item, index) in articleList" :key="item.id" >
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    
                    <!-- <el-skeleton-item variant="text" style="top: 10px; left: 10px; position: relative; border-radius: 1000px; width: 20px; height: 20px;"></el-skeleton-item> -->
                   <div class="text-area">
                        <div style="display: flex; gap: 5px;">
                            <el-skeleton-item variant="image" style="border-radius: 1000px; width: 20px; height: 20px; position: relative;"></el-skeleton-item>
                            <!-- <img style=" width: 20px; height: fit-content; border-radius: 100px; position: relative; "  :src="item.avatar" alt=""> -->
                            <!-- <div>
                                {{ item.titleName }}
                            </div> -->
                            <el-skeleton-item variant="text" style="width: 80px; height: 15px; position: relative; top: 2.5px;"></el-skeleton-item>
                        </div>
                        <div style="display: flex; position: relative; top: 5px;">
                            <el-skeleton-item variant="text" style="width: 190px; height: 10px;"></el-skeleton-item>
                            <!-- {{ item.description.slice(0, 24) + ((item.description.length > 24) ? '...' : '') }} -->
                        </div>
                    </div>
                </template>
                <template #default>
                    <div :style="index >= 3 ? {color: '#c6c6c6' } : {color: '#FFA828'}" style=" top: 10px; left: 10px; position: relative; font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">{{ index }}</div>
                    <div class="text-area">
                        <div style="display: flex; gap: 5px; font-size: 13px; color: #5C5C5C;">
                            <img style=" width: 20px; height: fit-content; border-radius: 100px; position: relative; "  :src="item.avatar" alt="">
                            <div>
                                {{ item.titleName }}
                            </div>
                        </div>
                        <div style="display: flex; color: #C4C4C6; font-size: 11px; white-space-trim: ;">
                            {{ item.description.slice(0, 24) + ((item.description.length > 24) ? '...' : '') }}
                        </div>
                    </div>
                </template>
            </el-skeleton>
            
       
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>
.container{
    padding: 15px 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: -125px;
    // width: 220px;
    // height: 600px;
    // background-color: aqua;
    .content{
        width: 250px;
        height: 600px;
        display: flex;
        position: relative;
        flex-direction: column;
        gap: 4px;
        left: 6px;
        .content-wrapper{
            // padding: 0px 3px;
            // margin: 0px 3px;
            width: 240px;
            height: 50px;
            border-radius: 5px;
            // background-color: #ebebeb;
            display: flex;
            position: relative;
            cursor: pointer;
            .text-area{
                width: 210px;
                height: 40px;
                top: 10px;

                // background-color: #282874;
                position: relative;
                left: 20px;
                display: flex;
                flex-direction: column;
            }
            // left: 3px;
            // align-items: center;
        }
        .content-wrapper-title{
            color: #5C5C5C;
            font-size: medium;
            width: 160px;
            top: 10px;
            position: relative;
            left: 24px;
        }
        .content-wrapper:hover{
            background-color: #F7F7F8;
        }
    }
    .topsst{
        padding: 0px 15px;
        width: 220px;
        display: flex;
        color: #5C5C5C;
        position: relative;
        justify-content: space-between;
        height: 35px;
        // top: -80px;
        .topsstr{
            display: flex;
            // gap: 10px;
             gap: 4px;

            color : #5C5C5C;
            .topsstr-tt{
                // padding: 0px 5px;
                // background-color: azure; 
                width: 25px;
                height: 25px;
                left: 10px;
                position: relative;
                border-radius: 10px;
                padding: 0px 8px;
                display: flex;
                justify-content: center;
                cursor: pointer;
                // background-color: ;
            }
            .topsstr-tt:hover{
                background-color: #F7F7F8 !important;
            }
        }
    }
}

</style>

