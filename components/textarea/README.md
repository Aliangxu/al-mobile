---
title: textarea 文本域
preview: https://aliangxu.github.io/al-mobile/examples/#/textarea
---

### 引入

```javascript
import { Textarea } from 'al-mobile'

Vue.component(Textarea.name, Textarea)
```

### 代码演示
<!-- DEMO -->

### API

#### Tip Props
|属性 | 说明 | 类型 | 默认值|备注|
|----|-----|------|------|------|
|fullHeight|是否充满div|Boolearn|`true`|当为`false`时，页面中`div`跟`pre`内容区高度为`auto`|
|autofocus|是否自动获取焦点|Boolearn|`false`|-|
|value|v-modal|String|-|-|
|placeholder|可描述输入字段预期值的提示信息|String|-|-|
|disabled|是否禁用|Boolearn|`false`|-|
|border|`textarea`标签默认的border|Boolearn|`false`|默认不展示textarea的border,可用于自定义覆盖border的样式|
|resize|是否可自由放大缩小文本域|Boolearn|`false`|-|
|onchange|change回掉方法|Function|`null`|-|
|fontSize|字体大小|Number|`14`|-|
|lineHeight|line-height|Number|`20`|-|
|maxHeight|max-height|Number|`160`|最大显示高度，超出显示滚动条|
|maxLength|max-length|Number、String|``|textarea maxlength属性|
|rows|rows|Number|`1`|-|


#### Tip Events
