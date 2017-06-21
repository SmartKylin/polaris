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
  // 触点统计数据
  "tentacleStatis": "/mizar/m/channel/statis",
  // 触点查询
  "tentaclelist": "/mizar/m/channel/list",
  // 触点详情
  "tentacledetail": "/mizar/m/channel/detail",
  // 触点新增
  "tentacleAdd": "/mizar/m/channel/add",
  // 触点修改
  "tentacleEditor": "/mizar/m/channel/editor",
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
  // 待办事项新增
  "taskAdd": "/mizar/m/task/add",
  // 待办事项查询
  "taskList": "/mizar/m/task/list",
  // 拜访日志新增
  "visitlogAdd": "/mizar/m/channel/visitlog/add",
  // 拜访日志查询
  "visilogList": "/mizar/m/channel/visitlog/list",
  // 触点操作日志查询
  "operationlog": "/mizar/m/channel/operationlog",
})









