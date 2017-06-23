import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryTentacleDetail } from 'services'

export default create({
  data() {
    return {
      data: {}
    }
  },
  components: {
    TentacleBar
  },
  mounted() {
    let code = this.$route.params.datakey;
    console.log('detail' + code);
    this.$loading.show()
    queryTentacleDetail({code}).then(data => {
      this.$loading.hide()
      this.data = data
    }).catch(err => {
      this.$dialog.hide()
      this.$dialog.alert('提示', err.message)
    })

  }
})

