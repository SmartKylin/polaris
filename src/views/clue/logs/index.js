import { queryClueLogs } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      dataList: []
    }
  },

  created() {
    this.$loading.show()
    queryClueLogs({
      clueCode: this.$route.params.code
    })
    .then(res => {
      console.log(res)
      this.$loading.hide()
      this.dataList = res
    })
    .catch(err => {
      this.$loading.hide()
      this.$dialog.alert('提示', err.message)
    })
  }
})
