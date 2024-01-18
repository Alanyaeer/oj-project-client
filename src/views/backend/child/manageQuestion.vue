<script setup>
import {ref,onMounted,toRaw, watch ,onBeforeUnmount} from 'vue'
import {uploadPictureAndFile,downloadPictureURl, uploadQuestion,submitUploadProblem, getTagList,  getTemQuestion, getLanguageList,getLastEdit } from '@/api/question.js'
import {validateRep, getRep} from '@/utils/repUtils.ts'
import {stringDataToBlob,blobToFile}from '@/utils/fileTransform.js'
import LoginLoading from '@/components/LoginLoading.vue'
import { useManagerAndQuestionStore , useEditStore} from '@/stores'
const props = defineProps(['value'])
const emit = defineEmits(['updateValue'])
const titleName = ref('chikawa')
const isloading = ref(false)
const drawer = ref(false)
const tagList = ref([])
const tagsContent = ref([])
const EditStore = useEditStore()
const score = ref()
const managerAndQuestionStore = useManagerAndQuestionStore()
const article = ref({})
const md = ref()
const languageConfig = ref([])
const languageList = ref([])
const judgeConfig = ref({})
const judgeCase = ref({})
const judgeCaseList = ref([])
// 通过watch监听回显，笔者这边使用v-model:content 不能正常回显
/**
 * 
 * @param {图片上传} e 
 */
const handleUpload = async(pos, file) => {
  console.log(pos);
  // console.log(files, "files")
  if (!file) {
    return
  }
  if(file.size > 1024 * 1024){
    // console.log('文件过大，请裁剪后在上传');
    ElNotification({
      type: 'warning',
      message: '上传图片过大了,重新裁剪后在上传',
      title: '图片添加失败'
    })
    return 
  }
  const formdata = new FormData()
  formdata.append('file', file)
  let rep = await uploadPictureAndFile(formdata)
  if(validateRep(rep)){
    let data = getRep(rep)
    console.log(data);
    let repd =  await downloadPictureURl(data)
    if(validateRep(repd)){
      let url = getRep(repd)
      console.log(url);
      md.value.$img2Url(pos, url)
      // article.value.articleContent
      // article.value
      // this.$refs.md.$img2Url(pos, url);
      // article.value.$img2Url(pos, url); 
    }
    else {
      ElNotification({
        type: 'warning',
        message: '获取文件地址失败',
        title: '获取文件地址失败'
      })
    }

  } 
  else{
    ElNotification({
      type: 'warning',
      message: '上传文件失败',
      title: '上传文件失败'
    })
    return 
  }
}
/**
 * @note {保存文件}
 */
const savefile = async(type)=>{
  isloading.value = true
  var blob = stringDataToBlob(article.value.articleContent)
  var file = blobToFile(blob, titleName.value + '.html')
  console.log(file);
  let formdata = new FormData()
  formdata.append('file', file)
  console.log(formdata);
  let rep = await uploadQuestion(formdata)
  if(validateRep(rep)){
    ElNotification({
        type: 'success',
        message: '文件保存到云端',
        title: '文件保存'
      })
  }
  else {
    ElNotification({
        type: 'warning',
        message: '上传文件失败',
        title: '上传失败'
      })
      isloading.value = false
      return 
  }
  //TODO 这里可能存在一些小问题
  // managerAndQuestionStore.setLastQuestion(getRep(rep))
  if(type === 1){
    // EditStore.setLastEditQuestion(article.value.articleContent)
    EditStore.lastEditQuestion = article.value.articleContent
    // lastEditQuestion
  }
  if(type === 2){
    EditStore.lastEditQuestion = ''
    // EditStore.setLastEditQuestion('')
    drawer.value = true
  }
  isloading.value = false
    // 保存接口
}
/**
 * @note 寻找需要导入的模板
 */
const insertTemplate = async() => {
  article.value.articleContent = getRep(await getTemQuestion())
  ElNotification({
    type: 'success',
    message: '题目模板',
    title: '获取题目模板'
  })
  // getTemplate(1)
}

/**
 * @note 记住要利用pinia来继续文件存储
 */
const confirmClick = async(type) => {
  console.log('保存成功');
  // 存储记录
  drawer.value = false
  if(type === 1){
    // 开始保存数据
    if(judgeCase.value.input !== '' && judgeCase.value.output !== ''){
      judgeCaseList.value.push({
        input: judgeCase.value.input,
        output: judgeCase.value.output
      })
      judgeCase.value.input = ''
      judgeCase.value.output = ''
    }
    console.log({
      tags: tagsContent.value,
      titleName: titleName.value,
      language: languageConfig.value,
      judgeCase: judgeCaseList.value,
      judgeConfig: judgeConfig.value,
    });
    let rep = await submitUploadProblem({
      tags: tagsContent.value,
      titleName: titleName.value,
      language: languageConfig.value, 
      judgeConfig: judgeConfig.value,
      judgeCase: judgeCaseList.value
    })
    if(validateRep(rep)){
        let tf = rep.data
        if(tf === false){
          ElNotification({
            type: 'warning',
            message: '题目名称可能重复',
            title: '题目上交失败'
          })
        }
        else {
          ElNotification({
            type: 'success',
            message: '成功',
            title: '题目上交成功'
          })
        }
    } 
  }
  judgeCaseList.value = []
}
const addNextCase = () =>{
  if(judgeCase.value === '' || judgeCase.value === null) {
    ElNotification({
      type: 'warning',
      message: '请输入判题代码',
      title: '判题代码不能为空'
    })
    return 
  }
  let obj = {
  
  }
  Object.assign(obj,judgeCase.value)
  console.log(obj);
  judgeCaseList.value.push(obj)
  judgeCase.value.input = ''
  judgeCase.value.output = ''
}
// 初始化编辑器
onMounted(async () => {
  isloading.value = true
  
  tagList.value = getRep(await getTagList())
  ElNotification({
    type: 'success',
    message: '获取中。。。🥳',
    title: '获取上次编辑记录'
  })
  let temp = EditStore.lastEditQuestion;
  if(temp !== null && temp !== ""){
    article.value.articleContent = temp
  }
  else{
    let temp =  await getLastEdit()
    if(validateRep(temp)){
      article.value.articleContent = getRep(temp)
      // EditStore.lastEditQuestion = getRep(temp)
    }
    else{
      article.value.articleContent = getRep(await getTemQuestion())
    }
    
        // 调用服务器来查找当前最新的记录， 然后再保存记录


  }
  // 获取语言列表
  languageList.value = getRep(await getLanguageList());
  isloading.value = false
  setTimeout(()=>{
    isloading.value = false
  }, 10000)
})
onBeforeUnmount(()=>{
    isloading.value = true
})
</script>

<template>
   <LoginLoading :isshow="isloading"></LoginLoading>
   <el-drawer v-model="drawer" >
      <template #header>
      <div style="display: flex; flex-direction: column;">
          <!-- <h4>恢复或添加用户</h4> -->
          <span style="font-size:xx-large; color: black">补充题目信息</span>
      </div>

      </template>
      <template #default>
        <div style="display: flex; flex-direction: column; position: relative; gap: 50px;">
          <div style="display: flex;">
            <span>题目标题</span>
            <el-input
                style="width: 200px; position: relative; left: 16%;"
                v-model="titleName"
                placeholder="Please input titleName"
            /> 
          </div>
          <div style="display: flex;">
            <span>题目分数</span>
            <el-input
                style="width: 200px; position: relative; left: 16%;"
                v-model="score"
                placeholder="Please input score Between 1000 and 3000"
            /> 
          </div>
          <div style="display: flex;">
            <span>题目标签</span>
            <el-select
              v-model="tagsContent"
              multiple
              collapse-tags
              collapse-tags-tooltip
              :max-collapse-tags="3"
              placeholder="选择题目的标签"
              style="width: 200px; position: relative; left: 16%;"
            >
              <el-option
                v-for="item in tagList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="display: flex;">
            <span>语言限制</span>
            <el-select
              v-model="languageConfig"
              multiple
              collapse-tags
              collapse-tags-tooltip
              :max-collapse-tags="3"
              placeholder="可提交的语言"
              style="width: 200px; position: relative; left: 16%;"
            >
              <el-option
                v-for="item in languageList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div style="display: flex;">
            <span>题目限制</span>
            <el-form :model="judgeConfig" label-width="160px" >
              <el-form-item label="空间限制(KB)">
                <el-input v-model="judgeConfig.memoryLimit" /> 
              </el-form-item>
              <el-form-item label="时间限制(ms)">
                <el-input v-model="judgeConfig.timeLimit" /> 
              </el-form-item>
              <el-form-item label="堆栈限制(KB)">
                <el-input v-model="judgeConfig.stackLimit" /> 
              </el-form-item>
            </el-form>
            
          </div>
          <div style="display: flex; ">
              <span>判题用例</span>
              <el-form :model="judgeCase" label-width="160px">
                <el-form-item label="输入用例">
                  <el-input :rows="8" v-model="judgeCase.input" type="textarea" />
                </el-form-item>
                <el-form-item label="输出用例">
                  <el-input :rows="8" v-model="judgeCase.output" type="textarea" />
                </el-form-item>
              </el-form>

            </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div></div>
          <el-button style="position: relative;" @click="addNextCase" type="primary">添加下一个用例</el-button>

        </div>
        
        

      </template>
      <template #footer>
      <div style="flex: auto">
          <el-button @click="confirmClick(2)">cancel</el-button>
          <el-button type="primary" @click="confirmClick(1)">confirm</el-button>

      </div>
      </template>
  </el-drawer>
  <div class="top">
    <button @click="savefile(1)" class="buttom-item">保存</button>
    <button @click="savefile(2)" class="buttom-item">提交</button>
    <button @click="insertTemplate" class="buttom-item">导入模板</button>
  </div>
   <mavon-editor ref="md" v-model="article.articleContent" toolbarsBackground="#F6F8FF" @imgAdd="handleUpload" style="position: relative; top: 30px; height: calc(100vh - 160px)" />
    
</template>

<style lang="scss" scoped>
.top{
  width: 700px;
  justify-content: space-between;
  display: flex;
  position: relative;
  top: 3%;
  .buttom-item{
    z-index: 1;
    position: relative;
    font-family: 'my_font';
    color: rgb(113, 108, 108);
    // padding: 0.5em 1em;
    
    top: 2%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background-color:  #D4D7E5;   
    overflow: hidden;
    cursor: pointer;
    transition: color 0.4s ease-in-out;
}
}
// 调整样式

.buttom-item::after{
    content: '';
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
}
.buttom-item::before{
    content: '';
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #CFD6EB;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
}
.buttom-item:hover{
    cursor: pointer;
    scale: 1.1;
    color: #161616;
}
.buttom-item:hover::before{
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
.make-css{
    position: relative;
    min-height: 85%;
    max-height: 500px;
    display: flex;
    top: 5%;
    flex-direction: column;
    // top: 5%;
    background-color: aliceblue;
    // border-radius: 15px;
}
</style>