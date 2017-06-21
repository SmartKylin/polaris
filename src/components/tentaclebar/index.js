import create from './index.tpl'
import './index.styl'
import {queryTask, addTask, queryVisitlog, addVisitlog} from 'services'

export default create({
  props: {
    hasOwner: {
      type: Boolean,
      default: true,
    },
    // 触点所有数据
    data: {
      type: Object
    },
    // 触点编码
    datakey: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      // 拜访计划弹出框是否可见
      visible1: false,
      // 写日志弹出框是否可见
      visible2: false,
      // 释放触点弹出框是否可见
      visible3: false,
      // 是否可以跳转到详情页
      canLink: true,
      // 拜访任务提醒时间/拜访时间
      time: '',
      // 任务标题
      title: '',
      // 任务内容/拜访内容
      content: '',
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
        // 如果有弹出框出现则不跳转
        if (this.visible1 || this.visible2 || this.visible3) {
          return
        }
        this.$router.push({name: 'detail' ,params: {datakey: this.datakey}})
      }
    },
    addTodo() {
      const params = {}
      params.title = this.title
      params.content = this.content
      params.type = "1"
      params.flag = this.data.id
      params.planTime = this.time
      addTask(params).then(res=>{
        console.log(res.msg);
        if (res.retcode === 2000000) {
          this.visible1 = false
        }
      })
    },
    visitlog() {
      const params = {}
      params.visitTime = this.time
      params.channelCode = this.code
      params.content = this.content
      addVisitlog(params).then(res=> {
        console.log(res.msg);
        if (res.retcode === 2000000) {
          this.visible2 = false
        }
      })
    }
  },
  mounted() {
    console.log(this.$route.path);
    if (this.$route.path.indexOf('/tentacle/detail') > -1) {
      this.canLink = false
    }
  }
})
