<script setup>
import {ref, onMounted, defineProps, defineEmits} from 'vue'
const props = defineProps({
    userInfo: Object
})
const emits = defineEmits(['followUser'])
const followOrNot = (index) => {
    // relativeTalk.value[index].isFollow = !relativeTalk.value[index].isFollow
    emits('followUser', !props.userInfo.isFollow)
    // 发送请求 来 给后台响应数据
}   
onMounted(()=>{
})
</script>

<template>
 <el-popover
    :width="300"
    popper-style="padding: 20px; border-radius: 10px;"
    >
    <template #reference>
        <img style="width: 25px; height: fit-content; display: flex; border-radius: 100000px;" :src="props.userInfo.avatar" alt="">

    </template>
    <template #default>
    <div
        class="demo-rich-conent"
        style="display: flex; gap: 5px; flex-direction: column"
    >
        <div style="display: flex; position: relative; ">
            <el-avatar
            :size="60"
            shape="circle"
            :src="props.userInfo.avatar"
            style="margin-bottom: 8px"
            />
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <span style="position: relative; left: 20px ; font-size: large;">{{ props.userInfo.nickName }}</span>
                <span style="position: relative; left: 20px ; ">全站排名:
                    <span style="position: relative; color: #3FBB6B;">{{ props.userInfo.rank }}</span>
                </span>

                <span style="position: relative; left: 20px ; color: gainsboro">{{ props.userInfo.desription }}</span>
            </div>

        </div>

        <div style="display: flex; position: relative ; gap: 15px; justify-content: center;">
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <span style="color: gray;">关注者</span>
                <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ props.userInfo.beFollow }}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <span style="color: gray;">被点赞数</span>
                <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ props.userInfo.thumbNum }}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <span style="color: gray;">被收藏数</span>
                <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ props.userInfo.favourNum }}</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <span style="color: gray;">被阅读数</span>
                <span style="display: flex; justify-content: center; font-size: larger; color: black;">{{ props.userInfo.reads }}</span>
            </div>
        </div>
        <div @click="followOrNot(index)" style="cursor: pointer; width: 260px; height: 35px; border-radius: 5px; background-color: gainsboro; display: flex; align-items: center;justify-content: center; transition: 0.3s;" :style="props.userInfo.isFollow === false ? 'background-color:#3FBB6B;':'background-color:gainsboro'">
            <span :style="props.userInfo.isFollow === true ? 'color: gray; font-size: larger': 'color: white; font-size: larger'">{{ props.userInfo.isFollow === false ? "+ 关注": "取消关注" }}</span> 
        </div>
    </div>
</template>
</el-popover>

</template>

<style lang="scss" scoped> 


</style>    