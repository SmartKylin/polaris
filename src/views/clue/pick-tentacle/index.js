import BScroll from 'better-scroll'
import { queryTentacle } from 'services'
import bus from '../../../helper/bus'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      dataList: []
    }
  },

  created() {
    this.$loading.zIndex(6).show()
    queryTentacle().then(res => {
      this.dataList = res.list
      this.$loading.hide()
      this.$nextTick(() => new BScroll(this.$refs.wrapper))
    })
    .catch(err => {
      this.$loading.hide()
      this.$dialog.alert('提示', err.message)
    })
  },

  methods: {
    picker(data) {
      bus.$emit('pick-tentacle', data)
      this.$router.back()
    }
  }
})
