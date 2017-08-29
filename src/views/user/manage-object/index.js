import create from './index.tpl'
import './index.styl'
import { getCountDown } from '../../../helper/countdown'
import { getManageData, getAimsHistory } from '../../../services'

export default create({
  data() {
    return {
      status: 'setting',
      month: '8月',
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
      deadline: ''
    }
  },
  methods: {
    changeGoalStatus(val) {
      this.status = val
    },
    changeCurWeek(ind) {
      this.curWeek = this.weeks[ind]
      this.queryManageData()
    },
    makeMonths() {
      for (let i = 1; i < 13; i++) {
        this.months.push(i + '月')
      }
    },
    selectMonth(m) {
      this.month = m
      setTimeout(() => {
        this.monthSelectorVisible = false
        let year = new Date().getFullYear()
        this.queryAimsHistory(year, parseInt(m))
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
    queryAimsHistory(month, year) {
      getAimsHistory({ month, year }).then(this.querySuccess).catch(err => {
        this.$toast.show(err.message)
      })
    },
    querySuccess(res) {
      this.weeks = res.weeks
      this.aims_info = res.aims_info
      this.num = res.num
      this.startTimer(res.set.start_time * 1000)
      this.whichStep = parseInt(res.aims_info.status)
      let curInd = res.weeks.findIndex(w => w.active === 1)
      this.weeks = this.weeks.map((w, ind) => {
        if (ind < curInd) {
          w.openStatus = '已结束'
        } else if (ind === curInd) {
          w.openStatus = '已开放'
        } else {
          w.openStatus = '未开放'
        }
        return w
      })
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
