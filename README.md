# bmob-js-sdk-es6

### SDK介绍

本SDK基于es6开发，致力打造基于前端混合开发需求，支持微信小程序、H5、快应用、游戏Cocos、混合App等平台



## 安装使用

### 下载

> https://github.com/bmob/hydrogen-js-sdk/

### 安装使用

 **简介：**

1. 整个SDK，就dist目录下Bmob.*.js 这个文件即可使用全部功能
2. 目前支持微信小程序、H5、快应用、游戏Cocos、混合App等



**引入：**

```
var Bmob = require('../dist/Bmob-1.0.1.min.js');
```



### **初始化**

```
Bmob.initialize("你的Application ID", "你的REST API Key");
```

> 具体详细开发可参照下面的开发文档

### 开发文档

https://bmob.github.io/hydrogen-js-sdk/#/?id=登陆


#### 版本 v1.7.0

**Note:**

> - 支持今日头条小程序一键登陆
> - 支持今日头条小程序access_token 获取
> - 支持今日头条小程序文件上传等


#### 版本 v1.6.7

**Note:**

> - 修复nodejs `XMLHttpRequest is not defined`的问题

#### 版本 v1.6.6

**Note:**

> - 增加今日头条小程序支持
> - 修复nodejs 缺少依赖包axios需要手动引入一次问题

#### 版本 v1.6.5

**Note:**

> - 修复分组查询替换排序结果


#### 版本 v1.6.4

**Note:**

> - 增加小视频视频截图功能
> - 增加解密小程序数据接口
> - 调用云函数增加支持Bmob.run方法

#### 版本 v1.6.3

**Note:**

> - 修复快应用注册函数在特殊情况下，参数错乱问题
> - 修复小程序文件上传路径返回字符串类型
> - 增加登陆退出功能

#### 版本 v1.6.2

**Note:**

> - 修复relation类型不能排序
> - relation增加默认返回记录数
> - 统计函数count，支持统计同时返回记录

#### 版本 v1.6.1

**Note:**

> - 修复relation只能关联用户表bug
>

#### 版本 v1.6.0

**Note:**

> - 修复上一个版本，增加分组查询导致普通查询失效bug
> - 增加子查询使用文档

#### 版本 v1.5.2

**Note:**

> - 优化网络请求，去掉多余的为空参数
> - 增加统计相关的查询功能

#### 版本 v1.5.1

**Note:**

> - 修复`or`查询失败的问题
>   

#### 版本 v1.5.0

**Note:**

> - auth 登陆授权函数，修改提示更人性化
>
> - 修复openid多出双引号问题
>

#### 版本 v1.4.4

**Note:**

>
> -  `Cocos Creator` 开发工具在原有支持浏览器调试模式，增加模拟器模式
> - 增加小程序登陆`auth` 函数登陆后，第二次调用，返回登陆信息
> - 修复修改表数据第二种方式会自动增加一个id字段bug

#### 版本 v1.4.3

> **Note:**
>
> - 增加小程序检测违规内容方法`Bmob.checkMsg`
> - 增加查询`===` 支持

#### 版本 v1.4.2

> **Note:**
>
> - 修复所有语法支持`eslint `
> - 修复查询`==` bug

#### 版本 v1.4.1

> **Note:**
>
> - 增加地理位置相关操作

#### 版本 v1.4.0

> **Note:**
>
> - 增加超级权限`MasterKey`功能
> - 增加后台数据库更新本地缓存也会自动更新函数`Bmob.User.updateStorage`
> - 增加更新用户表、本地缓存会自动更新功能
> - 优化请求网络请求对象

#### 版本 v1.3.1

> **Note:**
>
> - 优化`File`对象上传文件必须登录
> - 修复短信验证未传入手机号问题
> - 更新文档获取用户列表描述问题

#### 版本 v1.3.0

> **Note:**
>
> - 增加`Relation`一对多表关联
> - 增加`Relation`类型关联查询
> - 优化`Pointer`一对一表关联
> - 修复`include`查询一对一关联表的bug
> - 修复条件查询时，`count`方法查询返回所有数据


#### 版本 v1.2.0

> **Note:**
>
> - 增加华为快应用`quick`支持

####  版本 v1.1.1

> **Note:**
>
> - 修复`set`方法类型判断错误
> - 增加文件上传`file`类型关联

####  版本 v1.1.0

> **Note:**
>
> - 增加服务端`nodejs`支持

####  版本 v1.0.2

> **Note:**
>
> - 修复`set` 类型只能传字符串类型
> - 修复H5文件上传返回只返回连接
> - 增加兼容小程序游戏SDK

####  版本 v1.0.1

> **Note:**
>
> - 增加`containedIn`方法,查询某一字段值在某一集合中的记录
> - 增加`notContainedIn`方法来查询在集合外的目标对象
> - 增加`exists`方法,查询含有某一特定属性的对象
> - 增加`doesNotExist`方法,查询没有这一特定属性的对象



### 运行

```
//安装依赖
npm install

//项目运行
npm run dev
```

### 目录结构

```
|-- index.html
|-- lib                   源码库文件
|   |-- app.js            导出文件
|   |-- axiosRequest.js   web请求库
|   |-- bmob.js           初始化文件
|   |-- common.js         短请求接口
|   |-- config.dev.js     测试配置文件
|   |-- config.js         配置文件
|   |-- dataType.js       类型判断
|   |-- error.js          错误警告
|   |-- file.js           文件操作
|   |-- pay.js            小程序支付
|   |-- query.js          数据操作
|   |-- request.js        请求判断
|   |-- sms.js            短信
|   |-- socket.js         实时通讯
|   |-- storage.js        缓存
|   |-- user.js           用户
|   |-- utils.js          公用函数
|   |-- webstorage.js     web缓存
|   |-- wxRequest.js      小程序请求库
|   |-- wxstorage.js      小程序缓存
|-- main.js               web调试入口
```



### 功能列表

#### 公共方法

- [x] 获取一行数据
- [x] 修改一行数据
- [x] 删除一行数据
- [x] 增加一行数据
- [x] 删除字段的值
- [x] 字段原子计数器
- [x] 条件查询
- [x] 复杂查询
- [x] 数组操作
- [x] 查询数据列表
- [x] 地理位置查询
- [x] 注册
- [x] 登录
- [x] 手机验证码登陆
- [x] 验证Email
- [x] 修改密码
- [x] 查询用户
- [x] 短信验证码、发送、验证
- [x] 文件（图片）上传
- [x] 文件删除 *
- [x] APP推送 *
- [x] 云函数调用
- [x] 数据关联Pointer查询、增加
- [x] 批量数据操作  增、删、改
- [x] 主人推送消息
- [x] 获取服务器时间



#### 小程序方法

- [x] 生成小程序二维码
- [x] 获取access_token
- [x] 一键登录接口
- [x] 更新用户信息（更新缓存）
- [x] 小程序支付
- [x] 小程序模板消息
- [x] 支付退款接口




### 公用网络请求库

- [x] web


- [x] nodejs


- [x] 小程序


- [x] 快应用



公用本地缓存处理

- [x] web


- [x] nodejs（无）


- [x] 小程序


- [x] 快应用



增强功能

- [x] Relation  
- [ ] ACL




### 开发规范

---

1. 请求链接路由放到config文件PARAMETERS变量
2. 变量函数命令统一用英文，尽量优先参考Bmob目前`jssdk` 相关名称。
3. 开发一个函数功能，记得补上文档，具体请看文档模板 `doc.md`
4. 操作数据库的函数语法在群里与队友商量确定



### 相关知识点

---

1. 【链接】多对多关系BmobRelation学习笔记（js，微信小程https://www.zybuluo.com/z77/note/1114404
2. API 接口文档 http://doc.bmob.cn/data/restful/index.html



### 感谢

---

1. yanghuanrong   https://github.com/yanghuanrong
2. youngjuning  https://github.com/youngjuning
3. magic007 https://github.com/magic007
4. BoolTrue https://github.com/BoolTrue

> 在此欢迎大家贡献代码
