import { getParam } from "../src/param";

const urlList = [
  {
    value: "name",
    url: "http://localhost:8888/test.html?name=张三&id=123",
    expectation: "张三",
  },
  {
    value: "age",
    url: "http://localhost:8888/test.html?name=张三&id=123",
    expectation: "",
  },
];

test("参数(id)的值", function () {
  urlList.forEach((item) => {
    expect(getParam(item.value, item.url)).toEqual(item.expectation);
  });
});