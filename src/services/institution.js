import apis from '../api'
import http from '../http'

/**
 * 查询机构列表
 */
export function queryInstitution(params) {
  return http.get(apis.institutionList, params)
}

/**
 * 查询机构详情
 */
export function queryInstitutionDetail(params) {
  return http.get(apis.institutionDetail, params)
}

/**
 * 添加机构
 */
export function addInstitution(params) {
  return http.post(apis.institutionAdd, params)
}
