import create from './index.tpl'

function find(node) {
  while (node && !node.hasAttribute('listview')) {
    if (node.hasAttribute('data-listview-to')) {
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
      this.$router.push(node.getAttribute('data-listview-to'))
    }
  }
})
