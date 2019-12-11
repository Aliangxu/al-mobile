<template>
  <div class="n22-example-child n22-example-child-captcha-1">
    <n22-captcha
      :maxlength="4"
      :isView="true"
      brief="最新验证码依然有效，请勿重发"
    >
      验证码已发送至186****5407
    </n22-captcha>
  </div>
</template>

<script>
import {Captcha} from 'al-mobile'

export default {
  name: 'captcha-demo',
  /* DELETE */
  title: '内联',
  titleEnUS: 'Inline display',
  height: 650,
  /* DELETE */
  components: {
    [Captcha.name]: Captcha,
  },
}

</script>

<style lang="stylus">
.n22-example-child-captcha-1
  height 650px
  padding 30px 0
  .n22-number-keyboard
    margin-top 30px
</style>
