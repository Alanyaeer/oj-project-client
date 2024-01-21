export const debounce = (fn: Function, delay: number = 300) => {
  // 定义一个定时器，保存上一次的定时器
  let timer: NodeJS.Timeout | null = null
  // 真正执行的函数
  const _debounce = function (...args: any[]) {
      // 取消上一次的定时器
      if (timer) clearTimeout(timer);
      // 延迟执行
      timer = setTimeout(() => {
        console.log('fajfe');
          // 外部传入的真正要执行的函数
          fn(...args)
      }, delay)
  }


  return _debounce;
}


export const  throttle = (fn:Function, interval: number) => {
    // 1.记录上一次的开始时间
    let lastTime = 0
  
    // 2.事件触发时, 真正执行的函数
    const _throttle = function() {
  
      // 2.1.获取当前事件触发时的时间
      const nowTime = new Date().getTime()
  
      // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        // 2.3.真正触发函数
        fn()
        // 2.4.保留上次触发的时间
        lastTime = nowTime
      }
    }
  
    return _throttle
}
  
  