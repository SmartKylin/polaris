import apis from '../api'
import http from '../http'
import { formatMoney } from '../helper/filters'

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
        id: 0
      },
      {
        key: 'waitFace',
        name: '待预约',
        val: data.waitFace,
        id: 1
      },
      {
        key: 'waitSignedService',
        name: '待签约',
        val: data.waitSignedService,
        id: 2
      },
      {
        key: 'waitLoan',
        name: '待放款',
        val: data.waitLoan,
        id: 3
      },
      {
        key: 'loan',
        name: '已放款',
        val: data.loan,
        id: 4
      },
      {
        key: 'waitEndOrder',
        name: '待结单',
        val: data.waitEndOrder,
        id: 5
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
 * 保存触点信息前处理单位，删除多余字段
 */
function beforeSaveClue(params) {
  console.log(params)
  // 删除多余字段
  delete params.status
  delete params.statusName
  delete params.serviceStatusName
  delete params.serviceInfo
  // 单位转换
  params.expect.amount = params.expect.amount * 10000
  params.houses.assessedValue = params.houses.assessedValue * 10000
}


/**
 * 添加线索
 */
export function addClue(params) {
  beforeSaveClue(params)
  return http.post(apis.clueAdd, params)
}


/**
 * 编辑线索
 */
export function editClue(params) {
  beforeSaveClue(params)
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
    // 单位转换
    res.houses.assessedValue = formatMoney(res.houses.assessedValue)
    res.expect.amount = formatMoney(res.expect.amount)

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


/**
 * 查询线索操作日志
 */
export function queryClueLogs(params) {
  return http.post(apis.clueLogs, params)
}


