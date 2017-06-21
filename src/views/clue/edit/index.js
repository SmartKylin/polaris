import { editClue, queryClueByCode } from 'services'
// import LoanSchemeView from '../loan-scheme'
import bus from '../../../helper/bus'
import state from './state'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return state
  },

  // components: { LoanSchemeView },

  created() {
    // 保存选择的触点信息
    bus.$on('pick-tentacle', data => {
      this.model.channel = {
        channelCode: data.code,
        name: data.name,
        channelInstitutionName: data.channelInstitutionName,
        mobile: data.mobile,
        address: data.address
      }
    })

    this.query()
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
    },

    query() {
      this.$loading.show('数据加载中...')
      queryClueByCode({
        clueCode: this.$route.params.code
      })
      .then(res => {
        this.model = res
        this.$loading.hide()
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
