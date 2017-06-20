import LevelOverview from 'components/leveloverview'
import SearchBox from 'components/searchbar'
import create from './index.tpl'
import './index.styl'
import http from '../../../http'
import api from '../../../api'

export default create({
  data() {
    return {
      data: {
        "total": {
          "channel": 0,
          "delivery_clue": 0,
          "endorse_clue": 0,
          "bargain_clue": 0
        },
        "synthesize": {
          "ag1": 0,
          "bg": 0,
          "cg": 0,
          "dormant": 0
        },
        "level": {
          "one": 0,
          "two": 0,
          "three": 0,
          "four": 0,
          "five": 0,
          "vip": 0
        }
      }

    }
  },
  components: {
    SearchBox,
    LevelOverview
  },
  mounted() {
    http.get(api.statis).then(data=> {
      this.data = data;
    })
  }
})
