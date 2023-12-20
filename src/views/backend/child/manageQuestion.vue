<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { reactive, onMounted, ref, toRaw, watch } from 'vue'
import {uploadPictureAndFile,downloadPictureURl, uploadQuestion,submitUploadProblem, getTagList} from '@/api/question.js'
import {validateRep, getRep} from '@/utils/repUtils.ts'
import {stringDataToBlob,blobToFile}from '@/utils/fileTransform.js'
import LoginLoading from '@/components/LoginLoading.vue'
import { useManagerAndQuestionStore , useEditStore} from '@/stores'
const props = defineProps(['value'])
const emit = defineEmits(['updateValue'])
const content = ref('')
const myQuillEditor = ref()
const score = ref(1000)
const titleName = ref('chikawa')
const isloading = ref(false)
const drawer = ref(false)
const tagList = ref([])
const tagsContent = ref([])
const EditStore = useEditStore()
const managerAndQuestionStore = useManagerAndQuestionStore()
// 通过watch监听回显，笔者这边使用v-model:content 不能正常回显
watch(() => props.value, (val) => {
  toRaw(myQuillEditor.value).setHTML(val)
}, { deep: true })
const fileBtn = ref()
const data = reactive({
  content: '',
  editorOption: {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'header': 1 }, { 'header': 2 }],
        ['image'],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }]
      ]
    },
    placeholder: '请输入内容...'
  }
})
const imgHandler = (state) => {
  if (state) {
    fileBtn.value.click()
  }
}
// 抛出更改内容，此处避免出错直接使用文档提供的getHTML方法
const setValue = () => {
  const text = toRaw(myQuillEditor.value).getHTML()
}
/**
 * 
 * @param {图片上传} e 
 */
const handleUpload = async(e) => {
  const files = Array.prototype.slice.call(e.target.files)

  // console.log(files, "files")
  if (!files) {
    return
  }
  let nfile = files[0]
  if(nfile.size > 1024 * 1024){
    // console.log('文件过大，请裁剪后在上传');
    ElNotification({
      type: 'warning',
      message: '上传图片过大了,重新裁剪后在上传',
      title: '图片添加失败'
    })
    return 
  }
  const formdata = new FormData()
  console.log(files[0]);
  formdata.append('file', files[0])
  console.log(formdata);
  let rep = await uploadPictureAndFile(formdata)
  if(validateRep(rep)){
    let data = getRep(rep)
    console.log(data);
    let repd =  await downloadPictureURl(data)
    if(validateRep(repd)){
      let url = getRep(repd)
      const quill = toRaw(myQuillEditor.value).getQuill()
      const length = quill.getSelection().index
      console.log(url);
      quill.insertEmbed(length, 'image',url)
      quill.setSelection(length + 1)
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
  var blob = stringDataToBlob(content.value)
  console.log(blob);
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
  }
  let temp = content.value  
  managerAndQuestionStore.setLastQuestion(getRep(rep))
  EditStore.setLastEditQuestion(temp)
  if(type === 2){
    drawer.value = true
  }
  isloading.value = false
    // 保存接口
}
/**
 * @note 寻找需要导入的模板
 */
const insertTemplate = async() => {
  await getTemplate()
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
    console.log({
      tagIdList: tagsContent.value,
      titleName: titleName.value
    });
    let rep = await submitUploadProblem({
      tagIdList: tagsContent.value,
      titleName: titleName.value
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
    } 
  }
  
}
// 初始化编辑器
onMounted(async () => {
  isloading.value = true
  
  tagList.value = getRep(await getTagList())
  ElNotification({
    type: 'success',
    message: '获取中。。。',
    title: '获取上次编辑记录'
  })
  let temp = EditStore.lastEditQuestion;
  if(temp !== null){
    content.value = temp
    console.log(content.value);

  }
  const quill = toRaw(myQuillEditor.value).getQuill()
  if (myQuillEditor.value) {
    quill.getModule('toolbar').addHandler('image', imgHandler)
  }
  isloading.value = false
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
                placeholder="Please input score"
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
    
  <div class="make-css">
  	<!-- 此处注意写法v-model:content -->
    <QuillEditor ref="myQuillEditor"
      theme="snow"
      v-model:content="content"
      :options="data.editorOption"
      contentType="html"
      @update:content="setValue()"
    />
    <!-- 使用自定义图片上传 -->
    <input type="file" hidden accept=".jpg,.png" ref="fileBtn" @change="handleUpload" />
  </div>

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
    display: flex;
    top: 5%;
    flex-direction: column;
    // top: 5%;
    background-color: aliceblue;
    // border-radius: 15px;
}
</style>