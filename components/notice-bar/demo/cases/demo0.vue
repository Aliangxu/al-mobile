<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-0">
    <n22-notice-bar>为了确保您的资金安全，请设置支付密码</n22-notice-bar>
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