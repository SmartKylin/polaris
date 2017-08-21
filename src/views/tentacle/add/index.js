import create from './index.tpl'
import './index.styl'
import { queryIndustry, addTentacle, queryLabel, queryTentacleDetail, editTentacle } from 'services'
import storage from '../../../helper/storage'
import PhotoUploader from 'components/photouploader'
import TentacleBar from 'components/tentaclebar'

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
      images: []
    }
  },
  components: {
    TentacleBar,
    PhotoUploader
  },
  methods: {
    // 查询触点详情
    queryTent(channelId) {
      queryTentacleDetail({ channelId }).then(data => {
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
      })
    },
    // 查询标签列表
    queryLab() {
      queryLabel().then(data => {
        this.labRelaList = data[1].list
        // 产能标签删除
        // this.labCapaList = data[2].list
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
    checkMobile() {
      if (!this.mobileRight) {
        this.$toast.show('请输入正确的手机号')
      }
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
      let { name, mobile, industry, position, remark, hobby, address, branchstoreName, branchstoreId, label, institutionId, institutionName, channelId } = this
      let cityId = window.cityId
      this.isPosting = true
      editTentacle({
        channelId,
        name,
        mobile,
        industry,
        cityId,
        institutionId,
        institutionName,
        branchstoreName,
        branchstoreId,
        address,
        position,
        label,
        hobby,
        remark
      }).then(res => {
        this.isPosting = false
        this.$toast.show('编辑触点成功', () => {
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
      if (!this.mobileRight) {
        this.$toast.show('手机号格式有误')
        return
      }
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
    this.channelId = this.$route.params.id
    // 如果是编辑页
    if (this.isEditPage && !window.norQueryTent) {
      this.queryTent(this.channelId)
    }
    // 查询行业类型列表
    this.queryIndus()
    // 查询标签列表
    this.queryLab()
    // 加载localStorage中的数据
    if (storage.get('tentacle')) {
      Object.assign(this, storage.get('tentacle'))
    }
    // 判断是否来自拍摄
    if (this.$route.query.fromPage) {
      this.fromPage = this.$route.query.fromPage
    }
    // 如果有名片
    if (this.img) {
      this.images.push(this.img)
    }
  },
  beforeDestroy() {
    window.norQueryTent = false
  },
  computed: {
    // 是否编辑页
    isEditPage() {
      return !!this.$route.params.id
    },
    mobileRight() {
      return (/^1[3|4|5|7|8][0-9]{9}$/.test(this.mobile))
    },
    btnSubmitActive() {
      let { name, mobile, industry, address, position, institutionName, label } = this
      let common = name.length && mobile.length && address.length && label.length
      if (parseInt(industry) === 4) {
        return common
      }
      return common && !!institutionName.length && !!position.length
    }
  },
  beforeRouteEnter(to, from, next) {
    if (!(from.path === '/organ' || from.path === '/organ/add' || from.path === '/tentacle/editselector')) {
      storage.remove('tentacle')
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    let { name, mobile, industry, position, remark, hobby, address, branchstoreName, label, institutionId, institutionName, channelId } = this
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
        channelId
      })
    } else {
      storage.remove('tentacle')
    }
    next()
  }
  /*  watch: {
    images(val) {
      console.log(val);
    }
  } */
})
