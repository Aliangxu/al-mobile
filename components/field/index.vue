<template>
  <fieldset class="n22-field" :class="{'is-plain': plain, 'is-disabled': disabled}">
    <header @click="$emit('headerClick',$event)" :class="{'n22-field-header-bottom': headerbottom}" class="n22-field-header" v-if="title || brief || $slots.header || $slots.action">
      <div class="n22-field-heading">
        <slot name="head_title_left"></slot>
        <legend v-if="title" :class="{'field-title-left-line':titleLeftLine}" class="n22-field-title" v-text="title"></legend>
        <p v-if="brief" class="n22-field-brief" v-text="brief"></p>
        <slot name="header"></slot>
      </div>
      <div class="n22-field-action">
        <slot name="action"></slot>
      </div>
    </header>
    <div class="n22-field-content">
      <slot></slot>
    </div>
    <footer class="n22-field-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </fieldset>
</template>

<script>
export default {
  name: 'n22-field',

  props: {
    title: {
      type: String,
      default: '',
    },
    brief: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    headerbottom: {
      type: Boolean,
      default: true,
    },
    titleLeftLine: {
      type: Boolean,
      default: false,
    },
    isValidator: {
      type: Boolean,
      default: true,
    },
    isOnlyErrorLine: {
      type: Boolean,
      default: false,
    },
  },

  provide() {
    return {
      rootField: this,
    }
  },
}

</script>

<style lang="stylus">
.n22-field
  padding field-padding-v field-padding-h
  border none
  background-color field-bg-color
  &.is-plain
    padding 0
    background-color transparent

.n22-field-header
  position relative
  display flex
  align-items center
  justify-content space-between
  // margin-bottom field-header-gap
.n22-field-header-bottom
  margin-bottom field-header-gap

.n22-field-heading
  flex 1 1 0%
  .field-title-left-line
      padding-left 5px
      border-left: 4px red solid;

.n22-field-action
  flex-shrink 0
  display inline-flex
  align-items center
  align-self flex-start
  justify-content flex-end
  margin-left h-gap-sm
  color field-action-color
  font-size field-action-font-size

.n22-field-title
  color field-title-color
  font-size field-title-font-size
  font-weight field-title-font-weight
  line-height 1

.n22-field-brief
  margin-top v-gap-xs
  color field-brief-color
  font-size field-brief-font-size
  line-height 1.4

.n22-field-footer
  margin-top field-footer-gap

.n22-field
  &:disabled,
  &.is-disabled
    .n22-field-title,
    .n22-field-brief,
    .n22-field-action,
    .n22-field-content,
    .n22-field-footer
      color color-text-disabled
</style>
