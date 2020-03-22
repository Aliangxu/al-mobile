<template>
  <div class="n22-example-child n22-example-child-switch n22-example-child-switch-3">
    <n22-switch
      v-model="isActive"
      disabled
      @change="handler('switch3', isActive, $event)"
    ></n22-switch>
  </div>
</template>

<script>import {Switch} from 'al-mobile'

export default {
  name: 'switch-demo',
  /* DELETE */
  title: '关闭不可用状态',
  titleEnUS: 'Closed and disabled',
  /* DELETE */
  components: {
    [Switch.name]: Switch,
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    handler(name, active) {
      console.log(`Status of switch ${name} is ${active ? 'active' : 'inactive'}`)
    },
  },
}
</script>