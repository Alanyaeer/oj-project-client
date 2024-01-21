<script setup>
import {ref, onMounted, watch, vModelCheckbox} from 'vue'
import topWithoutLogin from '@/components/topWithoutLogin.vue'
import {useRouter} from 'vue-router'
import {debounce, throttle} from '@/utils/optimizeUtils'
const form = ref({})
const router = useRouter()
const checkInput = () => {
    let div = document.getElementsByClassName("inputV")[0]
    var patternuserName = /^\S{10,15}$/
    if(patternuserName.test(form.value.userName) === false){
        div.style.border = "2px solid rgb(224 40 62)"
        div.style.boxShadow = "0px 0px 5px rgba(224, 40, 62, 0.4)"
    }  
    else {
        div.style.border = "2px solid rgb(101, 199, 203)"
        div.style.boxShadow = "0px 0px 5px rgba(101, 199, 203, 0.4)"
    }
    let divs = document.getElementsByClassName("inputV")[1]
    var patternpassword = /^\S{10,15}$/
    if(patternpassword.test(form.value.password) === false){
        divs.style.border = "2px solid rgb(224 40 62)"
        divs.style.boxShadow = "0px 0px 5px rgba(224, 40, 62, 0.4)"
    }
    else{
        divs.style.border = "2px solid rgb(101, 199, 203)"
        divs.style.boxShadow = "0px 0px 5px rgba(101, 199, 203, 0.4)"
    }
}
const checkInputProxy = debounce(checkInput)
const login = () => {
    var patternuserName = /^\S{10,15}$/
    var isPass = (patternuserName.test(form.value.userName) && patternuserName.test(form.value.password))
    if(isPass){


        // 设置token 
    }
    else {
        ElNotification.warning({title: '警告', message: '用户名或密码格式错误', offset: 100})
    }
}
watch(() => form.value, 
    () => checkInputProxy(),
    { deep: true }
)
onMounted(() => {

})
</script>
<template>
    <div class="container">
        <topWithoutLogin></topWithoutLogin>
        <div class="box">
            <div class="top-top">
                <div style="display: flex; font-size: 12px; color: #5A5A5A; white-space: nowrap;">
                    <div style="border-radius: 5px; height: 30px; width: 100px ;background-color: #F7F7F8; align-items: center; justify-content: center; display: flex;">
                        扫码登录更便捷
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="gray" style="position: relative ; top: -30px; right: 15px;">
                    <mask id="mask0_1738_8181" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                        <path d="M0 0H80V80L0 0Z" fill="#C4C4C4"/>
                    </mask>
                    <g mask="url(#mask0_1738_8181)">
                        <mask id="mask1_1738_8181" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="-4" y="0" width="85" height="84">
                    <path d="M-3.11658 0.210449H80.0003V83.3273L-3.11658 0.210449Z" fill="#007AFF" fill-opacity="0.08"/>
                    </mask>
                    <g mask="url(#mask1_1738_8181)">
                    </g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2323 31.3233C13.2323 34.5098 15.8155 37.093 19.0021 37.093H31.371C34.5576 37.093 37.1408 34.5098 37.1408 31.3233V18.9543C37.1408 15.7678 34.5576 13.1846 31.371 13.1846H19.0021C15.8155 13.1846 13.2323 15.7678 13.2323 18.9543V31.3233ZM19.2094 22.0466C19.2094 20.4533 20.501 19.1617 22.0943 19.1617H28.2788C29.872 19.1617 31.1637 20.4533 31.1637 22.0466V28.231C31.1637 29.8243 29.872 31.1159 28.2788 31.1159H22.0943C20.501 31.1159 19.2094 29.8243 19.2094 28.231V22.0466ZM43.1178 31.3233C43.1178 34.5098 45.7011 37.093 48.8876 37.093H61.2565C64.4431 37.093 67.0263 34.5098 67.0263 31.3233V18.9543C67.0263 15.7678 64.4431 13.1846 61.2565 13.1846H48.8876C45.7011 13.1846 43.1178 15.7678 43.1178 18.9543V31.3233ZM49.095 22.0466C49.095 20.4533 50.3866 19.1617 51.9798 19.1617H58.1643C59.7576 19.1617 61.0492 20.4533 61.0492 22.0466V28.231C61.0492 29.8243 59.7576 31.1159 58.1643 31.1159H51.9798C50.3866 31.1159 49.095 29.8243 49.095 28.231V22.0466ZM19.0021 66.9786C15.8155 66.9786 13.2323 64.3954 13.2323 61.2088V48.8399C13.2323 45.6533 15.8155 43.0701 19.0021 43.0701H31.371C34.5576 43.0701 37.1408 45.6533 37.1408 48.8399V61.2088C37.1408 64.3954 34.5576 66.9786 31.371 66.9786H19.0021ZM22.0943 49.0472C20.501 49.0472 19.2094 50.3388 19.2094 51.9321V58.1166C19.2094 59.7099 20.501 61.0015 22.0943 61.0015H28.2788C29.872 61.0015 31.1637 59.7099 31.1637 58.1166V51.9321C31.1637 50.3388 29.872 49.0472 28.2788 49.0472H22.0943ZM65.5841 61.0006H62.4918C61.6952 61.0006 61.0494 61.6464 61.0494 62.443V65.5353C61.0494 66.3319 61.6952 66.9777 62.4918 66.9777H65.5841C66.3807 66.9777 67.0265 66.3319 67.0265 65.5353V62.443C67.0265 61.6464 66.3807 61.0006 65.5841 61.0006ZM44.5603 43.0701H47.6525C48.4492 43.0701 49.095 43.7159 49.095 44.5126V47.6048C49.095 48.4014 48.4492 49.0472 47.6525 49.0472H44.5603C43.7637 49.0472 43.1178 48.4014 43.1178 47.6048V44.5126C43.1178 43.7159 43.7636 43.0701 44.5603 43.0701ZM53.6297 49.0469H50.5375C49.7408 49.0469 49.095 49.6927 49.095 50.4894V53.5816C49.095 54.3783 49.7408 55.0241 50.5375 55.0241H53.6297C54.4263 55.0241 55.0721 54.3783 55.0721 53.5816V50.4894C55.0721 49.6927 54.4263 49.0469 53.6297 49.0469ZM44.5603 55.0238H47.6525C48.4492 55.0238 49.095 55.6696 49.095 56.4662V59.5585C49.095 60.3551 48.4492 61.0009 47.6525 61.0009H44.5603C43.7637 61.0009 43.1178 60.3551 43.1178 59.5585V56.4662C43.1178 55.6696 43.7636 55.0238 44.5603 55.0238ZM53.6297 61.0006H50.5375C49.7408 61.0006 49.095 61.6464 49.095 62.443V65.5353C49.095 66.3319 49.7408 66.9777 50.5375 66.9777H53.6297C54.4263 66.9777 55.0721 66.3319 55.0721 65.5353V62.443C55.0721 61.6464 54.4263 61.0006 53.6297 61.0006ZM56.5146 55.0238H59.6069C60.4035 55.0238 61.0493 55.6696 61.0493 56.4662V59.5585C61.0493 60.3551 60.4035 61.0009 59.6069 61.0009H56.5146C55.718 61.0009 55.0722 60.3551 55.0722 59.5585V56.4662C55.0722 55.6696 55.718 55.0238 56.5146 55.0238ZM59.6069 43.0701H56.5146C55.718 43.0701 55.0722 43.7159 55.0722 44.5126V47.6048C55.0722 48.4014 55.718 49.0472 56.5146 49.0472H59.6069C60.4035 49.0472 61.0493 48.4014 61.0493 47.6048V44.5126C61.0493 43.7159 60.4035 43.0701 59.6069 43.0701ZM62.4918 49.0469H65.5841C66.3807 49.0469 67.0265 49.6927 67.0265 50.4894V53.5816C67.0265 54.3783 66.3807 55.0241 65.5841 55.0241H62.4918C61.6952 55.0241 61.0494 54.3783 61.0494 53.5816V50.4894C61.0494 49.6927 61.6952 49.0469 62.4918 49.0469Z" fill="#212835"/>
                    </g>
                </svg>
            </div>
            <div class="top">
                <img src="@/assets/img/icon.png" style="width: 80px; height: fit-content;">
                <div style="font-size: 40px; font-family: fantasy; display: flex; align-items: center;">AttackCode</div>
            </div>
            <div class="middle">
                <div class="inputGroup">
                    <input class="inputV"  v-model="form.userName"  type="text" required="" autocomplete="off">
                    <label   for="name">username</label>
                </div>
                <div class="inputGroup">
                    <input class="inputV" v-model="form.password" type="text" required="" autocomplete="off">
                    <label   for="name">password</label>
                </div>
            </div>
            <div @click="login" class="middle-bottom">
                <button>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                        d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                        fill="currentColor"
                        ></path>
                    </svg>
                    <span>Login | Register</span>
                </button>
            </div>
            <div class="box-bottom">
                <div class="svg-style">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="ewspj560 css-1n5wd5l-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M20.174 14.188a9.978 9.978 0 00-.63-1.166 7.274 7.274 0 00-.555-.768c-.335-.397-.663-.645-.949-.765.045-.37.067-.802.067-1.217 0-.957-.127-1.839-.337-2.484a6.196 6.196 0 00-6.192-5.77c-3.279 0-5.964 2.551-6.194 5.772-.212.647-.344 1.516-.344 2.484 0 .44.027.826.076 1.217-.281.159-.596.489-.913.886-.205.257-.41.558-.607.89-.167.284-.33.592-.48.92-.83 1.806-1.004 3.498-.388 3.782.39.18 1.006-.253 1.616-1.054a7.99 7.99 0 001.982 2.63c-.964.323-1.605.892-1.605 1.544 0 1.007 1.538.895 3.437.895 1.574 0 2.9.076 3.309-.47h.109c.053 0 .107 0 .16-.003.407.55 1.735.471 3.309.471 1.897 0 3.437.112 3.437-.895 0-.659-.656-1.234-1.643-1.556a7.98 7.98 0 002.02-2.732c.636.873 1.293 1.355 1.701 1.168.619-.28.445-1.974-.386-3.78z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="svg-style">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="ewspj560 css-19f87hh-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M12.048 2a9.913 9.913 0 00-6.511 2.44 10.308 10.308 0 00-3.407 6.171 10.436 10.436 0 001.323 6.954 10.079 10.079 0 005.422 4.418c.505.095.684-.226.684-.497v-1.744c-2.804.624-3.396-1.378-3.396-1.378a2.738 2.738 0 00-1.115-1.504c-.906-.63.074-.63.074-.63.317.046.62.165.886.348.266.184.488.426.648.71.137.252.32.475.541.655a2.128 2.128 0 001.582.463c.28-.033.551-.122.798-.262a2.198 2.198 0 01.616-1.372c-2.23-.258-4.572-1.14-4.572-5.035a4.013 4.013 0 011.03-2.75 3.813 3.813 0 01.098-2.713s.844-.277 2.76 1.05a9.303 9.303 0 015.028 0c1.917-1.327 2.755-1.05 2.755-1.05.37.85.413 1.811.123 2.693a4.014 4.014 0 011.029 2.75c0 3.94-2.348 4.803-4.584 5.036.24.246.425.542.543.868.118.326.166.674.14 1.02v2.814c0 .333.18.591.69.49a10.085 10.085 0 005.346-4.434 10.437 10.437 0 001.29-6.91 10.31 10.31 0 00-3.373-6.132A9.916 9.916 0 0012.048 2z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="svg-style">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="ewspj560 css-152dov6-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M15.597 4.116a5.293 5.293 0 015.039 1.631 5.291 5.291 0 011.108 5.178v.003a.766.766 0 01-1.458-.472 3.764 3.764 0 00-4.37-4.842.766.766 0 11-.32-1.498zM4.017 15.672c.216 2.174 3.074 3.67 6.385 3.344 3.31-.328 5.82-2.355 5.606-4.53-.215-2.173-3.073-3.67-6.385-3.342-3.31.328-5.82 2.355-5.606 4.528zm12.68-4.384c-.148.37.046.428.327.511 1.147.356 2.424 1.217 2.424 2.733 0 2.509-3.618 5.669-9.057 5.669C6.24 20.2 2 18.19 2 14.883c0-1.73 1.095-3.729 2.982-5.616 2.52-2.518 5.457-3.665 6.561-2.56.488.487.535 1.33.222 2.337-.155.481.412.254.471.23a.061.061 0 01.005-.002c2.036-.853 3.813-.903 4.462.025.346.494.313 1.187-.006 1.99zm1.922-3.72a2.577 2.577 0 00-2.455-.794.66.66 0 10.275 1.289 1.26 1.26 0 011.463 1.621.66.66 0 101.255.406 2.574 2.574 0 00-.538-2.522zm-8.607 7.722c.2.082.456-.013.572-.211.11-.2.04-.424-.16-.497-.197-.078-.444.017-.56.21-.111.195-.05.416.148.498zm-2.005 1.642c.516.236 1.202.012 1.522-.499.315-.516.15-1.106-.37-1.327-.512-.215-1.175.007-1.49.502-.322.498-.171 1.092.338 1.324zm-1.315-2.351c.684-1.389 2.465-2.174 4.04-1.764 1.631.421 2.463 1.96 1.796 3.454-.675 1.528-2.619 2.343-4.268 1.811-1.591-.514-2.265-2.086-1.568-3.501z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="svg-style">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="ewspj560 css-1ocvhs9-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M16.128 8.799c-3.665 0-6.627 2.536-6.627 5.664 0 .481.074.962.223 1.425-.185.018-.352.018-.518.018a9.119 9.119 0 01-2.259-.296.554.554 0 00-.481.056L4.3 16.96c-.13.075-.277-.055-.24-.184l.555-1.963c.018-.13-.019-.259-.13-.332-1.592-1.111-2.61-2.777-2.61-4.628 0-3.35 3.276-6.053 7.33-6.053 3.61 0 6.608 2.166 7.2 4.998h-.277zm-3.48-.815a.987.987 0 00-.981-.98.988.988 0 00-.981.98c0 .538.444.982.98.982a.987.987 0 00.982-.982zm-5.905.982a.987.987 0 01-.981-.982c0-.537.444-.98.98-.98.538 0 .982.443.982.98a.975.975 0 01-.981.982zm9.31.37c3.35 0 6.072 2.295 6.072 5.108 0 1.573-.833 2.962-2.13 3.906a.45.45 0 00-.184.48l.296 1.204c.037.11-.092.204-.185.148l-1.5-.814a.835.835 0 00-.518-.056 6.53 6.53 0 01-1.832.24c-3.35 0-6.072-2.294-6.072-5.108 0-2.813 2.703-5.108 6.053-5.108zm-2.998 3.61c0 .462.37.832.833.832a.83.83 0 00.833-.833.83.83 0 00-.833-.832.83.83 0 00-.833.832zm4.924.832a.83.83 0 01-.833-.833.83.83 0 01.833-.832.83.83 0 01.833.832.841.841 0 01-.833.833z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="svg-style">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="css-1prekdp-Svg ea8ky5j0"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div style="left: 40px; font-size: 10px; color: #8A8A8E; margin-top: 30px; position: relative; cursor: pointer;" @click="router.push('/problemset')">
                注册或登录即代表您同意《用户协议》和《隐私协议》
            </div>
        </div>
        <div class="bottom">
           
        </div>
    </div>

</template>


<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 820px;
    align-items: center;
    background-color: #F7F8FA;
    .box{
        border-radius: 20px;
    // justify-content: center;
        // align-items: ;
        box-shadow:  0 0 32px rgba(0, 0, 0, 0.20) ;
        width: 318px;
        position: relative;
        top: 70px;
        height: 481px;
        background-color: white;
        padding: 24px 32px 32px 32px;
        display: flex;
        flex-direction: column;
        .top-top{
            top: 5px;
            display: flex;
            position: relative;
            left: 185px;
        }
        .top{
            display: flex;
            top: -50px;
            position: relative;
            gap: 15px;
        }
        .middle{
            position: relative;
            top: -50px;
            display: flex;
            flex-direction: column;
            .inputGroup {
                font-family: 'Segoe UI', sans-serif;
                margin: 1em 0 1em 0;
                max-width: 190px;
                position: relative;
            }

            .inputGroup input {
                font-size: 100%;
                padding: 0.8em;
                outline: none;
                border: 2px solid rgb(200, 200, 200);
                background-color: transparent;
                border-radius: 20px;
                width: 290px;
                transition: all 0.3s;
            }

            .inputGroup label {
                font-size: 100%;
                position: absolute;
                left: 0;
                padding: 0.8em;
                top: 0px;
                margin-left: 0.5em;
                pointer-events: none;
                transition: all 0.3s ease;
                color: #9d9d9d;
            }

            .inputGroup :is(input:focus, input:valid)~label {
                transform: translateY(-50%) scale(.9);
                margin: 0em;
                margin-left: 1.3em;
                padding: 0.4em;
                background-color: white;
                filter: blur(0.1);
            }

            .inputGroup :is(input:focus, input:valid) {
                border-color: rgb(101, 199, 203);
                box-shadow: 0px 0px 5px rgba(101, 199, 203, 0.4);
            }
        }
        .middle-bottom{
            display: flex;
            left: 55px;
            top: -25px;
            position: relative;
            // align-items: center;
            button {
                display: flex;
                align-items: center;
                font-family: inherit;
                cursor: pointer;
                font-weight: 500;
                font-size: 17px;
                padding: 0.8em 1.3em 0.8em 0.9em;
                color: white;
                // background: #ad5389;
                background-color: black;
                // background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
                border: none;
                letter-spacing: 0.05em;
                border-radius: 16px;
            }

            button svg {
                margin-right: 3px;
                transform: rotate(30deg);
                transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
            }

            button span {
                transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
            }

            button:hover svg {
                transform: translateX(5px) rotate(90deg);
            }

            button:hover span {
                transform: translateX(7px);
            }

        }
        .box-bottom{
            display: flex;
            gap: 20px;
            position: relative;
            left: 25px;
            .svg-style{
                width: 36px;
                height: 36px;
                border-radius: 1000px;
                background-color: white;
                border: 1px solid #b3b3b3;
                cursor: pointer;
                // size: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .svg-style:nth-child(1){
                color: #4A9AFD;
            }
            .svg-style:nth-child(2){
                color: #000000;
            }
            .svg-style:nth-child(3){
                color: #E90E24;
            }
            .svg-style:nth-child(4){
                color: #00CA00;
            }
        }
    }
    .bottom{
        display: flex;
        width: calc(100vw - 15px);

    }
}
</style>