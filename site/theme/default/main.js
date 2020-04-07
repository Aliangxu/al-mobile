// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'al-mobile/components/common/swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'al-mobile/components/common/swiper/swiper-vue'
Vue.component(swiper.name, swiper)
Vue.component(swiperSlide.name, swiperSlide)
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import VueTooltip from 'v-tooltip'
import { setScale } from './assets/js/util'
import 'al-mobile/components/_style/global.styl'
//svg
import 'al-mobile/components/icons'

if (process.env.NODE_ENV === 'production') {
}

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VueTooltip)

if ($(window).width() > 750) {
  setScale(0.5)
}

window.jumpAnchor = (anchor) => {
  if (!anchor || !document.getElementById(decodeURIComponent(anchor))) {
    return
  }
  window.document.getElementById(decodeURIComponent(anchor)).scrollIntoView()
  let hash = window.location.hash.replace(/\?.*/, '')
  window.location.hash = `${hash}?anchor=${anchor}`
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
