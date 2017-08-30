import create from './index.tpl'
import './index.styl'
import { getCountDown } from '../../../helper/countdown'
import { getManageData, getAimsHistory } from '../../../services'

export default create({
  data() {
    return {
      status: 'setting',
      month: '',
      monthSelectorVisible: false,
      months: [],
      whichStep: 1,
      now: null,
      countDown: '',
      timer: null,
      personalAnalysis: '',
      leaderAnalysis: '',
      summarize: '',
      // 目标管理相关
      curWeek: '',
      weeks: [],
      aims_info: {},
      num: {},
      // 设置截止时间
      deadline: '',
      // 目标周期
      startTime: '',
      endTime: '',
      // 预想目标提交时间
      createdTime: '',
      // 当前周的开放状态
      openStatus: 0,
      // 当前周索引
      curIndex: ''
    }
  },
  methods: {
    changeGoalStatus(val) {
      this.status = val
    },
    // 选择周
    changeCurWeek(ind) {
      this.curIndex = parseInt(ind)
      this.curWeek = this.weeks[this.curIndex]
      new Date().getMonth() + 1 === parseInt(this.month) ? this.queryManageData() : this.queryAimsHistory()
    },
    makeMonths() {
      let month = (new Date()).getMonth() + 1
      this.month = month + '月'
      for (let i = 1; i < 13; i++) {
        this.months.push(i + '月')
      }
    },
    // 选择月份
    selectMonth(m) {
      this.month = m
      setTimeout(() => {
        this.monthSelectorVisible = false
        this.queryAimsHistory()
      }, 100)
    },
    // 倒计时
    startTimer(time) {
      this.timer = setInterval(() => {
        this.countDown = getCountDown(time)
        if (this.countDown === '已结束') {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    formatDate(time) {
      time = new Date(time * 1000).toLocaleDateString()
      time = time.split(' ')[0].split('/')
      time.shift()
      return time.join('.')
    },
    initQueryString() {
      if (this.$route.query.whichStep) {
        this.whichStep = parseInt(this.$route.query.whichStep)
      }
    },
    queryManageData() {
      let startTime = this.curWeek.start_time
      let endTime = this.curWeek.end_time
      if (startTime) {
        getManageData({ start_time: startTime, end_time: endTime }).then(this.querySuccess).catch(err => {
          this.$toast.show(err.message)
        })
      } else {
        getManageData().then(this.querySuccess).catch(err => {
          this.$toast.show(err.message)
        })
      }
    },
    queryAimsHistory() {
      let year = new Date().getFullYear()
      let month = parseInt(this.month)
      getAimsHistory({ year, month }).then(this.querySuccess).catch(err => {
        this.$toast.show(err.message)
      })
    },
    querySuccess(res) {
      this.weeks = res.weeks
      this.aims_info = res.aims_info
      this.num = res.num
      this.openStatus = res.open_status
      if (res.aims_info) {
        this.whichStep = parseInt(res.aims_info.status)
        this.createdTime = res.aims_info.created_time.split(' ')[0].split('-').join('.')
      }
      if (!this.curWeek) {
        this.curWeek = res.weeks.find(w => w.active === 1)
      } else {
        this.curWeek = res.weeks[this.curIndex]
      }
      if (this.curWeek.open_status === 1) {
        this.startTimer(res.set.end_time * 1000)
      }
      this.startTime = this.formatDate(this.curWeek.start_time)
      this.endTime = this.formatDate(this.curWeek.end_time)
      /* this.weeks = this.weeks.map((w, ind) => {
        if (res.curr_time < w.start_time) {
          w.openStatus = 0
        } else if (res.curr_time > w.end_time) {
          w.openStatus = 2
        } else {
          if (res.curr_time < res.set.start_time) {
            w.openStatus = 0
          } else if (res.curr_time > res.set.end_time) {
            w.openStatus = 2
          } else {
            w.openStatus = 1
          }
        }
        return w
      }) */
    }
  },
  created() {
    this.initQueryString()
    this.makeMonths()
    this.queryManageData()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
})
