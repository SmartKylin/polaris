import apis from '../api'
import http from '../http'

/**
 * 查询触点
 */
export function queryTentacle(params) {
  return http.get(apis.tentaclelist, params)
}

/**
 * 查询触点统计信息
 */
export function queryTentacleLevelStatis() {

  function callback(data) {
    return [
      {
        key: 'level',
        name: '一级触点',
        val: data.level.one,
        id: 1
      },
      {
        key: 'level',
        name: '二级触点',
        val: data.level.two,
        id: 2
      },
      {
        key: 'level',
        name: '三级触点',
        val: data.level.three,
        id: 3
      },
      {
        key: 'level',
        name: '四级触点',
        val: data.level.four,
        id: 4
      },
      {
        key: 'level',
        name: '五级触点',
        val: data.level.five,
        id: 5
      },
      {
        key: 'level',
        name: 'vip触点',
        val: data.level.vip,
        id: 6
      },
    ]
  }

  return http.get(apis.tentacleStatis).then(callback)
}

/**
 * 编辑触点
 */
export function editTentacle(params) {
  return http.post(apis.tentacleEditor, params)
}


/**
 * 添加触点
 */
export function addTentacle(params) {
  return http.post(apis.tentacleAdd, params)
}


