import create from './index.tpl'
import './index.styl'
import { editTentacle ,queryLabel} from 'services'

export default create({
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
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
      // 兴趣爱好
      hobby: '',
      // 备注
      remark: ''
    }
  },
  methods: {
    selectLabel (event) {
      let src = event.target;
      if (src.tagName.toLowerCase() === "span") {
        let par = src.parentNode;
        let spans = par.getElementsByTagName('span')
        spans = Array.from(spans);
        spans.forEach(sp => (sp.className = ''))
        src.className += 'active';

        let status = src.getAttribute("data-key")

        if ((/^[1234]$/).test(status)) {
          this.labelAry[0] = parseInt(status)
        } else if ((/^[67]$/).test(status)) {
          this.labelAry[1] = parseInt(status)
        }
        this.label = this.labelAry.join(',')
      }
    },
    tentacleEdit() {
      const params = {}
      params.channel_id = parseInt(this.data.id)
      params.hobby = this.data.hobby
      params.remark = this.data.remark
      if (this.labelAry.length > 0) {
        params.label = this.labelAry.join(',')
      }
      console.log(params);
      editTentacle(params).then(res => {
        if (res.retcode === 2000000) {
          this.$dialog.alert('提示', '触点画像编辑成功')
        }
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    }
  },
  mounted() {
    queryLabel().then(data => {
      this.labRelaList = data[1].list
      this.labCapaList = data[2].list
    }).catch(err => {
      this.$dialog.alert("提示", err.message)
    })
  }
})
