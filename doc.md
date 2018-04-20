# SDK使用文档



## 用户操作

### 登陆

 **简介：**

通过用户名密码登陆

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

```
{
  "msg": "ok"
}
```

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

```
{
  "msg": "ok"
}
```
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

```
const query = Bmob.Query('tableName');
query.set("name","fff")
query.set("cover","1111")
query.save().then(res => {
  console.log(res)

}).catch(err => {
  console.log(err)
})
```



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

```
const query = Bmob.Query('tableName');
query.destroy('objectId').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

```
or

```
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

```

**返回示例:**

```
{
  msg: "ok"
}
```

## 小程序操作 ##
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

微信主动推送通知，业务场景：比如你有APP，有人下单了，或者有人留言了。你可以收到微信推送通知。

**参数说明：**

模版信息

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
    function onRequest(request, response, modules) {
      //获取SDK客户端上传的name参数
      var name = request.body.name;
	  if(name == 'bmob')
	    response.end('欢迎使用Bmob');
	  else
	    response.end('输入错误，请重新输入');
    }  
**返回示例:**
	
    {
    	result: "欢迎使用Bmob"
    }

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
