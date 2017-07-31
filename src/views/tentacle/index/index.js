import SearchBox from 'components/searchbar'
import create from './index.tpl'
import './index.styl'
import http from '../../../http'
import api from '../../../api'

export default create({
  data() {
    return {
      data: {
      }
    }
  },
  components: {
    SearchBox
  },
  mounted() {
    http.get(api.tentacleStatics).then(data => {
      this.data = data
    })
  }
})
