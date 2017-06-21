/**
 * 集中管理整个应用要用到的所有接口地址：
 *   1. 整个应用用到了哪些接口一目了然
 *   2. 接口地址很可能会发生格式变化，集中起来方便修改
 */

const prefix = window.__CONFIG__.apiPath
export default (config => {
  return Object.keys(config).reduce((copy, name) => {
    copy[name] = `${prefix}${config[name]}`
    return copy
  }, {})
})({
  "statis": "/mizar/m/channel/statis",
  "tentaclelist": "/mizar/m/channel/list",
  "tentacledetail": "/mizar/m/channel/detail",
  // 查询线索
  "clueList": "/mizar/m/clue/list",
  // 编辑线索
  "clueEdit": "/mizar/m/clue/editor",
  // 关闭线索
  "clueClose": "/mizar/m/clue/close",
  // 线索详情
  "clueDetail": "/mizar/m/clue/detail",
  // 线索操作日志
  "clueLog": "/mizar/m/clue/log",
  // 添加线索
  "clueAdd": "/mizar/m/clue/add",
  // 线索统计数据
  "clueStatis": "/mizar/m/clue/statis",
  // 添加金融方案
  "addLoanScheme": "/mizar/m/clue/solutions/add",
  // 修改金融方案
  "editLoanScheme": "/mizar/m/clue/solutions/editor"
})









