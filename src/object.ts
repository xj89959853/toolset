function getType(data: any) {
  let type = typeof data;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString
    .call(data)
    .replace(/^\[object (\S+)\]$/, "$1");
}

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp(obj: { [key: string]: any }, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * pick({a:1, b:2, c:3}, ['a', 'b']) ---> {a:1, b:2}
 * @param obj 要提取的对象
 * @param paths 要提取的属性
 * @returns 所提取的属性组成的对象
 */
export function pick(obj?: any, paths?: any) {
  const res: { [key: string]: any } = {};

  if (getType(obj) !== "Object") {
    return res;
  }

  if (!Array.isArray(paths)) {
    return res;
  }

  for (let i = 0; i < paths.length; i++) {
    const key = paths[i];

    if (obj && hasOwnProp(obj, key)) {
      res[key] = obj[key];
    }
  }

  return res;
}
