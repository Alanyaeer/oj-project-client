<script setup>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';
import { IconHeart, IconMessage, IconStar } from '@arco-design/web-vue/es/icon';
import {formatDate,  getRelativeTime} from '@/utils/dayUtils'
import { getArticleContent} from '@/api/article'
import {getCommentList,  addComment, followFriend,queryCommentImmediate} from '@/api/user'
import hoverShowImg from '@/components/hoverShowImg.vue'
const router = useRouter()
const inputValue = ref('')
const article = ref({})
const userInfo = ref({})
const commentInfoList = ref({})
const sendCommentFn = async () => {
    let data = {
        content: inputValue.value,
        articleId: article.value.id,
        userId: userInfo.value.id,
        articleType: 1,

    }
    let obj = await addComment(data)
    inputValue.value = ""
    
    // 获取刚刚添加的数据
    console.log(obj);
    if(obj.data === -1) {
        ElNotification({
            type: 'warning',
            title: '发送消息失败',
            message: '发送消息失败，请稍后再试',
        })
    }
    else{
        ElNotification({
            type: 'success',
            title: '发送消息成功',
            message: '发送消息成功',
        })
    }
    let messageGet =  await queryCommentImmediate({id: obj.data})
    commentInfoList.value.unshift(messageGet.data)
}
const goToAllSolve = () => {
    router.go(-1)
}
const followPersonFn = async () => {
    userInfo.value.followPerson = !userInfo.value.followPerson
    let obj = await followFriend({friendId: userInfo.value.id, isNotFollow: !userInfo.value.followPerson})
}
onMounted(async () => {
    // console.log(router.currentRoute.value.params); 
    let key = router.currentRoute.value.params.pid
    let obj = await getArticleContent({id: key})    
    let commentUserObj = await getCommentList({articleId : key, page:1, pageSize: 10, articleType: 1})
    // let commentInfo
    article.value = {
        userInfo: {
            avatar: 'https://picsum.photos/60/60',
            content: 'afjiaejf',
            nickName: 'alanyaeer',
            self: false,
            createTime: '2023-04-20',
            reads: 32,
            followPerson: false
        },
        content: 'fjaifeiafejifjaeifjaeifjaei\n```cpp\n hello world\n```',
        avatar: 'https://picsum.photos/60/60',
        nickName: 'alanyaeer',
        updateTime: '2023-04-20',
        self: false,
        reads: 32,
        comment: 100,
        tags: ['CPP', 'A*'],
        followPerson: false,
        commentList: [
            //反正这里的单个元素就是userInfo返回的数据
            {   avatar: 'https://picsum.photos/60/60',
                nickName: 'ErenYeager',
                content: 'fjaifeiafejifjaeifjaeifjaei',
                createTime: '2023-04-20',
            }
        ]
    }
    console.log(commentUserObj.data);
    commentInfoList.value = commentUserObj.data
    console.log(obj.data);
    article.value = obj.data
    userInfo.value = obj.data.userInfo
})
</script>

<template>
    <div class="containerssss">
        <div class="content">
            <div  class="top">
                <div @click="goToAllSolve" style="display: flex; gap: 8px; cursor: pointer; ">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" width="15" height="15" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z"></path></svg>
                    <div>全部题解</div>
                </div>
            </div>
            <div style="margin-left: 15px;">
                <h3>两数之和</h3>
            </div>
            <div class="middle">
                <div class="middle-item">
                    <img src="https://picsum.photos/60/60" style="height: 35px; width: 35px; border-radius: 1000px;" alt="">
                    <div style="display: flex; flex-direction: column; gap: 5px;">
                        <div style="display: flex; gap: 5px;">
                            <div>{{ userInfo.nickName }}</div>
                            <div @click="followPersonFn" style= "cursor: pointer; align-items: center; display: flex; gap: 3px; color: #62C886;">
                                <div v-show="userInfo.followPerson === false" style="display: flex; gap: 3px; cursor: pointer;">
                                    <svg aria-hidden="true" width="13" height="13" focusable="false" data-prefix="far" data-icon="plus" class="svg-inline--fa fa-plus absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M248 72c0-13.3-10.7-24-24-24s-24 10.7-24 24V232H40c-13.3 0-24 10.7-24 24s10.7 24 24 24H200V440c0 13.3 10.7 24 24 24s24-10.7 24-24V280H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H248V72z"></path></svg>
                                    <div style="font-size: 13px;">  关注</div>
                                </div>
                                <div v-show="userInfo.followPerson === true" style="display: flex; gap: 3px; cursor: pointer;">
                                    <div style="font-size: 13px; color: #8A8A8E;"> 已关注</div>
                                </div>
  
                            </div>
                        </div>
  
                        <div style="display: flex; gap: 4px; color: #A8A8A8;">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-text-tertiary dark:text-text-tertiary"><path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clip-rule="evenodd"></path></svg>
                            <div style="font-size: 12px; display: flex; align-items: center; color: #737373;" >{{ userInfo.reads }}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="h-4 w-4 text-text-tertiary dark:text-text-tertiary"><path fill-rule="evenodd" d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z" clip-rule="evenodd"></path></svg>
                            <div style="font-size: 12px; display: flex; align-items: center; color: #737373;">{{formatDate(article.updateTime, 'YYYY.MM.DD')}}</div>
                            <div style="margin-left: 20px; font-size: 12px; align-items: center; display: flex;">发布于&nbsp;未知归属地</div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 10px; align-items: center; margin-left: 15px; margin-top: 15px;">
                    <div style="border-radius: 10px; padding: 1px 10px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-for="(item, index) in article.tags">{{ item }}</div>
                    <!-- <div style="border-radius: 10px; padding: 1px 10px; background-color: #F2F3F4; color: #4E4E4E; font-size: 12px;" v-if="article.tags.length > 4">{{ article.tags.length - 4 + "+" }}</div> -->
                </div>
                <mavon-editor class="editor" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="article.content" style="position: relative;  border: none; overflow: auto;" />
            </div>
            <div class="bottom">
                <div style="display: flex; justify-content: space-between; width: 95%">
                    <div style="display: flex; justify-content: space-between; width: 100%;">

                        <div style="font-size: 18px; display: flex; gap: 10px; color: #8C8C8C;">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="h-6 w-6 text-gray-6 dark:text-dark-gray-6"><path fill-rule="evenodd" d="M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z" clip-rule="evenodd"></path></svg>
                            <div style="display: flex; align-items: center; font-size: 18px;">评论</div>
                            <div style="display: flex; align-items: center; font-size: 16px; color: #4E4E4E;">{{ "(" + commentInfoList.length + ")" }}</div>
                        </div>
                        <div style="display: flex; align-items: center; color: #4E4E4E; font-size: 11px;">
                            {{ "排序: " + "最热" }}
                        </div>
                    </div>
                </div>
                <div class="talk" >
                    <div class="talk-item">
                        <a-textarea v-model="inputValue"  placeholder="请输入评论" style="min-height: 120px;" auto-size allow-clear/>
                        <div style="display: flex; justify-content: center;">
                            <div style="display: flex; gap: 15px; width: 100%; margin-top: 20px; color: #828282;">
                                <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M13.27 5.02c.456.1.764.562.727 1.06l-.015.116-2.181 12c-.099.541-.578.893-1.07.784-.457-.1-.765-.562-.728-1.06l.015-.116 2.181-12c.099-.541.578-.893 1.07-.784zm4.65.37l.07.096 3.857 6c.178.277.2.614.067.906l-.067.123-3.857 6c-.304.473-.962.627-1.47.342-.47-.264-.646-.812-.425-1.268l.058-.104L19.678 12l-3.525-5.485c-.283-.44-.161-1.001.264-1.307l.103-.065a1.123 1.123 0 011.4.246zm-11.84 0c.3-.365.83-.49 1.28-.305l.12.058.103.065a.96.96 0 01.326 1.194l-.062.113L4.322 12l3.525 5.485.058.104c.221.456.046 1.005-.425 1.268a1.123 1.123 0 01-1.4-.246l-.07-.097-3.857-6-.067-.122a.939.939 0 010-.784l.067-.123 3.857-6 .07-.096z" clip-rule="evenodd"></path></svg>
                                <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M13 7a1 1 0 011-1h2a6 6 0 010 12h-2a1 1 0 110-2h2a4 4 0 000-8h-2a1 1 0 01-1-1zm-3 10a1 1 0 01-1 1H8A6 6 0 018 6h1a1 1 0 010 2H8a4 4 0 100 8h1a1 1 0 011 1zm-1-6h6a1 1 0 110 2H9a1 1 0 110-2z" clip-rule="evenodd"></path></svg>
                                <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="currentColor"><path d="M11.27 6.799l.146-.438c.075-.259.178-.437.308-.534.14-.108.345-.06.615.145.065.054.124.114.178.179a.45.45 0 01.114.226.976.976 0 01.032.373 2.21 2.21 0 01-.13.535l-1.182 3.434c-.054.151-.043.28.032.389a.399.399 0 00.308.146c.087 0 .232-.081.438-.243.205-.173.41-.405.615-.697.216-.292.405-.637.567-1.037a3.63 3.63 0 00.243-1.344c0-.519-.108-1-.324-1.442a3.458 3.458 0 00-.907-1.15 4.033 4.033 0 00-1.345-.778 4.76 4.76 0 00-1.684-.292 4.55 4.55 0 00-1.766.373 5.343 5.343 0 00-2.77 2.738c-.292.659-.438 1.393-.438 2.203 0 .691.13 1.296.389 1.814.26.519.616.95 1.07 1.296.453.335.982.589 1.587.762a7.555 7.555 0 001.96.243 9.97 9.97 0 001.328-.081c.4-.054.783-.151 1.15-.292a5.269 5.269 0 001.07-.6c.345-.258.707-.582 1.085-.971.076-.108.162-.162.26-.162.107-.011.21.01.307.065a.567.567 0 01.243.21.5.5 0 01.13.276.857.857 0 01-.081.55c-.076.162-.26.378-.551.648-.292.27-.61.524-.956.762a6.538 6.538 0 01-1.118.632c-.4.172-.837.307-1.312.405a7.016 7.016 0 01-1.555.162 8.817 8.817 0 01-2.527-.324 6.147 6.147 0 01-2.122-1.021 5.098 5.098 0 01-1.442-1.814c-.357-.735-.535-1.61-.535-2.625 0-1.09.19-2.057.567-2.9.389-.853.891-1.566 1.507-2.138a6.371 6.371 0 012.09-1.328A6.646 6.646 0 019.26 2.7c.875 0 1.674.13 2.398.389.734.259 1.36.62 1.879 1.085.518.465.918 1.02 1.199 1.669.291.648.437 1.36.437 2.138 0 .627-.119 1.237-.356 1.83a5.638 5.638 0 01-.94 1.556c-.389.454-.826.82-1.312 1.102-.486.27-.977.405-1.474.405-.378 0-.675-.087-.891-.26-.216-.172-.378-.437-.486-.793-.346.28-.637.496-.875.648-.238.15-.545.221-.923.21-.443-.01-.8-.102-1.07-.275a1.905 1.905 0 01-.631-.648 2.547 2.547 0 01-.308-.859 5.625 5.625 0 01-.081-.923c0-.465.092-.967.275-1.507.195-.55.46-1.053.794-1.506a4.519 4.519 0 011.247-1.15 2.928 2.928 0 011.62-.47c.227 0 .422.037.584.113.172.076.313.184.42.324.12.13.217.286.292.47.076.173.146.356.211.55zm-2.657 4.374c.324 0 .637-.12.94-.357.313-.248.578-.723.794-1.425.14-.432.243-.746.307-.94.065-.205.103-.373.114-.502.01-.205-.07-.389-.243-.551-.173-.173-.357-.26-.551-.26-.346 0-.659.087-.94.26-.27.173-.502.394-.696.664a3.53 3.53 0 00-.438.907 3.563 3.563 0 00-.178.972c0 .476.092.8.276.972.183.173.388.26.615.26z"></path></svg>
                            </div>
                            <div style="display: flex; gap: 10px; margin-top: 15px;">
                                <div style="white-space: nowrap; display: flex; align-items: center;" :style="inputValue.length > 0 ? 'color: #8A8A8E': 'color: #C4C4C6'">预览</div>
                                <div @click="sendCommentFn" style="cursor: pointer; border-radius: 10px; padding: 8px 10px; align-items: center; display: flex; font-size: 15px; white-space: nowrap;" :style="inputValue.length > 0 ? 'background-color: #2DB55D; color: #FFFFFF': 'color: #F9FDFB; background-color: #96DAAE;'">评论</div>
                            </div>
                        </div>
                        <!-- <input style="width: 100%; height: 29px; border: none; text-align: start;"> -->
                    </div>
                    <div v-if="commentInfoList.length !== 0" class="talk-elem" v-for="(item, index) in commentInfoList" :key="item.id">
                        <div style="display: flex; justify-content: space-between; width: 96%; ">
                            <div style="display: flex; gap: 10px;">
                                <hoverShowImg :userInfo="item.userInfo"></hoverShowImg>
                                <!-- <img src="https://picsum.photos/60/60" alt="" style="display: flex ; align-items: center;width: 32px; height: 32px; border-radius: 1000px;"> -->
                                <div style="display: flex ; align-items: center;">{{item.userInfo.nickName}}</div>
                            </div>
                            <div style="font-size: 12px; color: #8A8A8E; margin-top: 15px; ">
                                {{ getRelativeTime(item.updateTime) }}
                            </div>
                            
                        </div>
                        <div style="display: flex; justify-content: center;">
                            <mavon-editor class="editor" ref="md" previewBackground="#ffffff" :boxShadow="false" :subfield="false" :toolbarsFlag="false" defaultOpen="preview" v-model="item.content" style="position: relative;  border: none; overflow: auto; width: 100%;" />
                        </div>

                    </div>
                    <el-empty v-else description="快去评论吧" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
    .containerssss{
        display :flex;
        flex-direction: column;
        padding: 5px   0px;

        height: 660px;
        .content{

            // height: 400px;
            .top{
                padding-left: 15px;
                height: 25px;
                color: #737373;
                // position: relative;
                position: sticky; 
                top: 0px;
                z-index: 10000;
                background-color: white;
                // align-items: center;
                display: flex;
                gap: 8px;
                border-bottom: 1px solid #0000000f;;
            }
            .middle{
                margin-top: 10px;
                display: flex;
                min-height: 40px;
                flex-direction: column;
                position: relative;
                .middle-item{
                    margin-left: 15px;
                    display: flex;  
                    gap: 10px;
                    align-items: center;
                }
            }
            .bottom{
                display: flex;
                margin-bottom: 20px;
                padding: 0px 15px;
                flex-direction: column;
                width: 100%;

                justify-content: center;
                .talk{
                    display: flex;
                    margin-bottom: 20px;
                    flex-direction: column;
                    .talk-elem{
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin-bottom: 10px;

                        margin-top: 20px;

                    }
                    .talk-item{
                        display: flex;
                        // height: 150px;
                        border-radius: 15px;
                        flex-direction: column;
                        padding: 10px 2.5%;
                        width: 90%;
                        box-shadow: 0px 0px 10px 3px #0000000f;
                        .arco-textarea-wrapper:hover {
                            background-color: transparent; /* 将背景颜色设为透明 */
                            border: none;
                            border-color: initial; /* 将边框颜色设为初始值 */
                            /* 添加其他需要修改的样式 */
                        }
                        .arco-textarea-wrapper:focus-within {
                            background-color: transparent; /* 将背景颜色设为透明 */
                            border: none;
                            /* 添加其他需要修改的样式 */
                        }
                        .arco-textarea-wrapper-focus{
                            background-color: transparent; /* 将背景颜色设为透明 */

                            border: none;
                        }
                        .arco-textarea-wrapper-focus:focus-within{
                            background-color: transparent; /* 将背景颜色设为透明 */

                            border: none;
                        }
                        .arco-textarea-wrapper-focus:focus{
                            background-color: transparent; /* 将背景颜色设为透明 */

                            border: none;
                        }
                        .arco-textarea-wrapper:focus{
                            background-color: transparent; /* 将背景颜色设为透明 */

                            border: none;
                        }
                        .arco-textarea-wrapper{
                            background-color: transparent; /* 将背景颜色设为透明 */

                            border: none;
                        }
                    }
                    // padding: 0 30px;
                    // width: 90%;
                    padding: 0px 15px;
                    display: flex;
                    margin-top: 15px;
                    height: 150px;
                }
            }
        }
        // background-color: aqua;
    }
</style>