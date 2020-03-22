<template>
  <div class="n22-example single-component">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title"></div>
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
// import Demo2 from './cases/demo2'
// import Demo3 from './cases/demo3'
// import Demo4 from './cases/demo4'
import Demo5 from './cases/demo5'

export default {
  ...createDemoModule('check-group', [Demo0, Demo1, Demo5]),
}
</script>
n22-n22-
<style lang="stylus">
.n22-example.n22-example-child-check
  position relative
</style>
