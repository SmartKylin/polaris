import { addLoanScheme, editLoanScheme } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      visible: false,
      model: {
        id: '',
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
      const params = {}

      Object.keys(this.model).forEach(name => {
        params[name] = this.model[name]
      })

      this.$loading.show()

      if (!params.id) {
        delete params.id
        addLoanScheme(params).then(res => {
          this.$loading.hide()
          this.dataList.push({
            id: res.solutionsId,
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
      }
      // 存在 id 则是修改
      else {
        editLoanScheme(params).then(res => {
          this.$loading.hide()
          this.dataList.some(scheme => {
            if (scheme.id === params.id) {
              Object.keys(scheme).forEach(name => {
                scheme[name] = params[name]
              })
              return true
            }
          })
          this.closeLoanSchemeEditor()
        })
        .catch(err => {
          this.$loading.hide()
          this.$dialog.alert('提示', err.message)
        })
      }
    },

    // 打开添加金融方案编辑页
    openLoanSchemeEditor() {
      this.visible = true
    },

    // 关闭添加金融方案编辑页
    closeLoanSchemeEditor() {
      Object.keys(this.model).forEach(name => {
        this.model[name] = ''
      })
      this.visible = false
    },

    edit(data) {
      Object.keys(data).forEach(name => {
        this.model[name] = data[name]
      })
      this.openLoanSchemeEditor()
    }
  },

  filters: {
    nameOfType(value) {
      return ['抵押贷', '信用贷'][value]
    }
  }
})
