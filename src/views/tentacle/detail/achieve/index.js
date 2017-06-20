import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    data: {
      type: Object
    }
  },
  mounted() {
    console.log(this.data);
  }
})
