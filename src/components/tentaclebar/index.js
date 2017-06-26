import datepicker from '../../helper/datepicker'
import create from './index.tpl'
import './index.styl'
import {queryTask, addTask, queryVisitlog, addVisitlog, releaseTentacle, claimTentacle} from 'services'

export default create({
  props: {
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
      /*// 拜访计划弹出框是否可见
       visible1: false,*/
      // 写日志弹出框是否可见
      visible2: false,
      // 释放触点弹出框是否可见
      visible3: false,
      // 是否可以跳转到详情页
      time: '',
      // 任务标题
      title: '',
      // 任务内容/拜访内容
      content: '',
      // 是否来自公海
      isFromSea: false,
      // 是否来自触点详情页
      isFromDetail: false,
      //
      date: ''
    }
  },
  methods: {
    // 点击添加拜访计划按钮，弹出toast

    addPlan(position) {
      this.addTodo(position)
      this.visible1 = true
    },
    // 点击写日志按钮，相应弹出框可见
    addLogger (event) {
      this.visible2 = true
      event.stopPropagation()
    },
    // 点击释放触点，
    deliverTentacle (event) {
      this.visible3 = true
      event.stopPropagation()
    },
    // 跳转到触点详情页
    toTentacleDetail() {
      // 如果触点来自详情页则不可跳转
      if (this.isFromDetail) {
        return
      }
      // 如果有弹出框出现则不跳转
      if (this.visible1 || this.visible2 || this.visible3) {
        return
      }
      // 如果触点在公海（未被认领）则不跳转
      if (this.isFromSea) {
        return
      }
      // this.$router.push({path: '/tentacle/detail', params: {datakey: this.datakey}})
      this.$router.push({name: "tentacledetail", params: {datakey: this.datakey}})
      // this.$router.push("/tentacle/detail/" + this.datakey)
    },
    // 弹出框中提交加入拜访计划
    addTodo(position) {
      const params = {}
       params.type = "1"
       params.flag = this.data.id

      addTask(params).then(res => {
        if (res.retcode === 2000000) {
          this.$toast.zIndex(8).show('添加成功~', position, function () {
            console.log(position)
          })
          this.visible1 = false
        }
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 弹出框中提交增加日志
    visitlog() {
      const params = {}
      params.visitTime = this.time
      params.channelCode = this.data.code
      params.content = this.content

      addVisitlog(params).then(res => {
        this.$toast.show('操作成功')
        this.visible2 = false
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 弹出框中提交释放触点按钮
    release() {
      const params = {}
      params.channel_id = this.data.id
      params.remark = this.content
      releaseTentacle(params).then(res => {
        console.log(res.msg);
        if (res.retcode === 2000000) {
          this.visible3 = false
        }
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 认领触点
    tentacleClaim() {
      claimTentacle({channel_id: this.data.id}).then(res => {
        if (res.retcode == 2000000) {
          console.log(res.msg);
          this.data.isRelease = 0
          this.$dialog.alert("提示", res.msg)
        }
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },

    openDatepicker() {
      datepicker.show()
    },
  },
  mounted() {
    datepicker.onselect(date => {
      this.date = date
    })

    // 是否来自触点详情页
    if (this.$route.path.indexOf('/tentacle/detail') > -1) {
      this.isFromDetail = true
    }
    // 来自公海
    if (this.$route.path.indexOf('commonality') > -1) {
      this.isFromSea = true
    }
  }
})
