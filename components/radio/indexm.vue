<template>
  <label
    class="n22-radio"
    :class="{
      'is-disabled': disabled,
      'is-checked': isChecked,
      'is-inline': inline
    }"
    @click="$_onClick"
  >
    <div class="n22-radio-icon">
       <svg-icon icon-class="currentIcon"></svg-icon>
      <!-- <n22-icon :name="currentIcon" :size="size" :svg="iconSvg"/> -->
    </div>
    <div class="n22-radio-label" v-if="$slots.default || label">
      <slot>{{ label }}</slot>
    </div>
  </label>
</template>

<script>
// import Icon from '../icon'
import radioMixin from './mixins'

export default {
  name: 'n22-radio',

  mixins: [radioMixin],

  components: {
   //  [Icon.name]: Icon,
  },

  props: {
    name: {
      required: true,
    },
    value: {
      default: '',
    },
    size: {
      type: String,
      default: 'md',
    },
    label: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // Mixins Props
    // icon: {
    //   type: String,
    //   default: 'checked',
    // },
    // iconInverse: {
    //   type: String,
    //   default: 'check',
    // },
    // iconDisabled: {
    //   type: String,
    //   default: 'check-disabled',
    // },
    // iconSvg: {
    //   type: Boolean,
    //   default: false,
    // },
  },

  computed: {
    isChecked() {
      return this.value === this.name
    },
    currentIcon() {
      return this.disabled ? this.iconDisabled : this.value === this.name ? this.icon : this.iconInverse
    },
  },

  methods: {
    $_onClick() {
      if (!this.disabled) {
        this.$emit('input', this.name)
      }
    },
  },
}

</script>

<style lang="stylus" scoped>
.n22-radio
  display flex
  align-items center
  line-height 1.5
  margin-top v-gap-sm
  margin-bottom v-gap-sm
  .n22-radio-icon
    color color-text-placeholder
    height: 16px;
    width: 16px;
    .n22-icon
      display flex
  &.is-checked
    .n22-radio-icon
      color radio-color
  &.is-disabled
    .n22-radio-icon
    .n22-radio-label
      color color-text-disabled
  &.is-inline
    display inline-flex
    &:not(:last-child)
      margin-right 40px

.n22-radio-icon
  position relative
  flex-shrink 0

.n22-radio-label
  margin-left h-gap-sm
  font-size inherit
  font-weight font-weight-normal
</style>

