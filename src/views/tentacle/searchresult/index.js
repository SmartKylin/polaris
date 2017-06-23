import create from './index.tpl'
import './index.styl'
import SearchBox from 'components/searchbar'
import TentacleBar from 'components/tentaclebar'
import {queryTentacle} from 'services'

export default create({
  data() {
    return {
      data: {
        list: [],
      },
      search: '',
      // 页码
      page: 0,

    }
  },
  components: {
    SearchBox,
    TentacleBar
  },
  methods: {
    query() {
      console.log(this.search);
      queryTentacle({search: this.search, page: this.page}).then(data => {
        this.data = data
      }).catch(err => {
        this.$dialog.alert("提示", err.message)
      })

    }
  }
})
