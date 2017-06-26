import create from './index.tpl'
import './index.styl'
import {queryTaskDetail} from 'services'
import datepicker from '../../../helper/datepicker'

export default create({
  data() {
    return {
      task: {

      },

    }
  },
  methods: {
    // 跳转到触点或者线索详情
    routerToDetail() {
      if (this.task.type == 1) {
        this.$router.push({path: '/tentacle/detail' ,params: {datakey: this.task.flag}})
      } else if (this.task.type == 3) {
        this.$router.push('/clue/' + this.task.flag)
      }
    },
    // 打开时间选择器
    openDatepicker() {
      datepicker.show()
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
