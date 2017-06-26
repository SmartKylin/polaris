import create from './index.tpl'
import './index.styl'

export default create({
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      industryNames: ['', "房产中介", "记账公司", "银行信贷经理", "个体"]
    }
  },
  methods: {
    toEditTentacle() {
      // this.$router.push({name: 'edittentacle', params: {channelCode: this.data.code}})
      this.$router.push('/tentacle/edit/' + this.data.id)
    }
  }
})
