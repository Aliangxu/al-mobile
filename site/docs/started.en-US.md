---
title: Quickstart
---
#### Installation

##### **NPM or Yarn**

```shell
npm install al-mobile --save
# OR 
yarn add al-mobile
```

##### **Import in Browser**

Add `script` and `link` tags in your browser and use the global variable `window['al-mobile']`.

The `JS` and `CSS` bundles are provided in the `al-mobile/lib` or `al-mobile/lib-vw` directory of the `npm` distribution. See <a href="javascript:jumpAnchor('Release Package Directory')">Release Package Directory</a>.    

You can also download it via [![](https://data.jsdelivr.com/v1/package/npm/al-mobile/badge)](https://www.jsdelivr.com/package/npm/al-mobile) or [UNPKG](https://unpkg.com/al-mobile/lib/).

> It is recommended that users who are directly introduced with the CDN lock the version to avoid incompatibility updates. Please refer to [unpkg.com](unpkg.com) for more information.

#### Import

##### On-demand Loading(Recommended)

> Use <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>
  or
  <a href="https://github.com/Brooooooklyn/ts-import-plugin" target="_blank">ts-import-plugin</a>. No need to configure style path and default directory is 'lib', other directory reference <a href="javascript:jumpAnchor('Release Package Directory')">Release Package Directory</a>

```javascript
{
  "plugins": [
    ["import", {
      "libraryName": "al-mobile",
      "libraryDirectory": "lib"
    }]
  ]
}
```

```javascript
// ts-loader option
{
  rules: [
  	{
	   test: /\.tsx?$/,
	   loader: 'ts-loader',
	   options: {
	     appendTsSuffixTo: [/\.vue$/],
	     transpileOnly: true,
	     getCustomTransformers: () => ({
	       before: [
            require('ts-import-plugin')({
              "libraryName": "al-mobile"
            })
	       ]
	     })
	   }
    }
  ]
}
```

and then

> If there is no configuration above, it will be imported in full amount, all styles need to be manually imported, and reference<a href="javascript:jumpAnchor('Totally Import')">Totally Import</a>

```javascript
import { Button } from 'al-mobile'
```

##### Manually Import

```javascript
import Button from 'al-mobile/lib/button'
```

##### Totally Import

```javascript
import Vue from 'vue'
import mandMobile from 'al-mobile'
import 'al-mobile/lib/al-mobile.css'

Vue.use(mandMobile)
```

#### Prepare Before Use

##### FastClick

To avoid click problems caused by [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile), [FastClick](https://github.com/ftlabs/fastclick) is recommended to import.

```javascript
import FastClick from 'fastclick'

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
```

##### Release Package Directory

[Release Package](https://unpkg.com/al-mobile/) includes the following different directories, which are applicable in different scenarios. You can select one directory to load according to actual needs：

```
├── al-mobile
    ├── components  # Source code, custom theme, etc
    |
    ├── lib         # After compilation, style unit 'px', generally used
    |               # for custom fit programs, etc (default)
    ├── lib-vw      # After compilation, style unit 'vh/vw', generally used
    |               # in non-compatible scenarios, without additional configuration
    ├── ...
```

##### `Px` to `Rem`

Component style is in `px` units and referenced to the `iPhone 6` screen, whose "physical pixel" width is `750` (that is, `2` times the size of the normal "logical pixel"). In actual projects, you can use `postcss-pxtorem` to convert `px` to `rem` depending on the exact situation, so as to achieve the effect of equal scaling in different devices.

For example `1rem = 100px`:

* Configuration of `.postcssrc.js`

```javascript
module.exports = {
  'plugins': [
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}
```

* Configuration of `webpack`

```javascript
const pxtorem = require('postcss-pxtorem');

// Postcss
webpackConfig.postcss.push(pxtorem({
  rootValue: 100,
  minPixelValue: 2,
  propWhiteList: []
}))

// Poststylus（When using source code）
const poststylus = require('poststylus')

webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin({
  options: {
    stylus: {
      use: [
        poststylus(pxtorem({
          rootValue: 100,
          minPixelValue: 2,
          propWhiteList: []
        }))
      ]
    }
  }
}))
```