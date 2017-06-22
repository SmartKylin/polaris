import create from './index.tpl'
import './index.styl'
import TodoItem from 'components/todo'
import {queryOperationlog, queryVisitlog, updateTask} from 'services'
import LoggerItem from './LoggerItem.vue'

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
      // 显示拜访记录还是操作记录
      visitlogVisible: true,
      // 触点操作日志列表
      operationList: [],
      // 拜访日志列表
      visitList: [],
      // 待办事项ID
      taskId: -1,
      // 完成待办事项备注
      remark: ''
    }
  },
  methods: {
    // 拜访记录和操作记录子页面切换
    handleChange(key) {
      if (key === "visit") {
        this.queryOper()
      } else {
        this.queryVis()
      }
      console.log(this.visitlogVisible)
    },
    // 发起查询操作日志列表请求
    queryOper() {
      queryOperationlog({channelCode: this.data.code}).then(res => {
        this.operationList = res;

        this.operationList = this.operationList.map(l => {
          let dat= new Date(l.oper_Time)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = true
        console.log(this.operationList);

      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 发起拜访记录列表请求
    queryVis() {
      queryVisitlog({channelCode: this.data.code}).then(res => {
        this.visitList = res;
        this.visitList = this.visitList.map(l => {
          let dat= new Date(l.visitTime)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = false
        console.log(this.visitList);

      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 待办事项完成按钮点击处理函数
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
        }
      }).catch(err => {
        this.$dialog.alert('修改待办事项失败', err.message)
      })
    }
  },
  components: {
    TodoItem,
    LoggerItem
  }
})
