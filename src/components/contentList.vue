<script setup>
import {ref, onMounted, defineProps, defineEmits, watch} from 'vue'
import {useRouter} from 'vue-router'
import {getDistanceTime}from '@/utils/dayUtils'
import {queryCompetition} from '@/api/question'
const contentList = ref([])
const loading = ref(true)
const router = useRouter()
const page = ref(1)
const pageSize = ref(10);
const props = defineProps({
    contentList: Object,
    whichIndex: Number  
})
const emits = defineEmits('changeIndex')
/**
 * 废弃转由 父级提供
 * 转载数据
 */
const loadValue =async () => {
    let form = {
        "page" : page.value, 
        "pageSize": pageSize.value
    }
    let obj = await queryCompetition(form)
    contentList.value = obj.data    
    loading.value = false
}
const goInItem = (index) => {
    emits('changeIndex', index)
    router.push('/contest/' + props.contentList[index].id)
}
const pageChange = (currentPage) => {
    page.value = currentPage;
    loadValue();
}
onMounted(async () => {
    // loadValue()
})
</script>

<template>

<div class="containersss">
    <div class="header">
        <div style="top: 40px; justify-content: space-between;" >
            <div style="color: #595959; font-size: 30px; font-weight: bold;">往期竞赛回顾</div>
            <div style="cursor: pointer; color: #007BFF; font-weight: 600;"><svg width="19px" height="14px" viewBox="0 0 19 14" version="1.1" xmlns="http://www.w3.org/2000/svg" style="margin-right: 6px;"><g transform="translate(0, -3)" stroke="none" fill="currentColor" fill-rule="evenodd"><path d="M4.88951381,6.02570425 L8.19510061,3.63021122 C9.10223722,2.98623693 10.3014623,2.81953436 11.3463317,3.20546222 L16.6039245,5.12139992 C16.9530059,5.25156494 17.3187102,5.30637126 17.6677915,5.30637126 L18.5369329,5.30637126 C18.7886514,5.30637126 19,5.4913426 19,5.73112027 L19,11.8876972 C19,12.1274749 18.7862767,12.330715 18.5369329,12.330715 L17.3970754,12.330715 C17.2427197,12.330715 17.0693663,12.3855213 16.9530059,12.4791488 L16.7012873,12.6823889 C16.6442945,12.7371952 16.5469316,12.7189264 16.4875641,12.6641201 L10.3608299,5.54843252 C10.2064742,5.36346118 9.93575803,5.32692363 9.72203475,5.43881988 L6.91988501,6.93229218 C6.35945507,7.22687616 5.68266467,7.26341371 5.08423947,7.02363605 C4.77552806,6.89347103 4.62117235,6.54408072 4.75653043,6.23122796 C4.75415573,6.15586927 4.81114861,6.08279417 4.88951381,6.02570425 Z M0.560429946,12.3124462 L1.54593176,12.3124462 L2.24171979,11.5017694 C2.85914261,10.7824364 3.9800025,10.6910925 4.73515811,11.2802605 C5.00587427,11.5017694 5.21722285,11.7963533 5.31458568,12.1274749 C5.91301087,12.2759087 6.37845269,12.7166428 6.55180602,13.2898256 C6.97687789,13.4177071 7.36395451,13.6780371 7.57530309,14.063965 C7.94338208,14.1187713 8.29008874,14.2854738 8.5608049,14.5435203 C9.12123485,15.1144195 9.2375953,15.9639175 8.81252343,16.6444293 L8.7151606,16.8111319 L8.7151606,16.8294007 C9.17822772,17.1239846 9.79802525,17.0326408 10.1257343,16.589623 C10.28009,16.3681141 10.3394576,16.1100677 10.28009,15.8520212 L10.28009,15.8337525 L10.2990876,15.8337525 L10.3774528,15.9068276 C10.7265342,16.2379491 11.2869641,16.295039 11.6906637,16.034709 C12.0183727,15.8132001 12.1727284,15.4272722 12.0967379,15.0573296 L12.0967379,15.0390608 L12.1157355,15.0390608 L12.1941007,15.1121359 C12.5408074,15.4432574 13.0822397,15.4980637 13.5073116,15.2400173 C13.8350206,15.0185084 14.0107487,14.6325806 13.9323835,14.2626379 L13.9323835,14.2466527 L13.9513811,14.2466527 L14.0297463,14.3197278 C14.3574553,14.6325806 14.87989,14.6873869 15.2669666,14.4681616 C15.7490314,14.1918464 15.9057618,13.6026784 15.616048,13.1413918 C15.5780527,13.0865855 15.5376828,13.0317792 15.4996875,12.9929581 L14.8822647,12.2736251 L9.87639045,6.46872203 C9.81939758,6.41391571 9.74103237,6.39564693 9.66266717,6.43218448 L7.26659168,7.70414789 C6.49243845,8.11062812 5.58530184,8.18370322 4.75415573,7.88911923 C4.29108861,7.74068544 3.94200725,7.39129513 3.76865392,6.96654613 C3.63329584,6.52352835 3.69028871,6.04397303 3.94200725,5.65804517 C3.99900012,5.54843252 3.96100487,5.41826751 3.84464442,5.36346118 C3.80664917,5.34519241 3.76627922,5.34519241 3.72828396,5.34519241 L0.463067117,5.34519241 C0.211348581,5.34519241 0,5.53016375 0,5.76994141 L0,11.9082496 C0.0973628296,12.1274749 0.308711411,12.3124462 0.560429946,12.3124462 L0.560429946,12.3124462 Z M4.03937008,11.8694284 C3.65229346,11.6661883 3.18922635,11.7598158 2.91851019,12.0909373 L2.24171979,12.8833454 C1.952006,13.2327357 1.99000125,13.7488286 2.35808024,14.0251438 L2.37707787,14.0251438 L2.47444069,14.0982189 C2.74515686,14.301459 3.13223347,14.3197278 3.42194726,14.171294 C3.44094488,14.1530252 3.45994251,14.171294 3.47894013,14.1895628 L3.47894013,14.2261003 C3.42194726,14.5206843 3.53593301,14.8335371 3.78765154,15.0185084 L3.86601675,15.0733147 C4.13673291,15.2765548 4.48343957,15.2948236 4.79452568,15.1646586 C4.81352331,15.1463898 4.85151856,15.1646586 4.85151856,15.1829274 L4.85151856,15.2011962 C4.81352331,15.4775114 4.94888139,15.7538266 5.1792276,15.9387979 L5.23622047,15.9753355 C5.50693663,16.1785756 5.85364329,16.2151131 6.16472941,16.0484106 C6.18372703,16.0301418 6.22172228,16.0484106 6.22172228,16.0666793 L6.22172228,16.0849481 C6.25971754,16.2881882 6.37607799,16.4731596 6.54943132,16.601041 L6.58742657,16.6193098 C6.97450319,16.895625 7.51593551,16.8408186 7.80564929,16.470876 C7.82464692,16.4343384 7.86264217,16.3978009 7.8840145,16.3795321 L8.00037495,16.176292 C8.21409824,15.8269017 8.15473066,15.4021527 7.84601925,15.1258375 C7.59430071,14.9043286 7.22859643,14.8495222 6.89851269,14.9774037 C6.87951506,14.9774037 6.87951506,14.9774037 6.86051744,14.9591349 L6.86051744,14.9408661 C6.87951506,14.4978483 6.51143607,14.1119205 6.04836895,14.0753829 C5.9320085,14.0753829 5.81564804,14.0936517 5.69928759,14.1301893 C5.56392951,14.148458 5.60192476,14.0388454 5.60192476,14.0388454 C5.77527809,13.6140964 5.58292713,13.1550934 5.13885764,12.9701221 C4.90613673,12.8787782 4.61642295,12.897047 4.40507437,13.0066596 C4.30771154,13.0249284 4.32670916,12.9335845 4.32670916,12.9335845 C4.5808024,12.5887614 4.44544432,12.0909373 4.03937008,11.8694284 L4.03937008,11.8694284 Z" id="形状"></path></g></svg>
                合作咨询
            </div>
        </div>
        <div class="text-iinner">我的虚拟竞赛记录></div>
    </div>
    <div class="middle">
        <div>以往竞赛</div>
        <div style="position: relative; left: 200px;">时长</div>
    </div>
    <div class="bottom">
        <div class="wrapper">
            <a  class="item" v-for="(item, index) in props?.contentList" style="text-decoration:none;" :href="'/contest/' + item.id">
                <div class="item-left" >
                    <div style="font-size: 15px; color: #373737;">
                        {{item?.competitionName}}  
                    </div>
                    <div style="font-size: 10px; color: #808080;">
                        {{item?.startTime}}
                    </div>
                </div>  
                <div class="item-middle">
                    {{ getDistanceTime(item.startTime, item.endTime) }}
                </div>
            </a>
        </div>
    </div>
    <div style="display: flex; position: absolute; justify-content: center; bottom: 10px; left: 0px; right: 0px;">
        <a-pagination :total="props?.contentList?.length"  @change="pageChange"/>
    </div>
</div>

</template>

<style lang="scss" scoped>
.containersss{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.15);
    position: relative;
    width: 495px;
    height: 853px;
    
    left: 15px;
    transition: .4s;
    background-color: #FAFAFA;

    border-radius: 20px;
    .header{
        background-color: white;
        display: flex;
        flex-direction: column;
        position: relative;
        border-radius: 20px 20px 0px 0px;
        gap: 10px;
        height: 130.8px;
        padding: 0px 15px;
        // width: 450px;
        border-bottom: 1px solid #c1c1c1;
        div{
            color: #595959;
            display: flex;
            position: relative;
            align-items: center;
        }
        .text-iinner{
            top: 40px;
            font-size: 12px;
             color: #AFAFAF; 
             cursor: pointer;
        }
        .text-iinner:hover{
            color: #E24CE1 !important;
        }
    }
    .middle{
        padding: 0px 15px;
        border-bottom: 1px solid #c1c1c1;
        height: 31.4px;
        font-size: 15px;
        color: #595959;
        font-weight: bold;
        background-color: white;
        display: flex;
        align-items: center;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.15);
    }
    .bottom{
        div{
            position: relative;
            display: flex;
        }
        .wrapper{
            flex-direction: column;
            
            .item{
                padding: 0px 15px;
                height: 62.8px;
                display: flex;
                width: 495px;
                align-items: center;
                cursor: pointer;
                border-bottom: 1px dotted #dddddd;
                .item-left{
                    gap: 5px;
                    flex-direction: column;
                    text-decoration: none;
                }
                .item-middle{
                    left: 160px;
                    color: #808080;
                    font-size: 14px;
                }
            }
        }
        
    }

}
.container:hover{
    box-shadow: 0 0 50px 0 rgba(0,0,0,0.3);
}
</style>