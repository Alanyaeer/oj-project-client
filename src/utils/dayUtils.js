import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 如果需要中文显示，可以引入相应的语言包

export function formatDate(date, format = 'YYYY-MM-DD') {
  return dayjs(date).format(format);
}

export function getRelativeTime(date) {
  const today = dayjs();
  const dataDate = dayjs(date);
  return dataDate.from(today);
}
/**
 * 提供开始时间和结束时间， 获取时长
 * @param {*} startTime 
 * @param {*} endTime 
 */
export function getDistanceTime(startTime, endTime){
  var startTimeStamp = new Date(startTime).getTime() / 1000;
  var endTimeStamp = new Date(endTime).getTime() / 1000;
  //获取 时长的时间戳
  var distanceStamp = endTimeStamp - startTimeStamp; 
  var getSecs = parseInt(distanceStamp  % 60)
  var getMins =  distanceStamp / 60  % 60
  var getHours = distanceStamp / 60 / 60
  if(getSecs === 0)
    return parseInt(getHours) +" 小时 " + parseInt(getMins) + " 分钟 ";
  else return parseInt(getHours) +" 小时 " + parseInt(getMins) + " 分钟 " + parseInt(getSecs) + " 秒 ";
}