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
        this.$router.replace('/tentacle/add')
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
  }
})
