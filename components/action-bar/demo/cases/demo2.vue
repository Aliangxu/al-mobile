<template>
  <div class="n22-example-child n22-example-child-action-bar n22-example-child-1">
    <n22-action-bar :actions="data"></n22-action-bar>
  </div>
</template>

<script>
import {ActionBar, Toast} from 'al-mobile'

export default {
  name: 'action-bar-demo',
  /* DELETE */
  title: '按钮禁用',
  titleEnUS: 'Multiple buttons and disabled button',
  height: 150,
  /* DELETE */
  components: {
    [ActionBar.name]: ActionBar,
  },
  data() {
    return {
      data: [
        {
          text: '次要按钮',
          disabled: true,
        },
        {
          text: '主要按钮',
          disabled: true,
        },
      ],
    }
  },
  methods: {
    handleClick() {
      Toast.succeed('Click')
    },
  },
}

</script>
