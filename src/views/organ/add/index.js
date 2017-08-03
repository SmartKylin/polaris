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
        if (res.retcode === 2000000) {
          this.$toast.show('机构添加成功')
          this.$router.replace('/organ')
        }
      }).catch(err => {
        this.$toast.show(err)
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
