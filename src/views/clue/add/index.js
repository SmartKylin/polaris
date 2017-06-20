import { addClue, editClue } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
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
      probability: ''
    }
  },

  created() {
    // 每次进入添加线索页时，发送一个空的提交用于产生一个临时线索
    // 主要是为了拿到 clueCode
    // 接下来的操作实际就成了编辑刚刚创建的临时线索
    addClue({}).then(res => {
      this.clueCode = res.clueCode
    }).catch(err => {
      this.$toast.show('服务异常，请重试', () => {
        this.$router.back()
      })
    })
  },

  methods: {
    // 保存修改
    save() {
      this.$loading.show()
      editClue(this.$data).then(res => {
        this.$loading.hide()
        this.$toast.show('操作成功')
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
