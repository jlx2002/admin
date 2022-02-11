import request from '@/utils/request'

<<<<<<< HEAD
export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
=======
/***
 *  封装单独的登录接口
 * 
 */

export function login(data) {
    // 返回一个promise对象
    request({
        url: '/sys/login',
        method: 'post',
        data
    })
}

export function getInfo(token) {

}

export function logout() {

}
>>>>>>> 8625228 (1)
