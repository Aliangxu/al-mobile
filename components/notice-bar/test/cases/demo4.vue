<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-4">
    <n22-notice-bar
      icon="warn"
      mode="closable"
      type="warning"
    >
      该银行3:00-12:00系统维护，请更换其他银行卡
    </n22-notice-bar>
    <n22-notice-bar
      icon="coupon"
      mode="link"
      type="activity"
      style="margin-top:10px;"
    >
      福利来啦，7日免息券发放中！
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
n22-
<style lang="stylus">
.mdn22-ample-child-notice-bar-4
  flex-direction column
  .md-notice-bar
    width 100%
</style>
