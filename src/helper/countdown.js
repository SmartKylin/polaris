let timeObj = {
  // '天': 1000*60*60*24,
  '时 ': 1000 * 60 * 60,
  '分 ': 1000 * 60,
  '秒 ': 1000
}

export const getCountDown = tarStr => {
  let intervalTime = parseInt(tarStr) - new Date().getTime()
  let ary = []
  if (intervalTime >= 0) {
    for (let key in timeObj) {
      let item = Math.floor(intervalTime / timeObj[key]) + ''
      item = item.length < 2 ? ('0' + item).slice(-2) : item
      ary.push(item)
      intervalTime = intervalTime % timeObj[key]
    }
  }
  return ary
}
