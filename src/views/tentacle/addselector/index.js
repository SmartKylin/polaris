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
      serverId: ''
    }
  },
  methods: {
    scanCardHandle() {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          // 图片显示在模板
          this.localId = res.localIds[0]
          // 上传图片
          this.uploadPhoto(this.localId)
          this.isIdentifying = true
        }
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
      })
    }
  },
  beforeRouteEnter(from, to, next) {
    const url = encodeURIComponent(location.href.split('#')[0])
    getWeixinConfig(url).then(initWeixinSDK)
    next(vm => {
      // console.log(vm)
    })
  }
})
