<template>
  <div class="md-example-child md-example-child-amount">
    <n22-amount
      :value="1234"
      is-capital
    ></n22-amount>
	</div>
</template>

<script>
import {Amount} from '../../'

export default {
  name: 'amount-demo',
  /* DELETE */
  title: '大写中文',
  titleEnUS: 'Capital Chinese',
  /* DELETE */
  components: {
    [Amount.name]: Amount,
  },
}

</script>

<style lang="stylus" scoped>
.md-example-child-amount
  text-align center
  font-size 32px
  color #666
</style>