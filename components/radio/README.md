---
title: radio radio1两种样式的单选、多选
preview: https://aliangxu.github.io/al-mobile/examples/#/radio
---
### 引入

```javascript
import { Radio,RadioItem } from 'al-mobile'

Vue.component(Radio.name, Radio)
Vue.component(RadioItem.name, RadioItem)
```

 /**
 * n22-radio
 * @module components/radio
 *
 * @param {string[], object[]} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 * @param {string} value - 选中值
 * @param {string} title - 标题
 *
 * @example
 * <n22-radio v-model="value" :options="['a', 'b', 'c']"></n22-radio>
 */

### radio-API
    isShow: {
      //是否显示选择项
      type: Boolean,
      default: true
    },
    value: [String, Array, Boolean],//v-modal
    otherValue: Object,//item
    selectOptionList: {//选择显示的选项--默认A-Z

#### radio Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------|------|
|options|选择码表数组|Array|-|必填项检验|
|type|input表单类型|String|'radio'|-|
|mode|业务模式--默认选择模式--exam为考试模式|String|'select'|-|
|checkIsTrueOrFalse|答题模式是否动态处理正确错误选项|Boolean|false|-|
|isShow|是否显示选择项|Boolean|true|-|
|v-model|双向绑定的值|String, Array, Boolean, Number|0|-|
|otherValue|用于exam-答题的对象|Object|''|-|
|selectOptionList|选择显示的选项--默认A-Z|Object|util >selectOptionList|-|


 /**
 * n22-radio-item
 * @module components/RadioItem
 *
 * @param {string[], object[]} options - 选项数组，可以通过自定义valueKey、textKey在传入不同的选项数组--例如下面的exanple
 * @param {string} value - 选中值
 * @param {string} title - 标题
 *
 * @example
 * <n22-radio-item v-model="value" :valueKey="code" :textKey="desc" :options="[{'code':'a','desc':'aaa'}]"></n22-radio-item>
 */

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