// 默认公用方法定义
/**
 * 数组去重
 * @param {Array} arr 传入参数
 *
 */
export const offDuplicate = arr => {
  return [...new Set(arr)];
};
