import create from './index.tpl'
import './index.styl'
import TodoItem from 'components/todo'
import {queryTask, queryUserAims} from 'services'

export default create({
  data() {
    return {
      aims: {},
    }
  },
  components: {
    TodoItem
  },
  methods: {
    handleChange() {

    }
  },
  created() {
    queryUserAims().then(data => {
      this.aims = data
      console.log(this.aims);
    })
  }
})
