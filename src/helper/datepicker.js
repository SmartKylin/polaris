import Picker from 'better-picker'

const years = []
const months = []
const days = []
const hours = []
const minutes = []
const seconds = []

// const now = new Date()

/*const defaultIndex = [
  years.indexOf(now.getFullYear()),
  months.indexOf(now.getMonth() + 1),
  days.indexOf(now.getDate()),
  hours.indexOf(now.getHours()),
  minutes.indexOf(now.getMinutes()),
  seconds.indexOf(now.getSeconds())
  ]*/

;(function() {
  for (let i = 2017; i < 2039; i++) {
    // 年
    years.push({ text: i + '年', value: i })
  }

  for (let i = 1; i < 61; i++) {
    // 月
    if (i < 13) {
      months.push({ text: i + '月', value: i })
    }
    // 日
    if (i < 32) {
      days.push({ text: i + '日', value: i })
    }
    // 时
    if (i < 25) {
      hours.push({ text: i + '时', value: i })
    }
    // 分
    if (i < 61) {
      minutes.push({ text: i + '分', value: i })
      // 秒
      seconds.push({ text: i + '秒', value: i })
    }
  }
})()

const picker = new Picker({
  data: [ years, months, days, hours, minutes ],
  // selectedIndex: [1, 3, 4, 5, 6]
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
