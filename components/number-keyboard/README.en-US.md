---
title: NumberKeyboard
preview: https://aliangxu.github.io/al-mobile/examples/#/number-keyboard
---

Generally used for financial scenarios such as password, verification code or payment amount input

### Import

```javascript
import { NumberKeyboard } from 'al-mobile'

Vue.component(NumberKeyboard.name, NumberKeyboard)
```

### Code Examples
<!-- DEMO -->

### API

#### NumberKeyboard Props
|Props | Description | Type | Default | Note |
|----|-----|------|------|------|
|v-model|display keyboard or not|Boolean|`false`|-|
|is-view|inline display in page, otherwise it shows as `Popup`|Boolean|`false`|-|
|type|keyboard type|String|`professional`|`professional` with confirmation key and decimal point is often used for price or amount input, `simple` is generally used for password or verification code input|
|disorder|if numeric keys of keyboard are out of order|Boolean|`false`| -|
|is-hide-confirm|automatically hide the keyboard when confirming|Boolean|`true`| -|
|text-render|customize value of specified key|Function(value: string): string|-|replaceable key `0,1,...9,.`|
|ok-text|text of confirmation key|String|`confirm`|-|

#### NumberKeyboard Slots

#### default

```html
<n22-number-keyboard>
  <n22-icon name="security"></n22-icon>&nbsp;��ȫ֧��
</n22-number-keyboard>
```
#### NumberKeyboard Methods

##### show()
Display keyboard

##### hide()
Hide keyboard

#### NumberKeyboard Events

##### @enter(val)
Click numeric key

|Props | Description | Type|
|----|-----|------|
|val | value | Number|

##### @delete()
Click delete key

##### @confirm()
Click confirmation key
