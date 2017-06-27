import Picker from 'better-picker'

const years = []
const months = []
const days = []
const hours = []
const minutes = []
const seconds = []

const yearAry = []
const monthAry = []
const dayAry = []
const hoursAry = []
const minuteAry = []
const secondAry = []


;(function () {
  for (let i =  2017; i < 2039; i++) {
    // 年
    years.push({text: i + '年', value: i})
    yearAry.push(i)
  }

  for (let i = 1; i < 61; i++) {
    // 月
    if (i < 13) {
      months.push({text: i + '月', value: i})
      monthAry.push(i)
    }
    // 日
    if (i < 32) {
      days.push({text: i + '日', value: i})
      dayAry.push(i)
    }
    // 时
    if (i < 25) {
      hours.push({text: i + '时', value: i})
      hoursAry.push(i)
    }
    // 分
    if (i < 61) {
      minutes.push({text: i + '分', value: i})
      // 秒
      seconds.push({text: i + '秒', value: i})
      minuteAry.push(i)
      secondAry.push(i)
    }
  }
})()

const now  = new Date()
const defaultIndex = [
  yearAry.indexOf(now.getFullYear()),
  monthAry.indexOf(now.getMonth() + 1),
  dayAry.indexOf(now.getDate()),
  hoursAry.indexOf(now.getHours()),
  minuteAry.indexOf(now.getMinutes()),
  secondAry.indexOf(now.getSeconds())
]

const picker = new Picker({
  data: [years, months, days, hours, minutes],
  selectedIndex: defaultIndex,
  title: '日期时间选择'
})

export default {
  show() {
    picker.show()
  },

  onselect(callback) {
    picker.on('picker.select', values => {
      values = values.map(v => {
        if (v < 10) {
          v = '0' + v
        }
        return v
      })
      callback(`${values[0]}-${values[1]}-${values[2]} ${values[3]}:${values[4]}`)
    })
  }

}
