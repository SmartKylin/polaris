import create from './index.tpl'
import './index.styl'
import wx from '../../jweixin-1.2.0'
import { uploadPhoto } from '../../services'
// const img = require('../../images/logo.png')

export default create({
  props: {
    // 名片相关
    img: String,
    imgthum: String,
    imgreq: String,
    // 要上传的图片列表
    images: Array,
    // 编辑页的图片列表
    editImgList: Array
  },
  data() {
    return {
      previewImg: '',
      imgList: []
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
    // 预览图片
    previewImg() {
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [] // 需要预览的图片http链接列表
      })
    },
    //
    // 删除后续上传的照片
    deleteImg(key) {
      this.imgList = this.imgList.filter(item => item.key !== key)
      this.$emit('update:images', this.imgList.map(item => item.key))
    },
    // 删除名片
    deleteCard() {
      this.$emit('update:img', '')
    },
    uploadImg(localId) {
      this.$loading.show()
      const Success = data => {
        this.$loading.hide()
        this.imgList.push({ localId, ...data.data })
        let images = this.imgList.map(item => item.key)
        this.$emit('update:images', images)
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
    if (this.editImgList && this.editImgList.length) {
      this.$emit('update:images', this.editImgList.map(item => item.videoValue))
      this.editImgList.map(item => {
        this.imgList.push({ key: item.videoValue, reqKey: item.realUrl })
      })
    }
  }
})
