import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import { queryIndustry, addTentacle, queryLabel } from 'services'

export default create({
  data() {
    return {
      // 机构列表
      institutionList: [],
      // 关系标签列表
      labRelaList: [],
      // 行业类型列表
      industryList: {},
      // 机构所处产业
      industry: 1,
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
      // 标签数组
      labelAry: [],
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: '',
      // 当前选中的机构
      curInstitution: '',
      // 街区
      block: '',
      branchStore: '',
      organ: '',
      // 关系标签对象
      labelObj: {
        name: ''
      }
    }
  },
  components: {
    TentacleBar
  },
  methods: {
    // 关系标签改变
    relationChange(val) {
      this.label = val
      this.labelObj = this.labRelaList.find(l => l.id === val)
    },
    // 电话输入框失焦，检查手机号
    checkMobile() {
      if (!this.mobileRight) {
        this.$toast.show('请输入正确的手机号')
      }
    },
    // 提交触点
    tentacleAdd() {
      if (!this.btnSubmitActive) {
        return
      }
      if (!this.mobileRight) {
        this.$toast.show('手机号格式有误')
        return
      }
      let { name, mobile, position, remark, hobby, address, block } = this
      let { cityId, areaId, industry } = this.curInstitution
      let institutionId = this.curInstitution.id
      let channelInstitutionName = this.curInstitution.name
      let label = this.labelObj.name
      addTentacle({ name, mobile, institutionId, position, block, cityId, areaId, industry, remark, label, hobby, address, channelInstitutionName }).then(res => {
        if (res.retcode === 2000000) {
          this.$dialog.alert('提示', '触点添加成功')
          this.$router.back()
        }
      }).catch(err => {
        this.$dialog.alert('失败', err.message)
      })
    },
    // 点击跳转到机构列表页
    handlePush() {
      this.$router.replace('/organ?industry=' + this.industry)
    }
  },
  mounted() {
    // 查询行业类型列表
    queryIndustry().then(data => {
      this.industryList = data
    })
    // 查询标签列表
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      // 产能标签删除
      // this.labCapaList = data[2].list
    })
    // 机构搜索页传来的机构名称
    if (this.$route.query.institution) {
      this.organ = this.$route.query.institution
    }
    // 城市ID
    console.log(window.cityId)
    this.$toast.show(window.cityId)
  },
  computed: {
    mobileRight () {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.mobile)) {
        return true
      }
      return false
    },
    btnSubmitActive () {
      let { name, mobile, industry, address, position, organ, labelObj } = this
      let common = !!name.length && !!mobile.length && !!address.length && !!labelObj.name.length
      if (industry === 3) {
        return common
      }
      return common && !!organ.length && !!position.length
    }
  }
})
