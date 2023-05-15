/**
 * getParam('https://abc.com/?a=1&b=2', 'a') ---> 1
 * getParam('https://abc.com/?a=1&b=2', 'b') ---> 2
 * getParam('https://abc.com/?a=1&b=2', 'c') ---> ''
 * @param name 要获取的 param 的名称
 * @param url 要提取的 url 链接
 * @returns 对应的 param 值
 */
export function getParam(name: string, url: string) {
  name = String(name);
  url = String(url);
  const results = new RegExp("[\\?&]" + name + "=([^&#]*)").exec(url);
  if (!results) {
    return "";
  }

  return results[1];
}
