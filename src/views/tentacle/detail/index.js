import create from './index.tpl'
import './index.styl'
import TentacleBar from 'components/tentaclebar'
import {queryTentacleDetail } from 'services'

export default create({
  data() {
    return {
      data: {},
      id: 0
    }
  },
  components: {
    TentacleBar
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log('detail' + this.id);
    this.$loading.show()
    queryTentacleDetail({channelId: this.id}).then(data => {
      this.$loading.hide()
      this.data = data
    }).catch(err => {
      this.$dialog.hide()
      this.$dialog.alert('提示', err.message)
    })
  }
})

