<template>
  <div
    class="n22-check-base-box"
    :class="{
      'is-disabled': disabled,
      'is-checked': isChecked
    }"
  >
    <slot></slot>
    <n22-tag
      v-if="isChecked"
      size="tiny"
      shape="quarter"
      type="fill"
    >
      <n22-icon name="right"></n22-icon>
    </n22-tag>
  </div>
</template>

<script>
import Tag from '../tag'
import Icon from '../icon'
export default {
  name: 'n22-check-base-box',

  components: {
    [Tag.name]: Tag,
    [Icon.name]: Icon,
  },

  props: {
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
}

</script>

<style lang="stylus">
.n22-check-base-box
  position relative
  display inline-block
  text-align center
  color checkbox-color
  font-size checkbox-font-size
  padding v-gap-sm h-gap-md
  border 1px solid checkbox-border-color
  border-radius checkbox-border-radius
  box-sizing border-box
  overflow hidden
  &.is-checked
    color checkbox-active-color
    border-color checkbox-active-border-color
    &.is-disabled
      color checkbox-active-color
      border-color checkbox-active-border-color
      opacity 0.6
  &.is-disabled
    color checkbox-disabled-color
    border-color checkbox-disabled-color

  .n22-tag
    position absolute
    top 0
    right 0
    .quarter-bg
      background-color checkbox-active-color
</style>
