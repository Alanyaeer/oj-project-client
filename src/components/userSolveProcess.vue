<script setup>
// 计算公式还没有搞明白
import {ref, onMounted} from 'vue'
import {picLoading, funLoading} from '@/utils/loading'
import {getPersonSubmitNumMsg, getPersonSolvePbMsg,getAllSubmitNumMsg, getAllProblemMsg} from '@/api/question'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')  
const green = ref('#00AF9B')
const organ = ref('#FFC08C')
const red = ref('#FF2D55')
const loading = ref(true)
const getInfo = ref([
{
    tag: '简单',
    num:0,
    totalNum: 0
},
{
    tag: '中等',
    num: 0,
    totalNum:0
},
{
    tag: '困难',
    num: 0,
    totalNum:0
},
])
const allRadio = ref('')
const allDot = ref('')
const easyRadio = ref('')
const easyDot = ref('')
const middleRadio = ref('')
const middleDot = ref('')
const hardRadio = ref('')
const hardDot = ref('')
const showPass = ref(0)
const color = ref('#B0B0AF')
const threeColor = ref(['#00AF9B','#FFA116','#FF2D55'])
const allQuestion = ref(0)
const allPassQuestion = ref(0)
const totalProgressLength = ref(316.6725394728)
const easyLine = ref(0)
const middleLine = ref(0)
const hardLine = ref(0)
function changeShowType(type){
    showPass.value = type
}
const changeColor = () => {
    if(showPass.value === 1) {
        return 'color: #1C1C1C;'
    }
    else if(showPass.value === 2){
        return 'color: #00AF9B;'
    }
    else if(showPass.value ===3 ){
        return 'color: #FFA116;'
    }
    else if(showPass.value === 4){
        return 'color: #FF2D55;'
    }
}
const passRadioFun = (refValue, refDotValue ,submitNum, passNum) => {
    if(submitNum === 0){
        refValue.value = 0
        refDotValue.value = '.0%'
    }
    else{
        let result  = ((passNum * 100) /submitNum).toFixed(1)
        refValue.value = result.substring(0, result.indexOf('.'))
        refDotValue.value = result.substring(result.indexOf('.'), result.length) + '%'
    }
   
}
const funRadio = () => {
    if(showPass.value === 1)return allRadio.value
    else if(showPass.value === 2)return easyRadio.value
    else if(showPass.value === 3) return middleRadio.value
    else return hardRadio.value
}
const funDot = () => {
    if(showPass.value === 1)return allDot.value
    else if(showPass.value === 2)return easyDot.value
    else if(showPass.value === 3) return middleDot.value
    else return hardDot.value
}
const strokeDasharray = (type) => {
    if(type === 0){
        return (easyLine.value ) + ' ' + (totalProgressLength.value - easyLine.value + 1) 
    }
    else if(type === 1){
        return (middleLine.value ) + ' ' + (totalProgressLength.value - middleLine.value + 1)
    }
    else{
        return (hardLine.value ) + ' ' + (totalProgressLength.value - hardLine.value + 1)
    }
}
const strokeDashoffset = (type) => {
    if(type === 0) {
        return 79.1681348682
    }
    else if(type === 1){ 
        return -1 * easyLine.value + 79.1681348682
    }
    else{
        return -1 * (middleLine.value + easyLine.value) + 79.1681348682
    }
}
onMounted(async () => {
   let reps = await getPersonSolvePbMsg()
   let repPb = await  getAllProblemMsg()

   let fn =  funLoading(loading, getPersonSubmitNumMsg)
   let rep = await fn()
   for(let i = 0; i < 3; ++i){
        getInfo.value[i].num = reps.data[i].passNum
        getInfo.value[i].totalNum = repPb.data[String(i)]
        allQuestion.value += repPb.data[String(i)]
        allPassQuestion.value += reps.data[i].passNum
   }
   let tryNumTotal = rep.data[0].tryNum + rep.data[1].tryNum + rep.data[2].tryNum
   let passNumTotal = rep.data[0].passNum + rep.data[1].passNum + rep.data[2].passNum
   // dataShow
   passRadioFun(easyRadio, easyDot, rep.data[0].tryNum, rep.data[0].passNum)
   passRadioFun(middleRadio, middleDot, rep.data[1].tryNum, rep.data[1].passNum)
   passRadioFun(hardRadio, hardDot, rep.data[2].tryNum, rep.data[2].passNum)
   passRadioFun(allRadio, allDot, tryNumTotal, passNumTotal)
   easyLine.value =  (reps.data[0].passNum  * 316.6725394728) / allQuestion.value
   middleLine.value = (reps.data[1].passNum * 316.6725394728) / allQuestion.value
   hardLine.value = (reps.data[2].passNum * 316.6725394728) / allQuestion.value
   
})
</script>

<template>
    <div class="item">
        <div class="item-processor">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <el-skeleton-item variant="image" style="width: 120px; height: 120px; border-radius: 1000px;" />
                </template>
                <template #default>
                    <svg height="120px" width="120px">
                        <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" stroke="#DFDFDF"  fill="none"/>
                        <circle v-if="getInfo[0].num!==0" @mouseover="changeShowType(2)" @mouseleave="changeShowType(0)" cx="60px" cy="60px" r="50.4px" :stroke-width="showPass === 2 ? '9' : '5'" stroke-linecap="round" stroke="#00AF9B" :stroke-dasharray=strokeDasharray(0) :stroke-dashoffset=strokeDashoffset(0) fill="none"/>
                        <circle v-if="getInfo[1].num!==0" @mouseover="changeShowType(3)" @mouseleave="changeShowType(0)" cx="60px" cy="60px" r="50.4px" :stroke-width="showPass === 3 ? '9' : '5'" stroke-linecap="round" stroke="#FFA116" :stroke-dasharray=strokeDasharray(1) :stroke-dashoffset=strokeDashoffset(1) fill="none"/>
                        <circle v-if="getInfo[2].num!==0" @mouseover="changeShowType(4)" @mouseleave="changeShowType(0)" cx="60px" cy="60px" r="50.4px" :stroke-width="showPass === 4 ? '9' : '5'" stroke-linecap="round" stroke="#FF2D55" :stroke-dasharray=strokeDasharray(2) :stroke-dashoffset=strokeDashoffset(2) fill="none"/>
                        <!-- <circle @mouseover="changeShowType(2)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 2 ? '9' : '5'" stroke-linecap="round" stroke="#00AF9B" stroke-dasharray="21.907286758913628 281.986496142629" stroke-dashoffset="65" fill="none"/>
                        <circle @mouseover="changeShowType(3)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 3 ? '9' : '5'" stroke-linecap="round" stroke="#FFA116" stroke-dasharray="41.182602670466615 268.711180231076" stroke-dashoffset="45.092713241086372" fill="none"/>
                        <circle @mouseover="changeShowType(4)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 4 ? '9' : '5'" stroke-linecap="round" stroke="#FF2D55" stroke-dasharray="19.275315911552983 284.61846698998966" stroke-dashoffset="-2" fill="none"/> -->
                    </svg>
                    <div class="svg-middle" @mouseover="changeShowType(1)" @mouseleave="changeShowType(0)">
                        <div v-show="showPass === 0" class="up"><div style="font-size: 12px; color: #8A8A8E;">全部</div></div>
                        <div v-show="showPass === 0" class="mi"><div style="font-size:25px;">{{allPassQuestion}}</div></div>
                        <div v-show="showPass === 0" class="do"><div style="color: #8A8A8E; font-size: small;">{{allQuestion}}</div></div>
                        <div v-show="showPass !== 0" style="display: flex; flex-direction: column; justify-content: center; position: relative; left: 14px; top: 7px;"> 
                            <div  style="display: flex; font-size: 20px;" :style="changeColor()">{{ funRadio()  }}<div style="font-size: 10px; top: 10px; position: relative;">{{funDot()}}</div></div>
                            <div style="color: #8A8A8E; font-size: 12px; position: relative; left: -10px;">提交通过率</div>
                        </div>
                    </div>
                </template>
            </el-skeleton>
            <!-- <svg width="100%" height="100%">
                <circle cx="50%" cy="50%" r="45%"></circle>
            </svg> -->
            <!-- 后续在解决这里的数据问题 -->

        </div>
        <div class="item-digest-wrapper">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <el-skeleton-item variant="text" style="position: relative; top: 15px;  width: 121.75px; height: 25px;" />
                    <el-skeleton-item variant="text" style="position: relative; top: 30px;  width: 121.75px; height: 50px;" />
                </template>
                <template #default>
                    <div v-for="(item, index) in getInfo" :key = item.id class="item-digest">
                        <div class="item-digest-up-tag">
                            <div :style="{ color: threeColor[index] }">{{item.tag}}</div> 
                        </div>
                        <div class="item-digest-down-num">
                            <div>{{ item.num }}</div>
                        </div>
                        <div class="item-digest-down-down">
                            <div>{{ item.totalNum }}</div>
                        </div>
                    </div>
                </template>
            </el-skeleton>
           
        </div>
    </div>  

</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.item{
    width: 290px;
    height: 165px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
    .item-processor{
        width: 45%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-middle{
            position: absolute;
            width: 60px;
            height: 60px;
            gap: 5px;
            .up{
                display: flex;
                justify-content: center;
                position: relative;
            }
            .do{
                position: relative;
                display: flex;
                width: 30px;
                left: 16px;
                justify-content: center;
                border-top: 2px solid  rgb(210, 217, 223) ;
                top: 3px;

            }
            .mi{
                // top: 5px;
                position: relative;
                display: flex;
                justify-content: center;
            }
        }
        .svg-middle:hover{
            // background-color: rgb(210, 217, 223);
        }
    }
    .item-digest-wrapper{
        display: flex;
        gap: 5px;
        width: 45%;
        // background-color: aquamarine;
        height: 70%;
        .item-digest{
            width: 30%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            
            .item-digest-up-tag{
                top: 5px;
                width: 100%;
                height: 40%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .item-digest-down-num{
                top: 10px;
                width: 100%;
                justify-content: center;
                display: flex;
                align-items: center;
                height: 40%;
                position: relative;
                bottom: 5px;
            }
            .item-digest-down-down{
                justify-content: center;
                align-items: center;
                border-top: 2px solid rgb(210, 217, 223);
                width: 100%;
                height: 20%;
                color: rgb(210, 217, 223);
                display: flex;
                position: relative;
                font-size: smaller;
                top: 0px;
            }
        }
    }
}
</style>