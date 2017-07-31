import create from './index.tpl'
import './index.styl'
import { queryTentacleDetail } from 'services'

export default create({
  data() {
    return {
      // 触点详细数据
      data: {},
      industryNames: ['', '房产中介', '记账公司', '银行信贷经理', '个体']
    }
  },
  methods: {
    toEditTentacle() {
      this.$router.push('/tentacle/edit/' + this.data.id)
    }
  },
  created() {
    let id = this.$route.params.id
    this.$loading.show()
    queryTentacleDetail({ channelId: id }).then(data => {
      this.$loading.hide()
      this.data = data
    }).catch(err => {
      this.$dialog.hide()
      this.$dialog.alert('提示', err.message)
    })
  }
})
