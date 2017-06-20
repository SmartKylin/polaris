import apis from '../api'
import http from '../http'

/**
 * 查询触点
 */
export function queryTentacle(params) {
  return http.get(apis.tentaclelist, params)
}

