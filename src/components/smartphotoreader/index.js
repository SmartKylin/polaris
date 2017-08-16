import create from './index.tpl'
import './index.styl'
import wx from 'weixin-js-sdk'

export default create({
  data() {
    return {
      scanning: true,
      scanFailed: true
    }
  },
  method: {
    takePhoto() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success: res => {
          // 上传图片
          // 图片显示在模板
        }
      })
    }
  },
  beforeMount() {
    // const url = encodeURIComponent(location.href.split('#')[0])
  }
})
