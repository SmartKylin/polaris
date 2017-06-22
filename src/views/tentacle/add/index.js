import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryInstitution, queryInstitutionDetail, addTentacle, queryLabel} from 'services'

export default create({
  data() {
    return {
      /* // 弹出框是否可见
       visible: false,
       // 区域选择器是否可见
       areaSelectorVisible: false,
       // 城市选择器是否可见
       institutionSelectorVisible: false,
       // 城市列表
       cityList: [],
       // 区域列表
       areaList: [],*/

      // 机构列表
      institutionList: [],
      // 关系标签列表
      labRelaList: [],
      // 产能标签列表
      labCapaList: [],
      // 目标机构对应城市ID
       cityId: 21,
      // 目标机构ID
      institutionId: 15,
      // 目标机构的区域ID
      areaId: 27,
      // 机构所处产业
      industry: 1,
      // 触点地址
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
      remark: ""
    }
  },
  components: {
    TentacleBar
  },
  methods: {
    //  机构改变
    institutionChange(val) {
      this.institutionId = val
      console.log(this.institutionId);
      queryInstitutionDetail({id: this.institutionId}).then(data => {
        console.log(data);
        this.cityId = parseInt(data.cityId)
        this.areaId = parseInt(data.areaId)
        this.industry = parseInt(data.industry)
        console.log(this.areaId)
        console.log(this.industry)
      })
    },
    // 关系标签改变
    relationChange(val) {
      console.log(val);
      this.labelAry[0] = parseInt(val)
      this.label = this.labelAry.join(',')
    },
    // 产能标签改变
    capacityChange(val) {
      console.log(val);
      this.labelAry[1] = parseInt(val)
      this.label = this.labelAry.join(',')
    },
    // 提交触点
    tentacleAdd() {
      if (!this.name || !this.mobile || !this.position) {
        this.$dialog.alert('信息不全')
        return
      }
      let {name, mobile, institutionId, position, cityId, areaId, industry, remark, label, hobby} = this
      console.log(name, mobile, institutionId, position, cityId, areaId, industry, remark, label, hobby)
      addTentacle({name, mobile, institutionId, position, cityId, areaId, industry, remark, label, hobby}).then(res => {
        if (res.retcode === 2000000) {
          this.$dialog.alert('提示', '触点添加成功')
        }
      }).catch(err => {
        this.$dialog.alert('失败', err.message)
      })
    },
    institutionHandler() {

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
      this.labCapaList = data[2].list
    })
  }
})

