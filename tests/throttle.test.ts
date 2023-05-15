import { throttle } from "../src/function";

describe("throttle", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it("第一次调用时应该立即调用函数", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("如果在节流时间内重复调用函数，则不应再次调用该函数", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it("如果在节流时间后调用函数，则应再次调用该函数", () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    jest.advanceTimersByTime(500);
    throttledFunc();
    jest.advanceTimersByTime(500);
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });
});
