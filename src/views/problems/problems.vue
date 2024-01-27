

<script setup>
    import { ref, onMounted, provide} from 'vue';
    import {useRouter} from 'vue-router'
    import questionDescription from './questionDescription.vue';
    import userPopver from '@/components/userPopver.vue';
    import codeTest from './codeTest.vue';
    import codeRegion from './codeRegion.vue'
    import loader from '@/components/loader.vue'
    import {validateRep, getRep} from '@/utils/repUtils'
    import {addUserDayLife} from '@/api/user'
    import {issueQuestion, getQuestionContentByTn, getQuestionContent, submitQuestion, getLatestSubmitMsg, getNextOrLast, getRandomProblem} from '@/api/question'
    import {funLoading} from '@/utils/loading'
    const router = useRouter();
    const loading = ref(true)
    const awaitContent = ref({})
    const language = ref(0)
    const nickName = ref('alanyaeer')
    const description = ref('fajfeifa')
    const code = ref('')
    const nowSubmit = ref()
    const judgeFinish = ref({})
    const questionId = ref('')
    const judgeQuestionLoading = ref(false)
    const submitStatus = ref('运行中')
    const avatar = ref('https://picsum.photos/60/60')
    const judgeResult = ref({})
    var timer = null;
    provide('submitStatus',judgeResult)

    const providerMethod = (result) => {
        judgeResult.value = result.data
        console.log(result.data);

    }
    const recursiveToGetContent = async (tn, time=3000) => {
        // 执行方法
        let obj = {
                submitId: tn
            }
        let result =  await getLatestSubmitMsg(obj)
        console.log(result);
        if(result.data.status === 2) {
            clearTimeout(timer)
            judgeQuestionLoading.value = false
            providerMethod(result)
            return '完成任务'
        }
        timer =  setTimeout(async () => {
           
            // 减少时间
            if(time > 1000) time -= 1000
            
            recursiveToGetContent(tn , time)
        }, time)
    }
    const goToProblemset = () => {
        router.push('/problemset')
    }
    const changeQuestion = async (type) => {
        console.log(type);
        if(type  !== 2){
        
            let obj = {
                id: window.location.pathname.split('/')[2],
                direction: type
            }
            console.log(obj);
            let b =  await getNextOrLast(obj)
            router.push('/problems/' + b.data)
        }
        else {
            let b = await getRandomProblem()
            router.push('/problems/' + b.data)
        }
    }
    const submitCode = async () => {
        submitStatus.value = '运行中'
        judgeQuestionLoading.value = true
        let obj = { 
            questionId: questionId.value,
            code: code.value,
            language: language.value
        }
        let t = await submitQuestion(obj)
        submitStatus.value = '判题中'
        setTimeout(() => {
            judgeQuestionLoading.value = false
        }, 10000)
        recursiveToGetContent(t.data)
        let td =  await  addUserDayLife()
    }
    const questionContent = ref({})
    const codeNow = (value) => {
        code.value = value
    }
    const changeLanuage = (value) => {
        language.value = value
    }
    onMounted(async ()=>{
        let pathName = window.location.pathname
        let _fn = funLoading(loading, getQuestionContent)
        let firIndex =  pathName.indexOf("/", 2)
        let titleName = pathName.substring(firIndex+1)
        let content =  await _fn({id: titleName})
        questionId.value = titleName
        if(validateRep(content)){
            awaitContent.value = getRep(content)
        }
        // 通过titleName 来查询 

    })
</script>
<template>
<div class="containersss">
    <div class="top">
        <div class="top-icon">
            <img @click="goToProblemset" src="@/assets/img/icon.png" alt="" style="width: 35px; height: fit-content; cursor: pointer; "/>
            <span style="display: flex; justify-content: center; align-items: center;  position: relative; bottom: 3px;"> |</span>
            <div class="svg-box">
                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="展开描述"
                    placement="top-start"
                > 
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="indent" class="icon-svg" width="18" height="18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 64C0 77.3 10.7 88 24 88H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24C10.7 40 0 50.7 0 64zM192 192c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H216c-13.3 0-24 10.7-24 24zm24 104c-13.3 0-24 10.7-24 24s10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H216zM0 448c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24zM121 268.4c7.8-6.4 7.8-18.3 0-24.7L26.2 165.6C15.7 157 0 164.4 0 177.9V334.1c0 13.5 15.7 20.9 26.2 12.4L121 268.4z"></path></svg>
               
                </el-tooltip>
                <span style="white-space: nowrap;position: relative; bottom: 3px;">题库</span>
            </div>
            <div @click="changeQuestion(-1)" class="svg-box">
                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="上一题"
                    placement="top-start"
                > 
                <svg aria-hidden="true" focusable="false" data-prefix="far" class="icon-svg" data-icon="chevron-left" width="18" height="18"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"></path></svg>

                </el-tooltip>
            </div>
            <div @click="changeQuestion(1)" class="svg-box">
                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="下一题"
                    placement="top-start"
                > 
                <svg aria-hidden="true" focusable="false" data-prefix="far" class="icon-svg" data-icon="chevron-right" width="18" height="18"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"></path></svg>

                </el-tooltip>
            </div>
            <div @click="changeQuestion(2)" class="svg-box">
                <el-tooltip
                    class="box-item"
                    effect="light"
                    content="随机一题"
                    placement="top-start"
                > 
                <svg aria-hidden="true" focusable="false" data-prefix="far" class="icon-svg" data-icon="shuffle" width="22" height="22" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M425 31l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H352c-12.6 0-24.4 5.9-32 16l-46 61.3-30-40 37.6-50.1C298.2 117 324.3 104 352 104h78.1L391 65c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM204 322.7l-37.6 50.1C149.8 395 123.7 408 96 408H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96c12.6 0 24.4-5.9 32-16l46-61.3 30 40zM391 287c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H352c-27.7 0-53.8-13-70.4-35.2L128 168c-7.6-10.1-19.4-16-32-16H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H96c27.7 0 53.8 13 70.4 35.2L320 344c7.6 10.1 19.4 16 32 16h78.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9z"></path></svg>

                </el-tooltip>
            </div>
              
         
        </div>
        <div class="runAndTest">
            <div class="runFor">
                <div class="debug" v-show="!judgeQuestionLoading">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="1em" height="1em" fill="none" class="text-text-secondary dark:text-text-secondary w-4 h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.83373 3.48097C5.83828 3.48095 5.84284 3.48094 5.84739 3.48094H8.15673C8.16127 3.48094 8.1658 3.48095 8.17033 3.48097C8.16323 2.8418 7.64288 2.32585 7.00203 2.32585C6.36117 2.32585 5.84083 2.8418 5.83373 3.48097ZM9.32578 3.72484C9.33325 3.64887 9.33707 3.57194 9.33707 3.49422C9.33707 2.20461 8.29164 1.15918 7.00203 1.15918C5.71242 1.15918 4.66699 2.20461 4.66699 3.49422C4.66699 3.57189 4.6708 3.64879 4.67826 3.72471C4.22848 3.92173 3.83796 4.22895 3.54086 4.61221C3.53598 4.61016 3.53087 4.60799 3.52553 4.60569C3.46337 4.57893 3.37269 4.53607 3.268 4.47498C3.05532 4.35088 2.80417 4.16288 2.60939 3.89984C2.49885 3.75056 2.42174 3.52306 2.37646 3.29097C2.35519 3.18193 2.34348 3.08539 2.33719 3.01701C2.33406 2.98309 2.33234 2.95681 2.33143 2.94023L2.3306 2.9231L2.33051 2.92073C2.32175 2.59947 2.05467 2.34567 1.73317 2.35352C1.4111 2.36138 1.15638 2.62884 1.16424 2.95091L1.7474 2.93668C1.16424 2.95091 1.16424 2.95077 1.16424 2.95091L1.16427 2.95208L1.16431 2.95356L1.16442 2.9574L1.16482 2.9686C1.16517 2.97759 1.16571 2.9896 1.16652 3.00435C1.16814 3.03382 1.17087 3.07444 1.17543 3.12395C1.1845 3.22244 1.20105 3.35889 1.23138 3.51437C1.28932 3.81133 1.40881 4.23898 1.6718 4.59413C1.98923 5.0228 2.37942 5.30724 2.68001 5.48264C2.81254 5.55997 2.93137 5.61828 3.0248 5.66C2.96341 5.89559 2.93073 6.14278 2.93073 6.39761V7.00608H1.74746C1.42529 7.00608 1.16412 7.26725 1.16412 7.58941C1.16412 7.91158 1.42529 8.17275 1.74746 8.17275H2.93073V8.77192C2.93073 9.01289 2.95167 9.24894 2.99182 9.47837C2.90725 9.51778 2.80645 9.56896 2.69617 9.63331C2.39557 9.80871 2.00538 10.0931 1.68795 10.5218C1.42496 10.877 1.30547 11.3046 1.24754 11.6016C1.2172 11.7571 1.20065 11.8935 1.19158 11.992C1.18703 12.0415 1.1843 12.0821 1.18268 12.1116C1.18186 12.1263 1.18133 12.1384 1.18097 12.1473L1.18058 12.1585L1.18046 12.1624L1.18042 12.1639L1.18041 12.1645C1.1804 12.1646 1.18039 12.165 1.76355 12.1793L1.18041 12.1645C1.17255 12.4866 1.42725 12.7546 1.74932 12.7624C2.07082 12.7703 2.3379 12.5165 2.34667 12.1952C2.34668 12.1947 2.34669 12.1942 2.34671 12.1937L2.34675 12.1928L2.34758 12.1757C2.34849 12.1591 2.35022 12.1329 2.35334 12.0989C2.35963 12.0306 2.37134 11.934 2.39261 11.825C2.43789 11.5929 2.515 11.3654 2.62554 11.2161C2.82032 10.9531 3.07147 10.7651 3.28415 10.641C3.31111 10.6252 3.33714 10.6107 3.362 10.5974C3.7181 11.306 4.27486 11.8961 4.95693 12.293C5.08155 12.3655 5.21041 12.4316 5.34306 12.4909C5.63722 12.6223 5.98219 12.4903 6.11358 12.1962C6.24498 11.902 6.11303 11.557 5.81888 11.4256C5.72442 11.3834 5.63259 11.3363 5.54371 11.2846C4.67753 10.7806 4.0974 9.84367 4.0974 8.77192V6.39761C4.0974 5.43111 4.8809 4.64761 5.84739 4.64761H6.41598L6.41634 6.12506C6.41642 6.44723 6.67766 6.70833 6.99982 6.70825C7.32199 6.70817 7.58309 6.44694 7.58301 6.12478L7.58265 4.64761H8.15673C8.47942 4.64761 8.78007 4.73441 9.03852 4.88556C9.31661 5.04821 9.6739 4.95462 9.83655 4.67652C9.99919 4.39842 9.9056 4.04113 9.62751 3.87849C9.53037 3.82168 9.42964 3.77032 9.32578 3.72484ZM3.6237 10.4776L3.62467 10.4772C3.62491 10.4771 3.62506 10.4771 3.62467 10.4772M12.2707 2.35353C12.5927 2.36139 12.8475 2.62885 12.8396 2.95092L12.2564 2.93669C12.8396 2.95092 12.8396 2.95078 12.8396 2.95092L12.8395 2.95357L12.8394 2.95742L12.839 2.96862C12.8387 2.9776 12.8381 2.98961 12.8373 3.00436C12.8357 3.03383 12.833 3.07445 12.8284 3.12396C12.8193 3.22245 12.8028 3.3589 12.7725 3.51438C12.7145 3.81134 12.595 4.239 12.332 4.59414C12.2543 4.69916 12.1723 4.79531 12.0887 4.88308C11.8664 5.11632 11.4972 5.12523 11.2639 4.90299C11.0307 4.68075 11.0218 4.31151 11.244 4.07827C11.2968 4.02285 11.3474 3.96343 11.3945 3.89986C11.505 3.75058 11.5821 3.52308 11.6274 3.29099C11.6487 3.18194 11.6604 3.0854 11.6667 3.01702C11.6698 2.9831 11.6715 2.95682 11.6724 2.94024L11.6732 2.92311L11.6733 2.92222C11.6733 2.92173 11.6733 2.92124 11.6733 2.92075C11.6821 2.59949 11.9492 2.34569 12.2707 2.35353Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2164 5.71748C9.74147 5.70692 9.34051 5.81961 9.01184 6.03027C8.68565 6.23935 8.45171 6.5313 8.28573 6.84829C7.9588 7.47271 7.875 8.23293 7.875 8.81114V8.84782C7.48968 8.99728 7.21875 9.37613 7.21875 9.81114V12.4153C7.21875 12.9779 7.6719 13.4466 8.23958 13.4466H12.1771C12.7448 13.4466 13.1979 12.9779 13.1979 12.4153V9.81114C13.1979 9.37613 12.927 8.99728 12.5417 8.84782V8.81114C12.5417 8.23216 12.4577 7.48931 12.1298 6.87341C11.7881 6.2317 11.1836 5.73897 10.2164 5.71748ZM11.8124 8.77989H8.60426C8.60738 8.25706 8.68927 7.64956 8.93171 7.18652C9.05285 6.95515 9.20856 6.77027 9.40532 6.64416C9.59959 6.51964 9.85489 6.43879 10.2002 6.44646C10.8737 6.46143 11.2536 6.77932 11.4861 7.21609C11.7276 7.66959 11.8093 8.25853 11.8124 8.77989Z" fill="currentColor"></path></svg>
                </div>
                <div class="run" v-show="!judgeQuestionLoading">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 384 512"><path fill="gray" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>
                    运行
                </div>
                <div @click="submitCode()" class="submit" v-show="!judgeQuestionLoading">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="cloud-arrow-up" width="20" height="20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M354.9 121.7c13.8 16 36.5 21.1 55.9 12.5c8.9-3.9 18.7-6.2 29.2-6.2c39.8 0 72 32.2 72 72c0 4-.3 7.9-.9 11.7c-3.5 21.6 8.1 42.9 28.1 51.7C570.4 276.9 592 308 592 344c0 46.8-36.6 85.2-82.8 87.8c-.6 0-1.3 .1-1.9 .2H504 144c-53 0-96-43-96-96c0-41.7 26.6-77.3 64-90.5c19.2-6.8 32-24.9 32-45.3l0-.2v0 0c0-66.3 53.7-120 120-120c36.3 0 68.8 16.1 90.9 41.7zM512 480v-.2c71.4-4.1 128-63.3 128-135.8c0-55.7-33.5-103.7-81.5-124.7c1-6.3 1.5-12.8 1.5-19.3c0-66.3-53.7-120-120-120c-17.4 0-33.8 3.7-48.7 10.3C360.4 54.6 314.9 32 264 32C171.2 32 96 107.2 96 200l0 .2C40.1 220 0 273.3 0 336c0 79.5 64.5 144 144 144H464h40 8zM223 255c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384c0 13.3 10.7 24 24 24s24-10.7 24-24V249.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>
                    提交
                </div>
                <div class="running" v-show="judgeQuestionLoading">
                    <div style="display: flex; position: relative ; top: 3px;">
                        <loader></loader>
                    </div>
                    <div style="color: #8b8b8b;">
                        {{ submitStatus }}

                    </div>
                </div>
            </div>
            <div class="noteFor">
                <div class="clock-note">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="alarm-clock" width="18" height="18"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="gray" d="M160 25.4C143 9.6 120.2 0 95.2 0C42.6 0 0 42.6 0 95.2c0 18.8 5.5 36.3 14.9 51.1L160 25.4zM256 112a176 176 0 1 1 0 352 176 176 0 1 1 0-352zm0 400c53.2 0 102.1-18.6 140.5-49.5L439 505c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-42.5-42.5c31-38.4 49.5-87.3 49.5-140.5C480 164.3 379.7 64 256 64S32 164.3 32 288c0 53.2 18.6 102.1 49.5 140.5L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l42.5-42.5c38.4 31 87.3 49.5 140.5 49.5zM497.1 146.4C506.5 131.6 512 114 512 95.2C512 42.6 469.4 0 416.8 0C391.8 0 369 9.6 352 25.4L497.1 146.4zM280 184c0-13.3-10.7-24-24-24s-24 10.7-24 24V288c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41V184z"></path></svg>

                </div>
                <div class="bi-note">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="note-sticky" width="18" height="18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="gray" d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H288V352c0-17.7 14.3-32 32-32h80V96c0-8.8-7.2-16-16-16H64zM288 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V320v5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7H288z"></path></svg>
                </div>
            </div>
        </div>
        <div class="other-items">
            <div class="setting">
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="gear" width="1em" height="1em" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7 8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"></path></svg>
            </div>
            <div class="fire">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="1em" height="1em" fill="currentColor" class="h-[20px] w-[20px] hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary h-4 w-4"><path fill-rule="evenodd" d="M7.19 1.564a.75.75 0 01.729.069c2.137 1.475 3.373 3.558 3.981 5.002l.641-.663a.75.75 0 011.17.115c1.633 2.536 1.659 5.537.391 7.725-1.322 2.282-3.915 2.688-5.119 2.688-1.177 0-3.679-.203-5.12-2.688-.623-1.076-.951-2.29-.842-3.528.109-1.245.656-2.463 1.697-3.54.646-.67 1.129-1.592 1.468-2.492.337-.895.51-1.709.564-2.105a.75.75 0 01.44-.583zm.784 2.023c-.1.368-.226.773-.385 1.193-.375.997-.947 2.13-1.792 3.005-.821.851-1.205 1.754-1.282 2.63-.078.884.153 1.792.647 2.645C6.176 14.81 7.925 15 8.983 15c1.03 0 2.909-.366 3.822-1.94.839-1.449.97-3.446.11-5.315l-.785.812a.75.75 0 01-1.268-.345c-.192-.794-1.04-2.948-2.888-4.625z" clip-rule="evenodd"></path></svg>
                0
            </div>
            <userPopver :avatar="avatar" :nickName="nickName" :description="description"></userPopver>
            
            <!-- <img src="@/assets/img/icon.png" alt="" style="width: 35px; height: fit-content;"> -->
        </div>
    </div>
    <div class="bottom-wrap">
        <a-split class="bottom" default-size="580" min="330" max="1150"
        >
            <template #first>
                <div class="question-info">
                    <questionDescription :loading="loading" :rep="awaitContent" ></questionDescription>
                </div>  
            </template>
            <template #second>
                <div >
                    <a-split direction="vertical" class="bottom-right" default-size="350" max="655" min="70">
                        <template #first>
                            <div class="question-code">
                                <!-- <</rouer> -->
                                <codeRegion :loading="loading" :rep="awaitContent" @submitCode="codeNow" @changeLanuage = "changeLanuage"></codeRegion>   
                            </div>
                        </template>
                        <template #second>
                            <div class="footer">
                                <codeTest></codeTest>
                            </div>
                        </template>
                    </a-split>
                </div>
            </template>
        </a-split>
    </div>

    <!-- 未来在实现TODO  <question-test></question-test> -->
</div>

</template>
<style lang="scss" scoped>
.containersss{
    height: 100vh;
    display: flex;
    background-color: #F0F0F0;
    flex-direction: column;
    .top{
        position: relative;
        left: 10px;
        width: calc( 100% - 10px);
        height: 50px;
        display: flex;
        justify-content: space-between;
        .top-icon{
            display: flex;
            color: #C7C7C7;
            gap: 3px;
            align-items: center;
        }
        .other-items{
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            gap: 20px;
            padding-right: 20px;
            .setting{
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                height: 40px;
                width: 40px;
                background-color: #E6E6E6;
                border-radius: 10px;
                cursor: pointer;
            }
            .fire{
                display: flex;
                position: relative;
                // padding: 0px 10px ;
                // justify-content: center;
                align-items: center;
                border-radius: 10px;
                cursor: pointer;
                justify-content: space-around;
                height: 40px;
                width: 50px;
                background-color: #E6E6E6;
            }
            .setting:hover{
                background-color: #E0E0E0 !important;
            }
            .fire:hover{
                background-color: #E0E0E0 !important;
            }
        }
        .runAndTest{
            display: flex;
            position: relative;
            justify-content: center;
            width: 340px;   
            height: 50px;
            transform: translate(-20%, 0%);
            // background-color: aqua;
            gap: 3px;
    
            .runFor{
                position: relative;
                width: 250px;
                height: 100%;
                // width: 18;
                gap: 1px;
                display: flex;
                align-items: center;
                .running{
                    height: 40px;
                    width: 240px;
                    border-radius: 10px;
                    background-color: #E6E6E6;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition:  0.2s;
                    overflow: hidden;
                    position: absolute;
                    justify-content: center;
                    animation: expand .5s ease forwards;
                }
                @keyframes expand {
                    0%{
                        width: 240px;
                        // transform: translate(-50%, -50);
                    }
                    100%{
                        width: 180px;
                        // transform: translate(-50%, -50%) ;
                    }
                }
                .debug{
                    display: flex;
                    align-items: center;
                    border-radius: 10px 0px 0px 10px;
                    width: 40px;
                    height: 40px;
                    justify-content: center;
                    background-color: #E6E6E6;
                    cursor: pointer;
                }
                .run{
                    cursor: pointer;

                    display: flex;
                    width: 85px;
                    height: 40px;
                    background-color: #E6E6E6;
                    padding-left: 15px;
                    align-items: center;
                    // justify-content:
                    gap: 25px;
                }
                .submit{
                    cursor: pointer;

                    display: flex;

                    border-radius:0px 10px 10px 0px;
                    width: 85px;
                    background-color: #E6E6E6;
                    align-items: center;
                    gap: 25px;
                    padding-left: 15px;
                    height: 40px;
                    color: #01B328;
                }
                .debug:hover{
                    background-color: #E0E0E0 !important;
                }
                .run:hover{
                    background-color: #E0E0E0 !important;
                }
                .submit:hover{
                    background-color: #E0E0E0 !important;

                }
            }
            .noteFor{
                position: relative;
                width: 90px;
                height: 100%;
                gap: 3px;
                justify-content: center;
                display: flex;
                align-items: center;
                .clock-note{
                    width: 40px;
                    height: 40px;
                    background-color: #E6E6E6;
                    border-radius: 10px;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                }
                .bi-note{
                    width: 40px;
                    height: 40px;
                    background-color: #E6E6E6;
                    border-radius: 10px;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                }
                .clock-note:hover{
                    background-color: #E0E0E0 !important;
                }
                .bi-note:hover{
                    background-color: #E0E0E0 !important;

                }
            }
        }
        .svg-box{
            border-radius: 5px;
            // width:  130px;
            padding-left: 9px;
            padding-right: 9px;
            position: relative;
            height: 30px;
            display: flex;  
            transition: 0.5s;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            // margin: 0px 5px;
        }
        .svg-box:hover{
            background-color: #C7C7C7;
            color: black !important;;
        }
        .svg-box:hover .icon-svg{
            color: black !important;
            
        }
        .icon-svg{
            transition: 0.5s;
        }   
    }
    .bottom-wrap{
        display: flex;
        flex-direction: column;
        position: relative;

        .bottom{
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1520.8px;
            .question-info{
                position: relative;
                display: flex;
            }
            .bottom-right{
                display: flex;
                flex-direction: column;
                height: 700px;
                // height: 300px;
                .question-code{
                // width: 930px;
                    display: flex;
                    position: relative;
                }
            }

        }
        .footer{
            height: 100%;
            // top: 10px;
            // height: 300px;
            position: relative;
            display: flex;
        }
    }

}

</style>