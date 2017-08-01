import Picker from 'better-picker'

const years = []
const months = []
const days = []

const date = new Date()
const thisYear = date.getFullYear()
const thisMonth = date.getMonth() + 1
const today = date.getDate()

function forEach(start, end, callback) {
  for (let i = start; i <= end; i++) {
    callback(i)
  }
}

// 年
forEach(thisYear, thisYear + 1, i => {
  years.push({ text: i + '年', value: i })
})

forEach(1, 31, i => {
  // 月
  if (i <= 12) {
    months.push({ text: i + '月', value: i })
  }
  // 日
  if (i <= 31) {
    days.push({ text: i + '日', value: i })
  }
})

const picker = new Picker({
  data: [years, months, days],
  selectedIndex: [
    0,
    thisMonth - 1,
    today - 1
  ],
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
      callback(`${values[0]}-${values[1]}-${values[2]}`)
    })
  }

}
