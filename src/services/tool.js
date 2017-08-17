import apis from '../api'
import http from '../http'

/**
 * 查询城市列表
 */
export function queryCity() {
  return http.get(apis.cityList)
}

/**
 * 查询区域列表
 */
export function queryArea(params) {
  return http.get(apis.areaList, params)
}

/**
 * 查询标签列表
 */
export function queryLabel(params) {
  return http.get(apis.labelList, params)
}

/**
 * 查询用户目标
 */
export function queryUserAims(params) {
  return http.get(apis.userAims, params)
}

/**
 * 获取微信配置
 */
export function getWeixinConfig(url) {
  return http.post(apis.weixinConfig, { url })
}

/**
 * 获取图片识别结果
 */
export function getCardResult(serverId) {
  return http.post(apis.cardResult, { serverId })
}

/**
 * 上传图片
 */
export function uploadPhoto(serverId) {
  return http.post(apis.photoUpload, { serverId })
}
