import create from './index.tpl'
import './index.styl'
import SearchBar from '../../../components/searchbar'
import TentacleBar from '../../../components/tentaclebar'
import LevelOverview from '../../../components/leveloverview'

export default create({
  data() {
    return {

    }
  },
  components: {
    SearchBar,
    LevelOverview,
    TentacleBar
  },
  methods: {
    tosearch() {
      console.log('search');
      console.log('111');
      this.$router.push('/tentacle/searchresult');
    }
  }
})
