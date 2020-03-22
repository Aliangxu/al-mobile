---
title: Amount 金融数字
preview: https://qiaoxiyan.com/al-mobile/examples/#/amount
---

金融数字，一般用于金额，数量等

### 引入

```javascript
import { Amount } from 'al-mobile'

Vue.component(Amount.name, Amount)
```

### 代码演示
<!-- DEMO -->
```
<n22-amount :value="1234.125" :precision="2"></n22-amount>
```

### API

#### Amount Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|value|数值|Number|`0`|-|
|precision|数字精度|Number|`2`|小数点后保留几位|
|is-round-up|数字精度取舍是否四舍五入|Boolean|`true`|-|
|has-separator|数字是否有千位分隔符|Boolean|`false`|-|
|separator|数字千位分隔符|String|`,`|-|
|is-capital|数字是否转换为大写中文|Boolean|`false`|-|
|transition|数字变化是否使用动画|Boolean|`false`|-|
|duration|数字变化动画时长|Number|`1000`|单位`ms`|

|init-num|数值-初始化数值|Number|`10000`|-|
|zero-text|字符串-为零时需要显示的文字|String|``|-|
|amountNumSty|是否加载n22-amount-num样式|Boolean|`false`|-|
|zeroIsInit|为零时是否初始化|Boolean|`false`|-|