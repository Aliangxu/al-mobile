<template>
  <div class="n22-example-child n22-example-child-notice-bar n22-example-child-notice-bar-2">
    <n22-notice-bar :time="5000">为了确保您的资金安全，请设置支付密码</n22-notice-bar>
  </div>
</template>

<script>
import {NoticeBar} from 'al-mobile'

export default {
  name: 'notice-bar-demo',
  /* DELETE */
  title: '设置时间',
  titleEnUS: 'Setting dwell time',
  describe: '5s后隐藏',
  describeEnUS: 'Hidden after 5s',
  /* DELETE */
  components: {
    [NoticeBar.name]: NoticeBar,
  },
}

</script>