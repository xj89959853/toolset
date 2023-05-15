type FuncType = (...args: any[]) => any;

export function debounce<T extends FuncType>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  // 定义一个变量来存储计时器返回值
  let timerId: ReturnType<typeof setTimeout> | null = null;
  // 返回一个新的函数，每次调用时都会重新设置计时器
  return function (...args: Parameters<T>): void {
    // 如果计时器已经存在，则清除计时器
    if (timerId) {
      clearTimeout(timerId);
    }
    // 设置一个新的计时器，当计时器到达指定的时间时执行函数
    timerId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export function throttle<T extends FuncType>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null, args: Parameters<T>;
  return function (...para) {
    args = para;
    if (!timeout) {
      func.apply(null, args);
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
    }
  };
}
