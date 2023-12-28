<script setup>
import {ref, onMounted} from 'vue'

const clock = () => {
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  let today = new Date();
  let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
  let m = today.getMinutes(); // 0 - 59
  let s = today.getSeconds(); // 0 - 59

  h *= 30; // 12 * 30 = 360deg
  m *= 6;
  s *= 6; // 60 * 6 = 360deg

  rotation(hours, h);
  rotation(minutes, m);
  rotation(seconds, s);

  // call every second
  setTimeout(clock, 500);
}

const rotation = (target, val) => {
  target.style.transform =  `rotate(${val}deg)`;
}
onMounted(()=>{
  clock();
})
</script>

<template>
  <div class="container">
    <div class="clock">
      <div class="hand hours"></div>
      <div class="hand minutes"></div>
      <div class="hand seconds"></div>
      <div class="point"></div>
      <div class="marker">
        <span class="marker__1"></span>
        <span class="marker__2"></span>
        <span class="marker__3"></span>
        <span class="marker__4"></span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.container{
  width: 7rem;
  height: 7rem;
  display: flex;
  position: relative;
  justify-content: center;
//   align-items: center;
  .clock {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    width: 6rem;
    height: 6rem;
    justify-self: center;
    box-shadow: .3rem .3rem .6rem #c8d0e7, 
                -.2rem -.2rem .5rem #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .hand {
      position: absolute;
      transform-origin: bottom;
      bottom: 3rem;
      border-radius: .1rem;
      z-index: 200;
    }

    .hours {
      width: .4rem;
      height: 1.6rem;
      background: #bec8e4;
    }
    
    .minutes {
      width: .4rem;
      height: 2.3rem;
      background: #9baacf;
    }
    .seconds {
      width: .2rem;
      height: 2.6rem;
      background: #6d5dfc;
    }
    .point {
      position: absolute;
      width: .4rem;
      height: .4rem;
      border-radius: 50%;
      background: #6d5dfc;
      z-index: 300;
    }

    .marker {
      width: 95%;
      height: 95%;
      border-radius: 50%;
      position: relative;
      box-shadow: inset .2rem .2rem .5rem #c8d0e7, 
                  inset -.2rem -.2rem .5rem #FFFFFF;

      &::after {
        content: '';
        width: 60%;
        height: 60%;
        position: absolute;
        box-shadow: inset 1px 1px 1px #c8d0e7, 
        inset -1px -1px 1px #FFFFFF;
        border-radius: 50%;
        top: 20%;
        left: 20%;
        filter: blur(1px);
      }

      &__1, &__2, &__3, &__4 {
        position: absolute;
        border-radius: .0.5rem;
        box-shadow: inset 1px 1px 1px #c8d0e7, 
        inset -1px -1px 1px #FFFFFF;
      }

      &__1, &__2 {
        width: .1rem;
        height: .3rem;
        left: 2.8rem;
      }

      &__3, &__4 {
        width: .3rem;
        height: .1rem;
        top: 2.8rem;
      }

      &__1 { top: 2%; }
      &__2 { top: 98%; transform: translateY(-.3rem);}
      &__3 { left: 2%;}
      &__4 { left: 98%; transform: translateX(-.3rem);}
    }
  }
}
</style>