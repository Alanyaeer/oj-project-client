<script setup>

// question - list - tags
import {onMounted, ref} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')  
const currentClick = ref(0)
const cateList = ref([
    {
        id: '1',
        icon: '',
        categorie: '全部题目',
        viewSize: '40px'
    },
    {
        id: '2',
        icon: '',
        categorie: '前端'
    },
    {
        id: '3',
        icon : '',
        categorie: '数据库'
    },
    {
        id: '4',
        icon : '',
         categorie: 'pandas'
    },
    {
        id: '4',
        icon : '',
         categorie: '多线程'
    },
    {
        
        id: '4',
        icon : '',
        categorie: 'JS'
    
    },
    {
        
        id: '4',
        icon : '',
        categorie: 'Shell'
    
    },
])
const questionItemInfo = ref([
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: 0,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
])
const filterList = ref(['状态', '题目', '难度', '标签'])
const iconList = ref([])
const beClick = (index) => {
    if(currentClick.value !== index){
        let styles = document.getElementsByClassName('categories-item')[currentClick.value].style
        styles.backgroundColor = '#C4C4C4'
        styles.color = 'black'
    }
    console.log(index)
    let styles = document.getElementsByClassName('categories-item')[index].style
    styles.backgroundColor = 'rgb(30, 29, 29)'
    styles.color = '#C4C4C4'
    currentClick.value = index 

    
    // 发送请求



}
const clickToSort = (item)=>{
    console.log(item);
    // 发送请求
}
onMounted(()=>{
    beClick(0)
})
</script>

<template>
    <div class="container">
        <!-- 未来在搞， 具体就是根据标签跳转到对应的页面里面去 -->
       <div class="tags"></div>

        <div class="categories">
            <div @click="beClick(index)" v-for="(item, index) in cateList" :key="item.id" class="categories-item">
                <svg class="icon"   style="left: 5px; position: relative; " t="1704095566156"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="24" height="24"><path class="id-for-js" d="M928 160v704h-832v-704h832z m-64 230.357333h-704V800h704V390.357333z m-438.613333 63.658667l45.226666 45.269333L372.586667 597.333333l98.069333 98.048-45.269333 45.269334L282.069333 597.333333l143.296-143.317333z m194.56 0L763.285333 597.333333l-143.296 143.317334-45.269333-45.269334L672.768 597.333333l-98.069333-98.048 45.269333-45.269333zM864 224h-704v102.357333h704V224z" :fill="currentClick !== index ? '#1677FF' : '#ffffff'" p-id="1913"></path></svg>
                <div style="position: relative; left: 10px; width: 90px;">
                    <span > {{ item.categorie }} </span>

                </div>
            </div>
        </div>


       <div class="question-list">
            <div class="table-top">
                <div @click="clickToSort(index)" v-for="(item, index) in filterList" :key="item.id" class="table-top-item">
                  <span >{{ item }}</span>  
                </div>  
            </div>

            <div class="table-content">
                <div v-for="(item, index) in questionItemInfo" :key="item.id" class="table-content-item">
                    <div class="status"></div>
                    <div class="title"></div>
                    <div class="question-score"></div>
                    <div class="qtags"></div>
                    {{ item.titleName }}
                </div>
            </div>
       </div>
    </div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.container{
    min-width: 100vh;
    height: auto;
    display: flex;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    
    .tags{
        
    }
    .categories{
        top: 15px;
        position: relative;
        min-height: 50px;
        gap: 25px;
        display: flex;
        width: 800px;
        justify-content: center;
        // align-items: center;
        // overflow-x: ;
        
        .categories-item{
            background-color: #C4C4C4;
            border-radius: 15px;
            position: relative;
            min-width: 100px;
            max-width: 200px;
            // width: fit-content;
            // min-width: 100px;
            display: flex;
            // justify-content: center;
            align-items: center;
            cursor: pointer;
        }   
        .categories-item:hover{
            background-color: #a2a2a2;
            // background-color: rgb(30, 29, 29);
            // color: #C4C4C4;
        }
    }
    .question-list{
        position: relative;
        top: 20px;
        width:800px;
        height: 1500px;
        // background-color: aquamarine;
        .table-top{
            display: flex;
            width: 100%;
            height: 35px;
            gap: 140px;
            justify-content: center;
            position: relative;
            .table-top-item{
                top: 10px;
                position: relative;
                display: flex;
                font-size: large;
                width: 80px;
                cursor: pointer;
            }
            border-bottom: 2px solid #C4C4C4;
        }
        .table-content{ 
            display: flex;
            position: relative;
            width: 100%;
            height: 90%;
            gap: 15px;
            flex-direction: column;
            .table-content-item{
                position: relative;
                width: 100%;
                height: 50px;
                background-color: aqua;
            }
        }
    }
}
</style>