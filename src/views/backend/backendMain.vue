<script setup>
    import {ref} from 'vue'
    import MainLoading from '@/components/MainLoading.vue';
    const icon = ref(new URL("@/assets/img/icon.png", import.meta.url).href)
    const leftBg = ref('#d6d9e5')
    const middleBg = ref('#E5E9F4')
    const shadow = ref('--shadow: -.5rem -.5rem 1rem hsl(0 0% 100% / .75), .5rem .5rem 1rem hsl(0 0% 50% / .5);')
    const tags = ref(['管理', '题目', '模板', '用户', '审核'])
    const status = ref(0);



    const changeSinglePage = (type)=>{
        status.value = type
    }
</script>

<template>
    <div class="g-container">  
        <div class="g-left">
            <div class="left-box">
                <img src="@/assets/img/icon.png" alt="" class="icons" @click="changeSinglePage(0)">
                <div class="left-item-wrapper">
                    <div class="left-item" @click="changeSinglePage(1)"> 
                        管理
                    </div>
                    <div class="left-item" @click="changeSinglePage(2)">
                        题目
                    </div>

                    <div class="left-item" @click="changeSinglePage(3)"> 
                        模板
                    </div>
                    <div class="left-item" @click="changeSinglePage(4)"> 
                        用户
                    </div>
                    <div class="left-item" @click="changeSinglePage(5)"> 
                        审核
                    </div>
                    <!-- </div> -->
                </div>

            </div>
        </div>  
        <div class="g-middle">
            <div class="middle-box">
                <MainLoading :isshow="status === 0 ? 1 : 0"></MainLoading>
                <!-- <div :isshow = ></div> -->
            </div>
        </div>  
       
        <!-- <div class="g-right"><span>right</span></div>   -->
    </div>
</template>


<style lang="scss" scoped  >
    .g-container {
    // overflow: hidden;
    position: relative;
    height: 100vh;
    // padding: 0 200px;
    min-width: 400px;
    // background-image: url('@/assets/img/managerBg2.jpg');
    // background-color: rgb(49, 47, 64);   
    background-image: linear-gradient(to left, #b3bce4, #ACB6E5);
    display: flex;
    // flex-direction;
    .g-middle {
        position: relative;
        width: 82.5%;
        height: 100vh;
        .middle-box{
            border-radius: 0px 25px 25px 0px;
            display: flex;
            background-color: v-bind(middleBg);
            height: 95%;    
            width: 100%;
            opacity: 0.95;
            top: 2.5%;
            // left: 10%;
            position: absolute;
            flex-direction: column;
        }

    }

    .g-left {
        position: relative;
        width: 15vw;
        height: 100vh;
        // margin-left: -100%;
        // left: -200px;
        .left-box{
            border-radius: 25px 0px 0px 25px;
            display: flex;
            background-color: v-bind(leftBg);
            // background-color: #d6d9e5;
            height: 95%;
            width: 90%;
            top: 2.5%;
            opacity: 0.95;
            flex-direction: column;
            left: 10%;
            position: absolute;
            .icons{
                padding: 10%;
                width: 80%;
                height: fit-content;
            }
            .left-item-wrapper{
                width: 95%;

                height: 70%;
                // background-color: rgb(210, 224, 219);
                margin-left: 10%;
                margin-bottom: 10%;
                display: flex;
                flex-direction: column;
                gap: 5%;
                position: relative;
                .left-item{
                    // background-color: rgb(210, 224, 219);
                    background-color: v-bind(middleBg);
                    width: 90%;
                    height: 15%;
                    margin-left: 5%;
                    border-radius: 20px 0px 0px 20px;
                    cursor: pointer;
                    // .left-item:hover{
                    //     background-color: aqua !important;
                    // }
                    display: -moz-box;/*兼容Firefox*/
                    display: -webkit-box;/*兼容FSafari、Chrome*/

                    -moz-box-align: center;/*兼容Firefox*/
                    -webkit-box-align: center;/*兼容FSafari、Chrome */

                    -moz-box-pack: center;/*兼容Firefox*/
                    -webkit-box-pack: center;/*兼容FSafari、Chrome */
                    font-size: 2vw;
                    // .left-font {
                    font-family: 'my_font';
                    // box-shadow: v-bind(shadow);
                    // box-shadow: -.5rem -.5rem 1rem hsl(0 0% 100% / .75),
                    //             .5rem .5rem 1rem hsl(0 0% 50% / .5);
                    // }
                }
                .left-item:hover{
                    background-color: #d1d8eb;
                    scale: 1.1;
                }
            }
        }

    }
}



</style>