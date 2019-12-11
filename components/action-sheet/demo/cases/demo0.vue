<template>
  <div class="n22-example-child n22-example-child-action-sheet">
    <n22-button @click="$_showActionSheet">唤起动作面板</n22-button>
    <n22-action-sheet
      v-model="value"
      :title="title"
      :default-index="defaultIndex"
      :invalid-index="invalidIndex"
      :cancel-text="cancelText"
      :options="options"
      @selected="$_selected"
      @cancel="$_cancel"
    ></n22-action-sheet>
  </div>
</template>

<script>
import {ActionSheet, Button, Dialog} from 'al-mobile'

export default {
  name: 'action-sheet-demo',
  height: 500,
  components: {
    [ActionSheet.name]: ActionSheet,
    [Button.name]: Button,
  },
  data() {
    return {
      value: false,
      title: '操作说明的标题',
      options: [
        {
          label: '选项1',
          value: 0,
        },
        {
          label: '选项2',
          value: 1,
        },
        {
          label: '选项3',
          value: 2,
        },
      ],
      defaultIndex: 1,
      invalidIndex: 2,
      cancelText: '取消',
    }
  },
  methods: {
    $_showActionSheet() {
      this.value = true
    },
    $_selected(item) {
      Dialog.alert({
        content: `selected: ${JSON.stringify(item)}`,
      })
      console.log('action-sheet selected:', JSON.stringify(item))
    },
    $_cancel() {
      Dialog.alert({
        content: 'cancel',
      })
      console.log('action-sheet cancel')
    },
  },
}

</script>
