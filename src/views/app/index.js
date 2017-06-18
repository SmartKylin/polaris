import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      visible: true,
    }
  },
  mounted () {
    this.state = window.location.hash.slice(2);
    window.addEventListener('hashchange', () => {
      this.state = window.location.hash.slice(2);
      if (this.state == "clue" || this.state == "tentacle" || this.state == "user") {
        this.visible = true;
      } else {
        this.visible = false;
      }
    }, false);
  },
  computed: {
    route() {
      return this.$route.path;
    }
  },
  methods: {
  }
})

