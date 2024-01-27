
<script setup>
import {ref, onMounted, defineProps} from 'vue'
import uploadBox from '@/components/uploadBox.vue';
const props = defineProps({
    userInfo: Object
})
const userInfoNow = ref({})
const whichSex = ref(0)
const submitLoading = ref(false)
const showUpload = ref(false)
const uploadAvatar = (img) => {
    console.log(img);
    showUpload.value = false
    userInfoNow.value.avatar = 'https://i.imgur.com/JW1rBJD.png'
}
const saveInfo = () => {
    console.log(userInfoNow.value);
}
onMounted(() => {
    userInfoNow.value = props.userInfo
    console.log(showUpload.value);
    let obj = document.getElementsByClassName('sonstyle')[6]
    obj.style.backgroundColor = '#EDEEF0'
    obj.style.color = '#0A84FF'
})
</script>

<template>

    <!-- <uploadBox v-show="false" @uploadAvatar="uploadAvatar"></uploadBox> -->
    <div class="containerssss">
        <div style="display: flex; justify-content: center;" > <img :src="props.userInfo.avatar" style="border-radius: 1000px; display: flex; justify-content: center;" alt=""></div>
        <div  style="position: absolute; width: 30px; height: 30px; border-radius: 1000px; background-color: #E0F4E7; color: #2DB55D; display: flex; justify-content: center; align-items: center; left: 415px; top: 80px; cursor: pointer;"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-green-s dark:text-dark-green-s"><path fill-rule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clip-rule="evenodd"></path></svg>
        </div>
        <div style="display: flex; gap: 15px;">
            <div class="template">
                <div>昵称</div>
                <a-input :style="{width:'372px'}" v-model="userInfoNow.nickName" placeholder="请输入用户昵称" allow-clear />
            </div>
            <div class="template">
                <div>性别</div>
                <div style="display: flex; gap: 5px;">
                    <a-input :style="{width:'167px'}" v-model="userInfoNow.sex" placeholder="请输入性别" allow-clear />
                    <a-input :style="{width:'167px'}" v-model="userInfoNow.sex" placeholder="请输入性别" allow-clear />

                </div>

            </div>
        </div>
        <div style="display: flex; gap: 150px;">
            <div class="template">
                <div>个人简介</div>
                <a-textarea :style="{width:'764px'}" style="height: 200px" v-model="userInfoNow.description" placeholder="Please enter something" allow-clear/>
            </div>
        </div>
        <div style="display: flex;  justify-content: space-between;">
            <div></div>
            <div></div>
            <div>
                <a-button @click="saveInfo()" type="primary" loading>保存</a-button>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>
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