import create from './index.tpl'
import './index.styl'
import { addInstitution } from '../../../services/institution'

export default create({
  data() {
    return {
      organ: '',
      industry: ''
    }
  },
  methods: {
    organAdd() {
      if (!this.organ) {
        return
      }
      // 添加机构
      addInstitution({ name: this.organ, industry: this.industry }).then(res => {
        this.$toast.show('机构添加成功')
        this.$router.replace('/tentacle/add?institution=' + this.organ + '&id=' + res.id)
      }).catch(err => {
        // this.$toast.show(err.message)
        this.$dialog.alert('提示', err.message)
      })
    }
  },
  computed: {
    btnSubmitActive() {
      return !!this.organ.length
    }
  },
  created() {
    if (this.$route.query.industry) {
      this.industry = parseInt(this.$route.query.industry)
    }
  }
})
