<template>
  <div class="n22-example-child n22-example-child-captcha">
    <n22-field title="文案">
      <n22-input-item
        title="标题"
        v-model="title"
      ></n22-input-item>
      <n22-input-item
        title="插槽内容"
        v-model="content"
      ></n22-input-item>
      <n22-input-item
        title="短信验证码"
        value="1234"
        readonly
      ></n22-input-item>
    </n22-field>

    <n22-field title="配置">

      <n22-field-item
        title="限制验证码长度"
        customized
        align="right">
        <n22-switch v-model="limit"></n22-switch>
      </n22-field-item>

      <n22-input-item
        title="验证码长度"
        type="tel"
        v-model="maxlength"
      ></n22-input-item>

      <n22-field-item
        title="采用掩码"
        customized
        align="right">
        <n22-switch v-model="mask"></n22-switch>
      </n22-field-item>

      <n22-field-item
        title="使用系统键盘"
        customized
        align="right">
        <n22-switch v-model="system"></n22-switch>
      </n22-field-item>

    </n22-field>
    <n22-button @click="next">确定</n22-button>

    <n22-captcha
      ref="captcha"
      v-model="show"
      :title="title"
      :maxlength="limit ? parseFloat(maxlength) : -1"
      :system="system"
      :mask="mask"
      :appendTo="appendTo"
      @submit="submit"
      @show="onShow"
      @hide="onHide"
      @send="onSend"
    >
      {{content}}
    </n22-captcha>
	</div>
</template>

<script>
import {Button, Toast, Captcha, InputItem, Field, FieldItem, Switch} from 'al-mobile'

export default {
  name: 'captcha-demo',
  /* DELETE */
  title: '自定义',
  titleEnUS: 'Customize',
  height: 650,
  /* DELETE */
  components: {
    [Button.name]: Button,
    [Captcha.name]: Captcha,
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Switch.name]: Switch,
  },
  data() {
    return {
      show: false,
      appendTo: document.querySelector('.doc-demo-box-priview') || document.body,
      title: '输入验证码',
      content: '验证码已发送至 186****5407',
      limit: true,
      maxlength: '4',
      mask: false,
      system: false,
    }
  },
  methods: {
    next() {
      this.show = true
    },
    submit(val) {
      const max = parseFloat(this.maxlength)
      setTimeout(() => {
        if (!this.limit || max < 0 || val.length === max) {
          if (val !== '1234') {
            this.$refs.captcha.setError('验证码错误，请重新输入')
          } else {
            this.show = false
            Toast({
              content: `你输入了${val}`,
            })
          }
        }
      }, 300)
    },
    onSend() {
      console.log('click resend button.')
    },
    onShow() {},
    onHide() {},
  },
}

</script>

<style lang="stylus">
.n22-example-child-captcha
  padding 20px
  .n22-field
    margin-bottom 40px
</style>
