import create from './index.tpl'
import './index.styl'
import { queryIndustry, addTentacle, queryLabel, queryTentacleDetail, editTentacle } from 'services'
import storage from '../../../helper/storage'
import PhotoUploader from 'components/photouploader'
import TentacleBar from 'components/tentaclebar'
import bus from '../../../helper/bus'
import { getWeixinConfig } from '../../../services'
import { initWeixinSDK } from '../../../helper/wxconfig'

export default create({
  data() {
    return {
      // 关系标签列表
      labRelaList: [],
      // 行业类型列表
      industryList: [],
      // 机构所处产业
      industry: '',
      // 触点地址 */
      address: '',
      // 触点姓名
      name: '',
      // 触点电话
      mobile: '',
      // 职位
      position: '',
      // 标签
      label: '',
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: '',
      /* // 分店名
      branchstoreName: '',
      // 分店ID
      branchstoreId: '', */
      // 行业类型ID
      institutionId: '',
      institutionName: '',
      // 是否正在提交数据
      isPosting: false,
      // 触点id
      channelId: '',
      /* // 拜访日志
      visitLog: '',
      // 日志延迟
      logDelay: false, */
      // 录入方式: 1，名片识别； 2，手动录入
      fromPage: 2,
      // 名片原图地址
      imgreq: '',
      // 名片缩略图地址
      imgthum: '',
      // 名片存库名称
      img: '',
      // 所有要上传的图片
      images: [],
      email: '',
      // 门店电话
      storefrontMobile: '',
      // 触点详情页下的img列表
      editImgList: [],
      sex: '',
      age: '',
      // 从业经验
      experience: '',
      // 人脉关系
      contacts: ''
    }
  },
  components: {
    TentacleBar,
    PhotoUploader
  },
  methods: {
    // 查询触点详情
    queryTent(channelId) {
      this.$loading.show()
      queryTentacleDetail({ channelId }).then(data => {
        this.$loading.hide()
        this.industry = data.industry
        this.name = data.name
        this.label = data.labelId[0]
        this.address = data.address
        this.mobile = data.mobile
        this.position = data.position
        this.hobby = data.hobby
        this.remark = data.remark
        this.branchstoreName = data.branchstore_name
        this.branchstoreId = data.branchstore_id
        this.institutionName = data.channelInstitutionName
        this.institutionId = data.channelInstitutionId
        this.storefrontMobile = data.storefront_mobile
        this.email = data.email
        this.editImgList = data.images
        this.sex = data.sex
        this.age = data.age
        this.experience = data.experience
        this.contacts = data.contacts
        /* let images = data.images
        if (images && images.length) {
          this.images = images.map(item => item.videoValue)
        } */
      }).catch(err => {
        this.$loading.hide()
        this.$toast.show(err.message)
      })
    },
    // 查询标签列表
    queryLab() {
      queryLabel().then(data => {
        // this.labRelaList = data[1].list
        // 产能标签删除
        // this.labCapaList = data[2].list
        let list = []
        data[1].list.map(item => {
          list.push({ text: item.name, value: item.id })
        })
        this.labRelaList = list
      }).catch(err => {
        this.$toast.show(err.message)
      })
    },
    // 查询行业类型列表
    queryIndus() {
      queryIndustry().then(data => {
        let list = []
        for (let key in data) {
          list.push({ text: data[key], value: key })
        }
        this.industryList = list
      }).catch(err => {
        this.$toast.show(err.message)
      })
    },
    industryChange() {
      // 如果是名片录入，机构改变时不清空相关数据
      if (parseInt(this.fromPage) === 1) {
        return
      }
      // 机构ID必须置空
      this.institutionId = ''
      this.institutionName = ''
      this.branchstoreName = ''
      this.position = ''
    },
    // 电话输入框失焦，检查手机号
    checkMobile(mobile) {
      if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(mobile))) {
        this.$toast.show('请输入正确的手机号')
      }
    },
    // 删除名片
    cardDelete() {
      this.img = ''
    },
    /* logDelayHandle() {
      if (this.logDelay === true) {
        return
      }
      this.logDelay = true
      this.$dialog.alert('已为您设置20:00的拜访提醒', '记得补写拜访日志哦~', [{
        title: '我知道了'
      }])
    }, */
    // 编辑触点
    tentacleEdit() {
      let { name, mobile, industry, position, address, label, institutionId, institutionName, channelId, email, storefrontMobile, images, sex, age, experience, contacts, hobby, remark } = this
      let cityId = window.cityId
      this.isPosting = true
      /* console.log('editTentacle')
      console.log(images) */
      images = images.join(',')
      editTentacle({
        channelId,
        name,
        mobile,
        industry,
        cityId,
        institutionId,
        institutionName,
        /* branchstoreName,
        branchstoreId, */
        address,
        position,
        label,
        images,
        hobby,
        remark,
        email,
        storefrontMobile,
        sex,
        age,
        experience,
        contacts
      }).then(res => {
        this.isPosting = false
        this.$toast.show('编辑触点成功', () => {
          bus.$emit('refresh-tentdata')
          this.$router.push('/tentacle/detail/' + this.channelId + '/info')
        })
      }).catch(err => {
        this.isPosting = false
        this.$dialog.alert('失败', err.message)
      })
    },
    // 增加触点
    tentacleAdd() {
      let { name, mobile, industry, position, remark, address, label, institutionId, institutionName, fromPage, images } = this
      let cityId = window.cityId
      this.isPosting = true
      if (this.img) {
        images.unshift(this.img)
      }
      images = images.join(',')
      addTentacle({
        name,
        mobile,
        industry,
        cityId,
        institutionId,
        institutionName,
        // branchstoreName,
        address,
        position,
        label,
        // hobby,
        fromPage,
        remark,
        images
      }).then(res => {
        this.isPosting = false
        this.$toast.show('触点添加成功', () => {
          this.$router.push('/tentacle/detail/' + res.id + '/info')
        })
      }).catch(err => {
        this.isPosting = false
        this.$dialog.alert('失败', err.message)
      })
    },
    // 点击跳转到机构列表页
    linkToOrgan() {
      if (!this.industry) {
        this.$toast.show('请先选择行业类型')
        return
      }
      this.$router.push('/organ')
    },
    // 提交触点按钮，根据有无ID调用不同接口
    handlePostBtn() {
      if (!this.btnSubmitActive) {
        return
      }
      // 失焦时已检查手机号
      /* if (!this.mobileRight) {
        this.$toast.show('手机号格式有误')
        return
      } */
      if (this.isPosting) {
        return
      }
      if (this.isEditPage) {
        this.tentacleEdit()
      } else {
        this.tentacleAdd()
      }
    }
  },
  mounted() {
    // 加载localStorage中的数据
    if (storage.get('tentacle')) {
      Object.assign(this, storage.get('tentacle'))
    }
    // 查询标签列表
    this.queryLab()
    // 查询行业类型列表
    this.queryIndus()
    // 判断是否来自拍摄
    this.channelId = this.$route.params.id
    // 如果是编辑页并且是第一次打开，跳转到其他页面在调回来，不去重新查询触点信息，而是加载localstorage
    if (this.isEditPage && !window.norQueryTent) {
      this.queryTent(this.channelId)
    }
    if (this.$route.query.fromPage === '1') {
      this.fromPage = this.$route.query.fromPage
    }
  },
  beforeDestroy() {
    window.norQueryTent = false
  },
  computed: {
    // 是否编辑页,根据路由中有无ID参数确定
    isEditPage() {
      return !!this.$route.params.id
    },
    mobileRight() {
      return (/^1[3|4|5|7|8][0-9]{9}$/.test(this.mobile))
    },
    btnSubmitActive() {
      let { name, mobile, industry, address, position, institutionName, label } = this
      let common = name.length && mobile.length && address.length && label.length && this.industry
      if (parseInt(industry) === 4) {
        return common
      }
      return common && !!institutionName.length && !!position.length
    }
  },
  beforeRouteEnter(to, from, next) {
    const url = encodeURIComponent(location.href.split('#')[0])
    getWeixinConfig(url).then(initWeixinSDK)
    if (!(from.path === '/organ' || from.path === '/organ/add' || from.path === '/tentacle/editselector')) {
      storage.remove('tentacle')
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    let { name, mobile, industry, position, remark, hobby, address, branchstoreName, label, institutionId, institutionName, channelId, sex, age, experience, contacts } = this
    let cityId = window.cityId
    if (to.path === '/organ') {
      storage.set('tentacle', {
        name,
        mobile,
        industry,
        cityId,
        institutionId,
        institutionName,
        branchstoreName,
        address,
        position,
        label,
        hobby,
        remark,
        channelId,
        age,
        sex,
        contacts,
        experience
      })
    } else {
      storage.remove('tentacle')
    }
    next()
  }
  /* ,
  watch: {
    editImgList() {
      console.log('editImgList')
      console.log(this.editImgList)
      this.images = this.images.concat(this.editImgList.map(item => item.videoValue))
    },
    images(val) {
      console.log(this.images)
      console.log(val)
  } 
  } */
})
