<template>
  <div class="n22-example-child n22-example-child-detail-item n22-example-child-detail-item-0">
    <n22-field>
      <n22-detail-item title="承保公司" content="众安" bold />
      <n22-detail-item title="投保人" content="张三" />
      <n22-detail-item title="被保人" content="李四" />
      <n22-detail-item title="保险费用" content="0.1元/日" />
      <n22-detail-item title="保障日期" content="2018/08/08 ~ 2019/08/08" />
      <n22-detail-item title="保单号" content="123456789" />
      <n22-detail-item title="保单协议">
        <a href="#" style="color:#5878B4;text-decoration:none;">查看</a>
      </n22-detail-item>
    </n22-field>
  </div>
</template>

<script>import {Field, DetailItem} from 'al-mobile'

export default {
  name: 'detail-item-demo',

  components: {
    [Field.name]: Field,
    [DetailItem.name]: DetailItem,
  },
}
</script>
