import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      interviewVisible: false
    }
  },

  methods: {
    makeInterview() {
      this.interviewVisible = true
    }
  }
})
