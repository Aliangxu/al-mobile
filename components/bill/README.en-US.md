---
title: Bill
preview: https://aliangxu.github.io/al-mobile/examples/#/bill
---

Electronic bill

### 引入

```javascript
import { Bill } from 'al-mobile'

Vue.component(Bill.name, Bill)
```

### 代码演示
<!-- DEMO -->

### API

#### Bill Props
|Props | Description | Type | Default | Note |
|----|-----|------|------ |------|
|name|-|String|-|-|
|no|-|String|-|-|
|water-mark|-|String|-|complex content using `scoped slot`|

#### Bill Slots

##### default
Default slot of content

##### header
Header slot

##### footer
Footer slot

##### watermask
Scoped slot of watermask content

```html
<div slot="watermark" slot-scope="props">
  <!-- content -->
</div>
```
