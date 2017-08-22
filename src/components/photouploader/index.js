import create from './index.tpl'
import './index.styl'
import wx from 'weixin-js-sdk'
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
      imgList: [],
      cardVisible: false
      // editImgList: []
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
    // 删除后续上传的照片
    deleteImg(img) {
      this.imgList = this.imgList.filter(item => item !== img)
      this.$emit('update:images', this.images.concat(this.imgList.map(item => item.key)))
    },
    previewImg() {
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [] // 需要预览的图片http链接列表
      })
    },
    // 删除详情页带过来的照片
    editDeleteImg(videoValue) {
      this.$emit('update:editImgList', this.editImgList.filter(item => item.videoValue !== videoValue))
      this.$emit('update:images', this.images.concat(this.editImgList.map(item => item.videoValue)))
    },
    uploadImg(localId) {
      this.$loading.show()
      const Success = data => {
        this.$loading.hide()
        this.imgList.push({ localId, ...data.data })
        this.$emit('update:images', this.images.concat(this.imgList.map(item => item.key)))
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
