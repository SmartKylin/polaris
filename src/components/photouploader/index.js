import create from './index.tpl'
import './index.styl'
import wx from 'weixin-js-sdk'
import { uploadPhoto } from '../../services'

const img = require('../../images/logo.png')

export default create({
  data() {
    return {
      previewImg: img,
      imgList: []
    }
  },
  methods: {
    chooseImage() {
      if (this.localIds.length > 9) {
        return
      }
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          this.uploadImg(res.localIds[0])
        }
      })
    },
    deleteImg(img) {
      this.imgList = this.imgList.filter(item => item !== img)
    },
    previewImg() {
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [] // 需要预览的图片http链接列表
      })
    },
    uploadImg(localId) {
      this.$loading.show()
      const Success = data => {
        this.$loading.hide()
        this.imgList.push({ localId, ...data.data })
      }
      const Fail = err => {
        this.$loading.hide()
        this.$toast.show(err.message)
      }
      wx.uploadImage({
        localId: localId,
        isShowProgressTips: 0,
        success: res => uploadPhoto(res.serverId).then(Success).catch(Fail),
        fail: err => Fail({ message: err.errMsg })
      })
    }
  }
})
