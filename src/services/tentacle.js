import apis from '../api'
import http from '../http'

/**
 * 查询触点
 */
export function queryTentacle(params) {
  return http.get(apis.tentacleList, params)
}

/**
 * 查询触点统计信息
 */
export function queryTentacleLevelStatics() {

  function callback(data) {
    return [
      {
        name: '一级触点',
        val: data.level.one,
        id: 1
      },
      {
        name: '二级触点',
        val: data.level.two,
        id: 2
      },
      {
        name: '三级触点',
        val: data.level.three,
        id: 3
      },
      {
        name: '四级触点',
        val: data.level.four,
        id: 4
      },
      {
        name: '五级触点',
        val: data.level.five,
        id: 5
      },
      {
        name: 'vip触点',
        val: data.level.vip,
        id: 6
      },
    ]
  }

  return http.get(apis.tentacleStatics).then(callback)
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


/**
 * 查询触点详情
 */
export function queryTentacleDetail(params) {
  return http.get(apis.tentacleDetail, params)
}

/**
 * 释放触点
 */
export function releaseTentacle(params) {
  return http.post(apis.tentacleRelease, params)
}

/**
 * 认领触点
 */
export function claimTentacle(params) {
  return http.post(apis.tentacleClaim, params)
}

/**
 * 查询公海
 */
export function queryCommonality(params) {
  return http.post(apis.commonalityList, params)
}

/**
 * 查询不同类型下各级别触点统计信息
 */

export function queryTentacleLevelGStatics(params) {

  function callback(data) {
    return [
      {
        name: '全部',
        val: data.all,
        id: 'all'
      },
      {
        name: '一级触点',
        val: data.one,
        id: '1'
      },
      {
        name: '二级触点',
        val: data.two,
        id: '2'
      },
      {
        name: '三级触点',
        val: data.three,
        id: '3'
      },
      {
        name: '四级触点',
        val: data.four,
        id: '4'
      },
      {
        name: '五级触点',
        val: data.five,
        id: '5'
      },
      {
        name: 'vip触点',
        val: data.vip,
        id: 'vip'
      },
    ]
  }
  return http.get(apis.tentacleGstatics, params).then(callback)
}
