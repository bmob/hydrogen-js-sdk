import Bmob from './lib/app'
// var Bmob = require('./lib/bmob')

// import Bmob from './js/Bmob-1.0.0.min.js'
console.log(Bmob)


// Bmob.initialize("83c627d276f41bc0f62adbd5ce875e8a","b939b7e1b0c8b221dd4a1320dbc4cd4d")
//
//  微信小程序模块
// // 生成二维码
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
// // 小程序模板消息
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

Bmob.initialize("71acb3659ea66abed6b7739f9bd2e914","45ef983f011036c5868e9e9a38c193ec")
//
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


Bmob.User.requestEmailVerify('bmob2018@bmob.cn').then(res => {
  console.log(res)
}).catch(err => {
 console.log(err)
});


const query = Bmob.Query('test3');
//
// query.notEqualTo('aab',"212")
// query.equalTo('aaa',"333")
// query.terms('createdAt','>','2018-04-17 22:43:09')
query.terms('createdAt','>','2018-04-18 14:49:50')
query.find().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
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
