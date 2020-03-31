---
title: work Professional level 3 and above components
preview: https://aliangxu.github.io/al-mobile/examples/#/work
---

For showing the area status 

### Import

```javascript
import { Work } from 'al-mobile'

Vue.component(Work.name, Work)
```

### Code Examples
<!-- DEMO -->

### API

#### Tag Props
|属性 | 说明 | 类型 | 默认值 | 说明 |
|----|-----|------|------|------|
|levelArrayProp|Code table code split level|Array|`[2,4]`|-|
|disabled|is disable|Boolearn|`false`|-|
|v-modal|value|Object|-|-|
|data|work data array|Array|`[]`|The array form is a three-level nested array,`[[],[],[]]`|
|isAppendTo|mount dom|Boolearn|`true`|Default mount body display|
|notSelectIdf|The title that prompt when unable to click|String|``|-|
|isShowSearch|Enable search or not|Boolearn|`false`|This is a future function|
