import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    hasOwner: {
      type: Boolean,
      default: true,
    },
    data: {
      type: Object
    },
    datakey: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      canLink: true,
    }
  },
  methods: {
    addPlan(event) {
      event.stopPropagation()
      this.visible1 = true

    },
    addLogger (event) {
      this.visible2 = true
      event.stopPropagation()
    },
    deliverTentacle (event) {
      this.visible3 = true
      event.stopPropagation()
    },
    pushto() {
      if (this.$route.path.indexOf('/tentacle/detail') <= -1) {
        console.log('push');
        console.log(this.datakey);
        this.$router.push({name: 'detail' ,params: {datakey: this.datakey}})
      }
    }
  },
  mounted() {
    console.log(this.$route.path);
    if (this.$route.path.indexOf('/tentacle/detail') > -1) {
      this.canLink = false
    }
  }
})
