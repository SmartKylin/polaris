const conf = {
  '^/tentacle$': '我的触点',
  '^/tentacle/commonality$': '触点公海池',
  '^/tentacle/edit$': '添加触点',
  '^/tentacle/edit/\\w+$': '编辑触点',
  '^/tentacle/list$': '我的触点',
  '^/tentacle/search': '触点查询',
  '^/tentacle/searchresult$': '触点查询',
  '^/tentacle/detail/\\w+': '触点详情',
  '^/clue$': '我的线索',
  '^/clue/add$': '添加新线索',
  '^/clue/edit/_$': '添加新线索',
  '^/clue/edit/_/pick-tentacle$': '选择触点',
  '^/clue/edit/\\w+$': '编辑线索',
  '^/clue/close/\\w+$': '关闭线索',
  '^/clue/[\\w-]+$': '线索详情',
  '^/clue/logs/\\w+$': '线索日志',
  '^/user$': '个人中心',
  '^/user/task/\\w+': '任务详情',
  '^/login$': '登录',
  '^/organ$': '所属机构',
  '^/organ/branch$': '所在分店',
  '^/organ/add$': '添加机构',
  '^/user/mbo': '目标管理',
  '^/user/add-goal': '添加目标'
}

export default function(path) {
  let title = '房联铁军'
  if (path !== '/') {
    Object.keys(conf).some(name => {
      const pattern = new RegExp(name)
      if (pattern.test(path)) {
        title = conf[name]
        return true
      }
    })
  }
  return title
}
