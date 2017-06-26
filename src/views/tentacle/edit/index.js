import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryInstitution, queryInstitutionDetail, queryLabel, queryTentacleDetail, editTentacle} from 'services'

export default create({
  data() {
    return {
      // 触点对象，所有信息
      data: {},
      // 机构列表
      institutionList: [],
      // 关系标签列表
      labRelaList: [],
      // 产能标签列表
      labCapaList: [],
      // 标签
      label: '',
      // 标签数组
      labelAry: [],

    }
  },
  components: {
    TentacleBar
  },
  methods: {
    //  机构改变
    institutionChange(val) {
      this.data.institutionId = parseInt(val)
      console.log(this.data.institutionId);
      queryInstitutionDetail({id: this.institutionId}).then(data => {
        this.data.cityId = parseInt(data.cityId)
        this.data.areaId = parseInt(data.areaId)
        this.data.industry = parseInt(data.industry)
        console.log(this.data.areaId)
        console.log(this.data.industry)
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
    tentacleEdit() {
     /* if (!this.name || !this.mobile || !this.position) {
        this.$dialog.alert('信息不全')
        return
      }*/
      let {name, mobile, institutionId, position, cityId, areaId, industry, remark, hobby, channelInstitutionId} = this.data
      let label = this.label
      let channel_id = this.data.id

      console.log(name, mobile, {institutionId: channelInstitutionId}, institutionId, position, cityId, areaId, industry, remark, label, hobby, channel_id)
      editTentacle({name, mobile, institutionId, position, cityId, areaId, industry, remark, label, hobby, channel_id}).then(res => {
        if (res.retcode === 2000000) {
          console.log(res.msg);
          this.$dialog.alert('提示', '修改触点成功')
          this.$router.back()
        }
      }).catch(err => {
        this.$dialog.alert('失败', err.message)
      })
    },
    institutionHandler() {

    }
  },
  created() {
    // 查询机构列表
    queryInstitution().then(data => {
      this.institutionList = data.list
    })

    // 查询标签列表
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      this.labCapaList = data[2].list
    })
    // 获取详情页传过来的触点编码
    let code = this.$route.params.channelCode
    // 根据触点编码查询触点信息
    queryTentacleDetail({code}).then(data => {
      this.data = data
      console.log(this.data)
    })
    // 部分数据获取初始值
    console.log('111' + this.data.channelInstitutionId);
    this.data.institutionId = this.data.channelInstitutionId
  }
})

