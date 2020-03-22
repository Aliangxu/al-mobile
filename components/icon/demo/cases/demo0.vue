<template>
  <div
    class="n22-example-child n22-example-child-icon n22-example-child-icon-0"
  >
    <!-- <n22-icon name="mobile_phone" size="lg" svg></n22-icon> -->
    <div class="n22-example-item" v-for="icon in iconList" :key="icon">
      <n22-icon :name="icon.split('/')[0]" size="lg"></n22-icon>
      <p>{{ icon }}</p>
    </div>
  </div>
</template>

<script>import {Icon} from 'al-mobile'

export default {
  name: 'icon-demo',
  /* DELETE */
  title: '字体图标',
  titleEnUS: 'Icon Font',
  align: 'center',
  background: '#fff',
  /* DELETE */
  components: {
    [Icon.name]: Icon,
  },
  data() {
    return {
      iconList: [
        'view_off',
        'view',
        'wechat',
        'wechat_friends',
        'edit',
        'setting',
        'check',
        'check_square',
        'check_disabled',
        'checked',
        'success',
        'checked_sauare',
        'success_square',
        'clear',
        'fail',
        'question_mark',
        'warn',
        'warning',
        'alipay',
        'scan',
        'back',
        'add_pro',
        'calendar',
        'change',
        'email',
        'customer_service',
        'correct',
        'right',
        'close',
        'wrong',
        'proccess',
        'camera',
        'mobile_phone',
        'share',
        'search',
        'volumn',
        'triangle',
        'delete',
        'right_arrow',
        'qq',
        'calendar1',

        'star',
      ],
    }
  },
}
</script>
