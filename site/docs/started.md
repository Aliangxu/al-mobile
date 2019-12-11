---
title: 快速上手
---
#### 安装

##### **NPM or Yarn**

```shell
npm install al-mobile --save
# OR 
yarn add al-mobile
```

##### **浏览器引入**

在浏览器中使用`script`和`link`标签直接引入文件，并使用全局变量 `window['al-mobile']`。

#### 引入

##### 按需加载(推荐)

> 使用 <a href="https://github.com/ant-design/babel-plugin-import" target="_blank">babel-plugin-import</a>
  或
  <a href="https://github.com/Brooooooklyn/ts-import-plugin" target="_blank">ts-import-plugin</a>, 无需配置style，默认加载目录为lib，其他目录参考<a href="javascript:jumpAnchor('产出包目录')">产出包目录</a>

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

组件使用：

> 如果没有以上配置，会全量引入，需手动引入全部样式， 参考<a href="javascript:jumpAnchor('全量引入')">全量引入</a>

```javascript
import { Button } from 'al-mobile'
```

##### 按需引入

```javascript
import Button from 'al-mobile/lib/button'
```

##### 全量引入

```javascript
import Vue from 'vue'
import alMobile from 'al-mobile'
import 'al-mobile/lib/al-mobile.css'

Vue.use(alMobile)
```

#### 使用前准备

##### FastClick

为避免[浏览器兼容问题](https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile)引起的点击问题, 推荐引入[FastClick](https://github.com/ftlabs/fastclick)

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

##### 产出包目录

[产出包](https://unpkg.com/al-mobile/)中包含以下几种不同目录，分别适用于不同场景的代码，可根据实际需要选择一个目录加载：

```
├── al-mobile
    ├── components  # 源码，一般自定义主题等
    ├── lib         # 编译后，样式单位px，一般用于自定义适配方案等（默认）
    ├── lib-vw      # 编译后，样式单位vh/vw，一般用于非兼容场景，无需额外配置
    ├── ...
```

##### `Px` to `Rem`

产出包`lib`目录中的组件样式以`px`为单位，并且以`iPhone6`屏幕 “物理像素” 宽度`750`为基准 (即普通 “逻辑像素” 值的`2`倍大小)。在实际项目中，可根据具体情况使用`postcss-pxtorem`把`px`单位转成`rem`，从而实现不同设备下等比缩放的效果。

如转换基准为`1rem = 100px`：

* `.postcssrc.js`配置

```javascript
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}
```

* `webpack`配置

```javascript
const pxtorem = require('postcss-pxtorem');

// Postcss
webpackConfig.postcss.push(pxtorem({
  rootValue: 100,
  minPixelValue: 2,
  propWhiteList: []
}))

// Poststylus（使用源码时）
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
