<template>
  <div class="n22-example-child n22-example-child-tabs n22-example-child-tab-bar-0">
    <n22-tab-bar
      v-model="current"
      :items="items"
    />
  </div>
</template>

<script>import {TabBar} from 'al-mobile'

export default {
  name: 'tab-bar-demo',
  components: {
    [TabBar.name]: TabBar,
  },
  data() {
    return {
      current: 1,
      items: [{name: 1, label: '标签1'}, {name: 2, label: '标签2'}],
    }
  },
}
</script>
