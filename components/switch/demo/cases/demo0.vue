<template>
  <div class="n22-example-child n22-example-child-switch n22-example-child-switch-0">
    <n22-switch
      v-model="isActive"
      @change="handler('switch0', isActive, $event)"
    ></n22-switch>
  </div>
</template>

<script>import {Switch} from 'al-mobile'

export default {
  name: 'switch-demo',
  /* DELETE */
  title: '开启状态',
  titleEnUS: 'Open',
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