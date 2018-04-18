# SDK使用文档



## 用户操作





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
	
## 小程序模板消息返回实例待补充 ##