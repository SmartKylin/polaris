export default () => ({
  // 标识是否是添加线索
  // 添加和编辑线索都是在这个模块，
  // 所以根据传过来的 code 判断是添加还是编辑
  // 如果是添加，传过来的 code 为 "_"
  isAdd: '',
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
    // 备注
    about: '',
    //
    serviceInfo: {
      chargesAmount: 0,
      deposit: 0,
      serviceCharge: 0
    }
  }
})
