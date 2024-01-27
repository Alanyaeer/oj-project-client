<script setup>
  import {onMounted, ref} from 'vue'
  import {formatDate, getRelativeTime} from '@/utils/dayUtils'
  import {picLoading, funLoading} from '@/utils/loading'
  import {queryUserDayLife} from '@/api/user'
  const infos = ref({})
  const monthBar = ref([])
  const loading = ref(true)
  const test = async(data1, data2) => {   
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve('done')
          }, 2000)
      })
  }
  const getColor = (times) => {
    if(times === 0) return 'backgroundColor: #EBEDF0;'
    else if(times <= 2) return 'backgroundColor: #9BE9A8;' // 绿色，表示次数小于等于2次
    else if(times <= 4) return 'backgroundColor: #30A14E'
    else return 'backgroundColor:#216E39;'
  }
  onMounted(async () => {
    let _fn = funLoading(loading, queryUserDayLife)
    const todaysss = new Date();
    
    // today.getDat
    const currentYear = todaysss.getFullYear();
    let obj = await _fn({"year": currentYear, "isQueryProfile":false})

    infos.value = obj.data  
  })
  </script>

<template>

      <el-skeleton   :loading="loading" animated>
          <template #template>
              <el-skeleton-item  variant="image" style="width: 247px; height: 155px; top: 10px; left: 5px; border-radius: 10px; position: relative;"  />
          </template>
          <template #default>

            <div class="container-card">
                <ul class="graph">
                  <el-tooltip
                    class="item"
                    effect="light"
                    placement="top-start"
                    v-for="(times, date) in infos"
                    :content="(date +'提交了: ' + times)"
                    :key="date"
                    :open-delay="500"
                  >
                    <li
                      :data-level="times"
                      class="li-day"
                      :style="getColor(times)"
                    ></li>
                  </el-tooltip>
                </ul>
              </div>
          </template>
      </el-skeleton>
      
  </template>
  
  <style scoped>
  .container-card {
    position: relative;
    height: 170px;
    top: 20px;
    display: flex;
    padding: 2px 2px 0px 2px;
    /* border: 1px solid #ebeef5; */
    border-radius: 10px;
    /* box-shadow: 2px 2px 10px #c8d0e7,
                -2px -2px 1px #ffffff; */
    /* background-color: #fff; */
  }
  
  
  .graph {
    gap:5px;
    display: grid;
    grid-template-columns: repeat(12, 16px);
    grid-template-rows: repeat(7, 16px);
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
  
  .graph li[data-level="3"] {
    background-color: #30A14E;
  }
  
  .graph li[data-level="5"] {
    background-color: #216E39;
  }
  
  .item {
    margin: 2.5px;
    gap: 1px;
  }
  </style>