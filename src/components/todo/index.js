import create from './index.tpl'
import './index.styl'
import { updateTask } from 'services'

export default create({
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      // 是否是用户页面
      fromUserpage: false,
      // 修改待办事项弹出框是否可见
      visible: false,
      // 任务是否通过修改完成
      done: false
    }
  },

  methods: {
    // 跳转到触点或线索详情
    toTaskDetail() {
      // 如果不是来自用户页面则不跳转
      if(!this.fromUserpage) {
        return
      }
      // 跳转到任务详情
      this.$router.push('/user/task/' + this.task.id + '/' + this.task.type)
    },
    // 待办事项完成按钮点击处理函数
    accomplishTaskHandler(id) {
      this.visible = true
      this.taskId = parseInt(id)
    },
    // 提交修改待办事项
    postTodoEdit() {
      const params = {}
      // params.id = this.taskId
      params.id = this.task.id
      params.isAccomplish = 1
      params.remark = this.remark
      updateTask(params).then(res=> {
        if (res.retcode == 2000000) {
          console.log(res.msg)
          this.visible = false
          this.done = true
        }
      }).catch(err => {
        this.$dialog.alert('修改待办事项失败', err.message)
      })
    }
  },
  created() {
    if (this.$route.path.indexOf('user') > -1) {
      this.fromUserpage = true
    }
  }
})
