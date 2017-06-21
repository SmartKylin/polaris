import apis from '../api'
import http from '../http'

/**
 * 查询待办事项
 */
export function queryTask(params) {
  return http.get(apis.taskList, params)
}

/**
 * 添加待办事项
 */
export function addTask(params) {
  return http.post(apis.taskAdd, params)
}
