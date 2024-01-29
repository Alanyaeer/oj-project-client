
<script setup>
import {ref, onMounted, defineProps} from 'vue'
import uploadBox from '@/components/uploadBox.vue';
import {updateProfile} from '@/api/user'
import steamLoading from '@/components/steamLoading.vue'
import {funLoading} from '@/utils/loading'
import imgLoader from '@/components/imgLoader.vue';
const props = defineProps({
    userInfo: Object
})
const userInfoNow = ref({})
const whichSex = ref(0)
const submitLoading = ref(false)
const uploadPicLoading = ref(false)
const beginLoading = ref(true)
const showUpload = ref(false)
const headers = ref()
const uploadAvatar = (e) => {
    console.log(e);
}
const saveInfo = async () => {
    let _fn = funLoading(submitLoading, updateProfile);
    //  await updateProfile(userInfoNow)
    var objs = props.userInfo
    let c = {
        ...objs
    }
    let obj = await _fn(c)
    if(obj.code === 200){
        ElNotification({
            title: 'save',
            message: '保存信息成功',
            type: 'success',
        })
    }
}
const clickSex = (type) => {
    props.userInfo.sex = type
}
// 选择了谁 如果 当前等于这个
const judgeSexColor = (sex) => {
    if(props.userInfo.sex=== null ||  sex !== props.userInfo.sex) return { color: '#5A5A5A', backgroundColor: '#F7F7F7'} 
    else {
        if(sex === '0') return { color: '#1384FF', backgroundColor: '#EBF5FF'};
        else return { color: '#FF74D3', backgroundColor: '#FFEEF9'}
    }
}
const uploadAvatarSuccessMethod = (fileItem) => {
    if(fileItem.response.data === 'failure') {
        ElNotification({
            title: 'error',
            message: '上传头像失败',
            type: 'error',
        })
        return;
    }
    else{
        props.userInfo.avatar = fileItem.response.data
        console.log(fileItem.response.data);
    }
    setTimeout(() => {
        uploadPicLoading.value = false
    }, 1000)

}
const beginUploadImg = (fileItem) => {
    console.log(fileItem);
    if(fileItem[0].status === 'done')
    uploadPicLoading.value = true

}
const uploadAvatarFailedFun = (fileItem) => {
    uploadPicLoading.value = false 
    ElNotification({
        type: 'info',
        title: '失败',
        content: '上传图片失败'
    })
}
onMounted(() => {
    let obj = document.getElementsByClassName('sonstyle')[6]
    obj.style.backgroundColor = '#EDEEF0'
    obj.style.color = '#0A84FF'
    headers.value = {
        'token': localStorage.getItem('token'),
        'attack-code' : "Eren_yeager"
    }
    setTimeout(() => {  
        beginLoading.value = false  
    }, 2000)
})
</script>

<template>

    <!-- <uploadBox v-show="showUpload" ></uploadBox> -->
    <div class="containerssss">

        <el-skeleton   :loading="uploadPicLoading" animated>
            <template #template>
               <div style="display: flex; justify-content: center;">
                    <el-skeleton-item variant="image" style="width: 120px; height: 120px; border-radius: 1000px;"></el-skeleton-item>
                </div> 
            </template>
            <template #default>
                <div style="display: flex; justify-content: center;" >
                    <img :src="props.userInfo.avatar" style="width: 120px; height: 120px; border-radius: 1000px; display: flex; justify-content: center;" alt="">
                    <imgLoader v-show="uploadPicLoading"></imgLoader>
                </div>
            </template>
        </el-skeleton>
        <a-popover>
            <div  style="position: absolute; width: 30px; height: 30px; border-radius: 1000px; background-color: #E0F4E7; color: #2DB55D; display: flex; justify-content: center; align-items: center; left: 415px; top: 80px; cursor: pointer;"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
            </div>
            <template #content>
                <div style="display: flex; flex-direction: column; justify-content: center; top: 15px;">
                    <div style="font-size: 14px; color: #2DB55D; text-align: center;">上传头像</div>
                        <a-upload accept="image/png, image/jpeg" style="display: flex; justify-content: center;"  @error="uploadAvatarFailedFun" @change="beginUploadImg"  @success="uploadAvatarSuccessMethod"  action="/api/questionAndPictrueCommon/uploadAndGetUrl"  :headers="headers" />
                </div>
            </template>
        </a-popover>
        <div style="display: flex; gap: 15px;">
            <div class="template">
                <div>昵称</div>
                <a-input :style="{width:'372px'}" style="height: 35px;" v-model="props.userInfo.nickName" placeholder="请输入用户昵称" allow-clear />
            </div>
            <div class="template">
                <div>性别</div>
                <div style="display: flex; gap: 10px;">
                    <!-- <a-input style="width: 190px;" v-model="userInfoNow.sex" placeholder="请输入性别" allow-clear /> -->
                    <!-- <a-input style="width: 190px;" v-model="userInfoNow.sex" placeholder="请输入性别" allow-clear /> -->
                    <div @click="clickSex('0')" style="cursor: pointer; display: flex; border-radius: 5px; width:170px; height: 25px; padding: 5px 10px" :style="judgeSexColor('0')">
                        <div style="display: flex; gap: 5px; align-items: center;" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-blue-s dark:text-dark-blue-s mr-[6px]"><path fill-rule="evenodd" d="M17.022 5.564h-2.586a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V6.978L16.17 9.243a7.001 7.001 0 01-10.557 9.143 7 7 0 019.143-10.557l2.265-2.265zM14.1 9.9a5 5 0 10-7.071 7.072 5 5 0 007.07-7.072z" clip-rule="evenodd"></path></svg>
                            <div>男性</div>
                        </div>    
                    </div>
                    <div @click="clickSex('1')" style="cursor: pointer; display: flex; border-radius: 5px; width:170px; height: 25px; padding: 5px 10px; " :style="judgeSexColor('1')">
                        <div style="display: flex; gap: 5px; align-items: center;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="text-pink-1 dark:text-pink-1 mr-[6px]"><path fill-rule="evenodd" d="M13 15.93V17h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2v-1.07A7.001 7.001 0 0112 2a7 7 0 011 13.93zM12 14a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd"></path></svg>
                            <div>女性</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div style="display: flex; gap: 150px;">
            <div class="template">
                <div>个人简介</div>
                <a-textarea :style="{width:'764px'}" style="height: 200px" v-model="props.userInfo.description" placeholder="请输入个人简介" allow-clear/>
            </div>
        </div>
        <div style="display: flex;  justify-content: space-between;">
            <div></div>
            <div></div>
            <div>
                <a-button @click="saveInfo()" type="primary" :loading="submitLoading">保存</a-button>
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
.containerssss{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .template{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 14px;
        color: #5C5C5C;
    }
}
</style>