<template>
  <div class="n22-example-child n22-example-child-switch n22-example-child-switch-2">
    <n22-switch
      v-model="isActive"
      disabled
      @change="handler('switch2', isActive, $event)"
    ></n22-switch>
  </div>
</template>

<script>import {Switch} from 'al-mobile'

export default {
  name: 'switch-demo',
  /* DELETE */
  title: '开启不可用状态',
  titleEnUS: 'Open and disabled',
  /* DELETE */
  components: {
    [Switch.name]: Switch,
  },
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    handler(name, active) {
      console.log(`Status of switch ${name} is ${active ? 'active' : 'inactive'}`)
    },
  },
}
</script>