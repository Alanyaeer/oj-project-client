<script setup>
// 计算公式还没有搞明白
import {ref} from 'vue'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')  
const green = ref('#00AF9B')
const organ = ref('#FFC08C')
const showPass = ref(0)
const red = ref('#FF2D55')
const getInfo = ref([
{
    tag: '简单',
    num: 114,
    totalNum: 202
},
{
    tag: '中等',
    num: 84,
    totalNum: 230
},
{
    tag: '困难',
    num: 64,
    totalNum:300
},
])
const color = ref('#B0B0AF')
const threeColor = ref(['#00AF9B','#FFA116','#FF2D55'])
const threeInnerColor = ref(['#E0F4E7','#FFF4D9','#FDE4E3'])
function changeShowType(type){
    console.log(type);
    showPass.value = type
}
const changeColor = () => {
    if(showPass.value === 1) {
        return 'color: #1C1C1C;'
    }
    else if(showPass.value === 2){
        return 'color: #00AF9B;'
    }
    else if(showPass.value ===3 ){
        return 'color: #FFA116;'
    }
    else if(showPass.value === 4){
        return 'color: #FF2D55;'
    }
}
// const changeShowType = (type) => {

// }
</script>

<template>
    <div class="item">
        <div class="item-processor">
            <!-- <svg width="100%" height="100%">
                <circle cx="50%" cy="50%" r="45%"></circle>
            </svg> -->
            <!-- 后续在解决这里的数据问题 -->
            <svg height="120px" width="120px">
                <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" stroke="#DFDFDF"  fill="none"/>
                <circle @mouseover="changeShowType(2)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 2 ? '9' : '5'" stroke-linecap="round" stroke="#00AF9B" stroke-dasharray="21.907286758913628 281.986496142629" stroke-dashoffset="65" fill="none"/>
                <circle @mouseover="changeShowType(3)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 3 ? '9' : '5'" stroke-linecap="round" stroke="#FFA116" stroke-dasharray="41.182602670466615 268.711180231076" stroke-dashoffset="45.092713241086372" fill="none"/>
                <circle @mouseover="changeShowType(4)" @mouseleave="changeShowType(0)" cx="50%" cy="50%" r="42%" :stroke-width="showPass === 4 ? '9' : '5'" stroke-linecap="round" stroke="#FF2D55" stroke-dasharray="19.275315911552983 284.61846698998966" stroke-dashoffset="-2" fill="none"/>
            </svg>
            <div class="svg-middle" @mouseover="changeShowType(1)" @mouseleave="changeShowType(0)">
                <div v-show="showPass === 0" class="up"><div style="font-size: 12px; color: #8A8A8E;">全部</div></div>
                <div v-show="showPass === 0" class="mi"><div style="font-size:25px;">1065</div></div>
                <div v-show="showPass === 0" class="do"><div style="color: #8A8A8E; font-size: small;">3311</div></div>
                <div v-show="showPass !== 0" style="display: flex; flex-direction: column; justify-content: center; position: relative; left: 10px; top: 7px;"> 
                    <div  style="display: flex; font-size: 20px;" :style="changeColor()">66<div style="font-size: 10px; top: 10px; position: relative;">.7%</div></div>
                    <div style="color: #8A8A8E; font-size: 12px; position: relative; left: -10px;">提交通过率</div>
                </div>
            </div>
        </div>
        <div class="item-digest-wrapper" >
            <div class="item-digest"  v-for="(item, index) in getInfo" :key = item.id>
                <div class="font-item">
                    <div>{{ item.tag }}</div>
                    <div style="display: flex; font-size: medium; color:black ">{{item.num  }} <div style="font-size: small; color: rgb(204, 204, 204);">{{"/" + item.totalNum }}</div> </div>
                    <div style="display: flex; color: rgb(159, 159, 159); font-size: smaller; gap: 3px;">{{ "击败用户" }} <div style="display: flex; color: gray;"> {{ (item.num/item.totalNum * 100).toFixed(1) + "%" }}</div> </div>
                </div>
                <div class="processor" :style="{background: threeInnerColor[index]} ">
                    <div class="processor-inner" :style="{width: (item.num/item.totalNum * 100) + '%', background: threeColor[index]}"></div>
                </div>
            </div>
        </div>
    </div>  

</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.item{
    width: 390px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    // gap: 10px;
    .item-processor{
        width: 35%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-middle{
            position: absolute;
            width: 60px;
            height: 60px;
            cursor: pointer;
            gap: 5px;
            .up{
                display: flex;
                justify-content: center;
                position: relative;;
                // top: 5px;
            }
            .do{
                position: relative;
                // top: 5px;
                display: flex;
                width: 30px;
                left: 17px;
                justify-content: center;
                border-top: 2px solid  rgb(210, 217, 223) ;
            }
            .mi{
                // top: 5px;
                position: relative;
                display: flex;
                justify-content: center;
            }
        }
    }
    .item-digest-wrapper{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 55%;
        justify-content: center;
        // align-items: center;
        // background-color: aquamarine;
        height: 70%;
        .item-digest{
            width: 30%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            color: gray;
            .font-item{
                // top: 20px;
                display: flex;
                position: relative;
                justify-content: space-between;
                font-size: small;
                white-space: nowrap;
                width: 210px;
                // gap: 15px;
            }   
            .processor{
                width: 210px;
                position: relative;
                height: 10px;
                display: flex;
                // top: 20px;
                border-radius: 5px;
                .processor-inner{
                    position: relative;
                    display: flex;
                    border-radius: 5px;
                    height: 10px;
                    // width: 100px;
                }
            }
          
        }
    }
}
</style>