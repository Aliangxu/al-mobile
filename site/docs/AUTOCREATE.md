---
title: 自动化新增
---
## 业务模块新增（包括创建一个新模块、创建一个新vue页面）
---
title: 开发指南--新增一个模块--以客户管理为例
---
### 步骤
#### 1、检查是否已经存在相应的模块名称
#### 2、配置环境变量，修改环境变量文件（新增新模块的配置）
- 即修改`.env.xxxx`文件，往数组中加入新增模块的名字，命名规则：驼峰命名，同时要跟views下新建的文件夹名字相同
- eg: `VUE_APP_MODULE_moduleListDefaul = ["demo", "test", "login", "home", "center", "insured", "message", "train","entry"]`
- 小技巧
  如果已经存在相应的模块，但是不想打入最终的包内，则直接将上面的数组中的值删除
  eg: 不想将entry打入包内，直接删除如下
  `VUE_APP_MODULE_moduleListDefaul = ["demo", "test", "login", "home", "center", "insured", "message", "train"]`
#### 3、新增新路由js文件
- src/routers/下新增：`customer.js`路由文件
#### 4、路由router src/routers/index.js新增新模块配置
- 新增：  
  ```
  "./customer",
  ```
  ```
  customer,
  ```
  ```
  customer.default && router.addRoutes([...customer.default])
  ```
#### 5、新增views页面模块
- src/views/下新增customer文件夹--模板如下
```
├── views                模块代码
    ├── customer         组件目录
      ├── assets         模块静态文件（图片、样式）
          ├── images     图片
          ├── css        样式
      ├── components     模块业务组件
      ├── Customer.vue   模块父级核心入口
      ├── README.md      模块说明文档
      ├── ...            模块其他业务页面代码
    ├── ...
```

### npm包
commander
metalsmith
handlebars
multimatch
read-metadata
validate-npm-package-name

##### 注★★★：
- 模块新增已经启用build，可以使用以下命令，根据提示创建新的模块
  ```
  npm run create
  ```
- 因为每个环境一个文件，所以新增的模块要想全部在各个环境启用，需要每个`.env.xxxx`环境文件都要修改


*******************************************************************************************


## 组件新增


*******************************************************************************************