import create from './index.tpl'
import './index.styl'
import { addInstitution } from '../../../services/institution'
import storage from '../../../helper/storage'

export default create({
  data() {
    return {
      institutionName: '',
      industry: ''
    }
  },
  methods: {
    initialData() {
      let tent = storage.get('tentacle')
      this.industry = tent.industry
      this.channelId = tent.channelId
    },
    organAdd() {
      if (!this.institutionName) {
        return
      }
      // 添加机构
      addInstitution({ name: this.institutionName, industry: this.industry }).then(res => {
        this.$toast.show('机构添加成功')
        let tent = storage.get('tentacle')
        tent.institutionId = res.id
        tent.institutionName = this.institutionName
        storage.set('tentacle', tent)
        // 不需要请求触点数据
        window.norQueryTent = true
        let url = this.channelId ? '/tentacle/edit/' + this.channelId : '/tentacle/edit'
        this.$router.replace(url)
      }).catch(err => {
        // this.$toast.show(err.message)
        this.$dialog.alert('提示', err.message)
      })
    }
  },
  computed: {
    btnSubmitActive() {
      return !!this.institutionName.length
    }
  },
  created() {
    this.initialData()
  },
  beforeUnMount() {
    window.norQueryTent = false
  }
})
