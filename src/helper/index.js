import * as filters from './filters'

export default function(Vue) {
  Object.keys(filters).forEach(name => {
    Vue.filter(name, filters[name])
  })
}
