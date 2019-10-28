<template>
  <div class="md-example-child md-example-child-amount">
    <n22-amount
      :value="1234"
      has-separator
    ></n22-amount>
	</div>
</template>

<script>
import {Amount} from '../../'

export default {
  name: 'amount-demo',
  /* DELETE */
  title: '千位分隔符',
  titleEnUS: 'Thousands Separator',
  /* DELETE */
  components: {
    [Amount.name]: Amount,
  },
}

</script>

<style lang="stylus" scoped>
.md-example-child-amount
  text-align center
  color #666
</style>