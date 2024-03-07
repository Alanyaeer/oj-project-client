<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {addCompetition, getQuestionList} from '@/api/question'
const form = ref({})
/**
 * 提交表单
 */
const questionData = ref([])
const questionEntireInfo = ref([])
const calScore = (score) => {
    if(score < 1400) return 3;
    else if(score >= 1400 && score < 1600) return 4;
    else if(score >= 1600 && score < 2000) return 6;
    else return 8;
}
const resetForm = () => {
    form.value.competitionName = ""
    form.value.description = ""
    form.value.rangeTime = []
    if(form.value?.choseQuestion !== undefined){
        for(let i = 0; i < form.value.choseQuestion.length; i++)
            questionData.value.push(form.value.choseQuestion[i])
        form.value.choseQuestion = []
    }
    form.value.questionList = []
    
}
const submitInfo =async () => {
    
    form.value.startTime = form.value.rangeTime[0]
    form.value.endTime = form.value.rangeTime[1]
    if(form.value.questionList === undefined)
    form.value.questionList = []
    let judgeForm = true
    if(form.value?.choseProblem === undefined) judgeForm = false
    if(form.value.startTime === undefined || form.value.endTime === undefined) judgeForm = false
    if(judgeForm === false){
        ElNotification({
            type: "warning",
            title: "表单错误",
            content: "还有必填的表单没有填入数据"
        })
        return;
    }
    for(let i = 0; i < form.value.choseProblem.length; ++i){
        let index = form.value.choseProblem[i]
        form.value.questionList.push({
            "id": questionEntireInfo.value[index].id,
            "name": questionEntireInfo.value[index].titleId + " "+  questionEntireInfo.value[index].titleName,
            "pass": false,
            "score": calScore(questionEntireInfo.value[index].score)
        })
    }
    console.log( form.value.choseProblem.length, form.value.questionList);
    let obj = {
        ...form.value
    }
    let result =  await addCompetition(obj)
    if(result.code === 200){
        ElNotification({
            type: 'success',
            title: '提交成功',
        })
    }
    else {
        ElNotification({
            type: 'warnging',
            title: '提交失败',
        })
    }
    resetForm()
}

const loadData = async () => {
    let form = {
        page: 1,
        pageSize: 100000
    }
    let obj = await getQuestionList(form)
    if(obj.code === 200) {
        questionEntireInfo.value = obj.data
        obj.data.forEach((item, index) => {
            questionData.value.push({
            "label": item.titleId + " "+ item.titleName,
            "value": index  
            })
        })
    }

}
onMounted(() => {
    loadData()
})
</script>

<template>
    <div class="containerssss">
        <h2>创建竞赛</h2>
        <div style="display: flex; gap: 5vw ">
            <div style="width: 9.5vw ;color:#6D7074; font-size: 18px;">{{ "名称 (非必填)" }}</div>
            <a-input v-model="form.competitionName" :style="{width:'60vw'}" placeholder="输入竞赛名称" allow-clear />
        </div>
        <div style="display: flex; gap: 5vw ">
            <div style="width: 12vw ;color:#6D7074; font-size: 18px;">{{ "竞赛简介 (非必填)" }}</div>
            <a-textarea v-model="form.description" placeholder="输入竞赛简介" :max-length="100"  show-word-limit allow-clear/>
        </div>
        <div style="display: flex; gap: 5vw ">
            <div  style="width: 9.5vw ;color:#6D7074; font-size: 18px;">{{ "时间范围 (必填)" }}</div>
            <a-range-picker
                style="width: 360px; margin: 0 24px 24px 0;"
                show-time
                v-model="form.rangeTime"
                :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
                format="YYYY-MM-DD HH:mm"
            />
        </div>
        <div style="display: flex; gap: 5vw ">
            <div style="width: 9.5vw ;color:#6D7074; font-size: 18px;">{{ "题目列表 (必填)" }}</div>
            <a-transfer :data="questionData" :default-value="form.choseQuestion" v-model="form.choseProblem" />
        </div>
        <div style="display: flex; justify-content: center; padding: 0 25vw; gap: 3vw;">
            <a-button @click="submitInfo()" type="primary" style="width: 150px; height: 50px; font-size: 24px;">{{ "提交" }}</a-button>
            <a-button @click="resetForm()" type="primary" status="warning" style="width: 150px; height: 50px; font-size: 24px;"> {{ "重置" }}</a-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerssss{
    display: flex;
    flex-direction: column;
    padding: 3vh 2vw;
    gap: 5vh;
    background-color: #fff;
}
</style>