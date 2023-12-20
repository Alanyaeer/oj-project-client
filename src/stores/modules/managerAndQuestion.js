import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useManagerAndQuestionStore = defineStore(
    'oj-provider',
    ()=>{
        const lastQuestion = ref("0")
        const lastTemp = ref("0")
        const setLastQuestion = (getlastQuestions)=>{
            lastQuestion.value = getlastQuestions
        }
        const getLastQuestion = ()=>{
            return lastQuestion.value;
        }
        const removeLastQuestion = ()=>{
            lastQuestion.value = 0
        }
        const setLastTemp = (getLastTemps)=>{
            lastTemp.value = getLastTemps
        }
        const getLasTemp = ()=>{
            return lastTemp.value   
        }
        const removeLastTemp = ()=>{
            lastTemp.value = 0
        }
        return {    
            lastQuestion, lastTemp,setLastQuestion,removeLastQuestion,setLastTemp,removeLastTemp,getLasTemp,getLastQuestion
        }
    },
    {
        persist: true
    }
)