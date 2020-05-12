<template>
  <div
    class="n22-example-child n22-example-child-swiper n22-example-child-swiper-4"
  >
    <swiper-add v-model="AdSwiperIndex" :images="images" />
  </div>
</template>

<script>
import SwiperAdd from 'al-mobile/components/swiper/swiper-add'

export default {
  name: 'swiper-demo',
  /* DELETE */
  title: '使用swiper.js',
  titleEnUS: 'use swiper.js',
  describe: '复杂结构，使用swiper.js',
  describeEnUS: 'Complex structure, use swiper.js',
  message:
    '@before-change: from: <span id="valueSwiper15">0</span>, to: <span id="valueSwiper16">0</span><br/>@after-change: from: <span id="valueSwiper17">0</span>, to: <span id="valueSwiper18">0</span>',
  /* DELETE */
  components: {
    [SwiperAdd.name]: SwiperAdd,
  },
  data() {
    return {
      AdSwiperIndex: 1,
      images: [
        {
          color: '#4C47E7' || 'rgb(76, 71, 231,1)',
          bcLinearGradient: '#438BED' || 'rgb(68, 135, 237.0.6)',
          link: 'http://show.n22.com.cn:8889/cms/index.jhtml',
          linkType: 'appLink',
          imgUrl: 'http://vue-mobile.gitee.io/static/image/al.svg',
        },
        {
          color: 'orange',
          bcLinearGradient: '#ecb349',
          link: '/trainAll',
          linkType: 'appLink',
          imgUrl: 'http://vue-mobile.gitee.io/static/image/al.svg',
        },
        {
          color: 'yellow',
          bcLinearGradient: '#f9f980',
          link: '/trainAll',
          linkType: 'appLink',
          imgUrl: 'http://vue-mobile.gitee.io/static/image/al.svg',
        },
      ],
    }
  },
  mounted() {},
  methods: {},
}

</script>
<style lang="stylus">
.swiper-add
  width: 375px;
  margin-left -20px
</style>
