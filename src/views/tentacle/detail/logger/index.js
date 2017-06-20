import create from './index.tpl'
import './index.styl'
import TodoItem from '../../../../components/todo'

export default create({
  data() {
    return {
    }
  },
  methods: {
   handleChange(key) {
     console.log(key);
   }
  },
  components: {
    TodoItem
  }
})
