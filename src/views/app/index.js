import create from './index.tpl'
import './index.styl'
import { getOpenStatus, getReplayOpenStatus } from '../../services'

const rootPaths = [
  '/tentacle',
  '/clue',
  '/user'
]

export default create({
  data() {
    return {
      status: null,
      replayStatus: null
    }
  },
  computed: {
    route() {
      return this.$route.path
    },
    visible() {
      return rootPaths.indexOf(this.$route.path) > -1
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
