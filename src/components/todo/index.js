import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    plan: {
      type: Object
    }
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false
    }
  },
  methods: {
    alert() {
      this.$dialog.alert('', '', [{title: '查看详情', onClick() {}}, {title: '返回首页', onClick() {}}])
    }
  }

})
