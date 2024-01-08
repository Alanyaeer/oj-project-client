<script setup>
import {ref, onMounted, initCustomFormatter} from 'vue'
import userProfileProcess from '@/components/userProfileProcess.vue'
import medalShow from '@/components/medalShow.vue';
onMounted(()=>{ 
})
</script>

<template>
    <div class="container">
        <div class="item">
            <div class="item-item">
                <userProfileProcess></userProfileProcess>
            </div>
            <div class="item-item">
                <medalShow></medalShow>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container{
    width: 100vw;
    height:  100vh;
    display: flex;
    position: relative;
    background-color: #e6e6e6;
    align-items: center;
    justify-content: center;
    .item{
        width: 800px;
        height: 200px;
        // background-color: white;
        border-radius: 15px;
        gap: 20px;
        display: flex;
        .item-item {
  // back
            display: flex;
            width: 390px;
            box-shadow: 0px 0px 5px 0px #e6e6e6;
            background-color: white; 
            border-radius: 10px;
        }
    }
}
</style>