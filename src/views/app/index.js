import create from './index.tpl'
import './index.styl'

const rootPaths = [
  '/tentacle',
  '/clue',
  '/user'
]

export default create({
  computed: {
    route() {
      return this.$route.path;
    },
    visible() {
      return rootPaths.indexOf(this.$route.path) > -1
    }
  }
})

