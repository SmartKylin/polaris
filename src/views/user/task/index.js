import create from './index.tpl'
import './index.styl'
import {queryTaskDetail, updateTask} from 'services'
import datepicker from '../../../helper/datepicker'

export default create({
  data() {
    return {
      task: {

      },
      // 修改后的状态
      isAccomplish: 0
    }
  },
  methods: {
    // 跳转到触点或者线索详情
    routerToDetail() {
      if (this.task.type == 1) {
        this.$router.push('/tentacle/detail/' + this.task.flag)
      } else if (this.task.type == 3) {
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
      params.planTime = this.task.plan_time
      params.remark = this.task.remark
      params.title = this.task.title
      console.log(params);
      updateTask(params).then(res => {
        if (res.retcode == 2000000) {
          console.log(res.msg);
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
    let {flag, id} = this.$route.params
    queryTaskDetail({flag, id}).then(data => {
      console.log(data);
      this.task = data
    })

    // 将任务中的计划是设置为选中时间
    datepicker.onselect(date => {
      this.task.plan_time = date
    })
  }
})
