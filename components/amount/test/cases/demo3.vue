<template>
  <div class="n22-example-child n22-example-child-amount">
    <n22-amount
      :value="1234"
      is-capital
    ></n22-amount>
    <n22-amount
      :value="12.34"
      is-capital
    ></n22-amount>
    <n22-amount
      :value="1200"
      is-capital
    ></n22-amount>
    <n22-amount
      :value="1201"
      is-capital
    ></n22-amount>
	</div>
</template>

<script>
import {Amount} from 'al-mobile'

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
.n22-example-child-amount
  text-align center
  font-size 32px
  color #666
</style>