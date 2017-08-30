import create from './index.tpl'
import './index.styl'
import { getCountDown } from '../../../helper/countdown'
import { getManageData, getAimsHistory, getReplayData, getReplayHistory, postReplay, getOpenStatus, getReplayOpenStatus } from '../../../services'

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
      // 目标复盘相关
      // 个人分析
      analysis: '',
      // 组长分析
      summary: '',
      // 个人分析是否可见
      analysisVisible: false,
      // 组长分析是否可见
      summaryVisible: false,
      // 复盘内容
      replayContent: '',
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
      curIndex: '',
      // 设置是否有小红点
      settingHasDot: null,
      // 复盘是否有小红点
      replayHasDot: null

    }
  },
  methods: {
    changeGoalStatus(val) {
      this.status = val
      this.curWeek = ''
      if (val === 'setting') {
        this.queryManageData()
      } else if (val === 'review') {
        this.queryReplayData()
      }
    },
    // 选择周
    changeCurWeek(ind) {
      this.curIndex = parseInt(ind)
      this.curWeek = this.weeks[this.curIndex]
      let isCurrentWeek = new Date().getMonth() + 1 === parseInt(this.month)
      if (this.status === 'setting') {
        isCurrentWeek ? this.queryManageData() : this.queryAimsHistory()
      } else {
        isCurrentWeek ? this.queryReplayData() : this.queryReplayHistory()
      }
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
        if (this.status === 'setting') {
          this.queryAimsHistory()
        } else {
          this.queryReplayHistory()
        }
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
    queryReplayData() {
      let startTime = this.curWeek.start_time
      let endTime = this.curWeek.end_time
      if (startTime) {
        getReplayData({ start_time: startTime, end_time: endTime }).then(this.queryReplaySuccess).catch(err => {
          this.$toast.show(err.message)
        })
      } else {
        getReplayData().then(this.queryReplaySuccess).catch(err => {
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
    queryReplayHistory() {
      let year = new Date().getFullYear()
      let month = parseInt(this.month)
      getReplayHistory({ year, month }).then(this.queryReplaySuccess).catch(err => {
        this.$toast.show(err.message)
      })
    },
    // 查询目标设置信息成功的回调函数
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
      // 计算每周的开放状态
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
    },
    // 查询目标复盘信息成功回调函数
    queryReplaySuccess(res) {
      this.weeks = res.weeks
      this.aims_info = res.aims_info
      this.analysis = res.aims_info.analysis
      this.summary = res.aims_info.summary
      if (!this.curWeek) {
        this.curWeek = res.weeks.find(w => w.active === 1)
      } else {
        this.curWeek = res.weeks[this.curIndex]
      }
    },
    // 提交复盘总结
    postReplayHandle() {
      postReplay({ id: this.aims_info.id, replayContent: this.replayContent }).then(res => {
        this.queryReplayData()
        this.replayHasDot = 0
      }).catch(err => {
        this.$toast.show(err.message)
      })
    },
    // 查询设置小红点状态
    queryOpenStatus() {
      getOpenStatus().then(res => {
        this.settingHasDot = res.status
      }).catch(err => {
        this.$toast.show(err.message)
      })
    },
    // 查询复盘小红点状态
    queryReplayOpenStatus() {
      getReplayOpenStatus().then(res => {
        this.replayHasDot = res.status
      }).catch(err => {
        this.$toast.show(err.message)
      })
    }
  },
  created() {
    this.initQueryString()
    this.makeMonths()
    this.queryManageData()
    // 获取小红点状态
    this.queryOpenStatus()
    this.queryReplayOpenStatus()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
})
