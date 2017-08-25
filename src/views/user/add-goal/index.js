import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      analysis: '这是我的个人分析',
      discussion: '',
      analysisVisible: false,
      whichStep: 0
    }
  },
  methods: {
    initQueryString() {
      if (this.$route.query.whichStep) {
        this.whichStep = this.$route.query.whichStep
      }
    },
    showAnalysis() {
      this.analysisVisible = !this.analysisVisible
    }
  },
  created() {
    this.initQueryString()
  }
})
