import apis from '../api'
import http from '../http'

/**
 * 查询线索
 */
export function queryClues(params) {
  return http.get(apis.clueList, params)
}


/**
 * 查询触点统计信息
 */
export function queryClueStatis() {

  function callback(data) {
    return [
      {
        key: 'all',
        name: '全部',
        val: data.all,
        id: 1
      },
      {
        key: 'waitFace',
        name: '待预约',
        val: data.waitFace,
        id: 2
      },
      {
        key: 'waitSignedService',
        name: '待签约',
        val: data.waitSignedService,
        id: 3
      },
      {
        key: 'waitLoan',
        name: '待放款',
        val: data.waitLoan,
        id: 4
      },
      {
        key: 'loan',
        name: '已放款',
        val: data.loan,
        id: 5
      },
      {
        key: 'waitEndOrder',
        name: '待结单',
        val: data.waitEndOrder,
        id: 6
      },
    ]
  }

  return http.get(apis.clueStatis).then(callback)
}


/**
 * 关闭线索
 */
export function closeClue(params) {
  return http.post(apis.clueClose, params)
}
