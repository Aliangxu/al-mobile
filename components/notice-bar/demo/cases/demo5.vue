<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-5">
    <n22-notice-bar
      mode="link"
      icon="security"
      multi-rows
    >
      为了确保您的资金安全，请设置支付密码。为了确保您的资金安全，请设置支付密码。为了确保您的资金安全，请设置支付密码。
    </n22-notice-bar>
  </div>
</template>

<script>
import {NoticeBar} from 'al-mobile'

export default {
  name: 'notice-bar-demo',
  /* DELETE */
  title: '多行显示',
  titleEnUS: 'Multi-line display',
  /* DELETE */
  components: {
    [NoticeBar.name]: NoticeBar,
  },
}

</script>
