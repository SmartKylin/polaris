import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'

import http from '../../../http'
import api from '../../../api'

export default create({
  data() {
    return {
      data: {}
    }
  },
  components: {
    TentacleBar
  },
  mounted() {
    let code = this.$route.params.datakey;
    http.get(api.tentacledetail, {
      code,
    }).then(data => {
      this.data = data
    }).catch(err => {
      this.$dialog.alert('提示', err.message)
    })
  }
})

