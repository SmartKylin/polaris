import create from './index.tpl'
import './index.styl'
import Tentacle from '../../../components/Tentacle.vue'
import SearchBox from '../../../components/searchbox'
import LevelOverview from '../../../components/leveloverview'

export default create({
  data() {
    return {
      keyword: '',
      overviewAry: [],
    }
  },
  components: {
    Tentacle,
    SearchBox,
    LevelOverview
  }
})
