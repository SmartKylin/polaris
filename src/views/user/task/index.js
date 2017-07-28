import create from './index.tpl'
import './index.styl'
import {queryTaskDetail, updateTask} from 'services'
import datepicker from '../../clue/detail/datepicker'

export default create({
  data() {
    return {
      task: {
      },
      // 修改后的状态
      isAccomplish: 0,
      // 计划时间
      plan_time: '',
    }
  },
  methods: {
    // 跳转到触点或者线索详情
    routerToDetail() {
      if (this.task.type == 1) {
        this.$router.push('/tentacle/detail/' + this.task.flag)
      } else if (this.task.type == 2) {
        this.$router.push('/clue/' + this.task.flag)
      }
    },
    // 打开时间选择器
    openDatepicker() {
      datepicker.show()
    },
    // 修改任务
    taskUpdate(isAccom) {
      const params = {}
      params.isAccomplish = isAccom
      params.id = this.task.id
      params.planTime = this.plan_time
      params.remark = this.task.remark
      params.title = this.task.title

      updateTask(params).then(res => {
        if (res.retcode == 2000000) {
          // console.log(res.msg);
          this.$dialog.alert("提示", res.msg)
          this.$router.back()
        }
      }).catch(err => {
        this.$dialog.alert("提示", err.message)
      })
    },
    // 提交修改
    postUndoTask() {
      this.taskUpdate(0)
    },
    postDoneTask() {
      this.taskUpdate(1)
      this.isAccomplish = 1
    },
    postCloseTask() {
      this.taskUpdate(2)
      this.isAccomplish = 2
    }
  },

  created() {
    // 获取任务详细数据
    let {flag, type} = this.$route.params

    queryTaskDetail({id: flag, type}).then(data => {
      this.task = data
      this.isAccomplish = data.isAccomplish
      this.plan_time = data.planTime
    })
    // 将任务中的计划是设置为选中时间
    datepicker.onselect(date => {
      this.plan_time = date
    })
  }
})
