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
      // 弹出框是否可见
      visible: false,
      // 关闭/完成任务
      accomplish: '',
      // 备注
      remark: ''
    }
  },
  methods: {
    alert() {
      this.$dialog.alert('', '', [{title: '查看详情', onClick() {}}, {title: '返回首页', onClick() {}}])
    },
    // 完成任务
    accomplishTask() {
      this.visible = true
      this.accomplish = 1
    },
    // 关闭任务
    closeTask() {
      this.visible = true
      this.accomplish = 2
    },
    postEditTask() {
      // 关闭弹出框
      this.visible = false
      const params = {}
      params.id = this.task.id
      params.isAccomplish = this.accomplish
      params.remark = this.remark
      updateTask(params).then(res => {
        console.log(res);
        if (res.retcode === 2000000) {
          this.task.isAccomplish = this.accomplish
          this.visible = false
        }
      }).catch(err => {
        this.$dialog.alert("提示", err.message)
      })
    },
    // 跳转到触点或线索详情
    routerToDetail() {
      // 如果点击了按钮，则不可跳转
      if (this.visible === true) {
        return
      }
      // 跳转到触点或线索详情
      if (this.task.type == 1) {
        this.$router.push({path: '/tentacle/detail' ,params: {datakey: this.task.flag}})
      } else if (this.task.type == 3) {
        this.$router.push('/clue/' + this.task.flag)
      }
    }
  }
})
