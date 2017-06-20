import create from './index.tpl'
import './index.styl'
import TentacleBar from '../../../components/tentaclebar'

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
    TentacleBar
  },
  mounted() {
    console.log('detail:' + this.$route.params.datakey);
    let code = this.$route.params.datakey;
    http.get(api.tentacledetail, {
      code,
    }).then(data=>{
      console.log(data);
      this.data = data
    })

  }
})

