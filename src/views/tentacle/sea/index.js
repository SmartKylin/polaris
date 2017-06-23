import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryCommonality} from 'services'

export default create({
  data() {
    return {
      // 未被认领触点列表
      tentacleList: [],
      // 分页信息
      pageNum: 0,
      // 标识是否已加载完所有数据
      allLoaded: false,
      // 当前状态分类
      status: 0,
      // 标识是否正在请求数据
      fetching: false,
    }
  },
  mounted() {
    // 查询触点
    this.query()
    console.log('sea ');
  },
  components: {
    TentacleBar
  },
  methods: {
    query(onsuccess) {
      if (this.fetching) {
        return
      }
      this.fetching = true

      this.pageNum += 1

      const params = {}
      params.page = this.pageNum
      params.size = 20
      this.$loading.show()

      queryCommonality(params).then(res => {
        const list = res.list
        if (onsuccess) {
          onsuccess()
        }
        if (list.length > 0) {
          this.tentacleList = this.tentacleList.concat(list)
        } else {
          // 所有数据已加载完
          this.allLoaded = true
        }

        this.$loading.hide()
        this.fetching = false

      }).catch(err => {
          this.$loading.hide()
          this.fetching = false
          this.$dialog.alert('提示', err.message)
        })
    },
    // 加载更多
    loadmore() {
      this.query()
      console.log(this.tentacleList);
    }
  }
})

