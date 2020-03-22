// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'
import App from './App'
import FastClickDefault, {FastClick} from 'fastclick'
import '../components/_style/global.styl'
import './theme.custom.styl'

const _attach = FastClickDefault.attach || FastClick.attach
if ('ontouchstart' in window) {
  _attach(document.body)
}

Vue.config.productionTip = false

Vue.use(VueRouter)

const isProd = process.env.NODE_ENV === 'production'

const router = new VueRouter({
  mode: 'hash',
  base: isProd ? '/al-mobile/examples' : '',
  routes,
})

router.afterEach((to, from, next) => {
  document.title = to.name ? `${to.name}-Al Mobile` : 'Al Mobile'
})

Vue.mixin({
  methods: {
    back() {
      window.history.back();
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
