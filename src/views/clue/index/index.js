import ListView from 'components/listView'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
    }
  },

  components: { ListView },

  methods: {
    // 查询为指定状态的线索
    queryWithStatus(status) {
      console.log(`query with ${status}`)
    },

    // 排序
    sortBy(way) {
      console.log(`sort by ${way}`)
    },
  }
})
