import wx from '../jweixin-1.2.0'

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
