import { addClue, editClue } from 'services'
import LoanSchemeView from '../loan-scheme'
import bus from '../../../helper/bus'
import state from './state'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return state
  },

  components: { LoanSchemeView },

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

    // 保存选择的触点信息
    bus.$on('pick-tentacle', data => {
      this.tentacle = data
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
