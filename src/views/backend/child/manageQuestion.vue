<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { reactive, onMounted, ref, toRaw, watch } from 'vue'

const props = defineProps(['value'])
const emit = defineEmits(['updateValue'])
const content = ref('')
const myQuillEditor = ref()
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
const handleUpload = (e) => {
  const files = Array.prototype.slice.call(e.target.files)
  // console.log(files, "files")
  if (!files) {
    return
  }
  const formdata = new FormData()
  formdata.append('file', files[0])
  backsite.uploadFile(formdata)  // 此处使用服务端提供上传接口
    .then(res => {
      if (res.data.url) {
        const quill = toRaw(myQuillEditor.value).getQuill()
        const length = quill.getSelection().index
        quill.insertEmbed(length, 'image', res.data.url)
        quill.setSelection(length + 1)
      }
    })
}
// 初始化编辑器
onMounted(() => {
  const quill = toRaw(myQuillEditor.value).getQuill()
  if (myQuillEditor.value) {
    quill.getModule('toolbar').addHandler('image', imgHandler)
  }
})
</script>

<template>
    <button class="buttom-item">保存</button>
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
// 调整样式
.buttom-item{
    z-index: 1;
    position: relative;
    font-family: 'my_font';
    color: white;
    // padding: 0.5em 1em;
    
    top: 2%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 150px;
    height: 40px;
    outline: none;
    border: none;
    background-color:  hsl(236, 32%, 26%);   
    overflow: hidden;
    cursor: pointer;
    transition: color 0.4s ease-in-out;
}
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