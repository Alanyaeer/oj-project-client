<script setup>
import {ref, onMounted, initCustomFormatter} from 'vue'
import userProfileProcess from '@/components/userProfileProcess.vue'
import medalShow from '@/components/medalShow.vue';
onMounted(()=>{ 
})
</script>

<template>
    <div class="item-2-middle">
        <div class="item-item2">
            <userProfileProcess></userProfileProcess>
        </div>
        <div class="item-item2">
            <medalShow></medalShow>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-2-middle{
    width: 800px;
    height: 200px;
    // background-color: white;
    border-radius: 15px;
    gap: 20px;
    display: flex;
    position: relative;
    .item-item2 {
// back
        display: flex;
        width: 390px;
        box-shadow: 0px 0px 5px 0px #e6e6e6;
        background-color: white; 
        border-radius: 10px;
    }
}
</style>