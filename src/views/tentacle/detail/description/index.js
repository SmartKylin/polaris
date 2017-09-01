import create from './index.tpl'
import './index.styl'
import { editTentacle, queryTentacleDetail } from 'services'
import bus from '../../../../helper/bus'

export default create({
  data() {
    return {
      /* // 选中的关系标签
      curRela: '',
      // 选中的产能标签
      curCap: '',
      // 关系标签列表
      labRelaList: [],
      // 产能标签列表
      labCapaList: [],
      // 要发送给后台的label
      label: '',
      // 标签数组
      labelAry: [],
      // 行业类型列表
      industryList: [],
      // 机构所处产业
      industry: '',
      // 触点地址
      address: '',
      // 触点姓名
      name: '',
      // 触点电话
      mobile: '',
      // 职位
      position: '',
      // 分店名
      branchstoreName: '',
      // 分店ID
      branchstoreId: '',
      // 行业类型ID
      institutionId: '',
      institutionName: '', */
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: '',
      // 是否正在提交数据
      isPosting: false,
      // 触点id
      channelId: '',
      // 基本画像
      sexList: [
        { text: '男', value: '1' },
        { text: '女', value: '2' }
      ],
      ageList: [
        { text: '20~30岁', value: '1' },
        { text: '30~40岁', value: '2' },
        { text: '40~50岁', value: '3' },
        { text: '50岁以上', value: '4' }
      ],
      experienceList: [
        { text: '1年以下', value: '1' },
        { text: '1~3年', value: '2' },
        { text: '3~5年', value: '3' },
        { text: '5~10年', value: '4' },
        { text: '10年以上', value: '5' }
      ],
      contactsList: [
        { text: '较少', value: '1' },
        { text: '一般', value: '2' },
        { text: '丰富', value: '3' }
      ],
      sex: '',
      age: '',
      // 从业经验
      experience: '',
      // 人脉关系
      contacts: ''
    }
  },
  methods: {
    // 查询触点信息
    queryTent(channelId) {
      queryTentacleDetail({ channelId }).then(data => {
        // this.data = data
        this.industry = data.industry
        this.name = data.name
        if (data.labelId) {
          this.label = data.labelId[0]
        }
        this.address = data.address
        this.mobile = data.mobile
        this.position = data.position
        this.hobby = data.hobby
        this.remark = data.remark
        /* this.branchstoreName = data.branchstore_name
        this.branchstoreId = data.branchstoreId */
        this.institutionName = data.channelInstitutionName
        this.institutionId = data.channelInstitutionId
        this.age = data.age
        this.experience = data.experience
        this.sex = data.sex
        this.contacts = data.contacts
        this.email = data.email
        this.storefrontMobile = data.storefront_mobile
        // 画像页面编辑时需要传入原有的图片
        // 区分名片和其他图片
        let images = data.images
        if (images) {
          let card = images.find(img => parseInt(img.is_card) === 1)
          if (card && card.videoValue && card.realUrl) {
            this.img = card.videoValue
          }
          this.images = images.filter(img => parseInt(img.is_card) !== 1)
        }
      })
    },
    /* // 选择标签
    selectLabel (event) {
      let src = event.target
      if (src.tagName.toLowerCase() === 'span') {
        let par = src.parentNode
        let spans = par.getElementsByTagName('span')
        spans = Array.from(spans)
        spans.forEach(sp => (sp.className = ''))
        src.className += 'active'

        let status = src.getAttribute('data-key')
        // 关系标签： A， B1， B2，
        this.label = status
      }
    }, */
    // 编辑触点
    tentacleEdit() {
      let { name, mobile, industry, position, address, label, institutionId, institutionName, channelId, remark, hobby, sex, age, experience, contacts, email, storefrontMobile, images, img } = this
      let cityId = window.cityId
      // let { remark, hobby } = this.data
      this.isPosting = true
      images = images.join(',')
      editTentacle({
        channelId,
        name,
        mobile,
        industry,
        cityId,
        institutionId,
        institutionName,
        // branchstoreName,
        // branchstoreId,
        address,
        position,
        label,
        hobby,
        remark,
        sex,
        age,
        experience,
        contacts,
        email,
        storefrontMobile,
        images,
        img
      }).then(res => {
        this.isPosting = false
        this.$dialog.alert('提示', '编辑触点成功')
        bus.$emit('refresh-tentdata')
        this.$router.push('/tentacle/detail/' + this.channelId + '/description')
      }).catch(err => {
        this.isPosting = false
        this.$dialog.alert('失败', err.message)
      })
    }
  },
  mounted() {
    this.channelId = this.$route.params.id
    this.queryTent(this.channelId)
    /* let id = this.$route.params.id
    this.$loading.show()
    queryTentacleDetail({ channelId: id }).then(data => {
      this.$loading.hide()
      this.data = data
      this.labelAry = data.labelId || []
    }).catch(err => {
      this.$dialog.hide()
      this.$dialog.alert('提示', err.message)
    }) */
    /* queryLabel().then(data => {
      this.labRelaList = data[1].list
      // 产能标签暂时关闭
      // this.labCapaList = data[2].list
    }).catch(err => {
      this.$dialog.alert('提示', err.message)
    }) */
  }
})
