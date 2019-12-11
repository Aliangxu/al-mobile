<template>
  <div class="n22-example dialog">
    <section class="n22-example-section" v-for="(demo, index) in demos" :key="index">
      <div class="n22-example-title" v-html="demo.title || '基础'"></div>
      <div class="n22-example-describe" v-html="demo.describe"></div>
      <div class="n22-example-content">
        <component :is="demo"></component>
      </div>
    </section>
	</div>
</template>

<script>
import createDemoModule from '../../../examples/create-demo-module'
import Demo0 from './cases/demo0'
import Demo1 from './cases/demo1'

export default {...createDemoModule('dialog', [Demo0, Demo1])}

</script>
<style lang="stylus">
.n22-example-child-dialog .n22-button
  margin-bottom 20px
</style>
