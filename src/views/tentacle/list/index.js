import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import LevelOverview from 'components/leveloverview'
import {queryTentacle, queryTentacleLevelGStatics} from 'services'

// 意向分类
const categories = {
  a: 1,
  b: 2,
  c: 3,
}

export default create({
  data() {
    return {
      dataList: [],
      // 分页信息
      pageNum: 0,
      // 标识是否已加载完所有数据
      allLoaded: false,
      // 根据级别分类
      categories: [],
      // 标识是否正在请求数据
      fetching: false,
      // 当前页面所属分类（A, B, C）
      category: '',
      // 当前页面所属产能分类 (高，低)
      capacity: '',
      // 当前级别
      curLevel: 'all',
      // 是否查询休眠
      isDormant: false
    }
  },

  components: {
    LevelOverview,
    TentacleBar,
  },

  methods: {
    // 查询为指定分类下的触点
    queryWithLevel(category) {
      this.curLevel = category
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

      const params = {}
      const {curLevel, category, capacity} = this

      this.pageNum += 1
      params.page = this.pageNum

      // 查询休眠触点
      if (this.isDormant) {
        params.dormant = 1
      }
      else {
        // 等级
        if (curLevel === 'vip') {
          params.vip = 1
        }
        else if (curLevel !== 'all') {
          params.level = curLevel
        }
        // label
        if (category && capacity) {
          params.label = `${categories[category]},${capacity}`
        }
      }

      this.$loading.show('数据加载中...')

      queryTentacle(params).then(res => {
        const list = res.list
        if (onsuccess) {
          onsuccess()
        }
        if (list.length > 0) {
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
    },

    init(query) {
      this.fetching = false
      this.categories = []
      this.pageNum = 0
      this.dataList = []

      // 当前所属分类 (A, B, C 类)
      if (query.category) {
        this.category = query.category || ''
      }

      // 当前查询的等级 (1, 2, 3, 4, 5, vip)
      if (query.level) {
        this.curLevel = query.level || 'all'
      }

      // 当前查询的产能分类 (高，低)
      if (query.capacity) {
        this.capacity = query.capacity || ''
      }

      // 是否查询休眠触点
      this.isDormant = !!query.isDormant



      // todo
      // 设置页面 title
      if (this.category) {
        document.title = `${this.category.toUpperCase()}-高 触点`
      }
      else if (this.isDormant) {
        document.title = '休眠触点'
      }


      // 查询各分类下的触点数量，
      // 如果是查询休眠触点则不需要查询
      if (!this.isDormant) {
        queryTentacleLevelGStatics({
          type: this.category
        })
        .then(res => {
          this.categories = res
        })
        .catch(err => {
          this.$dialog.alert('提示', err.message)
        })
      }


      // 查询触点
      this.query()
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.init(to.query)
    next()
  },

  created() {
    this.init(this.$route.query)
  }
})

