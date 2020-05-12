<template>
  <div class="n22-home">
    <div class="n22-home-logo">
      <img src="http://vue-mobile.gitee.io/static/image/al.svg" alt="">
    </div>
    <div class="n22-home-name" data-in-effect="fadeInLeftBig">Al Mobile</div>
    <div class="n22-home-time">0%</div>
    <h1 class="n22-home-copyright">Produced By aliang</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 0,
    }
  },
  mounted() {
    $('.n22-home-name')
      .textillate()
      .on('end.tlt')
    this.timeCount(() => {
      this.$router.replace('/category')
    })
  },
  methods: {
    timeCount(fn) {
      const duration = 2000
      const tick = 100
      const per = 100 / (duration / tick)

      let percent = 0
      const time = setInterval(() => {
        if (percent < 100) {
          percent += per
          $('.n22-home-time').text(`${parseInt(percent)}%`)
        } else {
          clearInterval(time)
          setTimeout(() => {
            fn()
          }, 300)
        }
      }, tick)
    },
  },
}

</script>

<style lang="stylus">
.n22-home
  position fixed
  absolute-pos()
  background color-bg-base
  .n22-home-logo
    position absolute
    top 30%
    left 50%
    width 96px
    height 96px
    margin-left -48px
    animation blur-out 2s ease-in-out-quint forwards
    img
      width 100%
  .n22-home-name
    position absolute
    width 100%
    top 45%
    left 0
    font-size font-heading-medium
    font-family DINAlternate-Bold
    color color-text-base
    text-align center
    span.word3
        color color-primary
        font-family DINAlternate-Bold
  .n22-home-time
    position absolute
    width 100%
    top 50%
    left 0
    font-size font-minor-normal
    font-weight font-weight-light
    color color-text-minor
    text-align center
  .n22-home-copyright
    position fixed
    left 0
    bottom 20px
    width 100%
    text-align center
    font-size font-minor-normal
    font-weight 300
    color color-text-caption

@keyframes blur-out
  from
    transform scale(2)
    filter blur(100px)
  to
    filter blur(0)
    transform scale(1)
</style>
