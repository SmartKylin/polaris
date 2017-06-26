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

/**
 * 修改待办事项
 */
export function updateTask(params) {
  return http.post(apis.taskEdit, params)
}

/**
 * 待办事项详情
 */
export function queryTaskDetail(params) {
  return http.get(apis.taskDetail, params)
}
