<template>
  <div class="n22-example action-bar">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title || '基础'"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'
import Demo2 from './cases/demo2'
import Demo3 from './cases/demo3'

export default {
  ...createDemoModule('action-bar', [Demo0, Demo1, Demo2, Demo3]),
}
</script>

<style lang="stylus">
.n22-example.action-bar
  .n22-example-section
    .n22-action-bar
      position relative !important
</style>