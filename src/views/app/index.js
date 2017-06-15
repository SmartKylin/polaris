import create from './index.tpl'

export default create({
  data() {
    return {
      visible: true,
    }
  },

  computed: {
    route() {
      return this.$route.path
    }
  }
})
