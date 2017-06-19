import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    hasOwner: {
      type: Boolean,
      default: true,
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
    addPlan(event) {
      console.log(event);
      this.visible1 = true

    },
    addLogger (event) {
      this.visible2 = true
      event.stopPropagation()
    },
    deliverTentacle (event) {
      this.visible3 = true
      event.stopPropagation()
    }
  }
})
