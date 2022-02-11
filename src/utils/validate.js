/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
<<<<<<< HEAD
  return /^(https?:|mailto:|tel:)/.test(path)
=======
    return /^(https?:|mailto:|tel:)/.test(path)
>>>>>>> 8625228 (1)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
<<<<<<< HEAD
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
=======
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

// 验证手机号
export function validMobile(str) {
    return /^1[3-9]\d{9}$/.test(str) // 校验手机号
}
>>>>>>> 8625228 (1)
