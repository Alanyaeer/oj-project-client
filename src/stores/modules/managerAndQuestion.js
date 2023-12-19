import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useManagerAndQuestionStore = defineStore(
    'oj-provider',
    ()=>{
        const userName = ref("")
        const lastQuestion = ref("0")
        const lastTemp = ref("0")
        
        /**
         * 
         * @param {用户名称} getUserName 
         */
        const setUserName = (getUserNames) => {
            userName.value = getUserNames
        }
        const getUserName = ()=>{
            return userName.value   
        }
        const removeUserName = ()=>{
            userName.value = ""
        }

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
            userName, lastQuestion, lastTemp,setUserName, removeUserName,setLastQuestion,removeLastQuestion,setLastTemp,removeLastTemp,getLasTemp,getLastQuestion,getUserName
        }
    },
    {
        persist: true
    }
)