<script setup>
import cupMove  from '@/components/cupMove.vue'
import topThree from '@/components/topThree.vue';
</script>

<template>
    <div class="container">
        <div class="singleContest">
            <!-- <img src="https://cdn.jsdelivr.net/gh/Alanyaeer/ImgSummary@master/img/202312082025799.webp" style="width: 490px; height: 240px; " alt="" class="src"> -->
        </div>
        <div class="doubleContest"></div>
        <div class="top">
            <cupMove style="top: -75px; position: relative;"></cupMove>
            <div style="font-family: fantasy; color: #71B0E4; font-size: 45px; top: -85px; position: relative;">AttackCode </div>
            <div style="font-size: 45px; top: -85px; position: relative; color: #F9C52D;">Contest</div>
        </div>
        <div class="bottom">
            <div class="bottom-inner">
                <div class="left">
                    <div class="left-top">

                        <img style="width: 100px; height: fit-content;" src="@/assets/icon/china_map.e6e137c72.svg">
                        <div style="position: relative ; top: 20px;">全国排名</div>
                    </div>
                    <div class="left-middle">
                        <topThree></topThree>
                    </div>
                </div>
                <div class="right">

                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .singleContest{
       position: absolute; 
    //    background-image: ;
       width: 455px;
       height: 220px;
       padding: 20px 20px 0px 20px;
    //    background-color: white;
       top: 400px;
       border-radius: 15px;
       left: 280px;
    }
    .doubleContest{
       border-radius: 15px;

        position: absolute; 
        // background-color: white;
        top: 400px;
        left: 880px;
        width: 305px;
        height: 220px;
        padding: 20px 20px 0px 20px;
    }
    .top{
        width: 1520px;
        height: 460px;
        // background-color: aqua;
        background-color: #303030;
        display: flex;
        font-family: fantasy;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .bottom{
        width: 920px;
        height: 860px;
        background-color: #FAFAFA;
        padding: 0px 300px;
        .bottom-inner{
            position: relative;
            top: 200px;
            .left{
                position: relative;
                display: flex;
                gap: 20px;
                flex-direction: column;
                .left-top{
                    font-size: 33px;
                    font-weight: bold;
                    color: #BCC2C6;
                    display: flex;
                    gap: 10px;
                }
                .left-middle{
                    display: flex;
                }
            }
            .right{
                position: relative;
            }
        }
    }
}
</style>