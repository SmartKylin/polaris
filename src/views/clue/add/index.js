import { addClue } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      // 借款人信息
      user: {
        // 真实姓名
        name: '',
        // 手机号
        phone: '',
        // 身份证
        idCard: ''
      },
      // 抵押物信息
      house: {
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
      probability: ''
    }
  },

  methods: {
    save() {

    }
  }
})
