import create from './index.tpl'
import './index.styl'
import SearchBar from 'components/searchbar'
import TentacleBar from 'components/tentaclebar'
import LevelOverview from 'components/leveloverview'
import { queryTentacle, queryTentacleLevelStatics} from 'services'

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
      // 当前级别
      curLevel: 1,
      // 当前标签
      curLabel: "1,5",
      // 标签数组
      labelAry: [1, 6],
      // 是否休眠
      dormant: 0,
     /* // 是否VIP
      vip: 0*/
    }
  },
  components: {
    SearchBar,
    LevelOverview,
    TentacleBar,
  },
  methods: {
    tosearch() {
      this.$router.push('/tentacle/searchresult');
    },

    // 级别改变,重新查询
    levelChange(val) {
      this.curLevel = val
      this.reQuery()
    },
    // 标签改变
    labelChange(val) {
      if (val === "dormant") {
        this.dormant = 1
      } else if (/^[1234]$/.test(val)) {
        this.labelAry[0] = val
      } else if ((/^[56]$/).test(val)) {
        this.dormant = 0
        this.labelAry[1] = parseInt(val)
      } else if (val === "all") {
        this.labelAry[1] = null
      }
      this.reQuery()
    },

    query(onsuccess) {
      if (this.fetching) {
        return
      }
      this.fetching = true

      this.pageNum += 1

      const params = {}
      // params.status = this.status
      params.page = this.pageNum

      if (this.curLevel === 6) {
        params.vip = 1
      } else {
        params.level = this.curLevel
      }
      if (this.dormant == 1) {
        params.dormant = 1
      } else {
        params.label = this.labelAry.join(',')
      }
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
    reQuery() {
      // 切换不同分类时要重置分页状态
      this.pageNum = 0
      this.allLoaded = false
      // 查询成功后清空 dataList
      this.query(() => {
        this.dataList = []
      })
    },
    loadmore() {
      this.query()
    }
  },

  created() {

    this.curLevel = parseInt(this.$route.params.level)
    console.log('level:' + this.level);
    this.query()
    queryTentacleLevelStatics().then(data=>{
      this.categories = data
    })
  },
})

