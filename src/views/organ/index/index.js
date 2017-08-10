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
      // 机构对象
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
    this.initialData()
    this.initialQuery()
  },
  methods: {
    initialData() {
      let tent = storage.get('tentacle')
      this.industry = tent.industry
      this.institutionId = tent.institutionId
      this.channelId = tent.channelId
    },
    initialQuery() {
      queryInstitution({
        industry: this.industry
      }).then(res => {
        this.isSearching = false
        this.hotInstitutionList = res.hot
        this.institutionList = res.list
        let institution = null
        if (res.hot.find(i => i.id === this.institutionId)) {
          institution = res.hot.find(i => parseInt(i.id) === parseInt(this.institutionId))
        } else if (res.list.length) {
          res.list.find(i => (institution = i.list.find(l => parseInt(l.id) === parseInt(this.institutionId))))
        }
        this.institution = institution
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
        // 不需要请求触点数据
        window.norQueryTent = true
        let url = this.channelId ? '/tentacle/edit/' + this.channelId : '/tentacle/edit'
        this.$router.replace(url)
      }, 100)
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
