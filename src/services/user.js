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
export function getOpenStatus() {
  return http.get(apis.getOpenStatus)
}

/**
 * 获取目标复盘状态
 */
export function getReplayOpenStatus() {
  return http.get(apis.getReplayOpenStatus)
}

/**
 * 获取目标管理设置信息
 */
export function getManageData(params) {
  return http.get(apis.getManageData, params)
}

/**
 * 获取目标复盘管理信息
 */
export function getReplayData(params) {
  return http.get(apis.getReplayData, params)
}

/**
 * 获取目标历史信息
 */
export function getAimsHistory(params) {
  return http.get(apis.getAimsHistory, params)
}

/**
 * 获取复盘历史信息
 */
export function getReplayHistory(params) {
  return http.get(apis.getReplayHistory, params)
}

/**
 *  目标复盘
 */
export function postReplay(params) {
  return http.post(apis.replayEdit, params)
}

/**
 * 添加目标
 */
export function addGoal(params) {
  return http.post(apis.addGoal, params)
}

/**
 * 完善目标
 */
export function perfectGoal(params) {
  return http.post(apis.perfectGoal, params)
}
