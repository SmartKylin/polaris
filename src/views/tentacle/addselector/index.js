import create from './index.tpl'
import './index.styl'

import wx from 'weixin-js-sdk'
import { getWeixinConfig, identifyPhoto, getCardResult } from 'services'
import { initWeixinSDK } from '../../../helper/wxconfig'
import storage from '../../../helper/storage'

export default create({
  data() {
    return {
      isIdentifying: false,
      identiFailed: false,
      localId: '',
      serverId: '',
      progress: 0,
      isAndroid: true,
      localData: ''
    }
  },
  methods: {
    scanCardHandle() {
      this.identiFailed = false
      const Success = res => {
        this.localId = res.localIds[0]
        this.uploadPhoto(this.localId)
        this.isIdentifying = true
        this.startTimer()
      }
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          // 图片显示在模板
          if (this.isAndroid) {
            Success(res)
          } else { // 兼容IOS的WKWebview内核
            wx.getLocalImgData({
              localId: res.localIds[0],
              success: function (res2) {
                let localData = res2.localData
                this.localData = localData.replace('jgp', 'jpeg')
                Success(res)
              },
              fail: err => {
                this.$toast.show(err.errMsg)
              }
            })
          }
        }
      })
    },
    startTimer() {
      this.timer && clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.progress + 1 >= 100) {
          this.progress = 100
          clearInterval(this.timer)
          if (!this.identiFailed) {
            this.$router.push('/tentacle/edit?fromPage=1')
          }
        } else {
          this.progress += 1
        }
      }, 50)
    },
    uploadPhoto(localId) {
      wx.uploadImage({
        localId,
        isShowProgressTips: 1,
        success: res => {
          this.serverId = res.serverId
          this.identifyCard(this.serverId)
        }
      })
    },
    identifyCard(serverId) {
      identifyPhoto(serverId).then(res => {
        this.serverId = res.serverId
        this.getIdentifyResult(res.serverId)
      }).catch(err => {
        this.identiFailed = true
        this.$toast.show(err.message)
      })
    },
    getIdentifyResult(serverId) {
      getCardResult(serverId).then(res => {
        storage.set('tentacle', res)
        // this.$router.push('/tentacle/edit?fromPage=1')
      }).catch(err => {
        this.$toast.show(err.message)
      })
    }
  },
  created() {
    this.isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
  },
  beforeRouteEnter(from, to, next) {
    const url = encodeURIComponent(location.href.split('#')[0])
    getWeixinConfig(url).then(initWeixinSDK)
    next()
  }
})
