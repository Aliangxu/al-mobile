<template>
  <div class="md-example-child md-example-child-amount">
    <n22-amount
      :value="val"
      :duration="800"
      transition
    ></n22-amount>
	</div>
</template>

<script>
import {Amount} from '../../'

export default {
  name: 'amount-demo',
  /* DELETE */
  title: '变化动效',
  titleEnUS: 'Transition',
  /* DELETE */
  components: {
    [Amount.name]: Amount,
  },
  data() {
    return {
      val: 1000,
    }
  },
  mounted() {
    setTimeout(() => {
      this.val = 1500
      setTimeout(() => {
        this.val = 500
      }, 2000)
    }, 2000)
  },
}

</script>

<style lang="stylus" scoped>
.md-example-child-amount
  text-align center
  color #666
</style>