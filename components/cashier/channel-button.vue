<template>
  <div class="n22-cashier-block-btn">
    <n22-button
      v-for="(action, index) in actions"
      :type="index === actions.length - 1 ? 'primary': 'default'"
      :inline="actions.length > 1"
      :key="index"
      v-html="action.buttonText"
      @click="() => {
        action.handler && action.handler()
      }"
    >
    </n22-button>
  </div>
</template>

<script>import Button from '../button'
export default {
  name: 'n22-cashier-channel-button',

  components: {
    [Button.name]: Button,
  },

  props: {
    actions: {
      type: Array,
      default() {
        /* istanbul ignore next */
        return []
      },
    },
  },
}
</script>

<style lang="stylus">
.n22-cashier-block-btn
  display flex
  .n22-button
    flex 1
    margin-right h-gap-md
    &:last-of-type
      margin 0
</style>

