<template>
  <div class="n22-example-child n22-example-child-cell-item n22-example-child-cell-item-0">
    <n22-field>
      <n22-cell-item title="普通条目" />
      <n22-cell-item title="动作条目" arrow @click="onClick" />
      <n22-cell-item title="禁用条目" disabled no-border/>
    </n22-field>
  </div>
</template>

<script>import {Field, CellItem, Dialog, Icon} from 'al-mobile'

export default {
  name: 'cell-item-demo',

  components: {
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Icon.name]: Icon,
  },

  data() {
    return {
      open: false,
    }
  },

  methods: {
    onClick() {
      Dialog.alert({
        content: '点击了',
      })
    },
  },
}
</script>
