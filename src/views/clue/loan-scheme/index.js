import { addLoanScheme } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      visible: false,
      model: {
        name: '',
        bank: '',
        type: '',
        about: ''
      },
      dataList: []
    }
  },

  methods: {
    // 保存
    save() {
      this.$loading.show()
      addLoanScheme(this.model).then(res => {
        this.$loading.hide()
        this.dataList.push({
          name: this.model.name,
          bank: this.model.bank,
          type: this.model.type,
          about: this.model.about,
        })
        this.closeLoanSchemeEditor()
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    },

    // 打开添加金融方案编辑页
    openLoanSchemeEditor() {
      this.visible = true
    },

    // 关闭添加金融方案编辑页
    closeLoanSchemeEditor() {
      this.model.name = ''
      this.model.bank = ''
      this.model.type = ''
      this.model.about = ''
      this.visible = false
    },

    edit(data) {
      this.model.name = data.name
      this.model.bank = data.bank
      this.model.type = data.type
      this.model.about = data.about
      this.openLoanSchemeEditor()
    }
  },

  filters: {
    nameOfType(value) {
      return ['抵押贷', '信用贷'][value]
    }
  }
})
