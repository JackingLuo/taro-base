/**公共方法 */
//深拷贝方法
export const cloneDeep = (obj) => {
  if (typeof obj == null) return obj;
  //是否为日期Date
  if (obj instanceof Date) return new Date(obj);
  //是否为正则 typeof /\d+/ === 'object'
  if (obj instanceof RegExp) return new RegExp(obj);
  //不是数组或对象，返回该值
  if (typeof obj !== "object") return obj;
  // 接下来，要么是对象，要么是数组 可以用 new obj.constructor得到它类型的空值
  let cloneObj = new obj.constructor();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归深拷贝
      cloneObj[key] = cloneDeep(obj[key]);
    }
  }
  return cloneObj;
};
