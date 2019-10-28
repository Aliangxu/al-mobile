import {noop} from './lang'
/**
 * Mix properties into target object.
 */
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * Multiple Array traversal
 * @return 1 continue
 * @return 2 break
 */
export function traverse(data, childrenKeys = [], fn = noop) {
  if (!data) {
    return
  }
  if (typeof childrenKeys === 'function') {
    fn = childrenKeys
    childrenKeys = []
  }
  let level = 0 // current level
  let indexs = [] // index set of all levels
  const walk = curData => {
    for (let i = 0, len = curData.length; i < len; i++) {
      const isArray = Array.isArray(curData[i])
      const key = Array.isArray(childrenKeys) ? childrenKeys[level] : childrenKeys
      if (isArray || (curData[i] && curData[i][key])) {
        level++
        indexs.push(i)
        walk(isArray ? curData[i] : curData[i][key])
      } else if (level >= childrenKeys.length) {
        const res = fn(curData[i], level, [...indexs, i])
        if (res === 1) {
          continue
        } else if (res === 2) {
          break
        }
      } else {
        continue
      }
    }
    level = 0
    indexs = []
  }
  walk(data)
}
/**
 * Merge an Array of Objects into a single Object.
 */
export function toObject(arr) {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

/**
 * Convert an Array-like object to a real Array.
 */
export function toArray(list, start) {
  start = start || 0
  let i = list.length - start
  const ret = []
  while (i--) {
    ret.unshift(list[i + start])
  }
  return ret
}

/**
 * whether item is in list or list equal item
 */
export function inArray(list, item) {
  return Array.isArray(list) ? !!~list.indexOf(item) : item === list
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
export function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * Convert a value to a string
 */
export function toString(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)
}

/**
 * Determine whether the two objects are equal or not shallowly
 */

export function compareObjects(object0, object1) {
  let ret = true

  if (!object0 || !object1) {
    ret = false
  } else if (typeof object0 !== 'object' || typeof object1 !== 'object') {
    ret = false
  } else if (JSON.stringify(object0) !== JSON.stringify(object1)) {
    ret = false
  }

  return ret
}

/**
 * Check object is empty
 */
export function isEmptyObject(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

/**
 * 是否为空
 * @param  {*}  value
 * @return {Boolean}
 */
export function isEmpty(value) {
  return (
    !value ||
    value === undefined ||
    trim(value) === '' ||
    trim(value) === 'null' ||
    value === '' ||
    value.length === 0
  );
}

/**
 * 是否为空数组
 * @param  {*}  value
 * @return {Boolean}
 */
export function isEmptyArray(value) {
  return Array.isArray(value) ? value.length <= 0 : true;
}

/**
 * 深拷贝
 * @param {Object} source
 * @param {Array} ignoreKeys 忽略键名
 */
export function deepClone(source, ignoreKeys) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone');
  }
  ignoreKeys = Array.isArray(ignoreKeys) ? ignoreKeys : [];
  const targetObj = source.constructor === Array ? [] : {};
  for (const keys in source) {
    if (source.hasOwnProperty(keys) && !ignoreKeys.includes(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      } else {
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}

/**
 * 日期格式化
 * @param {String} fmt 日期格式
 */
Date.prototype.Format = function (fmt = 'yyyy-MM-dd') {
  //author: meizz
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      String(this.getFullYear()).substr(4 - RegExp.$1.length)
    );
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ?
          o[k] :
          ('00' + o[k]).substr(String(o[k]).length)
      );
  return fmt;
};

/**
 * 变幻Date，兼容 iOS
 * @param {String} date
 */
function flatDateStr(date) {
  if (is('String', date) && !isEmpty(date)) {
    date = date
      .replace(/T/g, ' ')
      .replace(/\.[\d]{3}Z/, '')
      .replace(/(-)/g, '/');
    if (date.indexOf('.') > 0) date = date.slice(0, date.indexOf('.'));
  }
  return date;
}

/**
 * 格式化时间
 * @param {Number|Date} unixTime 日期或时间戳
 * @param {String} pattern 日期格式规则(如:YYYY-MM-dd)
 * @return {*}
 */
export function formatDateTime(unixTime, pattern = 'yyyy-MM-dd') {
  if (unixTime instanceof Date) {
    return unixTime.Format(pattern);
  }
  if (is('String', unixTime) && !isEmpty(unixTime)) {
    unixTime = flatDateStr(unixTime);
    if (unixTime.length === 8) {
      unixTime =
        unixTime.substring(0, 4) +
        '-' +
        unixTime.substring(4, 6) +
        '-' +
        unixTime.substring(6, 8);
    }
  }
  return !unixTime || isEmpty(unixTime) ?
    '' :
    new Date(unixTime).Format(pattern);
}

/**
 * check value type
 * @param  {String}  type 类型
 * @param  {*}  val  校验的值
 * @return {Boolean}
 */
export function isType(type, val) {
  return Object.prototype.toString.call(val) === '[object ' + type + ']';
}
