import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      status: 'setting',
      month: '8月',
      monthSelectorVisible: false,
      weeks: [
        {
          name: 'week1',
          period: '2017.2.28-2017.3.2',
          status: 0,
          statusName: '已关闭'
        },
        {
          name: 'week2',
          period: '2017.2.28-2017.3.2',
          status: 1,
          statusName: '已开放'
        },
        {
          name: 'week3',
          period: '2017.2.28-2017.3.2',
          status: 2,
          statusName: '未开放'
        },
        {
          name: 'week4',
          period: '2017.2.28-2017.3.2',
          status: 2,
          statusName: '未开放'
        }
      ],
      months: []
    }
  },
  methods: {
    changeGoalStatus(val) {
      this.status = val
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
    }
  },
  created() {
    this.makeMonths()
  }
})
