<template>
  <div class="n22-example-child n22-example-child-amount">
    <n22-amount
      :value="1234"
      has-separator
    ></n22-amount>
	</div>
</template>

<script>
import {Amount} from 'al-mobile'

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
</style>