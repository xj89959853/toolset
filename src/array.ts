/**
 * range(1, 6) ---> [1, 2, 3, 4, 5]
 * range(1, 6, 2) ---> [1, 3, 5]
 * @param start 起始值
 * @param stop 结束值
 * @param step 步长
 * @returns 指定范围数组
 */
export function range(start?: any, stop?: any, step?: any) {
  start = start ? (isNaN(+start) ? 0 : +start) : 0;
  stop = stop ? (isNaN(+stop) ? 0 : +stop) : 0;
  step = step ? (isNaN(+step) ? 0 : +step) : 1;

  // 保证step正确
  if (start > stop && step > 0) {
    step = -step;
  }

  const arr: number[] = [];
  for (let i = start; start > stop ? i > stop : i < stop; i += step) {
    arr.push(i);
  }

  return arr;
}
