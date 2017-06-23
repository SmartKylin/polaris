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
          aims:'',
          arryOutAims: '',
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
      fetching: false
    }
  },
  components: {
    TodoItem
  },
  methods: {
    handleChange(val) {
      this.showWeek = val === "week" ? true : false
      this.showWhich = val
    },
    query(success) {
      if(this.fetching) {
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
          this.taskList  = this.taskList.concat(list)
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
    loadmore() {
      this.query()
    }
  },

  created() {
    queryUserAims().then(data => {
      this.aims = data
      console.log(this.aims);
    })
    this.query()
  }
})
