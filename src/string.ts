/**
 * truncate('12345', 5) ---> 12345
 * truncate('123456', 5) ---> 12...
 * truncate('123456', 5, '-') ---> 1234-
 * @param str 要截断的字符串
 * @param len 长度限制
 * @param omission 显示的省略字符
 * @returns 截断后的字符串
 */
export function truncate(str?: string, len?: number, omission = "...") {
  str = String(str);
  omission = String(omission);
  len = len ? Math.round(len) : NaN;

  if (isNaN(len)) {
    return "";
  }

  if (str.length > len) {
    str = str.slice(0, len - omission.length) + omission;
  }

  return str;
}
