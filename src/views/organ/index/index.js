import create from './index.tpl'
import './index.styl'
import { queryInstitution } from '../../../services/institution'
import storage from '../../../helper/storage'

const DELAY = 600
export default create({
  data() {
    return {
      institutionList: [],
      // 热门机构列表
      hotInstitutionList: [],
      // 机构名
      institution: '',
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
    if (this.$route.query.institutionId) {
      this.institutionId = this.$route.query.institutionId
    }
    this.initialQuery()
  },
  methods: {
    initialQuery() {
      queryInstitution({
        industry: this.industry
      }).then(res => {
        this.isSearching = false
        this.hotInstitutionList = res.hot
        this.institutionList = res.list
        /* let institution = null
        if (res.hot.find(i => i.id === this.institutionId)) {
          institution = res.hot.find(i => i.id === this.institutionId)
        } else if (res.list){
          res.list.map(i => {
            institution = i.list.find(l => l.id === this.institutionId)
          })
        }
        this.institution = institution */
      }).catch(err => {
        this.isSearching = false
        this.$toast.show(err.message)
      })
    },
    handleSelect (i) {
      this.institution = i
      let tent = storage.get('tentacle')
      tent.institutionId = i.id
      tent.institutionName = i.name
      storage.set('tentacle', tent)
      setTimeout(() => {
        this.$router.replace('/tentacle/add?institution=' + i.name + '&id=' + i.id)
      }, 300)
    },
    query() {
      /* if (!this.keyword) {
        this.institutionList = []
        return
      } */
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
        this.isSearching = false
        this.$toast.show(err.message)
      })
    }
  },
  watch: {
    keyword(val) {
      if (val === '') {
        this.initialQuery()
        return
      }
      this.isSearching = true
      // 函数节流
      this.timer && clearTimeout(this.timer)
      let curTime = +new Date()
      if (curTime - this.oldTime >= DELAY) {
        this.oldTime = curTime
        this.query()
      } else {
        this.timer = setTimeout(() => {
          this.query()
        }, DELAY)
      }
    }
  }
})
