import { queryClues, queryClueStatis } from 'services'
import ListView from 'components/listView'
import Loadmore2 from './Loadmore'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      // 线索列表
      dataList: [],
      // 分页信息
      pageNum: 0,
      // 标识是否已加载完所有数据
      allLoaded: false,
      // 当前状态分类
      status: 1,
      // 根据状态分类
      categories: [],
      // 标识是否正在请求数据
      fetching: false
    }
  },

  components: { ListView, Loadmore2 },

  created() {
    // 查询线索
    this.query()
    // 查询各状态下的线索数量
    queryClueStatis().then(data => {
      this.categories = data
    })
  },

  methods: {
    // 查询为指定状态分类下的线索
    queryWithStatus(status) {
      // 切换不同分类时要重置分页状态
      this.pageNum = 0
      this.allLoaded = false
      // 查询成功后清空 dataList
      this.query(() => {
        this.dataList = []
      })
    },

    query(onsuccess) {
      if (this.fetching) {
        return
      }
      this.fetching = true

      this.pageNum += 1

      const params = {}
      params.status = this.status
      params.pageNum = this.pageNum

      this.$loading.show()

      queryClues(params).then(res => {
        const list = res.list

        if (list.length > 0) {
          if (onsuccess) {
            onsuccess()
          }
          this.dataList = this.dataList.concat(list)
        }
        // 已加载完所有数据
        else {
          this.allLoaded = true
        }

        this.$loading.hide()
        this.fetching = false
      })
      .catch(err => {
        this.$loading.hide()
        this.fetching = false
        this.$dialog.alert('提示', err.message)
      })
    },

    loadmore() {
      this.query()
    }
  }
})
