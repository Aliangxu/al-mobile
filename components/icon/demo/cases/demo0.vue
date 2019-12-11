<template>
  <div class="n22-example-child n22-example-child-icon n22-example-child-icon-0">
    <div
      class="n22-example-item"
      v-for="icon in iconList"
      :key="icon"
    >
      <n22-icon
        :name="icon.split('/')[0]"
        size="lg"
      ></n22-icon>
      <p>{{ icon }}</p>
    </div>
  </div>
</template>

<script>
import {Icon} from 'al-mobile'

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
        'rectangle',
        'right',
        'wrong',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'invisible',
        'visible',
        'service',
        'setting',
        'close',
        'refresh',
        'edit',
        'sort',
        'info',
        'question',
        'security',
        'rmb',
        'wait',
        'check',
        'checked/success',
        'check-disabled',
        'clear/fail',
        'warn',
        'info-solid',
        'scan',
        'share',
        'back',
        'card-bag',
        'message',
        'order',
        'balance',
        'coupon',
        'address-book',
        'mobile-phone',
        'calendar',
        'home',
        'discovery',
        'switch',
        'time',
        'search',
        'user',
        'camera',
        'clock',
        'delete',
        'profession',
        'id-card',
        'authentication',
        'location',
        'filter',
        'motor-vehicle',
        'phone',
        'volumn',
      ],
    }
  },
}

</script>
