import create from './index.tpl'
import './index.styl'
import { queryInstitution } from '../../../services/institution'

const DELAY = 600
export default create({
  data() {
    return {
      institutionList: [],
      // institution: '',
      industry: '',
      // 搜索框名称
      keyword: '',
      // 是否有查到机构
      noResultShow: false,
      // 上一次机构输入时间
      oldTime: '',
      // 定时器
      timer: '',
      isSearching: false
    }
  },
  created () {
    if (this.$route.query.industry) {
      this.industry = parseInt(this.$route.query.industry)
    }
  },
  methods: {
    handleSelect (i) {
      this.institution = i
      setTimeout(() => {
        this.$router.replace('/tentacle/add?institution=' + i.name + '&id=' + i.id)
      }, 300)
    },
    checkInput() {
      if (this.keyword === '') this.institutionList = []
    },
    query() {
      if (!this.keyword) {
        this.institutionList = []
        return
      }
      queryInstitution({
        seach: this.keyword,
        industry: this.industry
      }).then(res => {
        if (res.list.length === 0) {
          this.noResultShow = true
        } else {
          this.noResultShow = false
        }
        this.isSearching = false
        this.institutionList = res.list
      }).catch(err => {
        this.$toast.show(err.message)
      })
    }
  },
  watch: {
    keyword(val) {
      this.isSearching = true
      // 函数节流
      this.timer && clearTimeout(this.timer)
      let curTime = +new Date()
      if (curTime - this.oldTime >= DELAY) {
        this.oldTime = curTime
        this.query()
      } else {
        this.timer = setTimeout(() => {
          // that.checkInput()
          this.query()
        }, DELAY)
      }
    }
  }
})
