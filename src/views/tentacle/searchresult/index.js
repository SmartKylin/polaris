import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryTentacle} from 'services'

export default create({
  data() {
    return {
      // 所有数据
      dataList: [],
      // 查询关键字
      search: '',
      // 页码
      page: 0,
      // 是否正在查询
      searching: false,
      // 数据加载完成
      allLoaded: false

    }
  },
  components: {
    TentacleBar
  },
  methods: {
    query(onsuccess) {
      if (this.searching) {
        return
      }
      this.searching = true
      const params = {}
      this.page += 1
      params.page = this.page
      params.search = this.search

      this.$loading.show()
      queryTentacle(params).then(data => {
        this.$loading.hide()
        const list = data.list
        if (list.length > 0) {
          if (onsuccess) {
            onsuccess()
          }
          this.dataList = this.dataList.concat(list)
        } else {
          this.allLoaded = false
        }
        this.searching = false
      }).catch(err => {
        this.$loading.hide()
        this.$dialog.alert("提示", err.message)
        this.searching = false
      })
    },

    reQuery() {
      this.dataList = []
      this.allLoaded = false
      this.page = 0
      this.query(() => {
        this.dataList = []
      })
    },
    loadmore() {
      this.query()
    }
  }
})
