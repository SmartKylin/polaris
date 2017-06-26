import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import LevelOverview from 'components/leveloverview'
import {queryTentacle, queryTentacleLevelGStatics} from 'services'

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
      // 当前状态分类
      status: 1,
      // 标识是否正在请求数据
      fetching: false,
      // 当前级别
      curLevel: 1,
      // 当前标签
      curLabel: "1,5",
     /* // 标签数组
      labelAry: [101, 206],
      // 是否休眠
      dormant: 0,*/
       // 是否VIP
      vip: 0,
      // 各级别总数
      total: 0,
      // 是否查询休眠
      isDormant: false,
      // 是否来自1-A-高 Tab
      isFromTabA: false,
      // 是否来自B-高 Tab
      isFromTabB: false
    }
  },
  components: {
    LevelOverview,
    TentacleBar,
  },
  methods: {
    // 查询为指定状态分类下的线索
    queryWithStatus(status) {
      if (/^[0-6]$/.test(status)) {
        this.curLevel = parseInt(status)
      }

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

      let {label, dormant} = this.$route.query
      const params = {}
      params.page = this.pageNum
      if (this.curLevel === 6) {
        params.vip = 1
      } else if (this.curLevel !== 0) {
        params.level = parseInt(this.curLevel)
      }

      if (dormant) {
        params.dormant = 1
      } else {
        params.label = label
      }

      params.page = this.pageNum

      this.$loading.show()

      queryTentacle(params).then(res => {
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

    // 查询统计数据
    queryStatics(type){
      queryTentacleLevelGStatics({type}).then(data => {
        this.categories = data
        this.total = data.reduce((pre, ten) => (pre + ten.val), 0)
      })
    },

    loadmore() {
      this.query()
    }
  },
  created() {
    if (!this.$route.query.hasOwnProperty("level")) {
      this.curLevel = 0

    }
    this.categories = []
    // 是否来自 1-A-高 tab
    if (this.$route.query.hasOwnProperty("level")) {
      this.isFromTabA = true
      this.queryStatics("a")
    }
    // 是否来自 休眠选项 tab
    else if (this.$route.query.hasOwnProperty("dormant")) {
      this.isDormant = true
    }
    // 是否来自 B-高 tab
    else if (this.$route.query.label.indexOf(2) > -1) {
      this.isFromTabB = true
      this.queryStatics("b")
    }
    // 是否来自 C-高 tab
    else if (this.$route.query.label.indexOf(3) > -1) {
      this.queryStatics("c")
    }

    console.log(this.isFromTabA);
    console.log(this.isFromTabB);

    this.query()
  }
})

