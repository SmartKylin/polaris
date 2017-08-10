import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import { queryTentacleDetail } from 'services'
import bus from '../../../helper/bus'

export default create({
  data() {
    return {
      data: {},
      id: 0
    }
  },
  methods: {
    queryDetail(params) {
      this.$loading.show()
      queryTentacleDetail({ channelId: params.id }).then(data => {
        this.$loading.hide()
        this.data = data
        this.id = data.id
      }).catch(err => {
        this.$dialog.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  },
  components: {
    TentacleBar
  },
  beforeRouteUpdate(to, from, next) {
    // this.queryDetail(to.params)
    next()
  },
  created() {
    this.queryDetail(this.$route.params)
    bus.$on('refresh-tentdata', () => {
      this.queryDetail(this.$route.params)
    })
  }
})
