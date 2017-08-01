import { sendsms, login } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      mobile: '',
      vcode: '',
      notice: ''
    }
  },

  methods: {
    sendCode() {
      if (this.notice) {
        return
      }

      if (!/^1\d{10}$/.test(this.mobile)) {
        this.$dialog.alert('提示', '请输入11位手机号码')
        return
      }

      let time = 60
      this.notice = `${time}秒后重试`
      const timer = setInterval(() => {
        time -= 1
        if (time === 0) {
          clearInterval(timer)
          this.notice = ''
        } else {
          this.notice = `${time}秒后重试`
        }
      }, 1000)

      sendsms({
        mobile: this.mobile
      })
      .catch(err => {
        clearInterval(timer)
        this.notice = ''
        this.$dialog.alert('提示', err.message)
      })
    },

    login() {
      if (!/^1\d{10}$/.test(this.mobile)) {
        this.$dialog.alert('提示', '请输入11位手机号码')
        return
      }

      if (!this.vcode) {
        this.$dialog.alert('提示', '请输入短信验证码')
        return
      }

      this.$loading.show()

      login({
        mobile: this.mobile,
        verifyCode: this.vcode
      })
      .then(res => {
        this.$loading.hide()
        this.$toast.show('登录成功', () => {
          this.$router.replace('/')
        })
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
