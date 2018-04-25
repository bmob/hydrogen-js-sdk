# bmob-js-sdk-es6

### SDK介绍

本SDK基于es6开发，致力打造基于前端混合开发需求，支持微信小程序、H5、快应用、混合App等平台



### 运行

```
npm run dev
```



### 目录结构

```
|-- bmob.html
|-- index.html
|-- lib			库文件
|   |-- app.js	导出文件
|   |-- axiosRequest.js		请求库
|   |-- bmob.js		初始化文件
|   |-- common.js	短请求接口
|   |-- config.dev.js
|   |-- config.js	配置文件
|   |-- request.js	请求入口
|   |-- sms.js
|   -- utils.js	公用函数
|-- main.js			入口
```

### 完成的开发文档

---

[doc.md]: ./doc.md	"doc.md"



### API接口说明

---

1. 获取一行数据

   ```
   curl -X GET \
       -H "X-Bmob-Application-Id: Your Application ID" \
       -H "X-Bmob-REST-API-Key: Your REST API Key" \
       https://api.bmob.cn/1/classes/GameScore/e1kXT22L
   ```


2. 修改一行数据

   ```
   curl -X PUT \
       -H "X-Bmob-Application-Id: Your Application ID" \
       -H "X-Bmob-REST-API-Key: Your REST API Key" \
       -H "Content-Type: application/json" \
       -d '{"score":73453}' \
       https://api.bmob.cn/1/classes/GameScore/e1kXT22L
   ```

3. 删除一行数据

   ```
   curl -X DELETE \
       -H "X-Bmob-Application-Id: Your Application ID" \
       -H "X-Bmob-REST-API-Key: Your REST API Key" \
       https://api.bmob.cn/1/classes/GameScore/e1kXT22L
   ```

   ​

   ​

4. 文件上传，内部接口

   ```
   curl -X POST \
       -H "X-Bmob-Application-Id: Your Application ID" \
       -H "X-Bmob-REST-API-Key: Your REST API Key" \
       https://api.bmobcloud.com/2/files/test.png
   ```


   ```
   返回
   {"cdn":"upyun","filename":"test.png","url":"http://bmob-cdn-12948.b0.upaiyun.com/2018/04/20/cbd266a4409ce4cd80d4ec8a081b7d7f.png"}
   ```

   ​

### 功能列表

#### 公共方法

- [x] 获取一行数据
- [x] 修改一行数据
- [x] 删除一行数据
- [x] 增加一行数据
- [x] 删除字段的值
- [x] 字段原子计数器
- [x] 条件查询
- [x] 数组操作
- [x] 查询数据列表
- [ ] 地理位置查询
- [x] 注册
- [x] 登录
- [x] 验证Email
- [x] 修改密码
- [x] 查询用户
- [ ] 手机号、QQ、等第三方登录
- [x] 短信验证码、发送、验证
- [ ] 文件（图片）上传
- [ ] 文件删除 *
- [x] APP推送 *
- [x] 云函数调用
- [ ] ACL 和角色
- [ ] 数据关联Pointer、Relation
- [ ] 批量数据操作 *
- [x] 主人推送消息
- [x] 获取服务器时间



#### 小程序方法

- [x] 生成小程序二维码
- [x] 获取access_token
- [ ] 一键登录接口
- [ ] 小程序支付
- [x] 小程序模板消息
- [x] 支付退款接口




### 公用网络请求库

- [x] H5


- [ ] nodejs


- [ ] 小程序


- [ ] 快应用



公用本地缓存处理

- [ ] H5


- [ ] nodejs


- [ ] 小程序


- [ ] 快应用

  ​


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
