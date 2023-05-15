import { debounce } from "../src/function";
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

test("应该在等待时间过去后调用函数", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(1);
});

test("当防抖函数执行时，应该使用最新的参数调用函数", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc("a");
  debouncedFunc("b");
  debouncedFunc("c");

  jest.advanceTimersByTime(1000);

  expect(func).toHaveBeenCalledWith("c");
});

test("如果在等待时间内再次调用函数，应该重置计时器", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  jest.advanceTimersByTime(500);

  debouncedFunc();
  jest.advanceTimersByTime(500);

  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(1000);

  expect(func).toHaveBeenCalledTimes(1);
});
