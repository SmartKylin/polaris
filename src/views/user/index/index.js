import create from './index.tpl'
import './index.styl'
import { getManageStatus } from '../../../services'

export default create({
  data() {
    return {
      status: null
    }
  },
  created() {
    getManageStatus().then(res => {
      this.status = res.status
      
    }).catch(err => {
      this.$toast.show(err.message)
    })
  }
})
