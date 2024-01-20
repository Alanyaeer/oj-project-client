<script setup>
// 计算公式还没有搞明白
import {ref, onMounted} from 'vue'
import {picLoading, funLoading} from '@/utils/loading'
const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
                        inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' 2px 2px 10px #c8d0e7,\
                        -2px -2px 1px #ffffff')

const bgStyle = ref('#E9EDF1')  
const green = ref('#00AF9B')
const organ = ref('#FFC08C')
const red = ref('#FF2D55')
const loading = ref(true)
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
const test = async(data1, data2) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
}
onMounted(() => {
   funLoading(loading, test)(1, 2)
})
</script>

<template>
    <div class="item">
        <div class="item-processor">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <el-skeleton-item variant="image" style="width: 120px; height: 120px; border-radius: 1000px;" />
                </template>
                <template #default>
                    <svg height="120px" width="120px">
                        <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" :stroke="color"  fill="none"/>
                        <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" stroke="#00AF9B" stroke-dasharray="21.907286758913628 281.986496142629" stroke-dashoffset="0" fill="none"/>
                        <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" stroke="#FFA116" stroke-dasharray="41.182602670466615 258.711180231076" stroke-dashoffset="-21.907286758913628" fill="none"/>
                        <circle cx="50%" cy="50%" r="42%" stroke-width="5" stroke-linecap="round" stroke="#FF2D55" stroke-dasharray="19.275315911552983 244.61846698998966" stroke-dashoffset="-63.08988942938024" fill="none"/>
                    </svg>
                    <div class="svg-middle">
                        <div class="up"><span style="font-size: large; color: rgb(180, 187, 193);">全部</span></div>
                        <div class="mi"><span style="font-size: xx-large;">1065</span></div>
                        <div class="do"><span style="color: rgb(210, 217, 223); font-size: small;">3311</span></div>
                    </div>
                </template>
            </el-skeleton>
            <!-- <svg width="100%" height="100%">
                <circle cx="50%" cy="50%" r="45%"></circle>
            </svg> -->
            <!-- 后续在解决这里的数据问题 -->

        </div>
        <div class="item-digest-wrapper">
            <el-skeleton   :loading="loading" animated>
                <template #template>
                    <el-skeleton-item variant="text" style="position: relative; top: 15px;  width: 121.75px; height: 25px;" />
                    <el-skeleton-item variant="text" style="position: relative; top: 30px;  width: 121.75px; height: 50px;" />
                </template>
                <template #default>
                    <div v-for="(item, index) in getInfo" :key = item.id class="item-digest">
                        <div class="item-digest-up-tag">
                            <span :style="{ color: threeColor[index] }">{{item.tag}}</span> 
                        </div>
                        <div class="item-digest-down-num">
                            <span>{{ item.num }}</span>
                        </div>
                        <div class="item-digest-down-down">
                            <span>{{ item.totalNum }}</span>
                        </div>
                    </div>
                </template>
            </el-skeleton>
           
        </div>
    </div>  

</template>

<style lang="scss" scoped>
span{
    font-family: 'my_font';
}
.item{
    width: 290px;
    height: 165px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 10px;
    .item-processor{
        width: 45%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        .svg-middle{
            position: absolute;
            width: 80px;
            height: 80px;

            gap: 5px;
            .up{
                display: flex;
                justify-content: center;
            }
            .do{
                position: relative;
                top: 5px;
                display: flex;
                justify-content: center;
                border-top: 2px solid  rgb(210, 217, 223) ;
            }
            .mi{
                top: 5px;
                position: relative;
                display: flex;
                justify-content: center;
            }
        }
        .svg-middle:hover{
            // background-color: rgb(210, 217, 223);
        }
    }
    .item-digest-wrapper{
        display: flex;
        gap: 5px;
        width: 45%;
        // background-color: aquamarine;
        height: 70%;
        .item-digest{
            width: 30%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            
            .item-digest-up-tag{
                top: 5px;
                width: 100%;
                height: 40%;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .item-digest-down-num{
                top: 10px;
                width: 100%;
                justify-content: center;
                display: flex;
                align-items: center;
                height: 40%;
                position: relative;
                bottom: 5px;
            }
            .item-digest-down-down{
                justify-content: center;
                align-items: center;
                border-top: 2px solid rgb(210, 217, 223);
                width: 100%;
                height: 20%;
                color: rgb(210, 217, 223);
                display: flex;
                position: relative;
                font-size: smaller;
                top: 0px;
            }
        }
    }
}
</style>