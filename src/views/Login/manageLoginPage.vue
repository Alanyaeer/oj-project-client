<script setup>
import {ref} from 'vue'
import {login, register} from '@/api/user'
// 用户表示当前是注册还是登录
const flag = ref(1)
const id = ref('')
const password = ref('')
const repassword = ref('')
const change = ()=>{
    flag.value = (flag.value === 1) ? 0 :1 
    console.log(flag.value);
    if (flag.value) {
        document.querySelector('.content').classList.add("add-class-content");
        document.querySelector('.login-img').classList.add("add-class-login-img");
        document.querySelector('.register-img').classList.add("add-class-register-img");
        document.querySelector('.login-img').classList.remove("add-class-login-img-show");
        document.querySelector('.login-wrapper').style.height = '80vh';
        document.querySelector('.content').style.height = '90vh';
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.register-form').style.display = 'block';
        document.querySelector('.top-tips-span').innerHTML = '登录';
        document.querySelector('.h1-text').innerHTML = '注册';
    }
    else {
        document.querySelector('.content').classList.remove("add-class-content");
        document.querySelector('.login-img').classList.remove("add-class-login-img");
        document.querySelector('.login-img').classList.add("add-class-login-img-show");
        document.querySelector('.register-img').classList.remove("add-class-register-img");
        document.querySelector('.login-wrapper').style.height = '70vh';
        document.querySelector('.content').style.height = '85vh';
        document.querySelector('.login-form').style.display = 'block';
        document.querySelector('.register-form').style.display = 'none';
        document.querySelector('.top-tips-span').innerHTML = '注册';
        document.querySelector('.h1-text').innerHTML = '登录';
        // flag.value = 1;
    }
}
// 校验规则暂时简单点, 之后可以优化
function preValidate(id, password, repassword){
    console.log(id, password, repassword);
    var validateStatus = 1
    // 正则校验id
    var patternId =  /^\S{6,15}$/
    // 使用test方法校验
    validateStatus &= patternId.test(id)
    // 正则校验 password
    var patternpassword = /^\S{4,15}$/
    validateStatus &= patternpassword.test(password)
    // 如果校验状态为错误, 说明id 或者密码错误
    if(validateStatus === 0){
        ElNotification({
            type: 'warning',
            message: '密码强度过低或者id不满足条件',
            title: '校验问题'
        })
        return false
    }
    if(flag.value === 0){
        return true
    }
    if(flag.value === 1){
        // 校验 password 和 repassword 是否相同
        if(repassword !== password){
            ElNotification({
                type: 'warning',
                message: '确认密码与密码不一致',
                title: '密码问题'
            })  
            return false
        }
        return true
    }
    
}
// 点击登录后 的一系列操作
const clickToLogin = async ()=>{
    
    const loginObj = {
        id: id.value,
        password: password.value,
    }
    // 登陆前先校验
    if(preValidate(id.value, password.value, repassword.value)){
        console.log('登录成功');
        let code = await login(loginObj)
        if(code === 1){
            ElNotification({
                type: 'success',
                message: '登录成功',
                title: '登录'
            })
        }
    }
}
</script>
<template>
 <div class="box">
        <div class="content">
            <img class="login-img images" src="@/assets/login.jpg" alt="登录">
            <img class="register-img images" src="@/assets/register.jpg" alt="注册">
            <div class="login-wrapper">
                <div class="top-tips">
                    <span >AttackCoder</span>
                    <!-- <span class="top-tips-span" @click="change">注册</span> -->
                </div>
                <h1 class="h1-text"><span style="font-family: 'my_font';">登录</span></h1>

                <div class="login-form">
                    <div class="user-form form-item">
                        <div class="text-tips">
                            <span>账号</span>
                        </div>
                        <input type="text" v-model="id">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>密码</span>
                       
                        </div>
                        <input type="password" v-model="password">
                    </div>
                    <div style="display: flex; gap:20px; padding: 20px;">
                        <!-- 登录按钮 -->
                        <button @click="clickToLogin" class="btn" style="font-family: 'my_font';">登录</button>
                        <div class="other-login">
                        <img src="@/assets/QQ.png" alt="">
                        <span>使用QQ登录</span>
                    </div>
                </div>
                </div>
                <div class="register-form">
                    <div class="user-form form-item">
                        <div class="text-tips">
                            <span>账号</span>
                        </div>
                        <input type="text" v-model="id">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>密码</span>
                        </div>
                        <input type="password" v-model="password">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>确认密码</span>
                        </div>
                        <input type="password" v-model="repassword">
                    </div>
                    <!-- 注册按钮 -->
                    <button @click="clickToRegister" class="btn">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.box {
    background-color: rgb(51, 32, 108);
    width: 100vw;
    height: 100vh;
    .content {
        width: 90vw;
        height: 85vh;
        background-color: rgb(228, 218, 232);
        border-radius: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 1s;
        .images {
            margin-left: -150px;
            margin-right: 100px;
            position: absolute;
            left: 15%;
        }
        .login-img {
            width: 45%;
            height: 90%;
            border-radius: 15%;
        }
        .register-img {
            width: 45%;
            opacity: 0;
            border-radius: 15%;
        }
        .login-wrapper {
            width: 30vw;
            height: 70vh;
            border-radius: 40px;
            backdrop-filter: blur(1px);
            background: rgba(244, 240, 245, 0.6);
            padding: 60px;
            box-sizing: border-box;
            position: absolute;
            right: 10%;
            transition: 1s;
            .top-tips {
                span:nth-child(1) {
                    font-size: 25px;
                    font-family: 'my_font';
                    font-weight: 600;
                }
                .top-tips-span {
                    font-size: 15px;
                    font-family: 'my_font';

                    color: rgb(79, 133, 226);
                    border-bottom: 1px solid rgb(79, 133, 226);
                    float: right;
                    line-height: 25px;
                    cursor: pointer;
                }
            }
            h1 {
                font-size: 45px;
                font-family: 'my_font';

                margin: 20px 0;
            }
            .other-login {
                width: 60%;
                height: 50px;
                border-radius: 10px;
                text-align: center;
                line-height: 50px;
                font-size: 20px;
                font-family: 'my_font';

                color: #fff;
                margin: 20px 0;
                background-color: rgb(79, 133, 226);
                padding-bottom: 2px;
                cursor: pointer;
                img {
                    width: 25px;
                    height: 25px;
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
            }
            .login-form,
            .register-form {
                width: 100%;
                .form-item {
                    .text-tips {
                        color: rgb(123, 122, 123);
                        margin: 5px;
                        .forgot-password {
                            font-size: 15px;
                            font-family: 'my_font';

                            color: rgb(79, 133, 226);
                            border-bottom: 1px solid rgb(79, 133, 226);
                            float: right;
                            line-height: 25px;
                            cursor: pointer;
                        }
                    }
                    input {
                        width: 100%;
                        height: 50px;
                        margin: 5px 0;
                        border-radius: 5px;
                        border: 0;
                        font-size: 17px;
                        font-family: 'my_font';

                        padding: 0 20px;
                        box-sizing: border-box;
                    }
                    input:focus {
                        outline: none;
                        border: 1px solid rgb(79, 133, 226);
                    }
                }
                .btn {
                    width: 150px;
                    height: 50px;
                    margin: 20px 0;
                    background-color: rgb(59, 58, 59);
                    border: 0;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 20px;
                    font-family: 'my_font';
                    cursor: pointer;
                }
            }
            .login-form {
                display: block;
            }
            .register-form {
                display: none;
            }
        }
    }
}
.add-class-content {
    background-color: rgb(156, 148, 208) !important;
    transition: .1s;
}
.add-class-login-img {
    animation: disappear 0.3s forwards;
    animation-timing-function: ease;
}
.add-class-login-img-show {
    animation-delay: 1s;
    animation: appear 1s forwards;
    animation-timing-function: ease;
}
.add-class-register-img {
    animation: appear 1s forwards;
    animation-timing-function: ease;
    animation-delay: .2s;
    
}
@keyframes appear {
    from {
        border-radius: 15%;
        opacity: 0;
    }
    to {
        border-radius: 0%;
        opacity: 1;
    }
}

@keyframes disappear {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

</style>