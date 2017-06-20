import create from './index.tpl'
import './index.styl'

export default create({

  name: 'Lodamore',

  props: {
    allLoaded: {
      type: Boolean,
      default: false
    },
    desc: {
      type: String,
      default: '正在加载...'
    }
  },

  data() {
    return {
      visible: false
    }
  },

  watch: {
    allLoaded(newVal) {
      this.visible = !newVal
    }
  },

  methods: {
    onscroll() {
      // if (this.allLoaded) {
      //   return this.stopListen()
      // }

      const scrollTop = document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.body.scrollHeight

      if (scrollHeight >= clientHeight && !this.allLoaded) {
        this.visible = true
      } else {
        this.visible = false
      }

      if (this.visible) {
        // scrollHeight -= 44
      }

      // console.log(scrollHeight, clientHeight)

      if (scrollTop + clientHeight >= scrollHeight && !this.allLoaded) {
        this.$emit('reachBottom')
      }
    },

    startListen() {
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.body.scrollHeight
      // 如果页面数据不够一屏，说明没有更多的数据需要加载，所以不需要监听 scroll
      // 事件，不需要使用 Loadmore
      if (scrollHeight > clientHeight) {
        this.visible = true
      }
      window.addEventListener('scroll', this.onscroll)
    },

    stopListen() {
      window.removeEventListener('scroll', this.onscroll)
    }
  },

  mounted() {
    this.startListen()
  },

  // 组件销毁时解除事件监听
  destroyed() {
    this.stopListen()
  }
})
