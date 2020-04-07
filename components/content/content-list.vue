<template>
  <al-content v-bind="$attrs" v-on="$listeners">
    <slot name="custom-content"></slot>
    <slot name="content"></slot>
    <slot></slot>
  </al-content>
</template>

<script>
import Vue from 'vue'
import Content from './'
import '../common/swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from '../common/swiper/swiper-vue'
Vue.component(swiper.name, swiper)
Vue.component(swiperSlide.name, swiperSlide)
export default {
  name: 'al-content-list', // 使用xx-xx-xx命名方式具体看操作文档
  components: {
    [Content.name]: Content, // content
  },
}

</script>
