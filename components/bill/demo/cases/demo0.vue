<template>
  <div class="n22-example-child n22-example-child-bill-0">
    <n22-bill
      title="借款电子票据"
      no="12345689"
      water-mark="MAND-MOBILE"
    >
      <n22-detail-item title="借款金额">
        &yen;30,000
      </n22-detail-item>
      <n22-detail-item title="收款账户">
        <n22-icon name="bank-zs" svg style="margin-right:10px;"></n22-icon>招商银行(尾号xxxx)
      </n22-detail-item>
      <n22-detail-item title="借款期数" content="12期" />
      <n22-detail-item title="正常还款总息">
        &yen;140.50
      </n22-detail-item>
      <n22-detail-item title="还款">
        <n22-tag
          size="small"
          shape="fillet"
          type="fill"
          fill-color="#858B9C"
          style="margin-right:4px;"
        >首次</n22-tag>
        &yen;404.50&nbsp;(9月22日)
      </n22-detail-item>
    </n22-bill>
	</div>
</template>

<script>import '@examples/assets/images/bank-zs.svg'
import {Bill, DetailItem, Icon, Tag} from 'al-mobile'

export default {
  name: 'bill-demo',
  components: {
    [Bill.name]: Bill,
    [DetailItem.name]: DetailItem,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
  },
}
</script>
