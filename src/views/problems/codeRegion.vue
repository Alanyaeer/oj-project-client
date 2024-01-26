<script setup>
import {onMounted, ref, defineProps, watch, defineEmits} from 'vue'
import {useStorage} from '@vueuse/core'
import codeEditor from '@/components/codeEditor.vue';
import {submitQuestion } from '@/api/question'
import {picLoading} from '@/utils/loading'
import { debounce } from '@/utils/optimizeUtils';
const currentTab = ref(0)
const clickToLike = ref(false)
const choseLangage = ref(0)
const languageList = ref([
    {label: 'C++', value: 0},
    {label: 'Java', value: 1},
    {label: 'Go', value: 2},
    {label: 'C',value: 3},
    {label: 'Python', value: 4},
    {label: 'Rust', value: 5}
])
const emit = defineEmits(['submitCode', 'changeLanuage'])
const props = defineProps({
    loading: {
        type: Boolean,
        default: true
    },
    rep: {
        type: Object,
        default: null
    }
})
const clickTitleTab = (index) =>{
    currentTab.value = index
}
const code = ref('')
const clickFooter = (type) => {
    console.log(clickToLike.value);
    if(type === 1){
        clickToLike.value = !clickToLike.value 
    }
}
const handleUpdateValue = (value) => {
    code.value=value
}
const _handleDebounce = debounce(handleUpdateValue, 200)
const uploadCode = () => {
    emit('submitCode', code.value)
}
const changeLanguageFun = () => {
    emit('changeLanuage', choseLangage.value)
}
watch(() => code, 
    () => uploadCode(),
    {deep: true}
)

watch(() => choseLangage, 
    () => changeLanguageFun(),
    {deep: true})
onMounted(() =>{
})
</script>

<template>

    <div class="item">
        <div class="top">
            <div class="top-item">
                <span style="position: relative; left: 5px;">代码</span>
            </div>
            <div style="position: relative; right: 5px;" class="top-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="gray" class="text-gray-60 dark:text-gray-60 h-4 w-4"><path fill-rule="evenodd" d="M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>

            </div>
        </div>
        <div class="middle">
            <div class="middle-left">
                <el-skeleton   :loading="props.loading" :throttle="300" animated>
                    <template #template>
                        <div style="display: flex; gap: 20px">
                            <el-skeleton-item variant="h3" style="position: relative; top: 5px; left: 5px; width: 50px; height: 15px;" />
                            <el-skeleton-item variant="h3" style="position: relative; top: 5px; left: 5px; width: 50px; height: 15px;" />
                        </div>
                    </template>
                    <template #default>
                        <div style="display: flex; align-items: center; position: relative; top: 3px;">
                            <el-select
                                v-model="choseLangage"
                                style="width: 100px;"
                            >
                            <el-option
                                v-for="item in languageList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                            </el-select>
                            <!-- C++ -->
                        </div>
                        <div class="middle-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="14" height="14" fill="gray" class="mr-[6px] h-3 w-3 text-text-secondary dark:text-text-secondary"><path fill-rule="evenodd" d="M6.01.7c-.652-.014-1.202.14-1.652.43a2.905 2.905 0 00-.996 1.121c-.449.856-.564 1.899-.564 2.692v.05a1.42 1.42 0 00-.9 1.321v3.572a1.41 1.41 0 001.4 1.414h5.4c.779 0 1.4-.643 1.4-1.414V6.314a1.42 1.42 0 00-.9-1.32v-.051c0-.794-.115-1.813-.564-2.658C8.165 1.405 7.336.73 6.01.7zm2.188 4.2h-4.4c.005-.717.117-1.55.45-2.185.166-.317.38-.571.65-.744.266-.17.616-.282 1.09-.271.923.02 1.444.456 1.763 1.055.331.622.443 1.43.447 2.145z" clip-rule="evenodd"></path></svg>
                            智能模式
                        </div>
                    </template>
                </el-skeleton> 
               
            </div>
            <div class="middle-right">
                <el-skeleton   :loading="loading" animated>
                    <template #template>
                        <div style="display: flex; gap: 20px">
                            <el-skeleton-item variant="h3" style="position: relative; top: 5px;  width: 50px; height: 15px;" />
                            <el-skeleton-item variant="h3" style="position: relative; top: 5px;  width: 50px; height: 15px;" />
                        </div>
                    </template>
                    <template #default>
                        <div class="middle-right-item">
                            
                        </div>
                        <div class="middle-right-item">
        
                        </div>
                        <div class="middle-right-item">
        
                        </div>
                    </template>
                </el-skeleton> 
            </div>
            
        </div>
        <div class="code-region">
            <codeEditor @update:value="_handleDebounce" :value="code" ></codeEditor>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.item{
    padding-left: 5px;
    position: relative;
    width: 100%;   
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 10px;
    overflow: visible;
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
            align-items: center;
            
            .middle-item{
                top: 3px;
            // margin: 5px;
                padding: 0px 10px;
                position: relative;
                border-radius: 5px;
                color: gray;
                height: 33px;
                align-items: center;
                cursor: pointer;
                display: flex;
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
                cursor: pointer;
                border-radius: 3px;
                padding-left: 5px;
                padding-right: 5px;
            }
            .middle-right-item:hover{
                background-color: #e6e6e6 !important;
            }
        }
    }
    .code-region{
        display: flex;
        position: relative;
        // height: 550px;  
        width: 100%;
    }
}

</style>