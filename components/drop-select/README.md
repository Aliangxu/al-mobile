---
title: DropSelect下拉滑动选择组件
---

下拉滑动选择组件可进行的操作。

### 引入

```javascript
import { DropSelect } from '@/compoments'

Vue.component(DropSelect.name, DropSelect)
```

### API

#### DropSelect Props
|属性 | 说明 | 类型 | 默认值|备注|
|----|-----|------|------|------|
| append-to | 组件的挂载节点 | HTMLElement | `document.body`| 必填,eg:this.$el |
| v-modal | 绑定下拉菜单filed-input的value值 | String, Number | - | - |
| fieldItemTitle | filed-input的title | String | -|-|
| pickerTitle | 下拉弹出层的顶部title | String |`请选择`|-|
| minDate | 当type为时间下拉时候需要的时间的最小值 | Date | `new Date("1819/01/01")`| - |
| maxDate | 当type为时间下拉时候需要的时间的最大值 | Date | `new Date()` | - |
| defaultDate | 当type为时间下拉时候需要的时间的默认选择的值 | Date | `new Date()` | - |
| ispickerValue | 默认选择的值 | String, Number | - | 如果不提供启用默认选择方法选择默认的第一个值 |
| pickerData | 选择的下拉数组 | Array | [] | 必填 |
| name | 文本name | String | - | 因为校验需要，必填 |
| inputType | 文本type | String | `text` | - |
| type | 下拉类型 | String | `single` | 默认single单一选择滑动，date-时间选择滑动（目前的滑动为三列年月日选择，后期逐渐扩充） |
| error | 错误信息对象 | String | - | 展示的错误对象，默认是进行字段校验触发生成error，如果传入error也可以(此时不需要触发vvalidate校验) |
| vvalidateModal | 校验规则对象 | String | - | 字符串，以|隔开 |
| dataVvAs | 校验规则提示的字段名称 | String | - | 默认是取vvalidateModal所对应的的校验队则的对象的名称 |

| btns | 操作按钮组 | Array<{text, handler, warning}> | `[]`|`warning` is used to identify the warning action|

#### 暂未开启的功能
| mask-closable | 点击蒙层是否可关闭弹出层 | Boolean | `false`| 暂时未启用-点击蒙层暂时可以关闭弹出层 |
| has-mask | 是否有蒙层 | Boolean | `true`| 暂时未启用 |


### 代码演示
<!-- DEMO -->
`<n22-drop-select
    v-model="user.certificateType"
    fieldItemTitle="证件类型"
    pickerTitle="请选择证件类型"
    :appendTo="$el"
    :pickerData="userCardTypeList"
    vvalidateModal="required"
    ispickerValue="请选择"
    data-vv-as="证件类型"
    type="certificateType"
    name="certificateType"
    ></n22-drop-select>`
