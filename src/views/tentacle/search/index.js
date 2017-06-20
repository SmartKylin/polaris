import create from './index.tpl'
import './index.styl'
import SearchBar from '../../../components/searchbar'
import TentacleBar from '../../../components/tentaclebar'
import LevelOverview from '../../../components/leveloverview'

import http from '../../../http'
import api from '../../../api'

export default create({
  data() {
    return {
      data: {
        list: []
      }
    }
  },
  components: {
    SearchBar,
    LevelOverview,
    TentacleBar
  },
  methods: {
    tosearch() {
      this.$router.push('/tentacle/searchresult');
    },
    selectLabel (event) {
      let src = event.target
      if (src.tagName.toLowerCase() === 'div') {
        let par = src.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(e=>(e.className = 'tentacleSearch--tabItem'))
        src.className += ' active';
      }
      if (src.tagName.toLowerCase() === "p"){
        let ele = src.parentNode
        let par = ele.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(e=>(e.className = 'tentacleSearch--tabItem'))
        ele.className += ' active'
      }
    },
    handleChange(key) {
      console.log(key);
    }
  },
  mounted() {
    let level = parseInt(this.$route.params.level)
    http.get(api.tentaclelist, {
      level,
    }).then(data=> {
      console.log(data)
      this.data = data
    })
  }
})
