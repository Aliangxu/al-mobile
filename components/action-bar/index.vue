<template>
  <div class="n22-action-bar" :class="isShdow ? 'n22-action-bar-shadow' : ''">
    <div class="n22-action-bar-container">
      <slot name="footerContent">
        <div class="n22-action-bar-text" v-if="hasSlots">
          <slot></slot>
        </div>
        <div class="n22-action-bar-group">
          <template v-for="(item, index) in coerceActions">
            <n22-button
              class="n22-action-bar-button"
              :id="`action-bar-id-${index}`"
              :type="
                !!item.disabled || loading || !!disabled ? 'disabled' : type
              "
              :plain="
                index !== coerceActions.length - 1 &&
                  !loading &&
                  item.plain !== false
              "
              :round="round"
              :key="index"
              @click="$_onBtnClick($event, item)"
            >
              <n22-activity-indicator
                v-if="loading"
                class="n22-activity-indicator-css"
                type="carousel"
                :size="15"
                color="#fff"
                text-color="#fff"
              ></n22-activity-indicator>
              <span v-else>{{ item.text }}</span>
            </n22-button>
          </template>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import Button from '../button'
import ActivityIndicator from '../activity-indicator'
import { isEmptyObject } from '../_util'

export default {
  name: 'n22-action-bar',

  components: {
    [Button.name]: Button,
    [ActivityIndicator.name]: ActivityIndicator
  },

  props: {
    actions: {
      type: Array,
      default: []
    },
    isShdow: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: [Boolean, String],
      default: false
    },
    type: {
      type: String,
      default: 'primary' // default, primary, warning, disabled, link
    },
    round: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    coerceActions () {
      return this.actions.slice(0, 2)
    },
    hasSlots () {
      return !isEmptyObject(this.$slots)
    }
  },

  methods: {
    // MARK: events handler
    $_onBtnClick (event, action) {
      action.onClick && action.onClick(event, action)
      !this.loading && this.$emit('click', event, action)
    }
  }
}
</script>

<style lang="stylus">
.n22-action-bar
  position fixed
  z-index action-bar-zindex
  left 0
  bottom 0
  right 0
  display flex
  padding action-bar-padding-v action-bar-padding-h
  background color-bg-inverse
  clearfix()

.n22-action-bar-shadow
  -webkit-box-shadow 0 -4px 10px hsla(0,0%,60%,.1)
  box-shadow 0 -4px 10px hsla(0,0%,60%,.1)

.n22-action-bar-container
  display flex
  flex 1
  padding-bottom constant(safe-area-inset-bottom)

.n22-action-bar-text
  display flex
  flex 1
  height action-bar-slot-height
  margin-right action-bar-button-gap
  align-items center
  overflow hidden

.n22-action-bar-group
  display flex
  flex 1
  height 100%

.n22-action-bar-button
  display flex
  float right
  align-items center
  justify-content center
  flex 1
  &:nth-of-type(2)
    margin-left action-bar-button-gap
</style>
