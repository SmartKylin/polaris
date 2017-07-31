import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {

    }
  },
  methods: {
    changeLevel (event) {
      var src = event.target
      if (src.tagName.toLowerCase() === 'p') {
        let ele = src.parentNode
        let par = ele.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(e => (e.className = 'tentacleView--tabItem'))
        ele.className += ' selected'
      }
      if (src.className.indexOf('tentacleView--tabItem') > -1 && src.tagName.toLowerCase() === 'div') {
        let par = src.parentNode
        let chils = par.getElementsByTagName('div')
        chils = Array.from(chils)
        chils.forEach(ele => (ele.className = 'tentacleView--tabItem'))
        src.className += ' selected'
      }
    }
  }
})
