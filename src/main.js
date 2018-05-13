// import Bmob from './lib/bmob'
var Bmob = require('./lib/app')

console.log(Bmob)

//
//  微信小程序模块
//  生成二维码 @object
// let qrData = { path: 'path', width: 430, type: 1 }
// Bmob.generateCode(qrData).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
//
//
//  获取access_token
// Bmob.getAccessToken().then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
//
//  小程序模板消息 @object
// let modelData = {
//     "touser": "open_Id",
//     "template_id": "template_id",
//     "page": "index",
//     "form_id":"form_Id",
//     "data": {
//         "keyword1": {
//             "value": "SDK测试内容",
//             "color": "#173177"
//         },
//         "keyword2": {
//             "value": "2018年04月18日 16:30"
//         },
//         "keyword3": {
//             "value": "Bmob科技"
//         }
//     }
//     ,"emphasis_keyword": ""
// }
// Bmob.sendWeAppMessage(modelData).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
//  退款
// let data = {
//     order_no: "1cc2592e9903d9994be7f9a8c2cjsapi",
//     refund_fee: 0.01,
//     desc:"退款"
// }
// Bmob.refund(data).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// restful短信服务模块
// 请求短信验证码
// let params = {
//     mobilePhoneNumber: '15692023892' string
// }
// Bmob.requestSmsCode(params).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 验证短信验证码
// let smsCode = '167899'
// let data = {
//   "mobilePhoneNumber": phoneNum
// }
// Bmob.verifySmsCode(smsCode, data).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 微信主人通知
// let data = {
//   touser: "Bmob公众号回复，openid 得到",
//   template_id:"-ERkPwp0ntimqH39bggQc_Pj55a18CYLpj-Ert8-c8Y",
//   url: "http://www.bmob.cn/",
//   data: {
//       first: {
//           value: "您好，Restful 失效，请登录控制台查看。",
//           color: "#c00"
//       },
//       keyword1: {
//           value: "Restful 失效"
//       },
//       keyword2: {
//           value: "2017-07-03 16:13:01"
//       },
//       keyword3: {
//           value: "高"
//       },
//       remark: {
//           value: "如果您十分钟内再次收到此信息，请及时处理。"
//       }
//   }}
//
// Bmob.notifyMsg(data).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 云函数
// let params =　{
//   funcName: 'hello',
//   data: {
//     name : 'bmob'
//   }
// }
// Bmob.functions(params.funcName,params.data).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 密码重置(Email)
// let data = {
//   email: '329685131@qq.com'
// }
// Bmob.requestPasswordReset(data).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// 密码重置(短信重置方式)
// let smsCode= '855828'
// let param = {
//   password: 'game20114'
// }
// Bmob.resetPasswordBySmsCode(smsCode,param).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// 获取登录用户sessionToken
// let data = {
//   username: 'kken',
//   password: 'game20114'
// }
// Bmob.User.login(data.username,data.password).then(res => {
//   console.log('sessionToken', res.sessionToken)
// }).catch(err => {
//   console.log(err)
// })
// 密码重置(登录状态下，密码重置)
// let objId ='5yej333K'
// let data = {
//   oldPassword: 'game2014',
//   newPassword: 'game20114'
// }
// Bmob.updateUserPassword(objId,data).then(res => {
//     console.log(res)
//   }).catch(err => {
//     console.log(err)
//   })

// 查询用户
// Bmob.User.users().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// APP推送
// let data = {
//   data: {
//     alert: "Hello From Bmob."
//   }
// }

// Bmob.push(data).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

Bmob.initialize("71acb3659ea66abed6b7739f9bd2e914", "45ef983f011036c5868e9e9a38c193ec")
console.log(Bmob)
// Bmob.User.login('bbbbbb','bbbbbb').then(res => {
//   console.log(res,'ok')
// }).catch(err => {
//  console.log(err,'err')
// });
//
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
    const file = res[0]
    query.get('jzQMAAAO').then(res => {
      res.set('aaa',0)
      res.set('buer',true)
      res.set('text',"6666")
      res.set('file',file)
      res.set('arr',['2','4','5'])
      res.set('json',{a:11,b:[1],c:{d:"33"}})
      res.save().then(res => {
        console.log(res);
      })
    })
  })
}

// const own = {
//   "__type": "Pointer",
//   "className": "_User",
//   "objectId": "72KFIIIi"
// }
//
Bmob.User.login('admin','123456').then(res => {
  console.log(res)
}).catch(err => {
 console.log(err)
});

// const Relation = Bmob.Relation('users')
// Relation.field('abcd','a312d300eb','two')
// Relation.find().then(res => {
//   console.log(res);
// })
// const id = own.unset('73d4587140')

// Relation的查询
// query.field('two','a312d300eb')
// query.relation('_User').then(res => {
//   console.log(res);
// })
//
// // Relation的添加
// const relation = Bmob.Relation('_User')
// const relID = relation.add(['5PnCXXX6','QdXD888B'])
// query.get('jzQMAAAO').then(res => {
//   res.set('two',relID);
//   res.save()
// })
// // Relation的删除
// const relation = Bmob.Relation('_User')
// const relID = relation.remove(['5PnCXXX6','QdXD888B'])
// query.get('jzQMAAAO').then(res => {
//   res.set('two',relID);
//   res.save()
// })
//
// const pointer = Bmob.Pointer('_User')
// const poiID = pointer.set('QdXD888B')
// query.get('c02b7b018f').then(res => {
//   res.set('own',poiID)
//   res.save()
// })
const query = Bmob.Query('abcd')
query.equalTo('aaa','<=',123)
query.count().then(res => {
  console.log(res);
})

// query.get('c02b7b018f').then(res => {
//   console.log(res);
// })
//

//
// const del = Bmob.File();
// const val =  ["http://bmob-cdn-15009.b0.upaiyun.com/2018/05/02/aae4998a403e018680a7eff90852905e.jpg"]
// del.destroy(val).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

//  Bmob.User.login('aaaaaa','111111f').then(res => {
//    console.log(res)
//  }).catch(err => {
//   console.log(err)
// });
//
// Bmob.timestamp().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
//
// Bmob.User.requestEmailVerify('bmob2018@bmob.cn').then(res => {
//  console.log(res)
// }).catch(err => {
//  console.log(err)
// });

// const query = Bmob.Query('test3');
//  query.include('hh','ff')
// query.find().then(res => {
//   console.log(res)
//
// })
//

// query.find().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//
// const test = Bmob.Query('test3');
// test.set('aaa','111');
// test.set('aaa','333');
// test.save().then(res => {
