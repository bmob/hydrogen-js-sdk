import Bmob from './lib/app'
// var Bmob = require('./lib/bmob')

// import Bmob from './js/Bmob-1.0.0.min.js'
console.log(Bmob)


Bmob.initialize("83c627d276f41bc0f62adbd5ce875e8a","b939b7e1b0c8b221dd4a1320dbc4cd4d")
//
//  微信小程序模块
// // 生成二维码 @object
// let qrData = { path: 'path', width: 430, type: 1 }
// Bmob.generateCode(qrData).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
//
//
// // 获取access_token
// Bmob.getAccessToken().then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
//
// // 小程序模板消息 @object
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
// // 退款
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
//     mobilePhoneNumber: '15692023892' //string
// }
// Bmob.requestSmsCode(params).then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 验证短信验证码
// let smsCode = '167899'
// Bmob.verifySmsCode(smsCode).then(function (response) {
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
Bmob.initialize("71acb3659ea66abed6b7739f9bd2e914","45ef983f011036c5868e9e9a38c193ec")

// const query = Bmob.Query('project');
// query.set("name","fff")
// query.set("cover","333")
// query.save().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//  Bmob.User.login('aaaaaa','111111f').then(res => {
//    console.log(res)
//  }).catch(err => {
//   console.log(err)
// });
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


const query = Bmob.Query('test3');
const b = query.terms('createdAt','<=','2018-04-18 16:30:01')
const a = query.terms('createdAt','>','2018-04-17 22:43:09')
query.terms('aab','==','222')
query.and(a,b)
query.limit(3)
query.skip(3)
query.select('aab','bb')
// query.order('createdAt')
query.find().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

query.count().then(res => {
  console.log(res);
})

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
