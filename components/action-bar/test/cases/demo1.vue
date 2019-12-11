<template>
  <div class="n22-example-child n22-example-child-action-bar n22-example-child-0">
    <n22-action-bar :actions="data"></n22-action-bar>
  </div>
</template>

<script>
import {ActionBar, Toast} from 'al-mobile'

export default {
  name: 'action-bar-demo',
  components: {
    [ActionBar.name]: ActionBar,
  },
  data() {
    return {
      data: [
        {
          text: '次要按钮',
          onClick: this.handleClick,
        },
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
