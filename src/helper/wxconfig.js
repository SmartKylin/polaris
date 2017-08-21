import wx from 'weixin-js-sdk'

export const initWeixinSDK = (config) => {
  wx.config({
    debug: false,
    appId: config.appId,
    timestamp: config.timestamp,
    nonceStr: config.nonceStr,
    signature: config.signature,
    jsApiList: [
      'chooseImage',
      'previewImage',
      'downloadImage',
      'uploadImage',
      'getLocalImgData'
    ]
  })
}
