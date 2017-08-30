import create from './index.tpl'
import './index.styl'
import { getOpenStatus, getReplayOpenStatus } from '../../../services'

export default create({
  data() {
    return {
      status: null,
      replayStatus: null
    }
  },
  created() {
    getOpenStatus().then(res => {
      this.status = res.status
    }).catch(err => {
      this.$toast.show(err.message)
    })
    getReplayOpenStatus().then(res => {
      this.replayStatus = res.status
    }).catch(err => {
      this.$toast.show(err.message)
    })
  }
})
