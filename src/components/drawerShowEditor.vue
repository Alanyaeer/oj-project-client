<script setup>
import {ref, onMounted, defineProps, defineEmits, watch} from 'vue'
const props = defineProps({
  drawer: Boolean,
  nickName: String  
})
const drawerShow = ref(false)
const article = ref({})
const emits = defineEmits(['closeDrawer', 'sendMessage'])
const closedrawer = () => {
  emits('closeDrawer')
}
const sendMsg = () => {
  emits('sendMessage', article.value.articleContent)
  closedrawer()
}
watch(() => drawerShow, 
    () => {
      if(drawerShow.value === false) closedrawer()
    },
    {deep: true}
)
watch(() => props.drawer,
  () => {
    drawerShow.value = props.drawer
  })  
onMounted(()=>{
})
</script>

<template>
  <el-drawer
    v-model="drawerShow"
    direction="btt"
    :with-header="false"
    size="60%"
  >
    <div class="container">
      <div class="top">
        <div class="font"> 
          <div style="color: #C4C4C4;">回复</div>
          <div style="color: #919191;"> {{ " @" +  props.nickName }} </div>
        </div>
        <div class="button">
          <el-button @click="closedrawer" style="height: 30px; color: rgb(67, 67, 67);">取消</el-button>
          <el-button @click="sendMsg" color="#2DB55D" style="height: 30px; display: flex; align-items: center;"> 
            <div style="color: rgb(255, 255, 255); display: flex; justify-content: space-evenly; align-items: center; gap: 5px;"> 
              <svg t="1705561412766" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4236" width="18"  height="18"><path d="M260.315429 711.789714l328.923428-328.923428a36.717714 36.717714 0 1 1 51.931429 51.931428l-233.654857 233.618286 181.723428 181.686857L848.822857 175.213714 173.897143 434.761143l129.828571 129.828571-51.931428 51.894857-167.899429-167.862857a36.717714 36.717714 0 0 1 12.653714-60.196571L900.827429 75.702857a36.717714 36.717714 0 0 1 47.542857 47.506286L635.574857 927.451429a36.717714 36.717714 0 0 1-60.16 12.653714l-219.794286-219.794286-21.577142 21.577143 41.947428 72.667429a36.717714 36.717714 0 1 1-63.561143 36.681142L238.994286 724.114286l21.321143-12.288z" fill="rgb(255, 255, 255)" p-id="4237"></path></svg>
              <div>回复讨论</div>
            </div>
          </el-button>
        </div>
      </div>
      <div class="bottom">

        <mavon-editor ref="md"  :boxShadow="true" :subfield="true"  v-model="article.articleContent" style="position: relative; height: 370px;" />

        <!-- // 放入编辑器 -->
      </div>
    </div>
  </el-drawer>
</template>

<style lang="scss" scoped>
.container{
  .top{
    position: relative;
    top: -10px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    align-items: center;;
    .font{
      color: gray;
      display: flex;
      gap: 5px;
      position: relative;
      
      font-size: 18px;
    }
    .button{
      width: 150px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>