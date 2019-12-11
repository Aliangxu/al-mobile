<template>
  <div class="n22-example-child n22-example-child-number-keyboard n22-example-child-number-keyboard-0">
    <n22-number-keyboard
      value
    ></n22-number-keyboard>

    <n22-number-keyboard
      value
      hide-dot
    ></n22-number-keyboard>

    <n22-number-keyboard
      value
      :text-render="keyFormatter"
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
  methods: {
    keyFormatter(val) {
      if (val === '.') {
        return 'x'
      }
    },
  },
}

</script>
n22-
<stn22- lang="stylus">
.md-example-child-number-keyboard-0
  .n22-button
    margin-bottom 10px
  .md-example-display
    position fixed
    top 30%
    left 50%
    z-index 9999
    transform translate(-50%, -50%)
    font-size font-heading-large * 2
    text-shadow 0 4px 20px color-text-minor
</style>
