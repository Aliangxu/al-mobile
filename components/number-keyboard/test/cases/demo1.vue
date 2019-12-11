<template>
  <div class="n22-example-child n22-example-child-number-keyboard n22-example-child-number-keyboard-1">
    <n22-number-keyboard
      value
      ok-text="支付"
      type="simple"
    ></n22-number-keyboard>
  </div>
</template>

<script>
import {NumberKeyboard} from 'al-mobile'

export default {
  name: 'number-keyboard-demo',
  components: {
    [NumberKeyboard.name]: NumberKeyboard,
  },
}

</script>
n22-
<style lang="stylus" scoped>
.md-example-display
  position fixed
  top 30%
  left 50%
  z-index 9999
  transform translate(-50%, -50%)
  font-size font-heading-large * 2
  text-shadow 0 4px 20px color-text-minor
</style>
