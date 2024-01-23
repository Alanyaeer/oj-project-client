<script setup>
import {ref, onMounted} from 'vue'
const medalList = ref([
    {
        'rank': '3',
    },
    {
        'rank': '4',
    },
    {
        'rank': '5',
    },
    {
        'rank': '6',
    },
    {
        'rank': '7',
    },
    {
        'rank': '8',
    },
    {
        'rank': '9',
    },
    {
        'rank': '10',
    },
])
const userInfoList = ref([
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
{
    avatar: 'https://picsum.photos/60/60',
    nickName: 'alanyaeaere',
    updateTime: '2023-11-2',
    content: 'faeghoagj4fjaeorajfefj4jepfj',
    thumbNum: 32,
    isFollow: false,
    rank: 9999,
    description: 'fajefae',
    replyNum: 8,
    favourNum: 34,
    reads: 313,
    isFavour: false,
    isThumb: true,
    beFollow: 32,
    sonCommentNum: 15,
    attendTime: 3
},
])
</script>

<template>
<div class="container" style="position: relative; top: -10px;">
    <div class="wrapper">
        <div class="item" v-for="(item, index) in medalList.slice(0, 7)">
            <div style="font-size: 15px; align-items: center; display: flex; left: 20px; position: relative; color: #575757;">{{item.rank}}</div>
            <img style="width: 30px; height: 30px; border-radius: 1000px; left: 20px; position: relative;" :src="userInfoList[index].avatar" alt="">
            <div style="display: flex; flex-direction: column; left: 20px; position: relative;">
                <div style="font-size: 15px; color: #FFA116;">{{ userInfoList[index].nickName }}</div>
                <div style="font-size: 10px; color:  #808080;">{{"参加比赛次数" +  userInfoList[index].attendTime }}</div>
            </div>
        </div>
        <div class="item">
            <div style="font-size: 15px; align-items: center; display: flex; left: 12px; position: relative; color: #575757;">{{medalList[7].rank}}</div>
            <img style="width: 30px; height: 30px; border-radius: 1000px; left: 12px; position: relative;" :src="userInfoList[7].avatar" alt="">
            <div style="display: flex; flex-direction: column; left: 12px; position: relative;">
                <div style="font-size: 15px; color: #FFA116;">{{ userInfoList[7].nickName }}</div>
                <div style="font-size: 10px; color:  #808080;">{{"参加比赛次数" +  userInfoList[7].attendTime }}</div>
            </div>
        </div>
    </div>
</div>
    
</template>

<style lang="scss" scoped>
.container{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.15);;
    position: relative;
    width: 345px;
    height: 500px;
    left: 15px;
    background-color: FAFAFA;
    cursor: pointer;
    transition: .4s;
    border-radius: 20px;


    .wrapper{
        display: flex;
        flex-direction: column;

        align-items: center;
        .item{
            align-items: center;
            display: flex;
            gap: 10px;
            position: relative;
            height: 62px;
            width: 345px;
            border-bottom: 1px dotted #dddddd;
        }
        .item:nth-child(1){
            border-radius: 20px 20px 0 0;
        }
        .item:nth-child(8){
            border-radius: 0px 0px 20px 20px;
        }
        .item:hover{
           background-color: #ECF0F1;
        }
    }

}
.container:hover{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.3);
}
</style>