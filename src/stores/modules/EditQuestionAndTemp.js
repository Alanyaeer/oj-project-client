import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useEditStore = defineStore(
    'oj-edit',
    ()=>{
        const lastEditQuestion = ref('')
        const lastEditTemp = ref('')
        const getLastEditQuestion = ()=>{
            return lastEditQuestion.value
        }
        const getLastEditTemp = ()=>{
            return lastEditTemp.value
        }
        const setLastEditQuestion = (lastEditQuestions)=>{

            lastEditQuestion.value = lastEditQuestions
        }
        const setLastEditTemp = (lastEditTemps)=>{
            lastEditTemp.value = lastEditTemps
        }
        const removeLastEditQuestion = ()=>{
            lastEditQuestion.value = ""
        }
        const removeLastEditTemp = ()=>{
            lastEditTemp.value = ""
        }
        return {    
            lastEditTemp,setLastEditQuestion, setLastEditTemp,getLastEditQuestion,getLastEditTemp,lastEditQuestion,removeLastEditQuestion, removeLastEditTemp
        }
    },
    {
        persist: true
    }
)