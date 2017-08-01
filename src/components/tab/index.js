import create from './index.tpl'
import './index.styl'

function find(node) {
  while (node && node.nodeType === 1) {
    if (node.nodeType === 1 && node.classList.contains('tab--item')) {
      return node
    } else {
      node = node.parentNode
    }
  }
}

export default create({
  methods: {
    handleClick(e) {
      const node = find(e.target)
      ;[].forEach.call(this.$refs.tab.childNodes, node => {
        if (node.nodeType === 1) {
          node.classList.remove('active')
        }
      })
      node.classList.add('active')
      this.$emit('change', node.getAttribute('data-key'))
    }
  }
})
