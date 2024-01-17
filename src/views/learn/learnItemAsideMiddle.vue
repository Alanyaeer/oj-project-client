
<script setup>
import {ref, onMounted} from 'vue'
const relativeTalk = ref(
[
    {
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alaaefnyaeer',
        beFollow : 3,
        thumbNum : 12,
        favourNum : 14,
        reads : 36,
        titleName: 'fhaeifhafef',
        desription: '我是帅哥牙',
        isFollow: false,
        rank: 9999
    },
    {
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaafeeer',
        beFollow : 3,
        thumbNum : 39,
        favourNum : 14,
        reads : 13,
        titleName: 'fhaeifhafef',
        desription: '我是帅哥牙',
        isFollow: true,
        rank: 9999
    },
    {
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaafeeer',
        beFollow : 3,
        thumbNum : 12,
        favourNum : 14,
        reads : 12,
        titleName: 'fhaeifhafef',
        desription: '我是帅哥牙',
        isFollow: false,
        rank: 9999
    },
    {
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaefarer',
        beFollow : 3,
        thumbNum : 37,
        favourNum : 14,
        reads : 9,
        titleName: 'fhaeifhafef',
        desription: '我是帅哥牙',
        isFollow: true,
        rank: 9999
    }
])
const followOrNot = (index) => {
    relativeTalk.value[index].isFollow = !relativeTalk.value[index].isFollow
    // 发送请求 来 给后台响应数据
}   
onMounted(()=>{


})

</script>
<template>
    <div class="top">
        <img style="width: 18px; height: fit-content;" src="https://static.leetcode.cn/cn-mono-assets/production/assets/hot.b04eceef.png" alt="">
        相关讨论
    </div>
    <div class="bottom-wrapper">
        <div class="bottom-item" v-for="(item, index) in relativeTalk" :key="item.id">
            <!-- <img style="border-radius: 1000000px; width: 25px; height: fit-content;" :src="item.avatar" alt=""> -->
            <el-popover
                :width="300"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px; border-radius: 10px"
            >
            <template #reference>
                <img style="width: 25px; height: fit-content; display: flex; border-radius: 1000px;" :src="item.avatar" alt="">

            </template>
            <template #default>
            <div
                class="demo-rich-conent"
                style="display: flex; gap: 16px; flex-direction: column"
            >
                <div style="display: flex; position: relative; ">
                    <el-avatar
                    :size="60"
                    shape="square"
                    :src="item.avatar"
                    style="margin-bottom: 8px"
                    />
                    <div style="display: flex; flex-direction: column; gap: 5px;">
                        <span style="position: relative; left: 20px ; font-size: large;">{{ item.nickName }}</span>
                        <span style="position: relative; left: 20px ; ">全站排名:
                            <span style="position: relative; color: #3FBB6B;">{{ item.rank + "+"}}</span>
                        </span>

                        <span style="position: relative; left: 20px ; color: gainsboro">{{ item.desription }}</span>
                    </div>

                </div>

                <div style="display: flex; position: relative ; gap: 5px; justify-content: center;">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">关注者</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ item.beFollow }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被点赞数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ item.thumbNum }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被收藏数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ item.favourNum }}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <span style="color: gray;">被阅读数</span>
                        <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ item.reads }}</span>
                    </div>
                </div>
                <div @click="followOrNot(index)" style="cursor: pointer; width: 260px; height: 35px; border-radius: 15px; background-color: gainsboro; display: flex; align-items: center;justify-content: center; transition: 0.3s;" :style="item.isFollow === false ? 'background-color:#3FBB6B;':'background-color:gainsboro'">
                   <span :style="item.isFollow === true ? 'color: gray; font-size: larger': 'color: white; font-size: larger'">{{ item.isFollow === false ? "+ 关注": "取消关注" }}</span> 
                </div>
            </div>
            </template>
        </el-popover>
            <div>{{ item.titleName }}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container{

}
.top{
    color: rgba(38,38,38,0.75);
    gap: 15px;
    display: flex;
    position: relative;
    margin-bottom: 10px;
}
.bottom-wrapper{
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;
    // margin-bottom: 10px;
    .bottom-item{
        align-items: center;
        // justify-content: center;
        width: 100%;
        height: 40px;
        padding-left: 5px;
        white-space: nowrap;
        display: flex;
        gap: 10px;
        cursor: pointer;
        color: #454545;
    }
    .bottom-item:hover{
        background-color: #F7F7F8;
    }
}
</style>
