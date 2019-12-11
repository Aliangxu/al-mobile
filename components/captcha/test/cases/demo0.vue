<template>
  <div class="n22-example-child n22-example-child-captcha">
    <n22-captcha
      ref="captcha"
      v-model="show"
      :title="title"
      :maxlength="limit ? parseFloat(maxlength) : -1"
      :system="system"
      :mask="mask"
      :appendTo="appendTo"
    >
      {{content}}
    </n22-captcha>
	</div>
</template>

<script>
import {Captcha} from 'al-mobile'

export default {
  name: 'captcha-demo',
  components: {
    [Captcha.name]: Captcha,
  },
  data() {
    return {
      show: true,
      appendTo: document.querySelector('.doc-demo-box-priview') || document.body,
      title: '输入验证码',
      content: '验证码已发送至 186****5407',
      limit: true,
      maxlength: '4',
      mask: false,
      system: false,
    }
  },
}

</script>
n22-
<style lang="stylus">
.mdn22-ample-child-captcha
  padding 20px
  .md-field
    margin-bottom 40px
</style>
