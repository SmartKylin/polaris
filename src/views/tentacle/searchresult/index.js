import create from './index.tpl'
import './index.styl'
import SearchBox from '../../../components/searchbar'
import TentacleBar from '../../../components/tentaclebar'
import LevelOverview from '../../../components/leveloverview'

export default create({
  data() {
    return {
      keyword: '',
      overviewAry: [],
    }
  },
  components: {
    SearchBox,
    LevelOverview,
    TentacleBar
  }
})
