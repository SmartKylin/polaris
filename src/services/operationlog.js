import apis from '../api'
import http from '../http'

/**
 * 查询触点操作日志
 */
export function queryOperationlog(params) {
  return http.get(apis.operationlog, params)
}
