import create from './index.tpl'
import './index.styl'
import SearchBar from 'components/searchbar'
import TentacleBar from 'components/tentaclebar'
import { queryTentacle, queryTentacleLevelStatics, queryLabel} from 'services'

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
      // 标签数组
      // labels: [1, 5],
      // 删除了高低分类
      labels: ['A'],
      // 是否休眠
      isDormant: false,
      // 关系标签列表
      labRelaList: []
    }
  },

  components: {
    SearchBar,
    TentacleBar
  },

  methods: {
    tosearch() {
      this.$router.push('/tentacle/searchresult')
    },

    // 级别改变,重新查询
    levelChange(val) {
      this.curLevel = parseInt(val)
      this.reQuery()
    },

   /*  产能分类暂时删除
   // 切换产能分类
    capacityChange(val) {
      if (val === 'all') {
        this.labels.length = 1
      } else {
        this.labels[1] = val
      }
      this.reQuery()
    },*/

    // 切换分类
    categoryChange(val) {
      // 是否查询休眠触点
      this.isDormant = val === 'dormant'
      this.labels[0] = val
      this.reQuery()
    },

    query(onsuccess) {
      if (this.fetching) {
        return
      }
      this.fetching = true

      const params = {}

      this.pageNum += 1
      params.page = this.pageNum

      if (this.curLevel == 6) {
        params.vip = 1
      } else {
        params.level = this.curLevel
      }

      // 如果查询休眠则不传label，不传高产低产
      if (this.isDormant) {
        params.dormant = 1
      } else {
        params.label = this.labels.join(',')
      }

      this.$loading.show()

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

    reQuery() {
      // 切换不同分类时要重置分页状态
      this.dataList = []
      this.pageNum = 0
      // 数据重置为未加载完
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

    this.query()

    queryTentacleLevelStatics().then(data=>{
      this.categories = data
    })
    // 获取关系标签列表
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      // 产能标签暂时关闭
      // this.labCapaList = data[2].list
    }).catch(err => {
      this.$dialog.alert("提示", err.message)
    })
  },
})


