<script setup>
import {ref, onMounted} from 'vue'
// import {useRouer} from 'user'
import {useRouter} from 'vue-router'
import {getUserInfo} from '@/api/user'
import userPopver from './userPopver.vue';
const avatar = ref('https://picsum.photos/60/60')
const nickName = ref('alanyaeer')
const description = ref('做意大利面应该拌入32号混凝土')
const router = useRouter()
const userInfo = ref({})
const toThePos = (type) => {
    router.push(type)       
    changeBottom(type)  
}
const changeBottom  = (type) => {
    console.log(type);
    let pathName = type
    let toWhich = document.getElementsByClassName("tab-item")
    var t = -1;
    if(pathName === '/learn' || pathName === '/Test'){
        t = 0;
    }
    else if(pathName === '/problemset'){
        t = 0;
    }
    else if(pathName === '/contest') t= 1;
    for(let i = 0; i < 2; i++){
        toWhich[i].style.borderBottom = '0px'
        toWhich[i].style.color = '#999999'
    }
    if(t === -1) return 

    toWhich[t].style.color = '#000000'
    toWhich[t].style.borderBottom = '3px solid #000000'
}
onMounted( async()=>{
  changeBottom(window.location.pathname)
  let obj =  await getUserInfo()
  try{
      userInfo.value = obj.data
      avatar.value = userInfo.value.avatar
      nickName.value = userInfo.value.nickName
      description.value = userInfo.value.description

  }catch(e){
    avatar.value = '/src/assets/img/icon.png'
    nickName.value = '/goTologin'
    description.value = '做意大利面应该拌入32号混凝土'
    // userInfo.value.id = 114514114514
  }
})
</script>

<template>
<div class="containers">
    <div class="left">
        <img  src="/src/assets/img/icon.png" alt="" style="width: 40px; height: fit-content;">
        <div class="font">AttackCode</div>
        <div class="tab-to-which">
            <!-- <a :href="'/learn'" class="tab-item" style="border-bottom: 3px solid black;">学习</a> -->
            <a :href="'/problemset'" class="tab-item">题库</a>
            <a :href="'/contest'" class="tab-item">竞赛</a>
        </div>
    </div>
    <div class="right" >
        <svg class="right-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none" ><path d="M14.1057 14.2L17 17M16.0667 9.53333C16.0667 13.1416 13.1416 16.0667 9.53333 16.0667C5.92507 16.0667 3 13.1416 3 9.53333C3 5.92507 5.92507 3 9.53333 3C13.1416 3 16.0667 5.92507 16.0667 9.53333Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round"></path></svg>
        <svg class="right-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" ><path fill-rule="evenodd" clip-rule="evenodd" d="M16.403 10.891C16.5768 12.8986 17.0682 14.5303 17.7963 15.8174C17.8182 15.8563 17.8403 15.8945 17.8623 15.9322H6.13771C6.15975 15.8945 6.18177 15.8563 6.20374 15.8174C7.12442 14.1898 7.66667 12.0111 7.66667 9.21794C7.66667 7.21279 9.16139 5.52994 11.1553 5.15365C11.2695 4.39084 11.556 3.68438 11.9739 3.07513C8.496 3.08878 5.66667 5.82552 5.66667 9.21794C5.66667 11.6748 5.20893 13.5139 4.46294 14.8327C4.0464 15.5691 3.66114 15.9613 3.45925 16.091C2.61971 16.6307 3.00196 17.9322 4.00001 17.9322H20C20.9981 17.9322 21.3803 16.6307 20.5408 16.091C20.3389 15.9613 19.9536 15.5691 19.5371 14.8327C18.9112 13.7263 18.4882 12.2536 18.3682 10.3571C17.7723 10.661 17.1073 10.8489 16.403 10.891ZM14.3096 18.9368C13.8363 18.6522 13.2219 18.805 12.9372 19.2783C12.7485 19.5919 12.3915 19.7902 12 19.7902C11.6085 19.7902 11.2515 19.5919 11.0628 19.2783C10.7781 18.805 10.1637 18.6522 9.69045 18.9368C9.2172 19.2215 9.06434 19.836 9.34903 20.3092C9.90245 21.2292 10.9125 21.7902 12 21.7902C13.0875 21.7902 14.0976 21.2292 14.651 20.3092C14.9357 19.836 14.7828 19.2215 14.3096 18.9368Z"></path><circle cx="16.1" cy="5.89999" r="3" fill="#F63636"></circle></svg>
        <svg class="right-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="20" height="20" fill="currentColor"><path fill-rule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clip-rule="evenodd"></path></svg>
        <!-- <img class="right-item" src="https://picsum.photos/60/60" alt="" style="width: 30px; height: fit-content; border-radius: 1000px;" > -->
        <userPopver :avatar="avatar" :nickName="nickName" :description="description" :id="userInfo?.id"></userPopver>
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
                text-decoration: none;
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