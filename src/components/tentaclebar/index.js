import datepicker from '../../helper/datepicker'
import create from './index.tpl'
import './index.styl'
import { queryTask, addTask, queryVisitlog, addVisitlog, releaseTentacle, claimTentacle, queryTentacleDetail } from 'services'

export default create({
  props: {
    // 触点所有数据
    data: {
      type: Object
    },
    // 触点
    channelId: {
      type: String
    }
  },
  data() {
    return {
      /* // 拜访计划弹出框是否可见
       visible1: false, */
      // 写日志弹出框是否可见
      visible2: false,
      // 释放触点弹出框是否可见
      visible3: false,

      // 任务标题
      title: '',
      // 任务内容/拜访内容
      content: '',
      // 是否来自公海
      isFromSea: false,
      // 是否来自触点详情页
      isFromDetail: false,
      //
      date: '',
      // 触点是否已加入拜访计划
      task: this.data.task,
      // 触点是否被释放
      isReleased: this.data.isRelease,
      // 拜访方式
      visitType: 1
    }
  },
  methods: {
    // 点击添加拜访计划按钮，弹出toast
    addPlan(position) {
      this.content = ''
      this.addTodo(position)
      this.visible1 = true
    },

    // 点击写日志按钮，相应弹出框可见
    addLogger (event) {
      this.content = ''
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
      // 如果有弹出框出现则不跳转,或者正在发送请求不可跳转
      if (this.visible1 || this.visible2 || this.visible3) {
        return
      }
      // 如果触点在公海（未被认领）则不跳转
      if (this.isFromSea) {
        return
      }
      this.$router.push('/tentacle/detail/' + this.data.id)
    },
    // 弹出框中提交加入拜访计划
    addTodo(position) {
      const params = {}
      params.type = '1'
      params.flag = this.data.id
      params.title = this.data.taskTitle

      addTask(params).then(res => {
        if (res.retcode === 2000000) {
          this.visible1 = false
          this.$toast.zIndex(8).show('添加成功~', position)
          this.task = 1
        }
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },

    // 弹出框中提交增加日志
    visitlog() {
      const params = {}

      params.visitTime = this.date
      params.channelCode = this.data.code
      params.content = this.content
      params.type = this.visitType
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
        this.visible3 = false
        this.isReleased = '1'
        this.$toast.show('触点释放成功')
        this.$router.replace(this.$route.path)
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },
    // 认领触点
    tentacleClaim() {
      claimTentacle({ channel_id: this.data.id }).then(res => {
        this.data.isRelease = 0
        this.$dialog.alert('提示', '操作成功')
      }).catch(err => {
        this.$dialog.alert('提示', err.message)
      })
    },

    // 时间选取控件
    openDatepicker() {
      datepicker.show()
    },

    // 写日志->拜访方式改变
    visitMethodChange(val) {
      this.visitType = val
    }
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

    /*  this.id = this.$route.params.id;
    this.$loading.show()

   queryTentacleDetail({channelId: this.id}).then(data => {
      this.$loading.hide()
      this.data = data
    }).catch(err => {
      this.$dialog.hide()
      this.$dialog.alert('提示', err.message)
    }) */
  }
})
