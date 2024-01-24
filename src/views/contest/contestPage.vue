<script setup>
import cupMove  from '@/components/cupMove.vue'
import topThree from '@/components/topThree.vue';
import topList from '@/components/topList.vue';
import contentList from '@/components/contentList.vue';
</script>

<template>
    <div class="containersss">
        <div class="topsssss">
            <cupMove style="top: -55px; position: relative;"></cupMove>
            <div style="font-family: fantasy; color: #71B0E4; font-size: 45px; top: -55px; position: relative;">AttackCode </div>
            <div style="font-size: 45px; top: -55px; position: relative; color: #F9C52D;">Contest</div>
        </div>
        <div class="bottomssss">
            <div class="bottom-innersss">
                <div class="leftsss">
                    <div class="left-topsss">

                        <img style="width: 100px; height: fit-content;" src="@/assets/icon/china_map.e6e137c72.svg">
                        <div style="position: relative ; top: 20px;">全国排名</div>
                    </div>
                    <div class="left-middlesss">
                        <topThree></topThree>
                    </div>
                    <div >
                        <topList></topList>
                    </div>
                </div>
                <div class="rightsss">
                    <contentList></contentList>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.containersss{
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    left: 0px;
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
    .topsssss{
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
    .bottomssss{
        width: 920px;
        height: 1060px;
        background-color: #FAFAFA;
        padding: 0px 300px;
        .bottom-innersss{
            position: relative;
            top: 50px;
            display: flex;
            gap: 45px;
            .leftsss{
                position: relative;
                display: flex;
                gap: 20px;
                flex-direction: column;
                .left-topsss{
                    font-size: 33px;
                    font-weight: bold;
                    color: #BCC2C6;
                    display: flex;
                    gap: 10px;
                }
                .left-middlesss{
                    display: flex;
                }
            }
            .rightsss{
                position: relative;
            }
        }
    }
}
</style>