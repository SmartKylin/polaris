import create from './index.tpl'
import './index.styl'
import TentacleBar from '../../../components/tentaclebar'

export default create({
  data() {
    return {
      options: [
        { text: '北京', val: 1 },
        { text: '上海', val: 2 },
        { text: '广州', val: 3 },
        { text: '深圳', val: 4 }
      ]
    }
  },
  components: {
    TentacleBar
  }
})

