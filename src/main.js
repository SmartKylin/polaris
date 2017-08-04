/**
 * 应用入口
 * @author xiao.yan
 * @date   2017.06.11
 */

import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'
import SmartUI from 'smart-ui'
import 'smart-ui/lib/smart-ui.css'
import Tab from 'components/tab'
import routes from './routes'
import getTitle from './titles'
import initHelper from './helper'
import App from 'views/app'
import './css/index.styl'

Vue.use(Router)
Vue.use(SmartUI)
initHelper(Vue)

/**
 * 注册通用全局组件
 */
Vue.component('Tab', Tab)

/**
 * 有些浏览器还不支持 Promise
 * https://github.com/stefanpenner/es6-promise
 */
require('es6-promise').polyfill()

/**
 * 使用 sentry 监控异常
 * https://sentry.io
 */
// import Raven from 'raven-js'
// import RavenVue from 'raven-js/plugins/vue'

// // 只在生产环境下使用
// if (process.env.NODE_ENV === 'production') {
//   Raven
//     .config('', {
//       release: __CONFIG__.version
//     }).addPlugin(RavenVue, Vue).install()
// }

/**
 * 解决移动端点击300秒延迟问题
 */
FastClick.attach(document.body)

/**
 * 创建 router
 */

const router = new Router({ routes })
router.afterEach((to, from) => {
  document.title = getTitle(to.path)
})

// 通过html解析php，从后台拿到的城市ID
window.cityId = document.getElementById('app').getAttribute('title')
/**
 * 实例化 app
 */
window.app = new Vue({ el: '#app', router, ...App })
