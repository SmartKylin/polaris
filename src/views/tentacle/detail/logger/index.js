import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      visible1: false,
      visible2: false
    }
  },
  methods: {
    alert() {
      this.$dialog.alert('', '', [{title: '查看详情', onClick() {}}, {title: '返回首页', onClick() {}}])
    },
    selectLabel (event) {
      let src = event.target
      if (src.tagName.toLowerCase() === 'div') {
        let par = src.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(e=>(e.className = 'tentacleSearch--tabItem'))
        src.className += ' active';
      }
      if (src.tagName.toLowerCase() === "p"){
        let ele = src.parentNode
        let par = ele.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(e=>(e.className = 'tentacleSearch--tabItem'))
        ele.className += ' active';
      }
    }
  }
})
