<script setup>
import {ref, onMounted} from 'vue'
const fontRef = ref(['求职面试', '职场与内推', '技术分享','学习记录', '意见反馈'])
const currentClick = ref(0)
const colorRef = ref(['#0E81FF','#34D566','#BA5AEB', '#FFAF38', '#37B5FC'])
// ;  
const imgRef = ref([  
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110024280.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110025341.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110026945.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028128.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028423.webp'
])
const imgRefRev = ref([
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027401.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027933.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110027199.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028262.webp',
    'https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202401110028295.webp'

])
const clickBox = (type) => {
        let c = currentClick.value
        let pgtn = document.getElementsByClassName("stc")
        pgtn[c].style.backgroundColor = '#ffffff'
        pgtn[c].getElementsByClassName('stcf')[0].style.color = 'rgb(44, 44, 44)'


        let ngtn = document.getElementsByClassName("stc")
        ngtn[type].style.backgroundColor = colorRef.value[type]
        ngtn[type].getElementsByClassName('stcf')[0].style.color = '#ffffff'
        currentClick.value = type
}
const clickBoxright = (type) => {
}
onMounted(()=>{
    clickBox(0)
})
</script>

<template>
    <div class="container">
        <!-- faefae -->
        <div class="top-container">
            <div class="stc box-top" v-for="(item, index) in [0, 1, 2]" :key="item.id"  @click="clickBox(index)">

                <div class="box-font stcf">
                    {{ fontRef[index] }}
                </div> 
                <div class="img-box">
                    <img v-if="currentClick !== index" style="width: 110px; height: fit-content;"  :src="imgRef[index]" draggable="false" alt="">
                    <img v-else style="width: 110px; height: fit-content;"  :src="imgRefRev[index]" draggable="false" alt="">
                </div>
                
            </div>
            <div class="box-top-right ">
                <div class="box-top-right-item stc" v-for="(item, index) in [3, 4]"  @click="clickBox(item )">
                    <div class="box-right-font stcf">{{ fontRef[item] }}</div>
                    <div>
                        <img v-if="currentClick != item" style="width: fit-content; height: 50px; position: relative; top: 5px;" :src="imgRef[index + 3]" alt="">
                        <img v-else style="width: fit-content; height: 50px; position: relative; top: 5px;" :src="imgRefRev[index + 3]" alt="">
                    </div> 
                </div>
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.container{

    /* width: ; */
    position: relative;
    // top: 10pc;
    // background-color: aquamarine;
    min-height: 700px;
    width: 1350px;
    display: flex;
    justify-content: center;
    .top-container{
        width: 1040px;
        height: 200px;
        display: flex;
        position: relative;
        top: 10px;
        gap: 10px;
        // background-color: black;
        .box-top{
            width: 200px;
            height: 110px;
            position: relative;
            display: flex;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0 1px 2px rgba(0,10,32,0.1),0 2px 8px rgba(0,10,32,0.05);
            cursor: pointer;
            transition: 0.5s;
            box-shadow: 0px 0px 5px 0px #aeaeae;

            .box-font{
                left: 15px;
                top: 10px;
                position: relative;
                color: #5C5C5C;
            }
            .img-box{
                position: relative;
                display: flex;
                left: 15px;
                top: 29px;
            }
        }
        .box-top-right{
            width: 165px;
            height: 110px;
            position: relative;
            display: flex;
            border-radius: 10px;
            // background-color: white;
            flex-direction: column;
            // align-items: center;
            
            gap: 10px;
            .box-top-right-item{
                padding: 5px 5px;
                cursor: pointer;
                box-shadow: 0px 0px 5px 0px #aeaeae;

                width: 150px;
                height: 40px;
                position: relative;
                align-items: center;
                justify-content: space-around;
                display: flex;
                transition: 0.5s;
                border-radius: 10px;
                background-color: white;
                .box-right-font{
                    color: #5C5C5C;
                }
            }
        }
    }
}
</style>