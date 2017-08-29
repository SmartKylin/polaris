import create from './index.tpl'
import './index.styl'
import { getOpenStatus } from '../../../services'

export default create({
  data() {
    return {
      status: null
    }
  },
  created() {
    getOpenStatus().then(res => {
      this.status = res.status
    }).catch(err => {
      this.$toast.show(err.message)
    })
  }
})
