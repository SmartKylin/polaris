import create from './index.tpl'
import './index.styl'
import { getCountDown } from '../../../helper/countdown'

export default create({
  data() {
    return {
      status: 'review',
      month: '8月',
      monthSelectorVisible: false,
      weeks: [
        {
          name: 'week1',
          period: '2017.2.28-2017.3.2',
          status: 0,
          statusName: '已关闭',
          step: 1
        },
        {
          name: 'week2',
          period: '2017.2.28-2017.3.2',
          status: 1,
          statusName: '已开放',
          step: 2
        },
        {
          name: 'week3',
          period: '2017.2.28-2017.3.2',
          status: 2,
          statusName: '未开放',
          step: 3
        },
        {
          name: 'week4',
          period: '2017.2.28-2017.3.2',
          status: 2,
          statusName: '未开放',
          step: 2
        }
      ],
      months: [],
      whichStep: 1,
      now: null,
      countDown: '',
      timer: null,
      personalAnalysis: '',
      leaderAnalysis: '',
      summarize: '',
      curWeek: ''
    }
  },
  methods: {
    changeGoalStatus(val) {
      this.status = val
    },
    changeCurWeek(val) {
      this.curWeek = this.weeks.find(w => w.name === val)
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
      }, 100)
    },
    startTimer() {
      this.timer = setInterval(() => {
        this.countDown = getCountDown('2018/2/18 12:00:00')
        if (this.countDown === '未开放') {
          clearInterval(this.timer)
        }
      }, 1000)
    },
    initQueryString() {
      if (this.$route.query.whichStep) {
        this.whichStep = parseInt(this.$route.query.whichStep)
      }
    }
  },
  created() {
    this.initQueryString()
    this.makeMonths()
    this.startTimer()
    this.now = new Date()
  }
})
