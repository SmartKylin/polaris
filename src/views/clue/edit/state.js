export default {
  // 触点信息
  tentacle: {},
  // 需要提交的数据
  model: {
    // 线索编码
    clueCode: '',
    statusName: '',
    serviceStatusName: '',
    // 借款人信息
    users: {
      // 真实姓名
      name: '',
      // 手机号
      phone: '',
      // 身份证
      idCard: ''
    },
    // 抵押物信息
    houses: {
      // 地址
      address: '',
      // 估值
      assessedValue: ''
    },
    // 贷款需求
    expect: {
      // 贷款金额
      amount: '',
      // 贷款周期
      term: ''
    },
    // 成单概率
    probability: '',
    // 触点信息
    channel: {
      channelCode: '',
      name: '',
      channelInstitutionName: '',
      mobile: '',
      address: ''
    },
    //
    serviceInfo: {
      chargesAmount: 0,
      deposit: 0,
      serviceCharge: 0
    }
  },
  // 上级页面是线索添加页面
  fromAdd: false
}
