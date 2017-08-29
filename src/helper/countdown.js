let timeObj = {
  // '天': 1000*60*60*24,
  '时 ': 1000 * 60 * 60,
  '分 ': 1000 * 60,
  '秒 ': 1000
}

export const getCountDown = tarStr => {
  let intervalTime = parseInt(tarStr) - new Date().getTime()
  // let str = ''
  let ary = []
  if (intervalTime >= 0) {
    // str = '还剩 '
    for (let key in timeObj) {
      // str += ('0' + (Math.floor(intervalTime / timeObj[key]))).slice(-2) + key
      ary.push(('0' + (Math.floor(intervalTime / timeObj[key]))).slice(-2))
      intervalTime = intervalTime % timeObj[key]
    }
  } else {
    ary = '已结束'
  }
  return ary
}
