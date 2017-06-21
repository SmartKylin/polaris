export default {
  // 触点信息
  tentacle: {},
  // 需要提交的数据
  model: {
    // 线索编码
    clueCode: '',
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
  }
}
