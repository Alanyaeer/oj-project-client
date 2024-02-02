<script setup>
import topTabNew from '@/components/topTabNew.vue'
import { Editor, Viewer } from '@bytemd/vue-next'
import {ref, onMounted}from 'vue'
import {getTagList} from '@/api/question'
import { useRouter } from 'vue-router'
import { addArticleFn } from '@/api/article'
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight' // 代码高亮
const plugins = [
    highlight(),
    gfm()
]
const router = useRouter()
const tagsList = ref([])
const titleName = ref('题解标题')
const article = ref({})
const submitArticleFn = async () => {
    if(article.value.content === undefined ||  article.value.content === ''){
        ElNotification({
            type: 'warning',
            title: '请填入文章内容再进行提交',
        })
        return
    }
    if(article.value.titleName === undefined ||  article.value.titleName === ''){
        ElNotification({
            type: 'warning',
            title: '请填入文章标题再进行提交',
        })
        return 
    }
    let data = {
        ...article.value,
        articleType: 1,
        articleId: router.currentRoute.value.params.id
    }
    let st = await addArticleFn(data)
    if(st.data === false){
        ElNotification({
            type: 'warning',
            title: '失败',
            content: '添加文章失败',
        })
    }
    else{
        ElNotification({
            type: 'success',
            title: '成功',
            content: '发布成功',
        })
    }
}
const backToQuestionFn = () => {
    router.push({
        path: '/problems/' + router.currentRoute.value.params.id
    })
}
onMounted(async () => {
    console.log('fiajfei');
    let obj = document.getElementsByClassName('v-note-wrapper')[0].style
    obj.zIndex = 0
    let arcoStyle = document.getElementsByClassName('arco-input-wrapper')[0].style
    arcoStyle.fontSize = '20px !important'
    let arcoInnerStyle = document.getElementsByClassName('arco-input.arco-input-size-medium')[0].style
    arcoInnerStyle.fontSize = '20px !important'
    let objs = await getTagList()
    tagsList.value = objs.data
    // article.value.tags = 
})

</script>
<el-drawer
v-model="drawerShow"
direction="btt"
:with-header="false"
size="60%"
>
</el-drawer>
<template>
    <topTabNew></topTabNew> 
    <div class="containersssss">
        <div style="padding: 0px 150px; background-color: #F7F8FA; position: relative;">
            <div style="height: 150px; width: 100%; background-color: white; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px; position: relative; display: flex; flex-direction: column;">
                <div style="display: flex; position: relative;  justify-content: space-between; padding: 25px 25px;">
                    <div>
                        <a-input v-model="article.titleName" :style="{width:'200px'}" style="height: 40px;" :size="large" placeholder="请输入标题" allow-clear />
                    </div>
                    <div style="display: flex; gap: 5px">
                        <el-button @click="backToQuestionFn" style="height: 30px; color: rgb(67, 67, 67);">取消</el-button>
                        <el-button @click="submitArticleFn" color="#2DB55D" style="height: 30px; display: flex; align-items: center;"> 
                            <div style="color: rgb(255, 255, 255); display: flex; justify-content: space-evenly; align-items: center; gap: 5px;"> 
                            <svg t="1705561412766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4236" width="18"  height="18"><path d="M260.315429 711.789714l328.923428-328.923428a36.717714 36.717714 0 1 1 51.931429 51.931428l-233.654857 233.618286 181.723428 181.686857L848.822857 175.213714 173.897143 434.761143l129.828571 129.828571-51.931428 51.894857-167.899429-167.862857a36.717714 36.717714 0 0 1 12.653714-60.196571L900.827429 75.702857a36.717714 36.717714 0 0 1 47.542857 47.506286L635.574857 927.451429a36.717714 36.717714 0 0 1-60.16 12.653714l-219.794286-219.794286-21.577142 21.577143 41.947428 72.667429a36.717714 36.717714 0 1 1-63.561143 36.681142L238.994286 724.114286l21.321143-12.288z" fill="rgb(255, 255, 255)" p-id="4237"></path></svg>
                            <div>发布题解</div>
                            </div>
                        </el-button>
                    </div>
                </div>
                <div style="display: flex; position: relative;  justify-content: space-between; padding: 0px 25px;">
                    <a-select  :style="{width:'300px'}"
                                placeholder="添加标签" multiple :max-tag-count="4" v-model="article.tags" allow-clear allow-create :scrollbar="true" style=" z-index: 100000;">
                        <a-option v-for="(item, index) in tagsList" :key="item.id" style="z-index: 10000;">{{ item.label }}</a-option>
                    </a-select>
                </div>
            <div>

        </div>
        
    </div>
            <mavon-editor ref="md" v-model="article.content" toolbarsBackground="#FFFFFF" @imgAdd="handleUpload" style="position: relative; top: 0px; height: calc(100vh - 205px)" />
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containersssss{
    position: relative;
    display: flex;
    flex-direction: column;
    .arco-input-wrapper:hover {
        background-color: transparent; /* 将背景颜色设为透明 */
        border: none;
        border-color: initial; /* 将边框颜色设为初始值 */
        /* 添加其他需要修改的样式 */
    }
    .arco-input-wrapper:focus-within {
        background-color: transparent; /* 将背景颜色设为透明 */
        border: none;
        /* 添加其他需要修改的样式 */
    }
    .arco-input-wrapper-focus{
        background-color: transparent; /* 将背景颜色设为透明 */

        border: none;
    }
    .arco-input-wrapper-focus:focus-within{
        background-color: transparent; /* 将背景颜色设为透明 */

        border: none;
    }
    .arco-input-wrapper-focus:focus{
        background-color: transparent; /* 将背景颜色设为透明 */

        border: none;
    }
    .arco-input-wrapper:focus{
        background-color: transparent; /* 将背景颜色设为透明 */

        border: none;
    }
    .arco-input-wrapper{
        background-color: transparent; /* 将背景颜色设为透明 */
        font-size: 20px !important;
        border: none;
        // color: #C4C4C6;
    }
    .arco-input-wrapper .arco-input.arco-input-size-medium {
        font-size: 20px !important;
    }
    .arco-input.arco-input-size-medium{
        font-size: 20px !important;

    }
}
</style>