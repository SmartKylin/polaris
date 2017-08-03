import create from './index.tpl'
import './index.styl'
import Search from '../../../components/organsearch'

export default create({
  data() {
    return {
      institutionList: [1, 2, 3, 4],
      // institutionList: [],
      institution: '',
      industry: ''
    }
  },
  components: {
    Search
  },
  created () {
    if (this.$route.query.industry) {
      this.industry = this.$route.query.industry
    }
  },
  methods: {
    handleSelect (i) {
      this.institution = i
      // this.$router.replace('/tentacle/add', this.institution)
      window.setTimeout(() => {
        this.$router.replace('/tentacle/add?institution=' + this.institution)
      }, 100)
    }
  }
})
