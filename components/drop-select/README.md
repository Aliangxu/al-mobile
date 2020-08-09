---
title: DropSelect统一表单滑动选择器
preview: https://aliangxu.github.io/al-mobile/examples/#/drop-select
---

统一表单滑动选择器：包含简单日期、简单选择器、三级地址选择器、三级职业选择器。

### 引入

```javascript
import { DropSelectItem } from 'al-mobile'

Vue.component(DropSelectItem.name, DropSelectItem)
```

### 代码演示
<!-- DEMO -->

### API

#### DropSelectItem Props
|属性 | 说明 | 类型 | 默认值|备注|
|----|-----|------|------|------|
| append-to | 组件的挂载节点 | HTMLElement | `document.body`| eg:this.$el |
| is-append-to | 是挂载dom显示还是内联显示--内联显示 | Boolean | `true`| - |
| v-modal | 绑定下拉菜单filed-input的value值 | String, Number | - | - |
| disabled | 是否禁用 | Boolean | `false` | - |
| fieldItemTitle | filed-input的title | String | -|-|
| arrow | 右侧icon图标 | Boolean、String | `right_arrow` | 默认右箭头，如果传入`false`则为不显示右侧的icon图标|
| pickerTitle | 下拉弹出层的顶部title | String |`请选择`|-|
| minDate | 当type为时间下拉时候需要的时间的最小值 | Date | `new Date("1819/01/01")`| - |
| maxDate | 当type为时间下拉时候需要的时间的最大值 | Date | `new Date()` | - |
| selectDefaultValue | type为single模式下弹出列表默认选中的行 | String、Number | 默认第一行 | - |
| defaultDate | 当type为时间下拉时候需要的时间的默认选择的值 | Date | `new Date()` | - |
| ispickerValue | 默认选择的值 | String, Number | - | 如果不提供启用默认选择方法选择默认的第一个值 |
| options | 选择的下拉数组 | Array | [] | 必填 |
| name | 文本name | String | - | 因为校验需要，必填 |
| itemObject | 文本name | Object | `{ name: "", code: "", type: "" }` | 表单change回掉方法第一个参数 |
| inputType | 文本type | String | `text` | - |
| type | 下拉类型 | String | `single` | 可选值见附录 |
| error | 错误信息对象 | String | - | 展示的错误对象，默认是进行字段校验触发生成error，如果传入error也可以(此时不需要触发vvalidate校验) |
| vvalidateModal | 校验规则对象 | String | - | 字符串，以|隔开 |
| dataVvAs | 校验规则提示的字段名称 | String | - | 默认是取vvalidateModal所对应的的校验队则的对象的名称 |
| btns | 操作按钮组 | Array<{text, handler, warning}> | `[]`|`warning` is used to identify the warning action|
| levelArrayProp | 职业三级需要切割下标数组 | Array<Number> | `[2, 4, 6]`| - |
| cutMark | 地址三级需要连接的符号 | String |`英文的竖线`| - |

#### 暂未开启的功能
|属性 | 说明 | 类型 | 默认值|备注|
|----|-----|------|------|------|
| mask-closable | 点击蒙层是否可关闭弹出层 | Boolean | `false`| 暂时未启用-点击蒙层暂时可以关闭弹出层 |
| has-mask | 是否有蒙层 | Boolean | `true`| 暂时未启用 |


#### drop-select-item Methods

##### dropSelectClick(callBack)
点击弹出滑动选择器前触发的事件
|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
|callBack|回掉方法|Function(isShow)|isShow默认为true|

callBack回掉方法告知组件回掉的isShow参数，可直接callBack(false)，用来点击阻断弹出选择框弹出，自定义提示功能。

##### hide(val)
滑动选择器隐藏事件

|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
|val|-|Boolean|-|

##### onNotSelectFun(val)
type为work时使用
三级职业滑动选择器没有选择值时触发返回的事件：一般用于没有选择点击确定提示语之类

|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
|val|当前的数据|Object|-|

##### onPickerConfirm(itemObject, newval, oldval, isHand, type, key)
type为默认sigle、work时使用
滑动选择器关闭确认事件

|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
参数同changeData事件

##### onDatePickerConfirm(itemObject, newval, oldval, isHand, type, key)
type为date时使用
时间滑动选择器关闭确认事件

|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
参数同changeData事件

##### onAddressPickerConfirm(itemObject, newval, oldval, isHand, type, key)
type为address时使用
地址滑动选择器关闭确认事件

|参数 | 说明 | 类型 | 默认值|
|----|-----|------|------|
参数同changeData事件

##### changeData(itemObject, newval, oldval, isHand, type, key)
值改变触发的事件

|参数 | 说明 | 类型 | 默认值| 备注|
|----|-----|------|------|------|
|itemObjectal|组件传入的itemObject：{ name: "", code: "", type: "" }|Object|{ name: "", code: "", type: "" }|-|
|newval|改变后的新值|-|-|-|
|oldval|改变前的旧值|-|-|-|
|isHand|是否手动触发的changeData事件|Object|-|用于区分时否为回显还是手动点击触发的change回掉|
|option|扩充参数--选项值对象|-|-|目前应用在type为work时返回work的选项值对象|
|key|扩充参数|-|-|之前的key移植到itemObject对象中code|


### 附录

* type数据
|参数 | 说明 | 备注|
|----|-----|------|
| single | 简单的滑动选择 | 需要给定options |
| date | 时间选择滑动 | 目前的滑动为三列年月日选择，后期逐渐扩充 |
| work | 三级职业选择滑动 | 需要给定职业options数据格式如下workOptions |
| address | 三级地址选择滑动 | 需要给定职业options数据格式如下addressOptions |

* options数据源数据格式

```javascript
[
    {
        // 选项展示文案
        "text": "",
        // 选项val值
        "value": ""
    },
],
```
* workOptions数据源数据格式

```javascript
[
    //职业一级数组
    [
        {
            // 选项展示文案
            "text": "一般职业",
            // 选项val值
            "value": "00"
        },
    //...
    ],
    //职业二级数组
    [
        {
            // 选项展示文案
            "text": "机关团体公司",
            // 选项val值
            "value": "0001"
        },
    //...
    ],
    //职业三级数组
    [
        {
            // 选项展示文案
            "text": "机关团体公司（不从事危险工作）",//全称
            // 选项val值
            "value": "000101",
            "textAlias": "机关内勤",//简称
            "LifeInsuranceLevel": 0,//xxx职业等级
            "...Level": 1,//xxx职业等级
        },
    //...
    ],
],
```
* addressOptions数据源数据格式
```
import data from 'al-mobile/components/tab-picker/demo/data'
```