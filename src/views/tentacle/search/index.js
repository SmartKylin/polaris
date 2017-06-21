import create from './index.tpl'
import './index.styl'
import SearchBar from 'components/searchbar'
import TentacleBar from 'components/tentaclebar'
import LevelOverview from 'components/leveloverview'
import Loadmore2 from 'components/loadmore'
import { queryTentacle, queryTentacleLevelStatis} from 'services'

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
      curLabel: "101,206",
      // 标签数组
      labelAry: [101, 206],
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
    Loadmore2
  },
  methods: {
    tosearch() {
      this.$router.push('/tentacle/searchresult');
    },

    // 查询为指定状态分类下的线索
    queryWithStatus(status) {
      console.log(status);
      if (/^[1-6]$/.test(status)) {
        this.curLevel = parseInt(status)
      }
      if (status === "dormant") {
        this.dormant = 1
      } else if ((/^10[1234]$/).test(status)) {
        this.curLabel = status
        this.labelAry[0] = parseInt(status)
      } else if ((/^20[67]$/).test(status)) {
        this.labelAry[1] = parseInt(status)
      } else if (status === "all") {
        this.labelAry[1] = ''
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

      const params = {}
      // params.status = this.status
      params.pageNum = this.pageNum
      if (this.curLevel === 6) {
        params.vip = 1
      } else {
        params.level = this.curLevel
      }
      if (this.dormant === 1) {
        params.dormant = 1
      } else {
        this.curLabel = this.labelAry.join(',')
        params.label = this.curLabel
      }
      this.$loading.show()
      console.log(params);
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

    loadmore() {
      this.query()
    }
  },
 /* mounted() {
    let level = parseInt(this.$route.params.level)
    http.get(api.tentaclelist, {
      level,
    }).then(data=> {
      console.log(data)
      this.data = data
    })
  },*/
  created() {
    // 查询线索
    this.curLevel = parseInt(this.$route.params.level)
    console.log('level:' + this.level);
    this.query()
    queryTentacleLevelStatis().then(data=>{
      this.categories = data
    })
  },
})

