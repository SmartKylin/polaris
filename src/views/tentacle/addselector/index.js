import create from './index.tpl'
import './index.styl'
import wx from '../../../jweixin-1.2.0'
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
      localData: ''
    }
  },
  computed: {
    isWkView() {
      return window.__wxjs_is_wkwebview
    }
  },
  methods: {
    scanCardHandle() {
      this.identiFailed = false
      const failure = err => {
        this.$toast.show(err.errMsg)
      }
      const Success = res => {
        let localId = res.localIds[0]
        if (this.isWkView) {
          wx.getLocalImgData({
            localId,
            success: resp => {
              let localData = resp.localData
              this.localData = localData.replace('jgp', 'jpeg')
            },
            fail: failure
          })
        }
        this.localId = localId
        this.uploadPhoto(this.localId)
        this.isIdentifying = true
        // this.startTimer()
      }
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: Success,
        fail: failure
      })
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
        // console.log('res.serverId: ' + res.serverId)
        this.getIdentifyResult(res.serverId)
      }).catch(err => {
        this.identiFailed = true
        this.$toast.show(err.message)
      })
    },
    getIdentifyResult(serverId) {
      getCardResult(serverId).then(res => {
        storage.set('tentacle', res)
        this.$router.push('/tentacle/edit?fromPage=1')
      }).catch(err => {
        this.$toast.show(err.message)
      })
    }
  },
  beforeRouteEnter(from, to, next) {
    const url = encodeURIComponent(location.href.split('#')[0])
    getWeixinConfig(url).then(initWeixinSDK)
    next()
  }
})
