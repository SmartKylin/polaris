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


/**
 * 添加线索
 */
export function addClue(params) {
  return http.post(apis.clueAdd, params)
}


/**
 * 编辑线索
 */
export function editClue(params) {
  return http.post(apis.clueEdit, params)
}


/**
 * 添加金融方案
 */
export function addLoanScheme(params) {
  return http.post(apis.addLoanScheme, params)
}


/**
 * 修改金融方案
 */
export function editLoanScheme(params) {
  return http.post(apis.editLoanScheme, params)
}


/**
 * 查询指定线索信息
 */
export function queryClueByCode(params) {
  return http.get(apis.clueDetail, params).then(res => {
    if (!res.serviceInfo) {
      res.serviceInfo = {
        "contractNo": "",
        "chargesAmount": 0,
        "deposit": 0,
        "serviceCharge": 0,
        "about": ""
      }
    }
    return res
  })
}


/**
 * 预约面签
 */
export function makeInterview(params) {
  return http.post(apis.makeInterview, params)
}


/**
 * 编辑待办事项
 */
export function editTodo(params) {
  return http.post(apis.todoEdit, params)
}



