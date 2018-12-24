## SDK使用文档

## 安装使用

### 下载

> https://github.com/bmob/hydrogen-js-sdk/

### 安装使用

 **简介：**

1. 整个SDK，就dist目录下Bmob.*.js 这个文件即可使用全部功能
2. 目前支持微信小程序、H5、快应用、游戏Cocos、混合App等

**ps：这不只是微信小程序SDK，是跨平台SDK，相关平台都是引入**`Bmob-x.x.x.min.js`

---

**引入：**

压缩包引入

```
var Bmob = require('../dist/Bmob-x.x.x.min.js');
```
或者源码引入（nodejs必须源码引入）

```
var Bmob = require('./src/lib/app.js');
```



### 初始化

```
Bmob.initialize("你的Application ID", "你的REST API Key");
```



或者包引入方式

安装

```
npm install hydrogen-js-sdk
```

引入

```
import Bmob from "hydrogen-js-sdk";
```

使用ES6前端相关框架，建议使用此方式引入。快应用由于网络包不支持npm，暂时不支持npm，头条小程序可以跟小程序一样使用。



Vue示例

```
// 安装
npm install hydrogen-js-sdk

// 打开 main.js
import Bmob from "hydrogen-js-sdk";

// 初始化
Bmob.initialize("你的Application ID", "你的REST API Key");

// 挂载到全局使用
Vue.prototype.Bmob = Bmob

// 项目其他页面使用跟小程序一样使用Bmob对象即可，例如：
Bmob.User.login('username','password').then(res => {
   console.log(res)
 }).catch(err => {
  console.log(err)
});

```





## 用户操作

### 登陆

 **简介：**

通过用户名密码登陆，登陆成功后会在本地缓存保存用户的信息

 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| username | string | 是   | 用户名 |
| password | string | 是   | 密码   |

**请求示例：**

```
 Bmob.User.login('username','password').then(res => {
   console.log(res)
 }).catch(err => {
  console.log(err)
});
```

**返回示例:**

```
成功：
{
    "createdAt":"2018-04-19 17:26:45",
    "objectId":"X43SIIIH",
    "sessionToken":"cc4fbcfd40583af980f4e6e52085adbf",
    "updatedAt":"2018-04-19 17:26:48",
    "username":"aaaaaa"
}
失败：
{"code":101,"error":"username or password incorrect."}
```



### 注册

 **简介：**

通过用户名密码注册

 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| username | string | 是   | 用户名 |
| password | string | 是   | 密码   |
| email    | string | 是   | 邮箱   |
| phone    | string | 否   | 手机   |

**请求示例：**

```
let params = {
	username: 'bmob2018',
	password: 'bmob2018',
	email: 'bmob2018@bmob.cn',
	phone: '13711166567',
}
Bmob.User.register(params).then(res => {
  console.log(res)
}).catch(err => {
 console.log(err)
});
```

**返回示例:**

```
成功：
{
    "createdAt":"2018-04-19 17:42:59",
    "objectId":"73d4587140",
    "sessionToken":"14683f9a40b2509d80320bf0d4ec7d6e"
}
失败：
{"code":107,"error":"content is empty."}
```

### 手机验证码登陆

 **简介：**

手机号码和验证码一键快速登录的功能，而 **smsCode** 是调用短信请求验证码函数

 **参数说明：**

| 参数    | 类型   | 必填 | 说明   |
| ------- | ------ | ---- | ------ |
| phone   | Number | 是   | 用户名 |
| smsCode | Number | 是   | 密码   |

**请求示例：**

```
Bmob.User.signOrLoginByMobilePhone(phone,smsCode).then(res => {
 console.log(res)
}).catch(err => {
 console.log(err)
});
```

**返回示例:**

```
成功：
{
  "username": username,
  "mobilePhoneNumber": mobilePhoneNumber,
  "mobilePhoneVerified": boolValue,
  "createdAt": YYYY-mm-dd HH:ii:ss,
  "updatedAt": YYYY-mm-dd HH:ii:ss,
  "objectId": objectId,
  "sessionToken": sessionToekn,
  key1:value1,
  key2:value2,
  ...
}
失败：
{"code":207,"error":"code error."}
```



### 更新用户缓存

**简介：**

通过用户名密码登陆，登陆成功后会在本地缓存保存用户的信息

 **参数说明：**

| 参数     | 类型   | 必填 | 说明     |
| -------- | ------ | ---- | -------- |
| objectId | string | 是   | objectId |

**请求示例：**

```
 Bmob.User.updateStorage('objectId').then(res => {
   console.log(res)
 }).catch(err => {
  console.log(err)
});
```

**返回示例:**

```
成功：
{
    "createdAt":"2018-04-19 17:26:45",
    "objectId":"X43SIIIH",
    "sessionToken":"cc4fbcfd40583af980f4e6e52085adbf",
    "updatedAt":"2018-04-19 17:26:48",
    "username":"aaaaaa"
}
```



### 用户表权限

 **简介： **

用户表属于系统表，默认情况下，接口只能查询。如需修改或删除，请登录当前用户，即可修改或删除当前用户资料。

当然了，你也可以直接把`MasterKey`传入到`X-Bmob-Master-Key`中, 这个就可以实现在不需要提供`SessionToken`的情形下更新和删除用户了，但希望只在开发环境下使用，不要把`MasterKey`发布出去。

传入MasterKey方式：

```
//初始化时，多传入一个参数
Bmob.initialize("你的Application ID", "你的REST API Key", "你的MasterKey");
```

### 退出登录

 **简介：**

执行退出函数，会退出登录状态，并清理本地全部缓存

**请求示例：**

```
Bmob.User.logout()
```



### 查询用户

 **简介：**

你可以一次获取多个用户，只要向用户的根URL发送一个GET请求，没有任何URL参数的话，可以简单地列出100个用户。

所有的对普通对象的查询选项都适用于对用户对象的查询，所以可以查看 查询 部分来获取详细信息。

User表是一个特殊的表，专门用于存储用户对象。在浏览器端，你会看到一个User表旁边有一个小人的图标。

 **参数说明：**

无需参数

**请求示例：**

```
Bmob.User.users().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**返回示例:**

```
{
	results: [
		{createdAt: "2018-04-19 17:26:45", objectId: "X43SIIIH", updatedAt: "2018-04-19 17:26:48",…}
		{createdAt: "2018-04-19 17:42:59", email: "bmob2018@bmob.cn", objectId: "73d4587140",…}
	]
}
```

### 获取用户登录信息

**简介：**

此函数获取本地缓存用户信息，登陆后才有值，使用值前请先判断是否为空。

```
//获取用户当前信息
let current = Bmob.User.current()

//由于快应用新推出暂时不支持同步获取，如果是快应用请用以下写法
Bmob.User.current().then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
```

**返回示例:**

```
成功：
{
    "createdAt":"2018-04-19 17:26:45",
    "objectId":"X43SIIIH",
    "sessionToken":"cc4fbcfd40583af980f4e6e52085adbf",
    "updatedAt":"2018-04-19 17:26:48",
    "username":"aaaaaa"
}
失败：
{"code":101,"error":"username or password incorrect."}

```



### 验证 Email

**简介：**

设置邮件验证是一个可选的应用设置, 这样可以对已经确认过邮件的用户提供一部分保留的体验，邮件验证功能会在用户(User)对象中加入emailVerified字段, 当一个用户的邮件被新添加或者修改过的话，emailVerified会默认被设为false，如果应用设置中开启了邮箱认证功能，[Bmob](http://www.bmob.cn/)会对用户填写的邮箱发送一个链接, 这个链接可以把emailVerified设置为 true.

emailVerified 字段有 3 种状态可以考虑：

**true** : 用户可以点击邮件中的链接通过[Bmob](http://www.bmob.cn/)来验证地址，一个用户永远不会在新创建这个值的时候出现emailVerified为true。

**false** : 用户(User)对象最后一次被刷新的时候, 用户并没有确认过他的邮箱地址, 如果你看到emailVerified为false的话，你可以考虑刷新 用户(User)对象。

**missing** : 用户(User)对象已经被创建，但应用设置并没有开启邮件验证功能； 或者用户(User)对象没有email邮箱。

发送到用户邮箱验证的邮件会在一周内失效，此功能由于邮件滥发，目前已是收费服务，如需验证，请工单联系

 **参数说明：**

| 参数  | 类型   | 必填 | 说明 |
| ----- | ------ | ---- | ---- |
| email | string | 是   | 邮箱 |

**请求示例：**

```
Bmob.User.requestEmailVerify('bmob2018@bmob.cn').then(res => {
  console.log(res)
}).catch(err => {
 console.log(err)
});
```

**返回示例:**

```
成功：
{
  "msg": "ok"
}
失败：
{code: 120, error: "Email verify should be opened in your app setup page of bmob."}
```

### 密码重置

 **简介：**

共提供了3种方法，分别是email重置、短信验证码重置、旧密码重置。


Eamil密码重置

 **请求描述：**
你可以使用这项功能，前提是用户将email与他们的账户关联起来，如果要重设密码，发送一个POST请求到 /1/requestPasswordReset, 同时在request的body部分带上email字段。

密码重置流程如下：

1.用户输入他们的电子邮件，请求重置自己的密码。

2.Bmob向他们的邮箱发送一封包含特殊的密码重置连接的电子邮件，此邮件的模板可在Bmob后台中修改。

3.用户根据向导点击重置密码连接，打开一个特殊的Bmob页面，输入一个新的密码。

4.用户的密码已被重置为新输入的密码。

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| ---------| ------ | ---- | -------- |
| email    | string | 是   | 邮箱地址 |


**请求示例：**

```
let data = {
  email: '329685131@qq.com'
}
Bmob.requestPasswordReset(data).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**返回示例:**

```
{
  "msg": "ok"
}
```

短信密码重置

 **请求描述：**
如果用户有绑定了手机号码，就可以通过手机验证码短信来实现使用手机号码找回密码的功能，先调用 请求短信验证码API会将验证码发送到用户手机上，用户收到验证码并输入后，调用PUT /1/resetPasswordBySmsCode/smsCode 来为用户设置新的密码。

**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| ---------| ------ | ---- | -------- |
| password    | string | 是   | 新密码 |

**请求示例：**
```
let smsCode= 'smsCode'
let data = {
  password: 'password'
}
Bmob.resetPasswordBySmsCode(smsCode,data).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```
**返回示例:**


    {
      "msg": "ok"
    }

提供旧密码方式安全修改用户密码

 **请求描述：**
很多开发者希望让用户输入一次旧密码做一次校验，旧密码正确才可以修改为新密码，因此我们提供了一个单独的 API PUT /1/updatePassword 来安全地修改用户密码。

注意：仍然需要传入 X-Bmob-Session-Token，也就是登录用户才可以修改自己的密码。
**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| ---------| ------ | ---- | -------- |
| oldPassword    | string | 是   | 旧密码 |
| newPassword    | string | 是   | 新密码 |

**请求示例：**
```
let objectId ='objectId'
let data = {
  oldPassword: 'oldPassword',
  newPassword: 'newPassword'
}
Bmob.updateUserPassword(objectId,data).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
```

**返回示例:**


    {
      "msg": "ok"
    }

### APP推送

 **简介：**

使用推送接口可将消息推送至对应设备。

 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| data | object | 是   | 根据不同的需求进行定制 |

**请求示例：**


    let data = {
      data: {
    alert: "Hello From Bmob."
      }
    }
    
    Bmob.push(data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

**返回示例:**

待补充返回示例

## 数据表操作

### 获取一行记录

 **简介：**

通过主键获取一行记录

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |
| objectId  | string | 是   | 记录 ID  |

**请求示例：**

```
const query = Bmob.Query('tableName');
query.get('objectId').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```



**返回示例:**

```
{
    "results":[
        {
            "content":"试试看",
            "createdAt":"2018-04-18 15:25:54",
            "formId":"the formId is a mock one",
            "objectId":"7ecd253a25",
            "title":"新增测试",
            "updatedAt":"2018-04-18 15:25:54"
        }
    ]
}
```

### 新增一行记录

 **简介：**

通过主键获取一行记录

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |


**请求示例：**


    const query = Bmob.Query('tableName');
    query.set("name","Bmob")
    query.set("cover","后端云")
    query.save().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

**返回示例:**

```
{
	createdAt: "YYYY-mm-dd HH:ii:ss",
	objectId: "objectId"
}
```

### 修改一行记录

 **简介：**

通过主键获取一行记录

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |
| objectId  | string | 是   | 记录 ID  |


**请求示例：**

```
 方式一：
 const query = Bmob.Query('tableName');
 query.set('id', 'objectId') //需要修改的objectId
 query.set('nickName', 'Bmob后端云')
 query.save().then(res => {
 console.log(res)
 }).catch(err => {
 console.log(err)
 })
或者
方式二：
const query = Bmob.Query('tableName');
query.get('objectId').then(res => {
  console.log(res)
  res.set('cover','3333')
  res.save()
}).catch(err => {
  console.log(err)
})
```



**返回示例:**

```
{
  "updatedAt": "YYYY-mm-dd HH:ii:ss"
}
```


### 删除字段的值

 **简介：**

通过主键获取一行记录

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |
| objectId  | string | 是   | 记录 ID  |


**请求示例：**

```
const query = Bmob.Query('tableName');
query.get('objectId').then(res => {
  console.log(res)
  res.unset('cover')
  res.save()
}).catch(err => {
  console.log(err)
})
```

**返回示例:**

```
{
	updatedAt: "YYYY-mm-dd HH:ii:ss"
}
```


### 删除一行记录

 **简介：**

通过主键获取一行记录

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |
| objectId  | string | 是   | 记录 ID  |


**请求示例：**

    const query = Bmob.Query('tableName');
    query.destroy('objectId').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

or


    const query = Bmob.Query('tableName');
    query.get('objectId').then(res => {
      res.destroy().then(res => {
    console.log(res)
      }).catch(err => {
    console.log(err)
      })
    }).catch(err => {
      console.log(err)
    })

**返回示例:**

```
{
  msg: "ok"
}
```

### 查询所有数据

 **简介：**

返回你表的数据列表，默认创建时间排序，默认取100条数据，下面文档可以增加条件。

 **参数说明：**

| 参数      | 类型   | 必填 | 说明           |
| --------- | ------ | ---- | -------------- |
| tableName | string | 是   | 数据表名       |
| res       | string | 是   | 返回的数据集合 |

**请求示例：**

```
const query = Bmob.Query("tableName");
query.find().then(res => {
    console.log(res)
});
```

**返回： **

表中数据



### 字段数组操作

为了帮你存储数组类数据，有三种操作你可以原子性地改动一个数组，这需要一个给定的 key：

- `add`在一个数组的末尾加入一个给定的对象。
- `addUnique`只会把原本不存在的对象加入数组，所以加入的位置没有保证。
  比如, 我们想在数组"DiaryType"中加入日记类型：

**添加数组：**

```
const query = Bmob.Query('tableName')
query.add("DiaryType", ["public"]);
query.addUnique("DiaryType", ["secret"]);
query.save();


```

**更新数组：**

```
const query = Bmob.Query('tableName')
query.get('ObjectId').then(res => {
  res.add("DiaryType", ["public"]);
  res.addUnique("DiaryType", ["secret"]);
  res.save();
})


```

**删除数组：**

```
const query = Bmob.Query('tableName')
query.get('ObjectId').then(res => {
  res.remove("DiaryType", ["secret"]);
  res.save();
})


```



##原子计数器

许多应用都需要维持一些计数器数据，譬如用来跟踪心情被点赞数目等等。Bmob提供了便捷的方式来对任何数字字段进行原子性的增加或者减少：

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |
| objectId  | string | 是   | 记录 ID  |
| field     | string | 是   | 字段名称 |

**请求示例：**

```
const query = Bmob.Query('tableName')
query.get('objectId').then(res => {
    res.increment('field')
    res.save()
}).catch(err => {
	console.log(err)
})
```

 你可以同样传入第二个参数,支持正负数，到`increment`方法来指定增加或减少多少，`1`是默认值。

##条件查询

 **参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| tableName | string | 是   | 数据表名 |


**请求示例：**
```
// 如果要查询某个属性等于某个值，示例代码如下：
query.equalTo("isLike", "==", 100);

// 如果要查询某个属性不等于某个值，示例代码如下：
query.equalTo("title", "!=", "bmob sdk");

// 如果要模糊查询某个值，示例代码如下（模糊查询目前只提供给付费套餐会员使用）：
query.equalTo("title","==", { "$regex": "" + k + ".*" });

// 查询大于某个日期的数据，示例代码如下
query.equalTo("createdAt", ">" "2018-08-21 18:02:52");

/**
* equalTo 方法支持 "==","!=",">",">=","<","<="
*/

```
两条查询语句一起写，就相当于AND查询，如下示例代码，查询一个月的数据：
```
query.equalTo("createdAt", ">", "2018-04-01 00:00:00");
query.equalTo("createdAt", "<", "2018-05-01 00:00:00");

// 因为createdAt updatedAt服务器自动生成的时间，在服务器保存的是精确到微秒值的时间，所以基于时间类型比较的值要加1秒。

```

一个完整的例子
```
const query = Bmob.Query("tableName");
query.equalTo("title","==", "hello");
query.find().then(res => {
    console.log(res)
});
```

### **或查询**

你可以使用`or`方法操作或查询，示例代码如下：

```
const query = Bmob.Query("tableName");
const query1 = query.equalTo("isLike", '>', 150);
const query2 = query.equalTo("isLike", '<', 150);

query.or(query1, query2);
query.find().then(res => {
  // 返回 isLike > 150 or isLike < 5 的值
  console.log(res)
});
```

### **查询指定列**

```
const query = Bmob.Query("tableName");
// 只返回select的字段值
query.select("title");
query.find().then(res => {
  // 返回成功
  console.log(res)
});
```

### **复杂查询**

如果你想查询某一字段值在某一集合中的记录的话，可以使用`containedIn`方法，如获取`"Bmob"、"Codenow"、"JS"`这三位玩家的记录信息，那么示例代码如下
```
// 第一个参数是字段名称，第二个参数是数组
query.containedIn("playerName", ["Bmob", "Codenow", "JS"]);
```
相反地，你可以使用`notContainedIn`方法来查询在集合外的目标对象。

如果想要查询含有某一特定属性的对象，可以使用`exists`。相对地，如果你想获取没有这一特定属性的对象，你可以使用`doesNotExist`，示例代码如下：
```
// 查询含有score属性的对象
query.exists("score");

// 查询不含有score属性的对象
query.doesNotExist("score");
```

### **分页查询**

有时，在数据比较多的情况下，你希望查询出的符合要求的所有数据能按照多少条为一页来显示，这时可以使用`limit`方法来限制查询结果的数据条数来进行分页。默认情况下，Limit的值为10，最大有效设置值1000（设置的数值超过1000还是视为1000）。
```
// 返回最多10条数据
query.limit(10);
```
在数据较多的情况下，在`limit`的基础上分页显示数据是比较合理的解决办法，`skip`方法可以做到跳过查询的前多少条数据来实现分页查询的功能。默认情况下`skip`的值为10。
```
query.skip(10); // skip the first 10 results
```
### **结果排序**

我们可以对返回的结果进行排序（只支持`number`，`date`，`string`类型的排序），示例代码如下：

```
// 对score字段升序排列
query.order("score");

// 对score字段降序排列
query.order("-score");

// 多个字段进行排序
query.order("-score","name");
```

### **统计记录数量**

如果你只是想统计满足`query`的结果集到底有多条记录，你可以使用`count`方法。如为了获得diary表的记录数量，示例代码如下：
```
const query = Bmob.Query('diary');
query.count().then(res => {
  console.log(`共有${res}条记录`)
});
```

默认统计不返回具体记录信息，如需返回记录条数，例如需要统计时并返回100条记录，可以使用参数`count(100)`



## 复杂子查询

在查询当中，我们可以对字符串、数组、数字等进行约束，比如查询Post表时，我们可以指定只返回title以“a”开头的Post对象。那么Pointer 连表查询能不能也进行约束呢？如下：



例如我需要查询Post（帖子表，字段own 类型Pointer 关联用户表）表，发帖用户是*hello*的用户。代码如下

```
const query = Bmob.Query("Post");
query.statTo("where", '{"own":{"$inQuery":{"where":{"username":"Hello"},"className":"_User"}}}');
query.find().then(res => {
  console.log(res)
});
```



反之亦然，如果需求是不匹配查询条件的可以使用*$notInQuery*，参考下面写法

```
const query = Bmob.Query("Post");
query.statTo("where", '{"own":{"$notInQuery":{"where":{"username":"Hello"},"className":"_User"}}}');
query.find().then(res => {
  console.log(res)
});
```



## 数据库批量操作

**温馨提示： ** 为保障数据安全，此处所有批量操作数据库，单次最多为50条。

### 批量修改

 **简介：**

通过查询条件批量修改符合条件记录

 **参数说明：**

| 参数 | 类型   | 必填 | 说明   |
| ---- | ------ | ---- | ------ |
| aab  | string | 否   | 列名称 |
| bb   | string | 否   | 列名称 |

**请求示例：**

```
const query = Bmob.Query('tableName');
query.find().then(todos => {
  todos.set('aab', "Bmob后端云");
  todos.set('bb', 'Bmob后端云');
  todos.saveAll().then(res => {
    // 成功批量修改
    console.log(res,'ok')
  }).catch(err => {
    console.log(err)
  });
})
```

**返回示例:**

```
[
(添加对象返回的信息)
  {
    "success": {
      "createdAt": YYYY-mm-dd HH:ii:ss,
      "objectId": "d746635d0b"
    }
  },
  (修改对象返回的信息)
  {
    "success": {
      "updatedAt": YYYY-mm-dd HH:ii:ss
    }
  },
  (删除对象返回的信息)
  {
    "success": {
      "msg": "ok"
    }
  }
]
```

### 批量增加

 **简介：**

传入一个Query的数组，进行批量保存

```
const queryArray = new Array();
// 构造含有50个对象的数组
for(var i = 0 ; i < 50 ; i++){
  var queryObj = Bmob.Query('tableName');
  queryObj.set('columnName','abc' + i);
  queryArray.push(queryObj);
}


// 传入刚刚构造的数组
Bmob.Query('tableName').saveAll(queryArray).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
});
```

**返回与批量修改一致: **

### 批量删除

 **简介：**

通过查询条件批量修改符合条件记录

 **参数说明：**

**请求示例：**

```
const query = Bmob.Query('tableName');
// 单词最多删除50条
query.limit(50)
query.find().then(todos => {

  todos.destroyAll().then(res => {
    // 成功批量修改
    console.log(res,'ok')
  }).catch(err => {
    console.log(err)
  });
})
```

**返回示例:**

```
[
(添加对象返回的信息)
  {
    "success": {
      "createdAt": YYYY-mm-dd HH:ii:ss,
      "objectId": "d746635d0b"
    }
  },
  (修改对象返回的信息)
  {
    "success": {
      "updatedAt": YYYY-mm-dd HH:ii:ss
    }
  },
  (删除对象返回的信息)
  {
    "success": {
      "msg": "ok"
    }
  }
]
```





## 数据关联

### Pointer的使用

#### 查询Pointer 关联表数据

**简介：**

通过字段类型Pointer 查询出连表的内容，支持多个参数，连接多表

 **参数说明：**

| 参数      | 类型   | 必填 | 说明            |
| --------- | ------ | ---- | --------------- |
| tableName | string | 是   | 数据表名称      |
| own       | string | 是   | Pointer类型字段 |

**请求示例：**

```
const query = Bmob.Query('tableName');
//下面参数为Pointer字段名称， 可以一次查询多个表
query.include('own','post')
query.find().then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
```

**返回示例:**

```
成功：
{
  "results": [
    {
      key1:value1,
      key2:value2,
      ...
    },
    {
      key1:value1,
      key2:value2,
      ...
    },
    ...
}

```

#### 约束Pointer值查询

简介：Pointer 类型在数据库是一个json数据类型，只需调用Pointer方法创建一个Pointer对象存入到字段中，如下：

```
//poiID User表Pointer对象
const pointer = Bmob.Pointer('_User')
const poiID = pointer.set('QdXD888B')

const query = Bmob.Query('test')
//userId 字段名称关联用户表 ，类型Pointer
query.equalTo("userId","==", poiID);
query.find().then(res => {
  console.log(res)
})

```

#### 添加Pointer类型

简介：Pointer 类型在数据库是一个json数据类型，只需调用Pointer方法创建一个Pointer对象存入到字段中，如下：

```
const pointer = Bmob.Pointer('_User')
const poiID = pointer.set('QdXD888B')
const query = Bmob.Query('test')
query.get('c02b7b018f').then(res => {
  res.set('own',poiID)
  res.save()
})

```

#### 删除Pointer类型

删除Pointer类型非常的简单，和删除普通的字段类型一样，如下：

```
const query = Bmob.Query('test')
query.get('c02b7b018f').then(res => {
  res.unset('own')
  res.save()
})

```

### Relation的使用

**简介：**

Relation 一对多，多对多表关联，**一个帖子可以被很多用户所喜欢，一个用户也可能会喜欢很多帖子，那么可以使用Relation类型来表示这种多对多关联关系**。

`Relation`本质上可以理解为其存储的是一个对象，而这个对象中存储的是多个指向其它记录的指针。

#### 添加Relation类型

**请求示例：**

```
const relation = Bmob.Relation('_User') // 需要关联的表
const relID = relation.add(['5PnCXXX6','QdXD888B']) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
const query = Bmob.Query('test')
query.get('jzQMAAAO').then(res => {
  res.set('two',relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
  res.save()
})
```

#### 删除Relation类型

**请求示例：**

```
const relation = Bmob.Relation('_User')
const relID = relation.remove(['5PnCXXX6','QdXD888B'])
query.get('jzQMAAAO').then(res => {
  res.set('two',relID);
  res.save()
})

```

#### 查询Relation类型

`field`方法接受两个参数，第一个需要查询的字段名称，第二个需要查询的字段的objectId
`relation`方法接受一个参数，字段关联的表名称
查询成功之后，会返回该字段关联的所有数据

**请求示例：**
```
const query = Bmob.Query('abcd')
query.field('two','a312d300eb')
query.relation('_User').then(res => {
  console.log(res);
})
```

## 数据类型
**Bmob后端云**有很多常见的数据类型，在查询、添加数据库的时候，经常需要了解数据类型结构。

到现在为止我们只使用了可以被标准**JSON**编码的值，Bmob移动客户端SDK库同样支持日期,地理位置数据和指针数据、关系型数据。在REST API中，这些值都被编码了，同时有一个**"__type"**字段来标识出它们所属的类型，所以如果你采用正确的编码的话就可以读或者写这些字段了。

### **Date**类型

**Date**类型包含了一个"iso"字段存储了一个UTC时间戳,以ISO 8601格式和毫秒级的精度来存储时间:** YYYY-MM-DDTHH:MM:SS.MMMZ**，或者 **YYYY-MM-DDTHH:MM:SS**

```
{
    "__type": "Date",
    "iso": "2011-08-21 18:02:52"
}
```
Date 与内置的 createdAt 字段和 updatedAt 字段相结合的时候特别有用，举个例子：为了找到在一个特殊时间创建的对象，只需要将Date编码在一个查询的where条件中:
```
let data = {
    "__type": "Date",
    "iso": "2011-08-21 18:02:52"
}
query.equalTo("data", ">", data);
```
### File类型

File类型是在上传后返回的JSON数据再加一个Key为"__Type":"File", 用来保存到数据列为文件类型的值：

```
{
    "__type": "File",
    "group": "upyun",
    "filename": "1.xml",
    "url": "M00/01/14/sd2lkds0.xml"
}
```



## 统计相关的查询
Bmob的统计查询，提供以下关键字或其组合的查询操作：

| Key        | Operation |
| :----:  | :----:  |
| groupby     | 分组操作 |
| groupcount     | 返回每个分组的总记录 |
| sum     | 计算总和 |
| average     | 计算平均值 |
| max     | 计算最大值 |
| min     | 计算最小值 |
| having     | 分组中的过滤条件 |


为避免和用户创建的列名称冲突，Bmob约定以上统计关键字（sum, max, min)的查询结果值都用 `_(关键字)+首字母大写的列名` 的格式，如计算玩家得分列名称为score总和的操作，则返回的结果集会有一个列名为_sumScore。average返回的列为 `_avg+首字母大写的列名` ，有groupcount的情形下则返回_count。

以上关键字除了groupcount是传Boolean值true或false，having传的是和where类似的json字符串，但having只应该用于过滤分组查询得到的结果集，即having只应该包含结果集中的列名如 `{"_sumScore":{"$gt":100}}` ，其他关键字必须是字符串而必须是表中包含的列名，多个列名用,分隔。

以上关键字可以自由组合并可以与前面查询语句中的where, order, limit, skip等组合使用。

比如，GameScore表是游戏玩家的信息和得分表，有playerName(玩家名称)、score(玩家得分)等你自己创建的列，还有Bmob的默认列objectId, createdAt, updatedAt,那么我们现在举例如何使用以上的查询关键字来作这个表的统计。 

### 计算总和
我们要计算GameScore表所有玩家的得分总和，sum后面只能拼接Number类型的列名，即要计算哪个列的值的总和，只对Number类型有效，多个Number列用,分隔，则查询如下：

```    
const query = Bmob.Query("GameScore");
query.statTo("sum", "score");
query.find().then(res => {
  console.log(res)
});

```

返回内容如下：

```
[
	{
		"_sumScore": 2398
	}   
]
                  
```

### 分组计算总和
比如我们以创建时间按天统计所有玩家的得分，并按时间降序, groupby后面只能拼接列名，如果该列是时间类型，则按天分组，其他类型，则按确定值分组:

```
const query = Bmob.Query("GameScore");
query.statTo("sum", "score");
query.statTo("groupby", "createdAt");
query.statTo("order", "-createdAt");
query.find().then(res => {
  console.log(res)
});
```

返回内容如下：

```
[
	{
		"_sumScore": 2398,
		"createdAt": "2014-02-05"
	},
	{
		"_sumScore": 1208,
		"createdAt": "2014-01-01"
	},
]                 
```

### 多个分组并计算多个列的总和
比如我们以创建时间按天和按玩家名称分组统计所有玩家的得分1，得分2的总和，并按得分1的总和降序, groupby后面只能拼接列名，如果该列是时间类型，则按天分组，其他类型，则按确定值分组:

```
const query = Bmob.Query("GameScore");
query.statTo("sum", "score1, score2");
query.statTo("groupby", "createdAt, playerName");
query.statTo("order", "-_sumscore1");
query.find().then(res => {
  console.log(res)
});
```

返回内容如下：

```
[
	{
		"_sumScore1": 399,
		"_sumScore2": 120,
		"playerName": "John"
		"createdAt": "2014-02-05"
	},
	{
		"_sumScore1": 299,
		"_sumScore2": 250,
		"playerName": "Bily"
		"createdAt": "2014-02-05"
	},
	{
		"_sumScore1": 99,
		"_sumScore2": 450,
		"playerName": "John"
		"createdAt": "2014-02-01"
	},
]                 
```

### 分组计算总和并只返回满足条件的部分值
比如我们以创建时间按天统计所有玩家的得分，并只返回某天的总得分大于2000的记录，并按时间降序，having是用于过滤部分结果，其中的_sumScore是 `_sum+首字母大写的列名` 的格式表示是计算这个列的总和的值:

```
const query = Bmob.Query("GameScore");
query.statTo("sum", "score");
query.statTo("having",{"_sumScore":{"$gt": 2000}});
query.statTo("groupby", "createdAt");
query.statTo("order", "-createdAt");
query.find().then(res => {
  console.log(res)
});
```

返回内容如下：

```
[
	{
		"_sumScore": 2398,
		"createdAt": "2014-02-05"
	},
]                 
```

### 分组计算总和并返回每个分组的记录数

比如我们以创建时间按天统计所有玩家的得分和每一天有多少条玩家的得分记录，并按时间降序:

```

const query = Bmob.Query("GameScore");
query.statTo("sum", "score");
query.statTo("groupby", "createdAt");
query.statTo("groupcount", "true");
query.statTo("order", "createdAt");
query.find().then(res => {
  console.log(res)
});    
    
```

返回内容如下：

```
[
	{
		"_sumScore": 2398,
		"_count": 10,
		"createdAt": "2014-02-05"
	},
	{
		"_sumScore": 100,
		"_count": 2,
		"createdAt": "2014-01-01"
	},
]                 
```

### 获取不重复的列值

比如我们获取表中所有的唯一的score:

```
const query = Bmob.Query("GameScore");
query.statTo("groupby", "score");
query.find().then(res => {
  console.log(res)
});    
    
```

返回内容如下：

```
[
	{
		"score": 78
	},
	{
		"score": 89
	}
]                 
```

### 其他关键字
average(计算平均值)， max(计算最大值)，min(计算最小值)和sum查询语句是类似的，只用把上面的例子中的sum替换为相应的average, max, min就可以了。

## 地理位置

### 创建地理位置对象

```
const point = Bmob.GeoPoint({ latitude: 23.052033,longitude: 113.405447 })
```

### 查询地理位置

为了限定搜索的最大距离范围，需要加入 `公里` 参数来限定，如果不加，则默认是100KM的半径。比如要找的半径在10公里内的话

```
const query = Bmob.Query("tableName");
query.withinKilometers("字段名", point, 10);  //10指的是公里
query.find().then(res => {
	console.log(res)
});
```

同样作查询寻找在一个特定的范围里面的对象也是可以的，为了找到在一个矩形区域里的对象，按下面的格式加入一个约束

```
const point = Bmob.GeoPoint({ latitude: 23.052033,longitude: 113.405447 })
const point1 = Bmob.GeoPoint({ latitude: 23.052033,longitude: 113.405447 })
const query = Bmob.Query("tableName");
query.withinGeoBox("字段名", point, point1);  //制造一个矩形区域
query.find().then(res => {
	console.log(res)
});
```



### 添加地理位置

```
const point = Bmob.GeoPoint({ latitude: 23.052033,longitude: 113.405447 })
const query = Bmob.Query('tableName');
query.set("字段名称",point)
query.save().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```



### 修改地理位置



```
const point = Bmob.GeoPoint({ latitude: 23.052033,longitude: 113.405447 })
const query = Bmob.Query('tableName')
query.get('c02b7b018f').then(res => {
  res.set('字段名称',point)
  res.save()
})
```



## 云函数使用

**简介：**

云函数调用

**参数说明：**

| 参数        | 类型   | 必填 | 说明     |
| ----------- | ------ | ---- | -------- |
| funcName    | string | 是   | 手机号   |
| requestData | string | 否   | 模板信息 |

**请求示例：**

```
let params =　{
  funcName: 'hello',
  data: {
	name : 'bmob'
  }
}
Bmob.functions(params.funcName,params.data).then(function (response) {
	console.log(response);
})
.catch(function (error) {
	console.log(error);
});

```

**云函数示例:**

```
  function onRequest(request, response, modules) {
      //获取SDK客户端上传的name参数
      var name = request.body.name;
	  if(name == 'bmob')
	    response.end('欢迎使用Bmob');
	  else
	    response.end('输入错误，请重新输入');
    }  

```

**返回示例:**

```
{
	result: "欢迎使用Bmob"
}

```

## 文件

### WEB文件上传


 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| fileName | string | 是   | 文件名(带后缀) |
| file     | Object | 是   | 相应的文本或者二进制流 |

**web请求示例：**

```
// 在页面中创建一个 file input来允许用户选择磁盘上的文件
<input type="file" id="profilePhotoFileUpload"  multiple="multiple" >
```
然后，在一个处理onchange的函数里，将文件加入上传队列进行批量操作：
```
const fileUploadControl = document.getElementById('profilePhotoFileUpload');
fileUploadControl.onchange = () => {
  const pic = fileUploadControl.files
  let file
  for(let item of pic){
     file = Bmob.File(item.name, item);
  }
  file.save().then(res => {
    console.log(res.length);
    console.log(res);
  })
}
```

**返回示例:**
```
["{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/e65172f540195fe880043cc74236e397.jpg"}", "{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/5670bf6740385bca802f9c33beb69ab9.jpg"}"]

```

### 小程序文件上传

 **参数说明：**

| 参数     | 类型   | 必填 | 说明                   |
| -------- | ------ | ---- | ---------------------- |
| fileName | string | 是   | 文件名(带后缀)         |
| file     | Object | 是   | 相应的文本或者二进制流 |

给页面上传按钮一个点击事件，这里使用了for，支持批量上传

```
upload:function(){
    wx.chooseImage({
      success: function (res) {
        console.log(res)
        var tempFilePaths = res.tempFilePaths
        var file;
        for (let item of tempFilePaths) {
          console.log('itemn',item)
          file = Bmob.File('abc.jpg', item);
        }
        file.save().then(res => {
          console.log(res.length);
          console.log(res);
        })

      }
    })
  }
```

**返回示例:**

```
["{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/e65172f540195fe880043cc74236e397.jpg"}", "{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/5670bf6740385bca802f9c33beb69ab9.jpg"}"]

备注：

res.set('files',res[0])
```

### file对象关联

上传文件写入Bmob File字段，上面选择了2张图片，所以返回2个File对象，如果需要写到数据库，字段，一个File字段只能写入一张图，例如下面这样
```
const file = ["{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/e65172f540195fe880043cc74236e397.jpg"}", "{"cdn":"upyun","filename":"abc.jpg","url":"http://…2018/05/07/5670bf6740385bca802f9c33beb69ab9.jpg"}"]
query.set('files',file[0])
query.save().then(res => {
  console.log(res)
})
```

### 图片缩略图

图片文件服务由第三方厂商又拍云提供 ， 只需要在文件上传成功返回的url后面拼接特定参数即可实现缩放，缩略图，加水印等效果，[如图](http://bmob-cdn-9200.b0.upaiyun.com/2017/04/25/f24b9ef540f1aeb680ebe01ba8543d9f.png!/scale/80/watermark/text/5rC05Y2wCg==)，具体可参考[这里](http://docs.upyun.com/cloud/image/) 。

### 视频缩略图

有时候视频需要动态截取缩略图，可以使用以下接口

**请求参数**

| 参数              		| 类型   	| 必选	| 说明                                    			|
|-----------------------|-----------|-------|---------------------------------------------------|
| source 				| string 	| 是  | 视频的存储地址					|
| save_as 				| string 	| 是  | 截图保存地址					|
| point   				| string 	| 是  | 截图时间点，格式为 `HH:MM:SS`					|

```
curl -X POST \
  http://api2.bmob.cn/2/cdnVedioSnapshot \
  -H 'content-type: application/json' \
  -H 'x-bmob-application-id: xxx' \
  -H 'x-bmob-rest-api-key: xxx' \
  -d '{"source": "https://bmob-cdn-80.b0.upaiyun.com/2018/08/17/f4ca5b26305348c88ae70818982c1168.mp4", "save_as": "https://bmob-cdn-80.b0.upaiyun.com/f4ca5b26305348c88ae70818982c1161.jpg", "point": "00:00:05"}'
  
//{"source": "<视频的存储地址>", "point": "<时间点>", "save_as": "<截图保存地址>"}
```

**响应**

| 参数        		| 说明         	|
|:------------------|---------------|
| status_code   	| 状态码        	|
| message       	| 返回信息      	|
| content_type  	| 截图类型       |
| content_length	| 截图大小      	|
| save_as       	| 截图保存地址   	|


### 文件删除


 **参数说明：**

| 参数     | 类型           | 必填 | 说明   |
| -------- | ------------  | ---- | ------ |
| url     | string或array  | 是   | 上传文件时返回的url |

**请求示例：**
```
// 传入string是单个文件删除，传入array是批量删除
const del = Bmob.File();
const val =  ["http://bmob-cdn-15009.b0.upaiyun.com/2018/05/02/aae4998a403e018680a7eff90852905e.jpg"]
del.destroy(val).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err)
})  
```
**返回示例:**
```
{
  "msg": "ok"
}
```



## 小程序操作 ##
### 授权操作

如小程序使用微信登陆、生成二维码、支付等需要微信的操作，请在Bmob授权后使用。

登陆Bmob控制台->应用设置->应用配置

> 如小程序只是操作数据库，不关联微信用户，无需授权即可使用。

### 域名配置

登陆Bmob控制台->应用设置->应用配置，把显示的域名填写到微信小程序平台

### 小程序一键登录

**简介：**

通过微信支持的code实现一键登录，登陆成功后会在本地缓存保存用户的信息，此代码一般写入到`app.js `

 **参数说明：**

无需传参数

**请求示例：**

```
Bmob.User.auth().then(res => {
      console.log(res)
      console.log('一键登陆成功')

    }).catch(err => {
      console.log(err)
    });
```

**返回示例:**

```
成功：
{
    "createdAt":"2018-04-19 17:26:45",
    "objectId":"X43SIIIH",
    "sessionToken":"cc4fbcfd40583af980f4e6e52085adbf",
    "updatedAt":"2018-04-19 17:26:48",
    "username":"aaaaaa"
}
```



### 小程序更新用户信息

**简介：**

2018年5月1号起，微信官方彻底废除`wx.getUserInfo` 函数，如需获取用户信息，请使用按钮获取。

> wxml：

```
 <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
```

> js：

```
getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    Bmob.User.upInfo(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
```

> wxml显示

```
<image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" background-size="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
```

 **参数说明：**

无需传参数

**请求示例：**

```
Bmob.User.upInfo(e.detail.userInfo).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err)
    })
```

**返回示例:**

```
{"updatedAt":"2018-05-02 14:43:26"}
```



### 小程序加密数据解密

在小程序的开发过程中，获取一些隐私信息，需要解密处理，例如：获取手机号、运动步数、分享转发群Id，获取uuid等，为了大家更方便的拿到这些信息，SDK封装了解密方法。



**请求示例：**

1.获取手机号

```
//wxml
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">获取手机号 </button>

//js
 getPhoneNumber: function (res) {
    wx.Bmob.User.decryption(res).then(res => {
      console.log(res)
  })
    
 // 解密后返回数据格式如下
 // { "phoneNumber":"137xxxx6579", "purePhoneNumber":"137xxxx6579", "countryCode":"86", "watermark":{ "timestamp":1516762168, "appid":"wx094edexxxxx" } }
  }
```

2.获取分享群ID

```

//获取分享群ID
onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true
    })
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'Bmob 示例',
      path: 'pages/index/index',
      success: function (res) {
        wx.getShareInfo({
          shareTicket: res.shareTickets,
          success(res) {
            // 调用解密
            wx.Bmob.User.decryption(res).then(res => {
              console.log(res)
            })
          }
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
  
//解密后返回数据格式如下
{
 "openGId": "OPENGID"
}
```

3.解密运动步数

```
wx.getWeRunData({
      success(res) {
        wx.Bmob.User.decryption(res).then(res => {
          console.log(res)
        })
      }
    })
//解密后返回数据格式如下
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}
```





### 生成二维码 ###

**简介：**

通过路径生成二维码图片

**参数说明：**

Bmob.generateCode 参数列表

| 键 | 值 |参数说明 |
| --------- | ----------------- | ------------ |
| path      | pages/index/index | 页面路径，支持参数 |
| width     |        430        | 二维码宽度，这个参数微信规定不能少于180 |
| interface |        a\b\c      | 对应微信二维码abc方案 |
| scene     |        Bmob       | 微信B方案才需要此值 |
| type      |        0/1        | 默认0，返回二维码base64数据.如果为1则服务端返回为二维码网络路径 |

更多微信官方小程序码介绍 [微信官方小程序码介绍](https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html "微信官方小程序码介绍")

**请求示例：**

    let qrData = { path: 'path', width: width, type: 1 }
    Bmob.generateCode(qrData).then(function (res) {
    	console.log(res);
    })
    .catch(function (err) {
    	console.log(err);
    });

**返回示例:**


```
{
	cdn:"upyun"
	filename:"code.jpg"
	url:"http://qrCodeImageURL.jpg"
}
```

### 检测违规内容

**简介：**

微信小程序检测用户输入的内容是否违规，建议用户留言，评论，发布内容，调用此接口。

**参数说明：**

| 参数    | 类型   | 必填 | 说明                               |
| ------- | ------ | ---- | ---------------------------------- |
| content | string | 是   | 要检测的文本内容，长度不超过 500KB |

**请求示例：**

```
let content = 'hello'
Bmob.checkMsg(content).then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})
```

**返回示例:**

```
正常：
{"msg":"ok"}
违规：
{"code":10007,"error":"CheckMsg errcode:87014, err:risky content hint: [zLf1lA01758931]"}
```

### 

### 获取access_token ###

**简介：**

微信access_token，业务场景,当其他平台需要使用你小程序的token，并不想与Bmob的平台冲突，可以通过此API实现

**参数说明：**

无需参数

**请求示例：**

    Bmob.getAccessToken().then(function (response) {
    	console.log(response);
    })
    .catch(function (error) {
    	console.log(error);
    });

**返回示例:**


    {
    	access_token: 'access_token'
    }

### 小程序模版消息 ###
**简介：**

小程序模板消息，通过传入模版，设置模版信息，需要在模版中设置多个参数(openId,templateId,formId)

**参数说明：**

| 参数        | 类型   | 必填 |参数说明                                                     |
| ----------- | ------ | ------------------------------------------------------------ |
| touser      | string | 是 | 当前用户的`openid`                                           |
| template_id | string | 是 |模板Id，登陆微信后台获取                                     |
| page        | string | 是 |点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。 |
| form_id     | string | 是 |表单提交场景下，为 submit 事件带上的 [formId](https://developers.weixin.qq.com/miniprogram/dev/component/form.html)； 通过设置表单` report-submit` 属性 |
| data        | json   | 是 |对应微信后台当前模板的格式编写                               |

**定时发送：**

有时我们需要手动发送，或者定时发送，这时可以通过云函数的定时任务来实现，代码在控制台云函数模板。

**请求示例：**

    let modelData = {
        "touser": "open_Id",
        "template_id": "template_id",
        "page": "index",
        "form_id":"form_Id",
        "data": {
    	    "keyword1": {
    		    "value": "SDK测试内容",
    		    "color": "#173177"
    		},
    	    "keyword2": {
    	    	"value": "2018年04月18日 16:30"
    	    },
    	    "keyword3": {
    	    	"value": "Bmob科技"
    	    }
    	}
    	,"emphasis_keyword": ""
    }
    
    Bmob.sendWeAppMessage(modelData).then(function (response) {
    	console.log(response);
    }).catch(function (error) {
    	console.log(error);
    });
****

###  小程序付款到零钱

**简介：**

付款到零钱目前已经支持，常见使用场景是用户小程序里面提现，由于此接口用的人少，如需要使用可提交工单联系工作人员。

**注意事项：**

此功能先看下自己微信支付支付有开通，默认是没开通的，微信18年的开通条件是

**开通条件**
需同时满足两个条件，才有开通该功能入口：
1、T+0 （T日结算至基本账户），结算商户需满足两个条件：1、入驻满90天，2、截止今日往回推30天连续不间断保持有交易。
2、其余结算周期的商户无限制，可立即前往【商户平台】->【产品中心】申请开通。
注：连续30天交易无金额限制，请保持正常交易。

**使用条件：**

1. 需企业用户微信支付提前开通付款到零钱功能

2. 填写支付商户密匙到Bmob控制台

   



### 小程序支付

**简介：**

微信小程序支付，用户付款到微信支付账户。



**使用条件：**

1. 需企业用户提前开通微信支付
2. 填写支付商户id到Bmob控制台
3. 开通Bmob专业版或以上版本（可开通试用，工单联系）



**参数说明：**

```
var openId = wx.getStorageSync('openid');
//传参数金额，名称，描述,openid
    Bmob.Pay.weApp(0.01, '哇哈哈1瓶', '哇哈哈饮料，杭州生产', openId).then(function (resp) {
      console.log(resp);

      that.setData({
        loading: true,
        dataInfo: resp
      })

      //服务端返回成功
      var timeStamp = resp.timestamp,
        nonceStr = resp.noncestr,
        packages = resp.package,
        orderId = resp.out_trade_no,//订单号，如需保存请建表保存。
        sign = resp.sign;

      //打印订单号
      console.log(orderId);

      //发起支付
      wx.requestPayment({
        'timeStamp': timeStamp,
        'nonceStr': nonceStr,
        'package': packages,
        'signType': 'MD5',
        'paySign': sign,
        'success': function (res) {
          //付款成功,这里可以写你的业务代码
          console.log(res);
        },
        'fail': function (res) {
          //付款失败
          console.log('付款失败');
          console.log(res);
        }
      })

    }, function (err) {
      console.log('服务端返回失败');
      console.log(err);
    });
```



### 小程序退款 ###

**简介：**

退款操作

**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| order_no | string | 是   | 订单编号 |
| refund_fee  | number | 是   | 退款金额  |
| desc  | string | 是   | 描述  |

**请求示例：**

    let data = {
    	order_no: "order_no",
    	refund_fee: fee,
    	desc:"退款"
    }
    Bmob.refund(data).then(function (response) {
    	console.log(response);
    })
    .catch(function (error) {
    	console.log(error);
    });

**返回示例:**


    {
    	code: 107,
    	error: "content is empty."
    }

### 小程序解密

#### 1.获取手机号

```
//wxml
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">获取手机号 </button>

//js
 getPhoneNumber: function (res) {
    wx.Bmob.User.decryption(res).then(res => {
      console.log(res)
  })
    
 // 解密后返回数据格式如下
 // { "phoneNumber":"137xxxx6579", "purePhoneNumber":"137xxxx6579", "countryCode":"86", "watermark":{ "timestamp":1516762168, "appid":"wx094edexxxxx" } }
  }

```

#### 2.获取分享群ID

```
//获取分享群ID
onShareAppMessage: function (res) {
    wx.showShareMenu({
      withShareTicket: true
    })
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'Bmob 示例',
      path: 'pages/index/index',
      success: function (res) {
        wx.getShareInfo({
          shareTicket: res.shareTickets,
          success(res) {
            // 调用解密
            wx.Bmob.User.decryption(res).then(res => {
              console.log(res)
            })
          }
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
  
//解密后返回数据格式如下
{
 "openGId": "OPENGID"
}

```

#### 3.解密运动步数

```
wx.getWeRunData({
      success(res) {
        wx.Bmob.User.decryption(res).then(res => {
          console.log(res)
        })
      }
    })
//解密后返回数据格式如下
{
  "stepInfoList": [
    {
      "timestamp": 1445866601,
      "step": 100
    },
    {
      "timestamp": 1445876601,
      "step": 120
    }
  ]
}

```





### 微信主人通知 ###

**简介：**

微信主动推送通知，业务场景：比如你有APP，有人下单了，或者有人留言了。你可以收到微信推送通知。每日限制50条，如需更多，请工单联系客服

**注意事项：**

此模板是Bmob 云提供，不可使用自己`template_id`，`openid`在Bmob后端云服务号回复`openid`拿到。

**参数说明：**

| 参数        | 类型   | 必填 | 说明               |
| ----------- | ------ | ---- | ------------------ |
| touser      | string | 是   | 公众号openid       |
| template_id | string | 是   | 公众号 template_id |
| url         | string | 是   | 用户点击网址       |
| data        | object | 是   | 模板对应的格式     |

**请求示例：**

    let temp = {
      touser: "openid",
      template_id:"template_id",
      url: "http://www.bmob.cn/",
      data: {
    		first: {
    			value: "您好，Restful 失效，请登录控制台查看。",
    			color: "#c00"
    		},
    		keyword1: {
    			value: "Restful 失效"
    		},
    		keyword2: {
    			value: "2017-07-03 16:13:01"
    		},
    		keyword3: {
    			value: "高"
    		},
    		remark: {
    			value: "如果您十分钟内再次收到此信息，请及时处理。"
    		}
      	}
    }
    
    Bmob.notifyMsg(temp).then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });

**返回示例:**

    {
    	msg: "ok"
    }

#### 提供模板

1. 新订单通知（template_id：`K9-6_Ayj4MLC2yvwY60-cq18tngJHAlqDfsOvv3D7a8` ）

```
{{first.DATA}}

提交时间：{{tradeDateTime.DATA}}
订单类型：{{orderType.DATA}}
客户信息：{{customerInfo.DATA}}
{{orderItemName.DATA}}：{{orderItemData.DATA}}
{{remark.DATA}}
```

2. 系统报警通知（template_id：`-ERkPwp0ntimqH39bggQc_Pj55a18CYLpj-Ert8-c8Y` ）

```
{{first.DATA}}
系统名称：{{keyword1.DATA}}
报警时间：{{keyword2.DATA}}
报警级别：{{keyword3.DATA}}
{{remark.DATA}}
```

3. 购买成功通知（template_id：`Mbk3kYqRGkL98ch6Lie4XSXtOsxXj2SC0SRQXd89G1Y `）

```
您好，您已购买成功。

商品信息：{{name.DATA}}
{{remark.DATA}}
```

4. 审核结果通知（template_id：`aNNNmi7WK4kohleWhCkDRKJiHOZnIpkrhXx5XPx4dx0` ）

```
{{first.DATA}}
账号名称：{{keyword1.DATA}}
审核状态：{{keyword2.DATA}}
审核时间：{{keyword3.DATA}}
{{remark.DATA}}
```





### 小程序下载域名

由于最近微信封了~~*.upaiyun.com~~ 域名，如果你没做文件下载功能，只是显示图片，可以不填写。如果你需要做下载功能，在应用设置里面，可以开启独立域名， 开启后，填写到微信平台就好了，当然有时候你想用自己的域名，也是可以的，可以工单联系我们。



### 小程序客服消息

经常有人有需求，希望手机端回复客户消息。这时，可以基于微信客服接口函数使用云函数开发相关功能， 如果你不想开发，希望自己小程序直接可用客服消息，可以使用Bmob官方提供的服务消息解决方案，主动提醒、自动回复、手机一键处理客服。如需使用请应用升级页面操作



## 小程序WebSocket

**简介：**

小程序WebSocket主要用来做实时数据处理，例如实时监听订单表变化，聊天室等场景。（此业务每月99）





Bmob提供了数据实时功能，当开发者监听某个变化事件，例如监听表更新时，表的内容一旦变化，服务器就会通知SDK，SDK提供了相应回调函数来给开发者使用。当然开发者也可以取消相对应的监听，这样就不会收到数据变化的消息了。



### 使用实时数据平台的js

对实时数据对象进行初始化

```
let BmobSocketIo =new Bmob.Socket()
```

### 订阅事件

#### 订阅表更新的事件

订阅表"GameScore"更新的事件。

```
BmobSocketIo.updateTable("GameScore");
```

#### 订阅行更新的事件

订阅表"GameScore"中行objectId为"3342e40e4f"更新的事件。

```
BmobSocketIo.updateRow("GameScore","3342e40e4f");

```

#### 订阅行删除的事件

订阅表"GameScore"中行objectId为"3342e40e4f"删除的事件。

```
BmobSocketIo.deleteRow("GameScore","1256e40e4f");

```

### 取消订阅事件

#### 取消订阅表更新的事件

取消订阅表"GameScore"更新的事件。

```
BmobSocketIo.unsubUpdateTable("GameScore");

```

#### 取消订阅行更新的事件

取消订阅表"GameScore"中objectId为"3342e40e4f"行更新的事件。

```
BmobSocketIo.unsubUpdateRow("GameScore","3342e40e4f");

```

#### 取消订阅行删除的事件

取消订阅表"GameScore"中objectId为"3342e40e4f"行删除的事件。

```
BmobSocketIo.unsubDeleteRow("GameScore","1256e40e4f");

```

### 监听触发的事件

#### 监听更新表的事件

当订阅了表更新的表数据发送变化时，js中会触发函数onUpdateTable。

tablename为更新的表，data为服务端返回的更新数据。

```
   BmobSocketIo.onUpdateTable = function(tablename,data) {    
      //业务逻辑的代码
   };

```

#### 监听行更新的事件

tablename为更新的表，objectId为更新行的objectId，data为服务端返回的更新数据。

```
   BmobSocketIo.onUpdateRow = function(tablename,objectId,data) {    
      //业务逻辑的代码
   };

```

#### 监听行删除的事件

tablename为更新的表，objectId为更新行的objectId，data为服务端返回的更新数据。

```
   BmobSocketIo.onDeleteRow = function(tablename,objectId,data) {    
      //业务逻辑的代码
   };

```

### demo

在线上演示实时数据平台的一个聊天应用的demo：[chat room demo](http://chatroom.bmob.cn) ，演示了如何使用实时数据服务实现聊天的功能。

用浏览器打开两个窗口，在其中一个窗口输入`昵称`和`内容`，按`发送`按钮，在另外一个窗口能看到发送的内容。

小程序DEMO，搜索小程序：**Bmob 示例 **



## 短信服务操作 ##

### 请求短信验证码 ###
**简介：**

使用特定的模板请求验证码，如果没有在管理后台创建好模板，可使用默认的模板，Bmob 默认的模板是: 您的验证码是%smscode%，有效期为%ttl%分钟。您正在使用%appname%的验证码

**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| mobilePhoneNumber | string | 是   | 手机号 |
| template  | string | 否   | 模板信息  |

**请求示例：**

    let params = {
    	mobilePhoneNumber: 'mobilePhoneNumber' //string
    }
    Bmob.requestSmsCode(params).then(function (response) {
    	console.log(response);
    })
    .catch(function (error) {
    	console.log(error);
    });

**返回示例:**


    {
    	smsId: smsId
    }

### 验证短信验证码 ###
**简介：**

通过以下接口，你可以验证用户输入的验证码是否是有效。

**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| smsCode | string | 是   | 手机短信验证码 |
| mobilePhoneNumber | string | 是   | 手机号码 |

**请求示例：**

    let smsCode = 'smsCode'
    let data = {
      mobilePhoneNumber: 'telephone'
    }
    Bmob.verifySmsCode(smsCode, data).then(function (response) {
    	console.log(response);
    })
    .catch(function (error) {
    	console.log(error);
    });

**返回示例:**


    成功
    {
        "msg":"ok"
    }
    失败
    {
    	code: 301,
    	error: "手机号码必须是11位的数字"
    }
