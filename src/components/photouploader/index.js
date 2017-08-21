import create from './index.tpl'
import './index.styl'
import wx from 'weixin-js-sdk'
import { uploadPhoto } from '../../services'

// const img = require('../../images/logo.png')

export default create({
  props: {
    img: String,
    imgthum: String,
    imgreq: String,
    images: Array
  },
  data() {
    return {
      previewImg: '',
      imgList: [],
      cardVisible: false
    }
  },
  methods: {
    chooseImage() {
      if (this.imgList.length > 9) {
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
      this.$emit('update:images', this.imgList.map(item => item.key))
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
        this.$emit('update:images', this.imgList.map(item => item.key))
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
  },
  mounted() {
    if (this.img) {
      this.cardVisible = true
    }
  }
})
