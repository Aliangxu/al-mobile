---
title: TabBar
preview: https://aliangxu.github.io/al-mobile/examples/#/tab-bar
---

To create a tab bar without a content area

### Import

```javascript
import { TabBar } from 'al-mobile'

Vue.component(TabBar.name, TabBar)
```

### Code Examples
<!-- DEMO -->

### API

#### TabBar Props
|Props | Description | Type | Default | Note|
|----|-----|------|------|------|
| v-model | key of selected menu | String | - | - |
|items|menus data|Array<{name: String, label: String, disabled: Boolean}>|-|-|
|valueKey|items menus data key|String|'name'|if not name and mot valueKey,then it is array index|
|textKey|items menus data text show|String|'label'|-|
| has-ink | display underline ink bar | Boolean | `true` | - |
| ink-length | the width of ink bar | Number | `80` | the percentage width of ink bar, between `0-100` |
|immediate|trigger a `change` event immediately after initialization|Boolean|`false`|-|

#### TabBar Methods

##### reflow(index)
relayout tabbar

#### TabBar Events

##### @change(item, index, prevIndex)
selected menu index changes

|Props | Description | Type|
|----|-----|------|
| item | object of previous selected menu | Object |
| index | index of current selected menu | Number |
| index | index of previous selected menu | Number |

#### TabBar Slot
```javascript
<md-tab-bar>
  <template slot="item" slot-scope="{ item, currentName, index, items }">

  </template>
</md-tab-bar>
```
