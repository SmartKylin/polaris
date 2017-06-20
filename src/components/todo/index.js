import create from './index.tpl'
import './index.styl'

export default create({
  props: {

  },
  data() {
    return {
      visible1: false,
      visible2: false
    }
  },
  methods: {
    alert() {
      this.$dialog.alert('', '', [{title: '查看详情', onClick() {}}, {title: '返回首页', onClick() {}}])
    }
  }

})
