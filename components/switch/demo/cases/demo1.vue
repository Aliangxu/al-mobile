<template>
  <div class="n22-example-child n22-example-child-switch n22-example-child-switch-1">
    <n22-switch
      v-model="isActive"
      @change="handler('switch1', isActive, $event)"
    ></n22-switch>
  </div>
</template>

<script>import {Switch} from 'al-mobile'

export default {
  name: 'switch-demo',
  /* DELETE */
  title: '关闭状态',
  titleEnUS: 'Closed',
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