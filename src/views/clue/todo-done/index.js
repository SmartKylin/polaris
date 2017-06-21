import { editTodo } from 'services'
import create from './index.tpl'
import './index.styl'

export default create({
  data() {
    return {
      about: ''
    }
  },

  methods: {
    save() {
      this.$loading.show()
      editTodo({
        remark: this.about,
        isAccomplish: '1',
        id: this.$route.params.id
      })
      .then(res => {
        this.$loading.hide()
        this.$toast.show('操作成功', () => {
          this.$router.back()
        })
      })
      .catch(err => {
        this.$loading.hide()
        this.$dialog.alert('提示', err.message)
      })
    }
  }
})
