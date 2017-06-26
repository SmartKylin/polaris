import { addClue, editClue, queryClueByCode } from 'services'
import { cloneDeep, assignDeep } from 'bali.js'
// import LoanSchemeView from '../loan-scheme'
import bus from '../../../helper/bus'
import createState from './state'
import create from './index.tpl'
import './index.styl'


export default create({
  data() {
    return createState()
  },

  // components: { LoanSchemeView },

  created() {
    // 添加和编辑线索都是在这个模块，
    // 所以根据传过来的 code 判断是添加还是编辑
    // 如果是添加，传过来的 code 为 "_"
    const code = this.$route.params.code
    this.isAdd = code === '_'

    // 不是添加，则去查询线索信息
    if (!this.isAdd) this.query()

    // 保存选择的触点信息
    bus.$on('pick-tentacle', data => {
      this.model.channel = {
        channelCode: data.code,
        name: data.name,
        channelInstitutionName: data.channelInstitutionName,
        mobile: data.mobile,
        address: data.address
      }
    })
  },

  methods: {
    save() {
      const data = cloneDeep(this.model)
      if (this.isAdd) {
        this.createClue(data)
      } else {
        this.saveEdit(data)
      }
    },

    // 保存修改
    saveEdit(data) {
      this.$loading.show()
      editClue(data).then(res => {
        this.$loading.hide()
        this.$toast.show('操作成功')
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    },

    // 创建新的线索
    createClue(data) {
      this.$loading.show()
      addClue(data).then(res => {
        this.$loading.hide()
        this.$toast.show('操作成功', () => {
          this.$router.replace('/clue/' + res.clueCode)
        })
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    },

    // 查询线索信息
    query() {
      this.$loading.show('数据加载中...')
      queryClueByCode({
        clueCode: this.$route.params.code
      })
      .then(res => {
        // 删除多余字段
        // delete res.cityId
        // delete res.channelCode
        // delete res.businessCode
        // delete res.declarationTime
        // delete res.source
        // delete res.backlog
        // delete res.loanInfos

        Object.keys(this.model).forEach(name => {
          if (res[name]) {
            this.model[name] = res[name]
          }
        })

        this.$loading.hide()
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
