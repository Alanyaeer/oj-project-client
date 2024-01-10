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