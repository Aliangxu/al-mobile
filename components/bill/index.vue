<template>
  <n22-water-mark
    class="n22-bill"
    :content="waterMark"
  >
    <header class="n22-bill-header">
      <template v-if="!$slots.header">
        <h4 class="n22-bill-title" v-if="title" v-text="title"></h4>
        <div class="n22-bill-no" v-if="no">NO.{{no}}</div>
      </template>
      <template v-else>
        <slot name="header"></slot>
      </template>
      <slot name="header-right"></slot>
    </header>
    <div class="n22-bill-neck">
      <span></span>
    </div>
    <div class="n22-bill-content">
      <div class="n22-bill-detail">
        <slot></slot>
      </div>
      <footer v-if="$slots.footer" class="n22-bill-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
    <template slot="watermark" slot-scope="props" v-if="!!$scopedSlots.watermark">
      <slot name="watermark" :coord="props.coord"></slot>
    </template>
  </n22-water-mark>
</template>

<script>import FieldItem from '../field-item'
import WaterMark from '../water-mark'

export default {
  name: 'n22-bill',

  components: {
    [FieldItem.name]: FieldItem,
    [WaterMark.name]: WaterMark,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    no: {
      type: [String, Number],
      default: '',
    },
    waterMark: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus">
.n22-bill
  position relative
  background bill-bg

.n22-bill-header
  display flex
  align-items center
  justify-content space-between
  padding 14px 16px 4px

.n22-bill-title
  color bill-name-color
  font-size bill-name-font-size
  font-weight font-weight-medium
  font-family Songti SC

.n22-bill-no
  color bill-no-color
  font-size bill-no-font-size

.n22-bill-neck
  position relative
  height 18px
  padding 5px
  margin 0 14px
  box-sizing border-box
  span
    position absolute
    display block
    top 50%
    left 5px
    right 5px
    height 1px
    border-top dashed 1px color-border-element

.n22-bill-content
  padding 0 16px 10px 16px

.n22-bill-detail
  padding-bottom 20px
</style>
