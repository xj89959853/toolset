import { range } from "../src/array";

test("error", function () {
  expect(range()).toEqual([]);
  expect(range('a','b','c')).toEqual([]);
});

test("-2-2", function () {
  expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
  expect(range(2, -2)).toEqual([2, 1, 0, -1]);
});

test("1-5", function () {
  expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  expect(range(5, 1)).toEqual([5, 4, 3, 2]);
});

test("1", function () {
  expect(range(2)).toEqual([2, 1]);
  expect(range(-2)).toEqual([-2, -1]);
});

test("step", function () {
  expect(range(1, 3, 1)).toEqual([1, 2]);
  expect(range(3, 1, -1)).toEqual([3, 2]);
  expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
});
