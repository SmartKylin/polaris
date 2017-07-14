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

      // 当前选择的机构
      curInstitution: {},
      // 当前标签
      label: '',

      labelO: {}
    }
  },
  components: {
    TentacleBar
  },
  methods: {
    //  机构改变
    institutionChange(val) {
      this.curInstitution = this.institutionList.find(i => i.id == val)
      console.log(this.curInstitution);
    },
    // 关系标签改变
    relationChange(val) {
      console.log(this.label)
      console.log(this.labelO.id)

    },
   /* // 产能标签改变
    capacityChange(val) {
      this.labelAry[1] = parseInt(val)
      this.label = this.labelAry.join(',')
    },*/
    // 提交触点
    tentacleEdit() {
      let {name, mobile, position, remark, hobby, channelInstitutionId} = this.data
      let {cityId, areaId, industry, address, block} = this.curInstitution
      let label = this.label
      let channelId = this.data.id
      let channelInstitutionName = this.curInstitution.name
      let institutionId = this.curInstitution.id

      console.log(name, mobile,  institutionId, block, position, cityId, areaId, industry, remark, label, hobby, channelId, address, channelInstitutionName)
      editTentacle({name, mobile, institutionId, cityId, areaId, industry, position, block, remark, label, hobby, channelId, address, channelInstitutionName}).then(res => {
        if (res.retcode === 2000000) {
          console.log(res.msg);
          this.$dialog.alert('提示', '修改触点成功')
          this.$router.back()
        }
      }).catch(err => {
        this.$dialog.alert('失败', err.message)
      })
    },
  },
  created() {
    // 获取详情页传过来的触点编码
    let id = this.$route.params.id

    queryInstitution().then(data => {
      this.institutionList = data.list
      // 根据触点编码查询触点信息
      queryTentacleDetail({channelId: id}).then(data => {
        this.data = data
        this.label = data.labelId[0]
        console.log('111' + this.label);
        // 初始化当前机构,如果在机构列表中未找到，则直接取触点里的初始值
        this.curInstitution = this.institutionList.find(i => i.id == this.data.channelInstitutionId) || {
            id: this.data.channelInstitutionId,
            name: this.data.channelInstitutionName,
            cityId: this.data.cityId,
            areaId: this.data.areaId
          }
      })
    })

    // 查询标签列表
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      /*queryTentacleDetail({channelId: id}).then(data => {
        this.labelO = this.labRelaList.find(l => l.name == data.labelId[0]) || {
            id: data.label[0].slice(0, -1),
            name: data.label[0],
          }
      })*/
    })
  }
})

