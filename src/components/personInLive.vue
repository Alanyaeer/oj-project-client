<template>
    <div class="container-card">
      <ul class="graph">
        <el-tooltip
          class="item"
          effect="light"
          :content="item.year + '-' + item.month + '-' + item.date"
          placement="top-start"
          v-for="(item, index) in infos"
          :key="index"
          :open-delay="500"
        >
          <li
            :data-level="item.level"
            class="li-day"
            :isToday="item.isToday"
          ></li>
        </el-tooltip>
      </ul>
  
      <!-- <ul class="months">
        <li class="li-month" v-for="(item, index) in monthBar" :key="index">
          {{ item }}
        </li>
      </ul> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        infos: [],
        current: {
          year: "",
          month: "",
          date: "",
        },
        monthBar: ["", "", "", "", "", "", "", "", "", "", "", ""],
      };
    },
    methods: {
    },
    created() {
      let d = new Date();
      let day = d.getDay();
      let today = d.getDate();
  
      this.current.year = d.getFullYear();
      this.current.month = d.getMonth();
      this.current.date = d.getDate();
  
      let info = {};
      let month = "";
      let weekOfMonth = "";
  
      for (let i = 0; i < 84; i++) {
        d.setFullYear(this.current.year);
        d.setMonth(this.current.month);
        d.setDate(this.current.date);
  
        d.setDate(today - 77 - day + i);
  
        let level = Math.floor(Math.random() * 4);
  
        if (
          d.getMonth() == this.current.month &&
          d.getDate() == this.current.date
        ) {
          info = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate(),
            number: 10,
            level: level,
            isToday: true,
          };
          this.infos.push(info);
        } else {
          info = {
            year: d.getFullYear(),
            month: d.getMonth() + 1,
            date: d.getDate(),
            number: 10,
            level: level,
            isToday: false,
          };
          this.infos.push(info);
        }
        if (d.getDate() == 1) {
          month = d.getMonth() + 1;
          weekOfMonth = parseInt((i + 1) / 7);
          this.monthBar[weekOfMonth] = month + "月";
        }
      }
    },
  };
  </script>
  <!-- const innerShadow = ref('inset 2px 2px 5px #c8d0e7,\
  inset -1px -1px 2px #ffffff ')
const outerShadow = ref(' ') -->
  <style scoped>
  .container-card {
    position: absolute;
    height: 170px;
    padding: 2px 2px 0px 2px;
    border: 1px solid #ebeef5;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #c8d0e7,
                -2px -2px 1px #ffffff;
    /* background-color: #fff; */
  }
  
  
  .graph {
    gap:5px;
    display: grid;
    grid-template-columns: repeat(12, 14px);
    grid-template-rows: repeat(7, 14px);
    padding-inline-start: 0px;
    grid-auto-flow: column;
    margin: 10px 10px 5px 10px;
  }
  
  .months {
    display: grid;
    grid-template-columns: repeat(12, 15px);
    grid-template-rows: 21px;
    font-size: 8px;
    color: #aaa;
    padding-inline-start: 0px;
    margin: 5px 20px 5px 20px;
  }
  
  .li-month {
    /* display: flex; */
    /* display: flex; */
    display: inline-block;
    font-size:small;
    
  }
  
  .li-day {
    background-color: #EBEDF0;
    list-style: none;
    border-radius: 3px;
    cursor: pointer;
    box-shadow:1px 1px 1px #c8d0e7,
                -1px -1px 1px #ffffff;
  }
  
  
  .li-day[isToday="true"] {
    background-color: rgb(234, 234, 234);
    /* box-shadow: 0px 0px 5px rgb(57, 120, 255); */
    list-style: none;
    border-radius: 3px;
  }
  
  .graph li[data-level="1"] {
    background-color: #9BE9A8;
  }
  
  .graph li[data-level="2"] {
    background-color: #30A14E;
  }
  
  .graph li[data-level="3"] {
    background-color: #216E39;
  }
  
  .item {
    margin: 2.5px;
    gap: 1px;
  }
  </style>