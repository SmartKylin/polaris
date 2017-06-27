import create from './index.tpl'
import './index.styl'
import TodoItem from 'components/todo'
import {queryOperationlog, queryVisitlog, updateTask} from 'services'

export default create({
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      // 修改待办事项的弹出框是否显示
      visible1: false,
      // 触点操作日志列表
      operationList: [],
      // 拜访日志列表
      visitList: [],
      // 待办事项ID
      taskId: -1,
      // 完成待办事项备注
      remark: '',
      // 显示哪个tab页
      showWhich: "visit"
    }
  },
  methods: {
    // 拜访记录和操作记录子页面切换
    handleChange(val) {
      this.showWhich = val
      if (this.showWhich == "visit") {
        this.queryVis()
      } else {
        this.queryOper()
      }
    },
    // 发起查询操作日志列表请求
    queryOper() {
      this.visitList = []
      this.$loading.show()
      queryOperationlog({channelCode: this.data.code}).then(res => {
        this.$loading.hide()
        this.operationList = res;

        this.operationList = this.operationList.map(l => {
          let dat= new Date(l.oper_Time)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = true

      }).catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)

      })
    },
    // 发起拜访记录列表请求
    queryVis() {
      this.operationList = []
      this.$loading.show()
      queryVisitlog({channelCode: this.data.code}).then(res => {
        this.$loading.hide()
        this.visitList = res;
        this.visitList = this.visitList.map(l => {
          let dat= new Date(l.visitTime)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = false

      }).catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    },

   /* // 待办事项完成按钮点击处理函数
    accomplishTaskHandler(id) {
      this.visible1 = true
      this.taskId = parseInt(id)
    },
    // 提交修改待办事项
    postTodoEdit() {
      const params = {}
      params.id = this.taskId
      params.isAccomplish = 1
      params.remark = this.remark
      updateTask(params).then(res=> {
        if (res.retcode == 2000000) {
          console.log(res.msg)
          this.visible1 = false
          // this.plan.isAccomplish
        }
      }).catch(err => {
        this.$dialog.alert('修改待办事项失败', err.message)
      })
    }*/
  },
  components: {
    TodoItem
  },
  mounted() {
    this.queryVis()
    this.queryOper()
  }
})
