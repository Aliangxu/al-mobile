---
title: ActionSheet
---

Support scenario-relevent operations

### Import

```javascript
import { ActionSheet } from '@/compoments'

Vue.component(ActionSheet.name, ActionSheet)

this.$actionsheet.create({ /* ... */ }) // Totally Import
```

### Code Examples
<!-- DEMO -->


### API

#### ActionSheet Props
|Props | Description | Type | Default | Note |
|----|-----|------|------|------|------|
|v-model|display actionsheet or not|Boolean|`false`|-|
|title|title of actionsheet|String|-|-|
|options|options of actionsheet|Array<{text, value}>| [] |-|
|default-index|default selected index|Boolean|0|-|
|invalid-index|invalid index|Number| -1|-|
|cancel-text|cancel text|String|-|-|
|max-height<sup class="version-after">1.3.0+</sup>|the maximum height of actionsheet area|Number|`400`|unit `px`|


#### ActionSheet Events

##### @selected(item)
Select event

|Props | Description | Type |
|----|-----|------|
|item|selected value|Object: {text, value}|

##### @selected(item)

Cancel selection

##### @show()

Show actionsheet

##### @hide()

Hide actionsheet

#### ActionSheet Static Methods

##### create(props)
Static create a global ActionSheet, and return instance. You can change instance `value` to toggle the visibility of ActionSheet.

|----|-----|------|------|------|------|
|value|display actionsheet or not|Boolean|`true`|-|
|title|title of actionsheet|String|-|-|
|options|options of actionsheet|Array<{text, value}>| [] |-|
|defaultIndex|default selected index|Boolean|0|-|
|invalidIndex|invalid index|Number| -1|-|
|cancelText|cancel text|String|-|-|
|maxHeight|the maximum height of actionsheet area|Number|`400`|unit `px`|
|onShow|actionsheet show callback|Function|-|-|
|onHide|actionsheet hide callback|Function|-|-|
|onCancel|cancel selection callback|Function|-|-|
|onSelected|selection callback|Function(item: {text, value})|-|-|

##### closeAll()
Close all global ActionSheets

#### destroyAll()
Close and destroy all global ActionSheets
