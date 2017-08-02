import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import { queryInstitution, addTentacle, queryLabel } from 'services'

export default create({
  data() {
    return {
      // 机构列表
      institutionList: [],
      // 关系标签列表
      labRelaList: [],
      // 行业类型列表
      industryList: [
        {
          id: 1,
          name: '房产中介'
        },
        {
          id: 2,
          name: '银行客户经理'
        },
        {
          id: 3,
          name: '个人'
        }
      ],
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
      branchStore: '霍营店',
      organ: '链家地产',
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
    //  机构改变
    institutionChange(val) {
      this.institutionId = val
      this.curInstitution = this.institutionList.find(i => i.id === val)
    },
    // 关系标签改变
    relationChange(val) {
      this.label = val
      this.labelObj = this.labRelaList.find(l => l.id === val)
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
    }
  },
  mounted() {
    // 查询机构列表
    queryInstitution().then(data => {
      this.institutionList = data.list
    })
    // 查询标签列表
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      // 产能标签删除
      // this.labCapaList = data[2].list
    })
  },
  computed: {
    mobileRight () {
      if (/^1[3|4|5|7|8][0-9]{9}$/.test(this.mobile)) {
        return true
      }
      return false
    },
    btnSubmitActive () {
      let { name, mobile, industry, address, position, organ, labelObj, branchStore } = this
      let labelname = this.labelObj.name
      if (industry === 3) {
        return !!name.length && !!mobile.length && !!address.length && !!labelObj.name.length
      }
      return !!name.length && !!mobile.length && !!organ.length && !!branchStore.length && !!position.length && !!labelname
    }
  }
})
