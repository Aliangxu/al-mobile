<template>
  <div class="n22-example-child n22-example-child-check n22-example-child-check-4">
    <n22-field title="复选列表">
      <n22-check-list
        :options="fruits"
        v-model="favorites"
      />
    </n22-field>
	</div>
</template>

<script>
import {Field, CheckList} from 'al-mobile'

export default {
  name: 'check-demo',
  components: {
    [Field.name]: Field,
    [CheckList.name]: CheckList,
  },
  data() {
    return {
      favorites: ['apple'],
      fruits: [
        {value: 'watermelon', label: '西瓜'},
        {value: 'apple', label: '苹果'},
        {value: 'banana', label: '香蕉'},
        {value: 'orange', label: '橙子'},
        {value: 'tomato', label: '西红柿', disabled: true},
      ],
    }
  },
}

</script>
n22-
<style lang="stylus" scoped>
.n22-example-child
  font-size 28px
</style>
