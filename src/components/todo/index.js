import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    task: {
      type: Object
    }
  },

  methods: {
    // 跳转到触点或线索详情
    toTaskDetail() {
      // 跳转到任务详情
      this.$router.push('/user/task/' + this.task.id + '/' + this.task.type)
    }

  }
})
