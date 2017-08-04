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
      timer: ''
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
      window.setTimeout(() => {
        this.$router.replace('/tentacle/add?institution=' + i.name + '&id=' + i.id)
      }, 100)
    },
    checkInput() {
      if (this.keyword === '') this.institutionList = []
    },
    /* checkInstitutionLen() {
      if (this.institutionList.length === 0) {
        this.noResultShow = true
      } else {
        this.noResultShow = false
      }
    }, */
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
        this.institutionList = res.list
      })
    }
  },
  watch: {
    keyword(val) {
      // 函数节流
      this.timer && clearTimeout(this.timer)
      let curTime = +new Date()
      let that = this
      if (curTime - this.oldTime >= DELAY) {
        this.oldTime = curTime
        this.checkInput()
        this.query()
        // this.checkInstitutionLen()
      } else {
        this.timer = setTimeout(function() {
          that.checkInput()
          that.query()
          // that.checkInstitutionLen()
        }, DELAY)
      }
    }
  }
})
