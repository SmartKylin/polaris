// import BScroll from 'better-scroll'
import { queryTentacle } from 'services'
import bus from '../../../helper/bus'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      keywords: '',
      dataList: [],
      isSearch: false
    }
  },

  created() {
    this.query()
  },

  methods: {
    picker(data) {
      bus.$emit('pick-tentacle', data)
      this.$router.back()
    },

    search() {
      this.isSearch = true
      this.query()
    },

    query() {
      const params = {}
      if (this.isSearch) {
        params.search = this.keywords
      }
      this.$loading.zIndex(6).show()
      queryTentacle(params).then(res => {
        this.dataList = res.list
        this.$loading.hide()
        // this.$nextTick(() => new BScroll(this.$refs.wrapper))
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
