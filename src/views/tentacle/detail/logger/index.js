import create from './index.tpl'
import './index.styl'
import TodoItem from 'components/todo'
import {queryOperationlog, queryVisitlog} from 'services'
import LoggerItem from './LoggerItem.vue'

export default create({
  props: {
    data: {}
  },
  data() {
    return {
      // 显示拜访记录还是操作记录
      visitlogVisible: true,
      operationList: [],
      visitList: [],
    }
  },
  methods: {
    handleChange(key) {
      if (key === "visit") {
        this.queryOper()
      } else {
        this.queryVis()
      }
      console.log(this.visitlogVisible)
    },
    queryOper() {
      queryOperationlog({channelCode: this.data.code}).then(res => {
        this.operationList = res;

        this.operationList = this.operationList.map(l => {
          let dat= new Date(l.oper_Time)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = true
        console.log(this.operationList);

      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    queryVis() {

      queryVisitlog({channelCode: this.data.code}).then(res => {
        this.visitList = res;
        this.visitList = this.visitList.map(l => {
          let dat= new Date(l.visitTime)
          let localDate = dat.toLocaleDateString()
          let localTime = dat.toLocaleTimeString()
          return {...l, localDate, localTime}
        })
        this.visitlogVisible = false
        console.log(this.visitList);

      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    }
  },
  created() {
    // this.queryVis();
  },
  components: {
    TodoItem,
    LoggerItem
  }
})
