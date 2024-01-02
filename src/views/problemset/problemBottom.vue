<script setup>

// question - list - tags
import {onMounted, ref} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')  
const currentClick = ref(0)
const currentCategories = ref(0)
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
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go'],
        
    },
    {
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: false,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
        titleName: '机智的小军',
        score: '1599',
        //显示两 - 三个即可
        tags: ['C++', 'C', 'C#', 'Java', 'Python', 'PHP', 'Ruby', 'Go']
    },
    {
        nowStatus: true,
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
 
}
const clickToSort = (item)=>{
    console.log(item);
    currentCategories.value = item
    
    // 发送请求
}
const routerToQuestion = (index) => {
    console.log(index);
    // 使用id来进行拼接请求
}
onMounted(()=>{
    beClick(0)
    clickToSort(0)

})
</script>

<template>
        <!-- 未来在搞， 具体就是根据标签跳转到对应的页面里面去 -->
       <div class="tags"></div>
        <div class="categories">
            <div @click="beClick(0)" class="categories-item">
                 <svg class="icon"   style="left: 5px; position: relative; " t="1704095566156"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="24" height="24"><path class="id-for-js" d="M928 160v704h-832v-704h832z m-64 230.357333h-704V800h704V390.357333z m-438.613333 63.658667l45.226666 45.269333L372.586667 597.333333l98.069333 98.048-45.269333 45.269334L282.069333 597.333333l143.296-143.317333z m194.56 0L763.285333 597.333333l-143.296 143.317334-45.269333-45.269334L672.768 597.333333l-98.069333-98.048 45.269333-45.269333zM864 224h-704v102.357333h704V224z" :fill="currentClick !== 0 ? '#1677FF' : '#ffffff'" p-id="1913"></path></svg>
                <div style="position: relative; left: 10px; width: 90px">
                    <span>全部题目</span>
                </div>
            </div>
            <div @click="beClick(1)" class="categories-item">
                 <svg style="left: 5px; position: relative;" t="1704185473535" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1912" width="24" height="24"><path d="M509.056 160a357.546667 357.546667 0 0 1 260.202667 111.872c116.906667-4.842667 197.866667 20.394667 218.965333 81.642667 17.002667 49.386667-13.184 106.453333-76.117333 162.581333l-9.429334 8.213333c-9.685333 8.192-20.053333 16.362667-31.04 24.469334l-5.674666 4.117333c-17.28 181.888-170.474667 324.181333-356.906667 324.181333-102.336 0-194.666667-42.88-259.989333-111.637333l-7.466667 0.277333c-111.573333 3.093333-191.765333-23.082667-212.074667-82.090666C8.96 624 54.165333 556.437333 144.213333 490.026667l7.893334-5.717334C169.386667 302.336 322.56 160 509.077333 160z m283.093333 440.106667l-14.293333 8.042666-14.101333 7.616-14.442667 7.530667-14.762667 7.424-15.104 7.338667-15.381333 7.232-15.722667 7.104-7.957333 3.52-20.202667 8.64-20.650666 8.448-16.810667 6.613333-17.066667 6.442667-8.597333 3.178666-17.429333 6.229334-8.789334 3.050666-17.6 5.952-17.514666 5.674667-17.429334 5.418667-17.301333 5.141333-25.749333 7.210667-21.205334 5.546666-20.949333 5.12-16.597333 3.797334-16.405334 3.498666-16.213333 3.242667-16 2.944-19.712 3.306667-11.861333 1.770666a293.205333 293.205333 0 0 0 172.757333 55.936c134.357333 0 247.701333-89.962667 283.093333-212.949333zM153.386667 564.373333l-0.789334 0.682667c-48.170667 41.301333-69.610667 77.333333-62.592 97.749333 6.144 17.813333 30.762667 29.845333 68.778667 35.541334l9.386667 1.258666c6.4 0.746667 13.162667 1.322667 20.224 1.749334l12.458666 0.554666a356.224 356.224 0 0 1-47.466666-137.536zM509.013333 224c-162.666667 0-294.528 131.861333-294.528 294.549333 0 68.117333 23.125333 130.837333 61.952 180.736l3.477334-0.32 13.845333-1.408 14.165333-1.664 14.506667-1.941333 14.784-2.218667 18.88-3.136 19.306667-3.541333 23.68-4.842667 16.085333-3.562666 24.490667-5.866667 16.576-4.266667 16.746666-4.544 16.874667-4.821333 8.512-2.517333 17.088-5.248 17.216-5.546667 17.301333-5.824 17.237334-6.058667c5.696-2.048 11.349333-4.138667 16.96-6.229333l16.725333-6.4 8.234667-3.242667 16.277333-6.613333 16-6.698667 15.68-6.848 19.136-8.704 18.624-8.853333 7.317333-3.562667 14.336-7.210666 13.973334-7.253334 13.589333-7.317333 13.226667-7.338667 12.8-7.402666 6.250666-3.690667 12.202667-7.402667 11.776-7.402666 3.242667-2.133334C803.114667 355.413333 671.424 224 509.056 224z m308.608 111.829333l3.136 5.461334a356.181333 356.181333 0 0 1 43.946667 131.861333l9.173333-7.850667 3.925334-3.498666 7.445333-6.933334c33.429333-32.064 49.301333-60.586667 42.453333-80.512-7.104-20.608-46.506667-35.712-110.08-38.528z" :fill="currentClick !== 1 ? '#F2354F' : '#ffffff'"  p-id="1913"></path></svg>
                <div style="position: relative; left: 20px; width: 90px">
                    <span>前端</span>
                </div>
            </div>
            <div @click="beClick(2)" class="categories-item">
                <svg t="1704185560056" style="left: 5px; position: relative;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4512" width="24" height="24"><path d="M522.666667 96l8.533333 0.042667a910.08 910.08 0 0 1 91.562667 5.333333l14.549333 1.706667 15.402667 2.133333 15.125333 2.410667 7.573333 1.322666 14.890667 2.837334c125.205333 25.322667 212.928 79.488 216.256 150.677333l0.106667 4.202667v448c0 73.258667-88.704 129.066667-216.362667 154.88l-14.890667 2.837333-7.573333 1.322667-15.125333 2.389333-15.402667 2.133333c-36.266667 4.650667-74.773333 7.104-114.645333 7.104-39.872 0-78.378667-2.453333-114.645334-7.104l-15.402666-2.133333-15.125334-2.389333c-137.088-23.189333-235.264-79.488-238.72-154.901334L138.666667 714.666667v-448l0.106666-4.202667c3.328-71.189333 91.050667-125.354667 216.256-150.677333l14.890667-2.837334 7.573333-1.322666 15.125334-2.389334 15.402666-2.133333a892.202667 892.202667 0 0 1 97.642667-6.954667L522.666667 96z m145.173333 543.04l-15.125333 2.389333-15.402667 2.133334c-36.266667 4.650667-74.773333 7.104-114.645333 7.104-39.872 0-78.378667-2.453333-114.645334-7.104l-15.402666-2.133334-15.125334-2.389333c-71.488-12.096-132.416-33.194667-174.826666-61.312V714.666667c0 20.949333 24.170667 42.773333 65.066666 61.184l9.749334 4.181333c15.04 6.186667 32 11.925333 50.602666 17.024l12.650667 3.306667c12.864 3.2 26.453333 6.144 40.597333 8.704l14.378667 2.453333 14.741333 2.197333c9.962667 1.386667 20.16 2.602667 30.570667 3.626667l15.765333 1.408 16.064 1.109333 16.362667 0.810667a845.994667 845.994667 0 0 0 66.901333 0l16.362667-0.810667 16.064-1.109333 15.786667-1.408c10.389333-1.024 20.586667-2.24 30.549333-3.626667l14.741333-2.197333 14.378667-2.453333c14.165333-2.56 27.733333-5.482667 40.597333-8.704l12.650667-3.306667c18.602667-5.12 35.562667-10.837333 50.602667-17.024l9.749333-4.181333c39.317333-17.706667 63.189333-38.549333 64.96-58.773334l0.106667-2.410666v-136.96c-42.389333 28.138667-103.317333 49.237333-174.826667 61.333333zM842.666667 364.373333c-40.298667 26.730667-97.28 47.104-164.202667 59.456l-10.666667 1.877334-15.104 2.389333-15.402666 2.133333c-36.266667 4.650667-74.773333 7.104-114.645334 7.104-34.176 0-67.349333-1.792-98.986666-5.248l-15.658667-1.856-15.402667-2.133333-15.125333-2.389333c-71.488-12.096-132.416-33.194667-174.826667-61.312V480c0 20.949333 24.170667 42.773333 65.066667 61.184l9.749333 4.181333c15.04 6.186667 32 11.925333 50.602667 17.024l12.650667 3.306667c12.864 3.2 26.453333 6.144 40.597333 8.704l14.378667 2.453333 14.741333 2.197334c9.962667 1.386667 20.16 2.602667 30.570667 3.626666l15.765333 1.408 16.064 1.109334 16.362667 0.810666a845.994667 845.994667 0 0 0 66.901333 0l16.362667-0.810666 16.064-1.109334 15.786666-1.408c10.389333-1.024 20.586667-2.24 30.549334-3.626666l14.741333-2.197334 14.378667-2.453333c14.165333-2.56 27.733333-5.482667 40.597333-8.704l12.650667-3.306667c18.602667-5.12 35.562667-10.837333 50.602666-17.024l9.749334-4.181333c39.317333-17.706667 63.189333-38.549333 64.96-58.773333l0.106666-2.410667v-115.626667zM522.666667 160l-8.448 0.042667-12.586667 0.213333-12.416 0.405333-16.362667 0.810667-16.064 1.109333-15.786666 1.408c-6.933333 0.682667-13.76 1.450667-20.501334 2.304l-10.026666 1.322667-14.762667 2.197333-14.378667 2.453334c-10.624 1.92-20.906667 4.053333-30.826666 6.336l-9.770667 2.346666-12.650667 3.328c-15.488 4.266667-29.866667 8.96-42.922666 13.973334l-7.68 3.050666-9.749334 4.181334c-40.896 18.410667-65.066667 40.234667-65.066666 61.184 0 20.053333 22.122667 40.874667 59.84 58.773333l5.226666 2.410667 9.749334 4.181333c12.522667 5.162667 26.389333 10.005333 41.450666 14.421333l9.173334 2.602667 12.629333 3.306667c9.642667 2.410667 19.690667 4.650667 30.08 6.72l10.517333 1.984 14.378667 2.453333 14.741333 2.197333c6.634667 0.938667 13.376 1.770667 20.224 2.56l10.346667 1.066667 15.765333 1.408 16.064 1.109333 16.362667 0.810667a845.994667 845.994667 0 0 0 55.872 0.362667l11.029333-0.362667 16.362667-0.810667 16.064-1.109333 15.786667-1.408c6.933333-0.682667 13.76-1.450667 20.501333-2.304l10.026667-1.322667 14.762666-2.197333 14.378667-2.453333c10.624-1.92 20.906667-4.053333 30.826667-6.336l9.770666-2.346667 12.650667-3.328c15.488-4.266667 29.866667-8.96 42.922667-13.973333l7.68-3.050667 9.749333-4.181333c40.896-18.410667 65.066667-40.234667 65.066667-61.184 0-20.053333-22.122667-40.874667-59.84-58.773334l-5.226667-2.410666-9.749333-4.181334a424.469333 424.469333 0 0 0-41.450667-14.421333l-9.173333-2.602667-12.629334-3.306666a623.658667 623.658667 0 0 0-30.08-6.72l-10.517333-1.984-14.378667-2.453334-14.741333-2.197333a765.994667 765.994667 0 0 0-20.224-2.56l-10.346667-1.066667-15.765333-1.408-16.064-1.109333-16.362667-0.810667c-7.317333-0.298667-14.72-0.490667-22.186666-0.597333L522.666667 160z" :fill="currentClick !== 2 ? '#3AC2F2' : '#ffffff'" p-id="4513"></path></svg>
                <div style="position: relative; left: 15px; width: 90px">
                    <span>数据库</span>
                </div>
            </div>
            <div @click="beClick(3)" class="categories-item">
                <svg  t="1704185596078" style="left: 5px; position: relative;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2057" width="24" height="24"><path d="M417.322667 629.333333l85.333333 85.333334H672v213.333333h-213.333333v-166.826667l-67.861334-67.861333L128 693.333333v-64h289.322667z m190.677333 149.333334h-85.333333v85.333333h85.333333v-85.333333z m341.333333-362.666667v213.333333h-213.333333V554.666667H128v-64h608v-74.666667h213.333333z m-64 64h-85.333333v85.333333h85.333333v-85.333333z m-213.333333-362.666667v213.333334h-172.8l-81.877333 81.92H128v-64l262.805333-0.021334 67.861334-67.861333V117.333333h213.333333z m-64 64h-85.333333v85.333334h85.333333v-85.333334z" :fill="currentClick !== 3 ? '#2BF24A' : '#ffffff'" p-id="2058"></path></svg>
                <div style="position: relative; left: 10px; width: 90px">
                    <span>pandas</span>
                </div>
            </div>
            <div @click="beClick(4)" class="categories-item">
                <svg t="1704185655197" style="left: 5px; position: relative;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2278" width="24" height="24"><path d="M650.666667 117.333333v256H554.666667v106.666667h288v170.666667h85.333333v234.666666h-234.666667v-234.666666h85.333334v-106.666667h-512v106.666667h85.333333v234.666666h-234.666667v-234.666666h85.333334v-170.666667H490.666667v-106.666667h-96v-256h256z m-362.666667 597.333334h-106.666667v106.666666h106.666667v-106.666666z m576 0h-106.666667v106.666666h106.666667v-106.666666z m-277.333333-533.333334h-128v128h128v-128z" :fill="currentClick !== 4 ? '#DB99F2' : '#ffffff'" p-id="2279"></path></svg>
                <div style="position: relative; left: 12px; width: 90px">
                    <span>多线程</span>
                </div>
            </div>
            <div @click="beClick(5)" class="categories-item">
                <svg  style="left: 5px; position: relative;" t="1704188473619" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5482" width="24" height="24"><path d="M64 64v896h896V64H64z m487.6 698.8c0 87.2-51.2 127-125.8 127-67.4 0-106.4-34.8-126.4-77l68.6-41.4c13.2 23.4 25.2 43.2 54.2 43.2 27.6 0 45.2-10.8 45.2-53V475.4h84.2v287.4z m199.2 127c-78.2 0-128.8-37.2-153.4-86l68.6-39.6c18 29.4 41.6 51.2 83 51.2 34.8 0 57.2-17.4 57.2-41.6 0-28.8-22.8-39-61.4-56l-21-9c-60.8-25.8-101-58.4-101-127 0-63.2 48.2-111.2 123.2-111.2 53.6 0 92 18.6 119.6 67.4L800 580c-14.4-25.8-30-36-54.2-36-24.6 0-40.2 15.6-40.2 36 0 25.2 15.6 35.4 51.8 51.2l21 9c71.6 30.6 111.8 62 111.8 132.4 0 75.6-59.6 117.2-139.4 117.2z" p-id="5483" :fill="currentClick !== 5 ? '#f4ea2a' : '#ffffff'"></path></svg>
                <div style="position: relative; left: 25px; width: 90px">
                    <span>JS</span>
                </div>
            </div>
            <div @click="beClick(6)" class="categories-item">
                <svg t="1704185833411" style="left: 5px; position: relative;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5143" width="24" height="24"><path d="M929.408 172.330667c20.821333 0 33.962667 16.981333 28.458667 37.76l-134.186667 603.776c-4.693333 20.821333-25.045333 37.802667-45.866667 37.802666H94.634667c-20.778667 0-33.962667-16.981333-28.416-37.802666l134.144-603.733334c4.693333-20.821333 25.045333-37.802667 45.866666-37.802666h683.178667M674.645333 681.813333h-169.813333a35.498667 35.498667 0 0 0-35.285333 35.669334c0 19.925333 15.744 36.053333 35.242666 36.053333h169.856a36.053333 36.053333 0 0 0 36.096-36.053333 35.968 35.968 0 0 0-36.096-35.669334m-426.709333 11.861334a36.992 36.992 0 0 0-8.917333 51.797333 37.717333 37.717333 0 0 0 52.650666 9.813333c312.106667-219.562667 314.197333-222.08 316.330667-223.36a36.010667 36.010667 0 0 0 11.904-25.472 38.528 38.528 0 0 0-6.826667-23.808L404.181333 258.56a36.821333 36.821333 0 0 0-53.077333-1.28 37.034667 37.034667 0 0 0-2.133333 52.650667l176.213333 188.501333z" :fill="currentClick !== 6 ? '#03A9F4' : '#ffffff'" p-id="5144"></path></svg>
                <div style="position: relative; left: 15px; width: 90px">
                    <span>Shell</span>
                </div>
            </div>
        </div>


       <div class="question-list">
            <div class="table-top">
                <div @click="clickToSort(index)" v-for="(item, index) in filterList" :key="item.id" class="table-top-item">
                  <span >{{ item }}</span>  
                  <svg v-if="index !== 3 && index !== 0" @click="clickToSort(index)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" ><path d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z" :fill="currentCategories !== index ? '#DBDBDB' : '#000000'"></path></svg>
                </div>  
            </div>

            <div class="table-content">
                <div v-for="(item, index) in questionItemInfo" :key="item.id"  :class="(index & 1) ? 'table-content-item1' : 'table-content-item2'">
                    <div class="status">
                        <el-tooltip v-show="item.nowStatus" content="已解决" placement="top" effect="light">
                            <!-- <el-button>Light</el-button> -->
                            <svg t="1704188104700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27738" width="24" height="24"><path d="M512 2.133333C230.4 2.133333 2.133333 232.533333 2.133333 514.133333S230.4 1024 512 1024s509.866667-228.266667 509.866667-509.866667S793.6 2.133333 512 2.133333z m245.333333 392.533334L469.333333 676.266667c-6.4 6.4-14.933333 8.533333-21.333333 8.533333s-17.066667-2.133333-21.333333-8.533333L281.6 533.333333c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l123.733333 119.466667 266.666667-260.266667c12.8-12.8 32-12.8 44.8 0 8.533333 14.933333 8.533333 34.133333-4.266667 46.933334z" :fill="(item.nowStatus)?'#2CD92E': 'none'" p-id="27739"></path></svg>

                        </el-tooltip>
                    </div>
                    <div class="title"><span @click="routerToQuestion(index)">{{ item.titleName }}</span></div>
                    <div class="question-score"><span>{{ item.score }}</span></div>
                    <div class="qtags">
                        <div v-for="(tag, indexs) in item.tags.slice(0, 3)" :key="tag.id" class="qtags-list">
                             {{ tag }}
                        </div>
                    </div>
                </div>
            </div>
       </div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}

    
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
            box-shadow: v-bind(innerShadow);
            // width: fit-content;
            // min-width: 100px;
            display: flex;
            // justify-content: center;
            align-items: center;
            cursor: pointer;
        }   
        .categories-item:hover{
            // background-color: #aba8a8 !important;
            scale: 1.05;
            transition: 0.5s;
            // background-color: rgb(30, 29, 29);
            // color: #C4C4C4;
        }
    }
    .question-list{
        position: relative;
        top: 20px;
        width:800px;
        height: 1500px;
        // display: flex;
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
                gap: 5px;
                cursor: pointer;
            }
            border-bottom: 2px solid #C4C4C4;
        }
        .table-content{ 
            display: flex;
            position: relative;
            width: 100%;
            height: 90%;
            border-radius: 15px;
            // overflow: hidden;
            // padding: 3px 100px;

            // gap: 15px;
            flex-direction: column;
            .table-content-item1{
                position: relative;
                width: 100%;
                height: 50px;
                background-color: #F7F8FA;
                font-size: large;
                display: flex;
                gap: 150px;

            }
            .table-content-item2{
                position: relative;
                width: 100%;
                height: 50px;
                background-color: #FFFFFF;
                font-size: large;
                display: flex;
                gap: 150px;
                // jus
                align-items: center;
            }
            .status{
                // left: 5px;
                position: relative;
                width: 100px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .title{
                position: relative;
                width: 50px;
                display: flex;
                height: 100%;
                justify-content: center;
                align-items: center;
                white-space:nowrap;
                cursor: pointer;
                // text-wrap: wrap;
            }
            .title:hover{
                color: rgb(34, 79, 241);
            }
            .question-score{
                left: 16px;
                position: relative;
                width: 50px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .qtags{
                left: 32px;
                position: relative;
                width: 50px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                // overflow: hidden;   
                .qtags-list{
                    padding: 3px 10px;
                    // width: 20px;
                    height: 50%;
                    display: flex;
                    position: relative;
                    border-radius: 5px;
                    background-color: #C4C4C4;
                    white-space:nowrap;
                }
                .qtags-list:hover{
                    background-color: #9e9d9d !important;
                }
                    
            }
        }
    }
</style>