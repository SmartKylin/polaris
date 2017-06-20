import create from './index.tpl'
import './index.styl'
import SearchBox from 'components/searchbar'
import TentacleBar from 'components/tentaclebar'
import http from '../../../http';
import api from '../../../api';
export default create({
  data() {
    return {
      data: {
        list: [],
      },
      search: '',
    }
  },
  components: {
    SearchBox,
    TentacleBar
  },
  methods: {
    query() {
      console.log(this.search);
      http.get(api.tentaclelist, {
        search: this.search
      }).then(data=>{
        console.log(data);
        this.data = data;
      })
    }
  }
})
