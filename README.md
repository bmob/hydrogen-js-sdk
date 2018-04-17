# bmob-js-sdk-es6

### SDK介绍

本SDK基于es6开发，致力打造基于前端混合开发需求，支持微信小程序、H5、快应用、混合App等平台



### 运行

```
npm run dev
```



###目录结构

```
.
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
|   `-- utils.js	公用函数
`-- main.js			入口
```



### API接口说明

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