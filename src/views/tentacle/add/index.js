import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import { queryIndustry, addTentacle, queryLabel } from 'services'

export default create({
  data() {
    return {
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
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: '',
      // 当前选中的机构
      curInstitution: '',
      // 分店名
      branchstoreName: '',
      organ: '',
      // 关系标签对象
      labelObj: {
        name: ''
      },
      institutionId: '',
      institutionName: ''
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
      let { name, mobile, industry, position, remark, hobby, address, branchstoreName, label, institutionId } = this
      let cityId = window.cityId
      let institutionName = this.organ
      addTentacle({ name, mobile, industry, cityId, institutionId, institutionName, branchstoreName, address, position, label, hobby, remark }).then(res => {
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
    if (this.$route.query.id) {
      this.institutionId = this.$route.query.id
    }
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
      if (industry === 4) {
        return common
      }
      return common && !!organ.length && !!position.length
    }
  }
})
