<template>
  <div class="n22-example-child n22-example-child-amount">
    <p>
      <span class="describe">Original</span>
      <n22-amount :value="1234.125" :precision="3"></n22-amount>
    </p>
    <p>
      <span class="describe">Round</span>
      <n22-amount :value="1234.125"></n22-amount>
    </p>
    <p>
      <span class="describe">Floor</span>
      <n22-amount :value="1234.123" :is-round-up="false"></n22-amount>
    </p>
	</div>
</template>

<script>import {Amount} from 'al-mobile'

export default {
  name: 'amount-demo',
  components: {
    [Amount.name]: Amount,
  },
}
</script>

<style lang="stylus" scoped>
.n22-example-child-amount
  text-align center
  color #666
  p
    font-size 25px
    span.describe
      font-size 9px
</style>