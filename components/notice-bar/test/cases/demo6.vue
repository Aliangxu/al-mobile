<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-6">
    <n22-notice-bar
      mode="closable"
      icon="volumn"
      scrollable
    >
      为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码为了确保您的资金安全，请设置支付密码
    </n22-notice-bar>
  </div>
</template>

<script>
import {NoticeBar} from 'al-mobile'

export default {
  name: 'notice-bar-demo',
  components: {
    [NoticeBar.name]: NoticeBar,
  },
}

</script>
