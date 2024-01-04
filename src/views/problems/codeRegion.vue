<script setup>
import {ref} from 'vue'
const currentTab = ref(0)
const clickToLike = ref(false)
const clickTitleTab = (index) =>{
    currentTab.value = index
}
const titleName = ref('机智的小军')
const clickFooter = (type) => {
    console.log(clickToLike.value);
    if(type === 1){
        clickToLike.value = !clickToLike.value 
        // 发送点赞请求


    }
    // clickToLike.value = false
}
</script>

<template>

    <div class="item">
        <div class="top">
            <div class="top-item">
                <svg aria-hidden="true" focusable="false" width="20" height="20" data-prefix="far" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#5DCB75" d="M399.1 1.1c-12.7-3.9-26.1 3.1-30 15.8l-144 464c-3.9 12.7 3.1 26.1 15.8 30s26.1-3.1 30-15.8l144-464c3.9-12.7-3.1-26.1-15.8-30zm71.4 118.5c-9.1 9.7-8.6 24.9 1.1 33.9L580.9 256 471.6 358.5c-9.7 9.1-10.2 24.3-1.1 33.9s24.3 10.2 33.9 1.1l128-120c4.8-4.5 7.6-10.9 7.6-17.5s-2.7-13-7.6-17.5l-128-120c-9.7-9.1-24.9-8.6-33.9 1.1zm-301 0c-9.1-9.7-24.3-10.2-33.9-1.1l-128 120C2.7 243 0 249.4 0 256s2.7 13 7.6 17.5l128 120c9.7 9.1 24.9 8.6 33.9-1.1s8.6-24.9-1.1-33.9L59.1 256 168.4 153.5c9.7-9.1 10.2-24.3 1.1-33.9z"></path></svg>
                <span style="position: relative; left: 5px;">代码</span>
            </div>
            <div style="position: relative; right: 5px;" class="top-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="gray" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>

            </div>
        </div>
        <div class="middle">
            <div class="middle-left">
                <div class="middle-item">
                    C++
                </div>
                <div class="middle-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="14" height="14" fill="gray" class="mr-[6px] h-3 w-3 text-text-secondary dark:text-text-secondary"><path fill-rule="evenodd" d="M6.01.7c-.652-.014-1.202.14-1.652.43a2.905 2.905 0 00-.996 1.121c-.449.856-.564 1.899-.564 2.692v.05a1.42 1.42 0 00-.9 1.321v3.572a1.41 1.41 0 001.4 1.414h5.4c.779 0 1.4-.643 1.4-1.414V6.314a1.42 1.42 0 00-.9-1.32v-.051c0-.794-.115-1.813-.564-2.658C8.165 1.405 7.336.73 6.01.7zm2.188 4.2h-4.4c.005-.717.117-1.55.45-2.185.166-.317.38-.571.65-.744.266-.17.616-.282 1.09-.271.923.02 1.444.456 1.763 1.055.331.622.443 1.43.447 2.145z" clip-rule="evenodd"></path></svg>
                    智能模式
                </div>
            </div>
            <div class="middle-right">
                <div class="middle-right-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" width="18" height="18"  data-icon="align-left" class="svg-inline--fa fa-align-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M24 40C10.7 40 0 50.7 0 64S10.7 88 24 88H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zm0 128c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM0 320c0 13.3 10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24zM24 424c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24z"></path></svg>
                    
                </div>
                <div class="middle-right-item">

                    <svg aria-hidden="true" focusable="false" data-prefix="far" width="18" height="18" data-icon="bookmark" class="svg-inline--fa fa-bookmark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"></path></svg>
                </div>
                <div class="middle-right-item">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" width="18" height="18" data-icon="arrow-rotate-left" class="svg-inline--fa fa-arrow-rotate-left absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M40 224c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v80.1l20-23.5C125 63.4 186.9 32 256 32c123.7 0 224 100.3 224 224s-100.3 224-224 224c-50.4 0-97-16.7-134.4-44.8c-10.6-8-12.7-23-4.8-33.6s23-12.7 33.6-4.8C179.8 418.9 216.3 432 256 432c97.2 0 176-78.8 176-176s-78.8-176-176-176c-54.3 0-102.9 24.6-135.2 63.4l-.1 .2 0 0L93.1 176H184c13.3 0 24 10.7 24 24s-10.7 24-24 24H40z"></path></svg>

                </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item{
    padding-left: 5px;
    position: relative;
    width: 940px;   
    height: 640px;
    background-color: #FFFFFF;
    border-radius: 10px;
    .top{
        position: relative;
        height: 30px;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        background-color: #FAFAFA;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: space-between;
        .top-item{
            position: relative;
            // top: 5px;
            display: flex;
            align-items: center;
            border-radius: 5px;
            // width: 70px;
            padding-left: 5px;
            padding-right: 5px;
            height: 80%;

        }
        .top-item:hover{
            background-color: #e6e6e6;
        }
    }
    .middle{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        // background-color: aqua;
        justify-content: space-between;
        border-bottom: 1px solid rgb(236, 232, 232);
        gap: 5px;
        padding-bottom: 5px;
        .middle-left{
            display: flex;
            
            .middle-item{
            // margin: 5px;
                padding: 0px 10px;
                position: relative;
                border-radius: 5px;
                color: gray;
                height: 90%;
                align-items: center;
                justify-content: center;
            }
            .middle-item:hover{
                background-color:#e6e6e6;
            }
        }
        .middle-right{
            color: gray;
            position: relative;
            top: 5px;
            display: flex;
            gap: 15px;
            padding-right: 5px;
            width: 120px;
            height: 100%;
            align-items: center;    
            .middle-right-item{
                display: flex;
                position: relative;
                width: 30px;
                height: 90%;
                align-items: center;    
                justify-content: center;
                border-radius: 3px;
                padding-left: 5px;
                padding-right: 5px;
            }
            .middle-right-item:hover{
                background-color: #e6e6e6 !important;
            }
        }
    }
}

</style>