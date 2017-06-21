import apis from '../api'
import http from '../http'

/**
 * 查询待办事项
 */
export function queryVisitlog(params) {
  return http.get(apis.visilogList, params)
}

/**
 * 添加待办事项
 */
export function addVisitlog(params) {
  return http.post(apis.visitlogAdd, params)
}
