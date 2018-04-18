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

