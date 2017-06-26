import { queryClueByCode, makeInterview, editTodo } from 'services'
import datepicker from '../../../helper/datepicker'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      // 标识数据是否已初始化
      inited: false,
      // 控制面签编辑模块的显示与隐藏
      interviewVisible: false,
      // 线索信息
      model: {},
      // 面签信息
      interview: {
        date: ''
      },
    }
  },

  created() {
    this.$loading.show('数据加载中...')
    queryClueByCode({
      clueCode: this.$route.params.code
    })
    .then(res => {
      this.inited = true
      this.model = res
      this.$loading.hide()
    })
    .catch(err => {
      this.$loading.hide()
      this.$dialog.alert('提示', err.message)
    })

    datepicker.onselect(date => {
      this.interview.date = date
    })
  },

  methods: {
    openDatepicker() {
      datepicker.show()
    },

    // 打开预约面签编辑页
    openInterviewPanel() {
      if (this.model.status === 0) {
        this.interviewVisible = true
      }
    },

    // 关闭预约面签编辑页
    closeInterviewPanel() {
      this.interviewVisible = false
    },

    // 提交预约面签
    save() {
      this.$loading.show()
      makeInterview({
        taskTitle: this.model.taskTitle,
        clueCode: this.$route.params.code,
        appointmentTime: this.interview.date
      })
      .then(res => {
        this.$loading.hide()
        this.$toast.show('操作成功')
        this.closeInterviewPanel()
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
