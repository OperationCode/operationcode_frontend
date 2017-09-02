const SPLIT_NUM = 20;
const checkObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
// const checkArray = array => Object.prototype.toString.call(array) === '[object Array]';

/**
 * split array by max array length
 *
 * @example
 * get -> [1, 2, 3, 4, 5, 6, 7], 3
 * return -> [[1, 2, 3], [4, 5, 6], [7]]
 */

export const splitArray = (array, max = SPLIT_NUM) => {
  const arrayLength = array.length;
  if (arrayLength <= max) {
    return [array];
  }
  const loop = Math.floor(arrayLength / max) + 1;
  return new Array(loop).fill(0).map((i, index) => array.slice(index * max, (index + 1) * max));
};

/**
 * split array by max array length
 *
 * @example
 * get -> [[1, 2, 3], [4, 5, 6], [7]]
 * return -> [1, 2, 3, 4, 5, 6, 7]
 */

export const flatArray = (arraies) => {
  let result = [];
  arraies.forEach(array => (result = result.concat(array)));
  return result;
};

export const flattenObject = (object) => {
  let result = '';
  Object.keys(object).forEach((key) => {
    const item = object[key];
    const value = checkObject(item)
      ? `${flattenObject(item)}`
      : `${key}=${item}`;
    result += `${value}&`;
  });
  return result.replace(/&$/, '');
};
