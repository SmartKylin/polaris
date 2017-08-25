let timeObj = {
  // '天': 1000*60*60*24,
  '时': 1000 * 60 * 60,
  '分': 1000 * 60,
  '秒': 1000
}

export const getCountDown = tarStr => {
  let intervalTime = new Date(tarStr).getTime() - new Date().getTime()
  let str = ''
  if (intervalTime >= 0) {
    str = '还剩 '
    for (let key in timeObj) {
      str += ('0' + (Math.floor(intervalTime / timeObj[key]))).slice(-2) + key
      intervalTime = intervalTime % timeObj[key]
    }
  } else {
    str = '未开放'
  }
  return str
}
