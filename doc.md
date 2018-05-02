# SDK使用文档



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

### 

### 查询用户

 **简介：**

你可以一次获取多个用户，只要向用户的根URL发送一个GET请求，没有任何URL参数的话，可以简单地列出所有用户。

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

### 验证 Email

**简介：**

设置邮件验证是一个可选的应用设置, 这样可以对已经确认过邮件的用户提供一部分保留的体验，邮件验证功能会在用户(User)对象中加入emailVerified字段, 当一个用户的邮件被新添加或者修改过的话，emailVerified会默认被设为false，如果应用设置中开启了邮箱认证功能，[Bmob](http://www.bmob.cn/)会对用户填写的邮箱发送一个链接, 这个链接可以把emailVerified设置为 true.

emailVerified 字段有 3 种状态可以考虑：

**true** : 用户可以点击邮件中的链接通过[Bmob](http://www.bmob.cn/)来验证地址，一个用户永远不会在新创建这个值的时候出现emailVerified为true。

**false** : 用户(User)对象最后一次被刷新的时候, 用户并没有确认过他的邮箱地址, 如果你看到emailVerified为false的话，你可以考虑刷新 用户(User)对象。

**missing** : 用户(User)对象已经被创建，但应用设置并没有开启邮件验证功能； 或者用户(User)对象没有email邮箱。

发送到用户邮箱验证的邮件会在一周内失效

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

### 文件上传

 **简介：**

文件上传操作

 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| fileName | string | 是   | 文件名(带后缀) |

**请求示例：**


    let data = {
      filename: 'hello.txt'
    }
    
    Bmob.pushfile(data.filename).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

**返回示例:**
    {
      "filename": filename,
      "url": url,
      "cdn":cdnname
    }

### 文件删除

 **简介：**

文件删除操作

 **参数说明：**

| 参数     | 类型   | 必填 | 说明   |
| -------- | ------ | ---- | ------ |
| cdnName | string | 是   | 上传文件时返回的cdn |
| url  | string | 是   | 上传文件时返回的url |

**请求示例：**


    let params = {
      "filename": filename,
      "url": url,
      "cdn":cdnname
    }
    Bmob.deletefile(params.cdn,params.url).then(res => {
    	console.log(res)
    }).catch(err => {
    	console.log(err)
    })

**返回示例:**
    {
      "msg": "ok"
    }

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
    query.set("name","fff")
    query.set("cover","1111")
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
      }).ctach(err => {
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


### 条件查询

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
query.equalTo("title", "hello");
query.find().then(res => {
    console.log(res)
});
```

**或查询**

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

**查询指定列**
```
const query = Bmob.Query("tableName");
// 只返回select的字段值
query.select("title");
query.find().then(res => {
  // 返回成功
  console.log(res)
});
```


**分页查询**

有时，在数据比较多的情况下，你希望查询出的符合要求的所有数据能按照多少条为一页来显示，这时可以使用`limit`方法来限制查询结果的数据条数来进行分页。默认情况下，Limit的值为10，最大有效设置值1000（设置的数值超过1000还是视为1000）。
```
// 返回最多10条数据
query.limit(10);
```
在数据较多的情况下，在`limit`的基础上分页显示数据是比较合理的解决办法，`skip`方法可以做到跳过查询的前多少条数据来实现分页查询的功能。默认情况下`skip`的值为10。
```
query.skip(10); // skip the first 10 results
```
**结果排序**

我们可以对返回的结果进行排序（只支持`number`，`date`，`string`类型的排序），示例代码如下：
```
// 对score字段升序排列
query.order("score");

// 对score字段降序排列
query.order("-score");

// 多个字段进行排序
query.order("-score","name");
```

**统计记录数量**

如果你只是想统计满足`query`的结果集到底有多条记录，你可以使用`count`方法。如为了获得diary表的记录数量，示例代码如下：
```
const query = Bmob.Query('diary');
query.count().then(res => {
  console.log(`公有${res}条记录`)
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

通过查询条件查询0条记录，然后模拟假数据

```
const query = Bmob.Query('tableName');
// 设置一个不存在的条件，查询出0条数据
query.equalTo("createdAt", "<", "1971-04-01 00:00:00");
query.find().then(todos => {
  //模拟50条数据
  for (let index = 0; index < 50; index++) {
    todos.push({})
  }
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

#### 查询Pointer

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

#### 添加Pointer类型

简介：Pointer 类型在数据库是一个json数据类型，单遇到Pointer字段，只需要按照以下操作

```
const own = {
  "__type": "Pointer",
  "className": "Game",
  "objectId": "DdUOIIIW"
}
const query = Bmob.Query('tableName');
query.get('objectId').then(res => {
  console.log(res)
  res.set('own',own)
  res.save()
}).catch(err => {
  console.log(err)
})
```



## 数组操作

为了帮你存储数组类数据，有三种操作你可以原子性地改动一个数组，这需要一个给定的 key：

-  `add`在一个数组的末尾加入一个给定的对象。
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




## 小程序操作 ##
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

参数在模版信息中传入

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
    })
    .catch(function (error) {
    	console.log(error);
    });
**返回示例:**

### 小程序模板消息返回示例待补充 ###


### 退款 ###
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



### 云函数 ###

**简介：**

云函数调用

**参数说明：**

| 参数      | 类型   | 必填 | 说明     |
| --------- | ------ | ---- | -------- |
| funcName | string | 是   | 手机号 |
| requestData  | string | 否   | 模板信息  |

**请求示例：**

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

    {
    	result: "欢迎使用Bmob"
    }

### 小程序下载域名

由于最近微信封了~~*.upaiyun.com~~ 域名，如果你没做文件下载功能，只是显示图片，可以不填写。如果你需要做下载功能，在应用设置里面，可以开启独立域名， 开启后，填写到微信平台就好了，当然有时候你想用自己的域名，也是可以的，可以工单联系我们。

### 小程序客服消息

经常有人有需求，希望手机端回复客户消息。这时，可以基于微信客服接口函数使用云函数开发相关功能， 如果你不想开发，希望自己小程序直接可用客服消息，可以使用Bmob官方提供的服务消息解决方案，主动提醒、自动回复、手机一键处理客服。如需使用请应用升级页面操作



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

**请求示例：**

    let smsCode = 'smsCode'
    Bmob.verifySmsCode(smsCode).then(function (response) {
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
