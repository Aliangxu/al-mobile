---
title: radio radio1两种样式的单选、多选
preview: https://aliangxu.github.io/al-mobile/examples/#/radio
---

## radio

### 引入

```javascript
import { Radio, RadioItem } from 'al-mobile'

Vue.component(Radio.name, Radio)
Vue.component(RadioItem.name, RadioItem)
```

### 代码演示
<!-- DEMO -->

### radio-API
```
isShow: {
  //是否显示选择项
  type: Boolean,
  default: true
},
value: [String, Array, Boolean],//v-modal
itemObject: Object,//item
selectOptionList: {//选择显示的选项--默认A-Z
```

#### radio Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|options|选择码表数组|Array|-|必填项检验|
|type|input表单类型|String|'radio'|-|
|mode|业务模式--默认选择模式--exam为考试模式|String|'select'|-|
|checkIsTrueOrFalse|答题模式是否动态处理正确错误选项|Boolean|false|-|
|isShow|是否显示选择项|Boolean|true|-|
|v-model|双向绑定的值|String, Array, Boolean, Number|0|-|
|itemObject|用于exam-答题的对象|Object|''|-|
|selectOptionList|选择显示的选项--默认A-Z|Object|util >selectOptionList|-|


### RadioItem-API

#### RadioItem Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|v-model|双向绑定的值|String, Array, Boolean, Number|0|-|
|defaultValue|默认值|String, Array, Boolean, Number|0|-|
|options|选择码表数组|Array|-|必填项检验|
|isDefaultSelect|是否默认选中第一个|Boolean|false|-|
|title|文本title|String|''|-|
|isShowRequired|field-input是否显示必填的*|Boolean|false|-|
|valueKey|码表value对应的key--可自定义|String|'value'|-|
|textKey|码表text对应的key--可自定义|String|'text'|-|
|type|input表单类型|String|'radio'|-|
|name|文本name|String|''|-|
|error|错误信息对象--校验|String|''|-|
|vvalidateModal|校验规则对象|String|''|字符串，以‘|’隔开|
|dataVvAs|校验规则提示的字段名称|String|''|-|
|isLinefeed|是否跟标题头换行|Boolean|false|-|
|is-show-required|是否显示必填*|Boolean|false|-|
|plain|是否镂空|Boolean|false|-|


#### RadioItem Methods

##### changeData(itemObject, newval, oldval, isHand, type, key)
值改变触发的事件

|参数 | 说明 | 类型 | 默认值| 备注|
|----|-----|------|------|------|
|itemObjectal|组件传入的itemObject：{ name: "", code: "", type: "" }|Object|{ name: "", code: "", type: "" }|-|
|newval|改变后的新值|-|-|-|
|oldval|改变前的旧值|-|-|-|
|isHand|是否手动触发的changeData事件|Object|-|用于区分时否为回显还是手动点击触发的change回掉|
|type|扩充参数|-|-|之前的type移植到itemObject对象中type|
|key|扩充参数|-|-|之前的key移植到itemObject对象中code|


## radio1

### 引入

```javascript
import Radio from 'al-mobile/components/radio/indexm'
import { Radio, RadioBox, RadioGroup, RadioList } from 'al-mobile'

Vue.component(Radio.name, Radio)
Vue.component(RadioBox.name, RadioBox)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioList.name, RadioList)
```

### radio1-API

#### Radio Props
|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|v-model|选中项的`name`|any|-|
|name|唯一键值|any|-|-|
|label|描述文案|String-|-|
|disabled|是否禁用选项|Boolean|`false`|-|
|inline|是否内联显示|Boolean|`false`|-|
|icon|选中项的图标|String|`checked`|-|
|icon-inverse|非选中项的图标|String|`check`|-|
|icon-disabled|禁用项的图标|String|`check-disabled`|-|
|icon-svg|使用svg图标|Boolean|`false`|-|
|size|图标大小|String|`md`|-|

---

#### RadioBox Props
单选框 <sup class="version-after">0.0.23+</sup>

|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|name|唯一键值|any|`true`|当选中时，双向绑定的值|
|v-model|选中的值|any|`false`|-|
|disabled|是否禁用选择|Boolean|`false`|-|

---

#### RadioGroup Props
单选组，用以选中多个单选项。与`Radio`或`RadioBox`组合使用 <sup class="version-after">0.0.23+</sup>

|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|v-model|选中的值|Array|-|-|

#### RadioGroup Methods

##### check(name)

|参数 | 说明 | 类型 | 默认值 |
|----|-----|------|------|
|name|需要选中的键值|String|-|

---

#### Radio List Props
|属性 | 说明 | 类型 | 默认值 | 备注|
|----|-----|------|------|------|
|v-model|选中项的`value`|any|-|
|options|选项数据源|Array<{text, value, disabled, ...}>|`[]`|`disabled`为选项是否禁用|
|has-input|是否具有可编辑项|Boolean|`false`|-|
|input-label|可编辑项的名称|String|-|仅用于`has-input`为`true`|
|input-placeholder|可编辑项的占位提示|String|-|仅用于`has-input`为`true`|
|icon|选中项的图标|String|`checked`|-|
|icon-inverse|非选中项的图标|String|`check`|-|
|icon-disabled|禁用项的图标|String|`check-disabled`|-|
|icon-size|图标大小|String|`lg`|-|
|icon-svg|使用svg图标|Boolean|`false`|-|
|icon-position|图标位置|String|`left`|`left`, `right`|
|is-slot-scope|是否强制使用或不使用`slot-scope`|Boolean|-|某些情况下需要根据业务逻辑动态确定是否使用，可避免直接组件上加`if/else`|

#### Radio List Methods

##### select(value)
设置选中项

|参数 | 说明 | 类型|
|----|-----|------|
|value|选中项的value|String|

#### Radio List Events

##### @change(option, index)
切换选中项事件

|属性 | 说明 | 类型|
|----|-----|------|
|option|当前选中项的数据|Object:{text, value, disabled, ...}|
|index|当前选中项的索引|Number|

#### Radio List Slots
```html
<template>
  <n22-radio-list :options="data">
    <template slot-scope="{ option, index, selected }">
      <div class="custom-title" v-text="option.text"></div>
      <div class="custom-brief">{{ option.text }}的自定义描述</div>
    </template>
  </n22-radio-list>
</template>
```