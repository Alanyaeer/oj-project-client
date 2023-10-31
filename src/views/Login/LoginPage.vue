<script setup>
import {ref} from 'vue'
const flag = ref(1)
const change = ()=>{
  document.querySelector('.top-tips-span').addEventListener('click', function () {
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
        flag.value = 0;
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
        flag.value = 1;
    }
})
}
</script>
<template>
 <div class="box">
        <div class="content">
            <img class="login-img images" src="@/assets/login.jpg" alt="登录">
            <img class="register-img images" src="@/assets/register.jpg" alt="注册">
            <div class="login-wrapper">
                <div class="top-tips">
                    <span >GenshinCode</span>
                    <span class="top-tips-span" @click="change">注册</span>
                </div>
                <h1 class="h1-text">登录</h1>

                <div class="login-form">
                    <div class="user-form form-item">
                        <div class="text-tips">
                            <span>账号</span>
                        </div>
                        <input type="text">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>密码</span>
                            <span class="forgot-password">忘记密码?</span>
                        </div>
                        <input type="password">
                    </div>
                    <div style="display: flex; gap:20px; padding: 20px;">
                        <button class="btn">登录</button>
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
                        <input type="text">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>密码</span>
                        </div>
                        <input type="password">
                    </div>
                    <div class="password-form form-item">
                        <div class="text-tips">
                            <span>确认密码</span>
                        </div>
                        <input type="password">
                    </div>
                    <button class="btn">注册</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: dogica;
    src: url(@/assets/font/dogica.ttf);
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
                    font-weight: 600;
                }
                .top-tips-span {
                    font-size: 15px;
                    color: rgb(79, 133, 226);
                    border-bottom: 1px solid rgb(79, 133, 226);
                    float: right;
                    line-height: 25px;
                    cursor: pointer;
                }
            }
            h1 {
                font-size: 45px;
                margin: 20px 0;
            }
            .other-login {
                width: 60%;
                height: 50px;
                border-radius: 10px;
                text-align: center;
                line-height: 50px;
                font-size: 20px;
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