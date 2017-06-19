import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
    }
  },
  methods: {
    foucusHandler() {
      console.log('component emit');
      this.$emit('search-focus');
    }
  }
})
