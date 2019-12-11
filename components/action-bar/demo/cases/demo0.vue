<template>
  <div class="n22-example-child n22-example-child-action-bar n22-example-child-0">
    <n22-action-bar :actions="data"></n22-action-bar>
  </div>
</template>

<script>
import {ActionBar, Toast} from 'al-mobile'

export default {
  name: 'action-bar-demo',
  /* DELETE */
  height: 150,
  /* DELETE */
  components: {
    [ActionBar.name]: ActionBar,
  },
  data() {
    return {
      data: [
        {
          text: '主要按钮',
          onClick: this.handleClick,
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
