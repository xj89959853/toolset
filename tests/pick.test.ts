import { pick } from "../src/object";

it("正常流程", function () {
  expect(pick({ a: 1 }, [])).toEqual({});
  expect(pick({ a: 1, b: 2, c: 3 }, ["a"])).toEqual({ a: 1 });
  expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c", "d"])).toEqual({ a: 1, c: 3 });
});
it("异常流程", function () {
  expect(pick()).toEqual({});
  expect(pick(123)).toEqual({});
  expect(pick({})).toEqual({});
  expect(pick({}, 123)).toEqual({});
});
