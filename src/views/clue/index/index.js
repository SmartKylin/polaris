import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
    }
  },

  methods: {
    handleChange(key) {
      console.log(key)
    }
  }
})
