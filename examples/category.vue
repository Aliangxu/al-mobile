<template>
  <div class="n22-cg">
    <h1 class="n22-cg-title">Al Mobile</h1>
    <h1 class="n22-cg-subtitle">面向金融场景的移动端Vue组件库</h1>
    <div class="n22-cg-logo">
      <img src="http://vue-mobile.gitee.io/static/image/al.svg" alt="">
    </div>
    <section
      v-for="(category, i) in components" :key="i"
      class="cg-category"
      :class="{'active': category.show}">
      <div
        class="cg-category-title"
        :class="{'active': category.show}"
        @click="toggleCategory(i, category)">
        {{ category.name }}&nbsp;&nbsp;<span>{{ category.text }}</span>
        <n22-icon name="right_arrow" size="md"></n22-icon>
      </div>
      <transition name="slide-fade">
        <div class="cg-category-list" v-show="category.show">
          <div class="cg-category-item"
            v-for="(item, j) in category.list"
            :key="j"
            @click="goToComponent(item.path)">
            <div class="cg-category-item-inner">
              {{ item.name }} - {{ item.text }}
              <n22-icon name="right_arrow" size="sm"></n22-icon>
            </div>
          </div>
          <div class="cg-category-item" @click="toggleCategory(i, category)">
            <div class="cg-category-item-inner close">收起</div>
          </div>
        </div>
      </transition>
    </section>
    <h1 class="n22-cg-copyright">Produced By aliang</h1>
  </div>
</template>

<script>
import components from './components.json'
import Icon from '../components/icon'

export default {
  name: 'category',
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {
      components,
    }
  },
  methods: {
    toggleCategory(index, category) {
      category.show = !category.show
      this.$set(this.components, index, category)
    },
    goToComponent(path) {
      this.$router.push(path)
    },
  },
}

</script>

<style lang="stylus" scoped>
block()
  float left
  width 100%
.n22-cg
  padding 10px 10px 25px
  clearfix()
  .n22-cg-title
    block()
    margin 10px 0
    font-size font-heading-large
    font-weight font-weight-normal
    color color-text-minor
    span
      color color-text-base
  .n22-cg-subtitle
    block()
    margin-bottom 15px
    font-size font-body-normal
    font-weight 300
    color color-text-minor
  .n22-cg-logo
    position fixed
    top -.15rem
    right -.15rem
    width 1rem
    height 1rem
    opacity .5
    z-index -1
    img
      width 100%
  .cg-category
    block()
    position relative
    z-index 3
    height 60px
    margin-bottom 10px
    border-radius border-width-base
    transform translate(0, 0)
    &.active
      height auto
    // box-shadow shadow-bottom
    .cg-category-title
      position relative
      z-index 2
      block()
      height 60px
      padding 0 h-gap-lg
      line-height 60px
      font-size font-heading-normal
      font-family DINAlternate-Bold
      // font-weight font-weight-medium
      color color-text-base
      box-sizing border-box
      box-shadow 0 2px 4px rgba(0, 0, 0, .08)
      background color-bg-base
      overflow hidden
      span
        font-size font-body-large
        color color-text-minor
      .n22-icon
        position absolute
        right h-gap-lg
        top 50%
        transform translateY(-50%)
        transition transform .3s ease-in-out-quint
      &.active .n22-icon
          transform translateY(-50%) rotate(90deg)
      &:before
        content ""
        position absolute
        left 0
        top 0
        width 4px
        height 100%
        border-radius border-width-base
        // display none
    &:nth-of-type(1) .cg-category-title:before
      background #5E83DD
    &:nth-of-type(2) .cg-category-title:before
      background #83D23A
    &:nth-of-type(3) .cg-category-title:before
      background #FF7A2E
    &:nth-of-type(4) .cg-category-title:before
      background #FFC013
    &:nth-of-type(5) .cg-category-title:before
      background #FF525D
    .cg-category-list
      block()
      background #FCFCFC
      box-shadow 0 2px 4px rgba(0, 0, 0, .08)
      .cg-category-item
        block()
        padding 0 h-gap-lg
        box-sizing border-box
        -webkit-tap-highlight-color transparent
        .cg-category-item-inner
          position relative
          block()
          height 50px
          line-height 50px
          font-size font-body-normal
          font-family DINAlternate-Bold
          color color-text-minor
          hairline(bottom, color-border-base)
          .n22-icon
            position absolute
            right 0
            top 50%
            line-height 32px
            transform translateY(-50%)
          &.close
            text-align center
            color color-text-link
            &:before
              display none


  .n22-cg-copyright
    position fixed
    left 0
    bottom 10px
    width 100%
    text-align center
    font-size font-minor-normal
    font-weight 300
    color color-text-caption

.slide-fade-enter-active
  transition all .3s ease
.slide-fade-leave-active
  transition all .3s ease
.slide-fade-enter
/* .slide-fade-leave-active below version 2.1.8 */
  transform translate3d(0, -10px, 0)
  opacity 0
.slide-fade-leave-to
  opacity 0
</style>
