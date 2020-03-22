<template>
  <div class="n22-example bill">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title || '基础'"></div>
      <div class="n22-example-describe" v-html="demo.describe"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'

export default {
  ...createDemoModule('bill', [Demo0, Demo1]),
}
</script>

<style lang="stylus">
.n22-example.bill
  position relative
</style>