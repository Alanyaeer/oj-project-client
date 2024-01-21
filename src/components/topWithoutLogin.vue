<script setup>
import {ref, onMounted} from 'vue'
// import {useRouer} from 'user'
import {useRouter} from 'vue-router'

const router = useRouter()
const toThePos = (type) => {
    router.push(type)       
    changeBottom(type)  
}
const changeBottom  = (type) => {
    let pathName = type
    let toWhich = document.getElementsByClassName("tab-item")
    var t = 0;
    if(pathName === '/learn' || pathName === '/Test'){
        t = 0;
    }
    else if(pathName === '/problemset'){
        t = 1;
    }
    else if(pathName === '/contest') t= 2;
    for(let i = 0; i < 3 ; i++){
        toWhich[i].style.borderBottom = '0px'
        toWhich[i].style.color = '#999999'
    }
    if(window.location.pathname === '/' || window.location.pathname === '/login') return 
    toWhich[t].style.color = '#000000'
    toWhich[t].style.borderBottom = '3px solid #000000'
}
onMounted(()=>{
  changeBottom( window.location.pathname)
})
</script>

<template>
<div class="containers">
    <div class="left">
        <img  src="/src/assets/img/icon.png" alt="" style="width: 40px; height: fit-content;">
        <div class="font">AttackCode</div>
        <div class="tab-to-which">
            <div @click="toThePos('/learn')" class="tab-item" style="border-bottom: 3px solid black;">学习</div>
            <div @click="toThePos('/problemset')" class="tab-item">题库</div>
            <div @click="toThePos('/contest')" class="tab-item">竞赛</div>
        </div>
    </div>
    <div class="right" >
        <svg class="right-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" ><path d="M14.1057 14.2L17 17M16.0667 9.53333C16.0667 13.1416 13.1416 16.0667 9.53333 16.0667C5.92507 16.0667 3 13.1416 3 9.53333C3 5.92507 5.92507 3 9.53333 3C13.1416 3 16.0667 5.92507 16.0667 9.53333Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round"></path></svg>
    </div>
</div>
</template>

<style lang="scss" scoped>
.containers{
    width: 1200px;
    height: 50px;
    padding: 0px 160.4px;
    background-color: white;
    background: white;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .left{
        display: flex;
        gap: 10px;
        align-items: center;
        .font{
            font: bold; 
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
            font-size: large;
        }
        .tab-to-which{
            left: 30px;
            position: relative;
            display: flex;
            align-items: center;
            gap: 50px;
            .tab-item{
                display: flex;
                align-items: center;
                font: bolder;
                justify-content: center;
                // font-family:;
                color:#737373;
                font-size: 18px;
                padding: 10px 2px;
                cursor: pointer;
            }
            .tab-item:hover{
                color: black;
            }
        }
    }
    .right{
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        color: #737373;
        .right-item{
            cursor: pointer;
            padding: 8px 8px;
        }
        .right-item:nth-child(1):hover{
            color: #1A1A1A !important;
        };
        .right-item:nth-child(2):hover{
            color: #1A1A1A !important;
            background-color: #F2F3F4;
            border-radius: 5px;
        };
        .right-item:nth-child(3):hover{
            color: #1A1A1A !important;
            background-color: #F2F3F4;
            border-radius: 5px;
        };
    }

}
</style>