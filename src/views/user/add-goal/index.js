import create from './index.tpl'
import './index.styl'
import { perfectGoal, addGoal } from 'services'

export default create({
  data() {
    return {
      analysis: '',
      // 添加目标的金额
      amount: null,
      analysisVisible: false,
      whichStep: 0,
      // 与组长讨论纪要
      summary: '',
      startTime: '',
      endTime: '',
      // 最终目标金额
      finalAmount: null,
      // 预想目标提交时间
      createdTime: '',
      // 目标周期时间戳
      startTimeStamp: '',
      endTimeStamp: '',
      // 预想目标ID
      id: '',
      // 是否正在提交数据
      isPosting: false
    }
  },
  methods: {
    initQueryString() {
      if (this.$route.query.whichStep) {
        this.whichStep = this.$route.query.whichStep
      }
      this.startTime = this.$route.query.startTime
      this.endTime = this.$route.query.endTime
      let { analysis, amount, createdTime, startTimeStamp, endTimeStamp, id } = this.$route.query
      if (analysis) {
        this.analysis = analysis
      }
      if (amount) {
        // this.amount = parseInt(amount)
        this.amount = amount
      }
      if (createdTime) {
        this.createdTime = createdTime
      }
      if (startTimeStamp) {
        this.startTimeStamp = startTimeStamp
      }
      if (endTimeStamp) {
        this.endTimeStamp = endTimeStamp
      }
      if (id) {
        this.id = id
      }
    },
    showAnalysis() {
      this.analysisVisible = !this.analysisVisible
    },
    postAddGoal() {
      if (this.isPosting) {
        return
      }
      if (!this.postAddBtnAvailable) {
        return
      }
      this.isPosting = true
      addGoal({ amount: this.amount, analysis: this.analysis }).then(res => {
        if (res) {
          this.$router.replace('/user/mbo?whichStep=2')
          this.$dialog.alert('提示', '可以找组长讨论并录入组长意见啦，去完善吧~')
        }
      }).catch(err => {
        this.$toast.show(err.message)
        this.$router.replace('/user/mbo?whichStep=2')
      })
    },
    postPerfectGoal() {
      if (this.isPosting) {
        return
      }
      if (!this.postPerfectBtnAvailable) {
        return
      }
      this.isPosting = true
      perfectGoal({
        start_time: this.startTimeStamp,
        end_time: this.endTimeStamp,
        id: this.id,
        summary: this.summary,
        finalAmount: this.finalAmount
      }).then(res => {
        this.$router.replace('/user/mbo?whichStep=3')
      }).catch(err => {
        this.$toast.show(err.message)
        this.$router.replace('/user/mbo?whichStep=3')
      })
    }
  },
  computed: {
    postAddBtnAvailable() {
      return this.amount && this.analysis
    },
    postPerfectBtnAvailable() {
      return this.finalAmount && this.summary
    }
  },
  created() {
    this.initQueryString()
  }
})
