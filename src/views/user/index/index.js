import create from './index.tpl'
import './index.styl'
import TodoItem from 'components/todo'
import {queryTask, queryUserAims} from 'services'

export default create({
  data() {
    return {
      // 目标数据
      aims: {
        week: {
          aims: '',
          carryOutAims: '',
          remainDay: '',
          probability: ''
        },
        month: {
          aims: '',
          carryOutAims: '',
          remainDay: '',
          probability: ''
        }
      },
      // 待办事项列表
      taskList: [],
      // 是否显示周目标
      showWeek: true,
      // 显示的是周目标
      showWhich: "week",
      // 页码
      page: 0,
      // 数据是否全部加载完
      allLoaded: false,
      // 是否正在加载数据
      fetching: false,
      // 当前列表类型
      isAccomplish: 0
    }
  },
  components: {
    TodoItem
  },
  methods: {
    // 周和月切换显示
    handleChange(val) {
      this.showWeek = val === "week" ? true : false
      this.showWhich = val
    },
    // 查询
    query(success) {
      if (this.fetching) {
        return
      }
      this.fetching = true
      this.page += 1
      // 请求参数
      const params = {}
      params.page = this.page
      params.size = 10
      params.isAccomplish = this.isAccomplish

      console.log(params);
      this.$loading.show()
      queryTask(params).then(data => {
        const list = data.list
        if (success) {
          success()
        }
        if (list.length > 0) {
          this.taskList = this.taskList.concat(list)
        } else {
          this.allLoaded = true
        }
        this.$loading.hide()
        this.fetching = false
      }).catch(err => {
        this.$loading.hide()
        this.fetching = false
        this.$dialog.alert("提示", err.message)
      })
    },
    // 加载更多
    loadmore() {
      this.query()
    },
    // 未完成和已完成切换显示
    taskChange(val) {
      this.isAccomplish = parseInt(val)
      this.reQuery()
    },
    // 重新查询
    reQuery() {
      this.page = 0
      this.allLoaded = false
      this.query(() => {
        this.taskList = []
      })
    }
  },
  created() {
    queryUserAims().then(data => {
      this.aims = data
    })
    this.query()
  }
})
