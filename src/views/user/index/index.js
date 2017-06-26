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
      // 未完成待办事项列表
      undoTaskList: [],
      // 已完成待办事项列表
      doneTaskList: [],
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
      // 当前显示的是已完成/未完成
      showTask: "done"
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

      this.$loading.show()
      queryTask(params).then(data => {
        const list = data.list
        if (typeof success == "function") {
          success()
        }
        if (list.length > 0) {
          this.taskList = this.taskList.concat(list)
          this.undoTaskList = this.taskList.filter(t => {
            return t.isAccomplish == 0
          })
          this.doneTaskList = this.taskList.filter(t => {
            return t.isAccomplish != 0
          })
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
      this.showTask = val
      console.log(this.showTask);
    },

    // 计算当前显示的列表
    computeShowTask() {
      this.undoTaskList = this.taskList.filter(t => {
        return t.isAccomplish == 0
      })
      this.doneTaskList = this.taskList.filter(t => {
        return t.isAccomplish != 0
      })
    }
  },
  created() {
    queryUserAims().then(data => {
      this.aims = data
      console.log(this.aims);
    })
    this.query()

    this.computeShowTask()
  }
})
