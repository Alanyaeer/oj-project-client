<script setup>

</script>

<template>
    <div>
      <a-split :style="{
          height: '300px',
          width: '100%',
          minWidth: '500px',
          border: '1px solid var(--color-border)'
        }"
      >
        <template #first>
          <a-typography-paragraph>Left</a-typography-paragraph>
        </template>
        <template #second>
          <div>
            <a-split direction="vertical" style="height: 200px;">
              <template #first>Top</template>
              <template #second><a-typography-paragraph>Bottom</a-typography-paragraph></template>
            </a-split>
          </div>
        </template>
      </a-split>
    </div>
    </template>
    
<style lang="scss" scoped>
.container{
    width: 100vw;
    height: 100vh;
    // background-color: rgb(255, 255, 255);

    display: flex;
    align-items: center;
    justify-content: center;
    .color-fill {
        fill: linear-gradient(to right, red 0%, red 0%); /* 初始状态为红色 */
        animation: fillAnimation 4s linear forwards; /* 4秒线性动画，动画结束后保持最终状态 */
    }

    @keyframes fillAnimation {
        to {
        background-position: 100% 0; /* 在X轴方向上移动，达到颜色从左往右填充的效果 */
        }
    }
    .cls-1{
        // fill: linear-gradient(to right, black 50%, transparent 0);
        animation: fillAnimation 3s 1s forwards;
        // animation: rotage 2s infinite;
        // transform: rotate(45deg);
      
    }
    .cls-1::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        animation: animate_2  2.5s ease-in-out infinite;
    }
    @keyframes animate_2 {
        0%{
            transform: translateX(0px);
        }
        100%{
            transform: translateX(15px);
        }
    }
    // .animation-svg:hover{
    //     transform: rotate(360deg) scale(1.2);
    //     // transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    //     transition: transform 1s cubic-bezier(0.76, 0, 0.24, 1);
    // }
    .animation-svg:active{
        transform: rotate(360deg) scale(1.05);
        transition: transform 1s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .cls-2{
        fill: none
    }
    
    img {
        cursor: pointer;
        transition: 0.5s;
    }
    img:hover{
        transform: rotate(30deg)
    }
    @keyframes fillAnimation{

     100%{
        background-position: left;
     }

    }
  
}
</style>