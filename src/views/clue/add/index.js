import { addClue } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  beforeRouteEnter() {
    // 每次进入添加线索页时，发送一个空的提交用于产生一个临时线索
    // 主要是为了拿到 clueCode
    // 拿到 clueCode 后跳转到线索编辑页
    window.app.$loading.show()
    addClue({}).then(res => {
      window.app.$loading.hide()
      const path = '/clue/edit/' + res.clueCode
      const base = window.location.href.split('#')[0]
      window.location.replace(`${base}#${path}`)
    })
    .catch(err => {
      window.app.$loading.hide()
      this.$toast.show('服务异常，请重试', () => {
        this.$router.back()
      })
    })
  }
})
