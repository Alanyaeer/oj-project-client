<script setup>
import { ref, onMounted} from 'vue';
import talkItem from '@/components/talkItem.vue';
</script>

<template>
    <div class="container">
        <!-- <div class="content">
        
        </div> -->
        <talkItem></talkItem>
        <talkItem></talkItem>
    </div>
    <div class="footer">
        <el-pagination class="page-tab"  layout="prev, pager, next" :total="1000" />
    </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
    gap: 15px;
    position: relative;
    flex-direction: column;
    // background-color: white;
    // height: 500px;
    border-radius: 15px;
}
.footer{
    margin-top: 10px;
    .page-tab{
        box-shadow: 0px 1px 2px rgba(0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
        border-radius: 15px;
        // width: 200px;
        width: fit-content;
    }
}
</style>