import create from './index.tpl'
import './index.styl'
import { editTentacle } from 'services'

export default create({
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      labels: {
        relationLabs: [
          {
            id: 101,
            name: "A类"
          },
          {
            id: 102,
            name: "B类"
          },
          {
            id: 103,
            name: "C类"
          },
          {
            id: 104,
            name: "D类"
          }
        ],
        capacityLabs: [
          {
            id: 206,
            name: '高产'
          },
          {
            id: 207,
            name: "低产"
          }
        ]
      },
      // 选中的关系标签
      curRela: '',
      // 选中的产能标签
      curCap: '',
      // 要发送给后台的label
      label: '',
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

        console.log(src.innerText);
        console.log(src.getAttribute("data-key"))

        let status = src.getAttribute("data-key")
        if ((/^10[1234]$/).test(status)) {
          this.curLabel = status
          this.labelAry[0] = parseInt(status)
        } else if ((/^20[67]$/).test(status)) {
          this.dormant = 0
          this.labelAry[1] = parseInt(status)
        } else if (status === "all") {
          this.labelAry[1] = ''
        }
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
  }
})
