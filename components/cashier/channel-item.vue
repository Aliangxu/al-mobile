<template>
  <div class="n22-cashier-channel-item">
    <div class="item-icon" :class="data.icon" v-if="data.icon">
      <n22-icon :name="data.icon" size="lg"></n22-icon>
      <!-- <svg-icon :icon-class="data.icon"></svg-icon> -->
    </div>
    <div class="item-image" v-else-if="data.img">
      <img :src="data.img">
    </div>
    <div class="item-label">
      <p class="title">
        <span v-html="data.text || data"></span>
        <span
          v-if="data.action"
          class="title-active"
          v-html="data.action.text"
          @click.stop="data.action.handler"
        ></span>
      </p>
      <p
        class="desc"
        v-if="data.desc"
        v-html="data.desc"
      ></p>
    </div>
    <div class="item-check-icon">
      <!-- <svg-icon v-if="data.disabled" icon-class="check"></svg-icon>
      <svg-icon v-else-if="active" icon-class="checked"></svg-icon>
      <svg-icon v-else icon-class="check"></svg-icon> -->
      <n22-icon
        v-if="data.disabled"
        name="check-disabled"
      ></n22-icon>
      <n22-icon
        v-else-if="active"
        name="checked"
      ></n22-icon>
      <n22-icon
        v-else
        name="check"
      ></n22-icon>
    </div>
  </div>
</template>

<script>import Icon from '../icon'
export default {
  name: 'n22-cashier-channel-item',

  components: {
    [Icon.name]: Icon,
  },

  props: {
    data: {
      type: Object,
      default() {
        /* istanbul ignore next */
        return {}
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
.n22-cashier-channel-item
  block()
  position relative
  padding 10px 20px 10px 0
  box-sizing border-box
  // display flex
  // align-items center
  .item-icon, .item-image
    position relative
    float left
    width 16px
    height 28px
  .item-image img
    block() 
  .item-label
    float left
    margin-left h-gap-sm
    .title
      line-height 30px
      font-size cashier-choose-channel-title-font-size
      color cashier-choose-channel-title-color
      .title-active
        padding-left h-gap-sm
        font-size cashier-choose-channel-title-action-font-size
        color cashier-choose-channel-title-action-color
    .desc
      margin-top v-gap-xs
      font-size cashier-choose-channel-desc-font-size
      color cashier-choose-channel-desc-color
  .item-check-icon
    position absolute
    top 10px
    right 0
    // transform translateY(-50%)
    .svg-icon
      height 16px
      width 16px
      color color-text-placeholder
      &.svg-icon-checked
        color cashier-choose-channel-icon-color
</style>
