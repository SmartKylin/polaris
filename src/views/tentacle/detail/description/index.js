import create from './index.tpl'
import './index.styl'
import { editTentacle, queryLabel, queryTentacleDetail } from 'services'

export default create({
  data() {
    return {
      // data触点数据
      data: {},
      // 选中的关系标签
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
      // 触点地址 */
      address: '',
      // 触点姓名
      name: '',
      // 触点电话
      mobile: '',
      // 职位
      position: '',
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: '',
      // 分店名
      branchstoreName: '',
      // 分店ID
      branchstoreId: '',
      // 行业类型ID
      institutionId: '',
      institutionName: '',
      // 是否正在提交数据
      isPosting: false,
      // 触点id
      channelId: ''
    }
  },
  methods: {
    // 查询触点信息
    queryTent(channelId) {
      queryTentacleDetail({ channelId }).then(data => {
        this.data = data
        this.industry = data.industry
        this.name = data.name
        this.label = data.labelId[0]
        this.address = data.address
        this.mobile = data.mobile
        this.position = data.position
        this.hobby = data.hobby
        this.remark = data.remark
        this.branchstoreName = data.branchstore_name
        this.branchstoreId = data.branchstoreId
        this.institutionName = data.channelInstitutionName
        this.institutionId = data.channelInstitutionId
      })
    },
    // 选择标签
    selectLabel (event) {
      let src = event.target
      if (src.tagName.toLowerCase() === 'span') {
        let par = src.parentNode
        let spans = par.getElementsByTagName('span')
        spans = Array.from(spans)
        spans.forEach(sp => (sp.className = ''))
        src.className += 'active'

        let status = src.getAttribute('data-key')
        /*
        if ((/^[123478]$/).test(status)) {
          this.labelAry[0] = parseInt(status)
        } else if ((/^[56]$/).test(status)) {
          this.labelAry[1] = parseInt(status)
        }
        this.label = this.labelAry.join(',')
        */
        // 关系标签： A， B1， B2，
        this.label = status
      }
    },
    // 编辑触点
    tentacleEdit() {
      let { name, mobile, industry, position, address, branchstoreName, branchstoreId, label, institutionId, institutionName, channelId } = this
      let cityId = window.cityId
      let { remark, hobby } = this.data
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
        this.$dialog.alert('提示', '编辑触点成功')
        this.$router.push('/tentacle/detail/' + this.channelId + '/description')
      }).catch(err => {
        this.isPosting = false
        this.$dialog.alert('失败', err.message)
      })
    }
  },
  mounted() {
    this.channelId = this.$route.params.id
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
    this.queryTent(this.channelId)
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      // 产能标签暂时关闭
      // this.labCapaList = data[2].list
    }).catch(err => {
      this.$dialog.alert('提示', err.message)
    })
  }
})
