import apis from '../api'
import http from '../http'

/**
 * 发短信验证码
 */
export function sendsms(params) {
  return http.post(apis.sendcode, params)
}

/**
 * 登录
 */
export function login(params) {
  return http.post(apis.login, params)
}

/**
 * 获取目标管理状态
 */
export function getManageStatus() {
  return http.get(apis.manage)
}
