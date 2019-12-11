<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-7">
    <n22-notice-bar>
      <n22-icon slot="left" class="n22-notice-demo-icon n22-notice-demo-icon-left" name="security"></n22-icon>
      为了确保您的资金安全，请设置支付密码
    </n22-notice-bar>
  </div>
</template>

<script>
import {NoticeBar, Icon} from 'al-mobile'

export default {
  name: 'notice-bar-demo',
  components: {
    [NoticeBar.name]: NoticeBar,
    [Icon.name]: Icon,
  },
}

</script>
