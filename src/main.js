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

console.log({})
// const query = Bmob.Query('project');
// query.get('iET1NDDN').then(res => {
//   console.log(res)
//   for(let item in res){
//     console.log(item)
//   }
//   res.set("name","修改的成功")
//   res.set("cover","2222")
//   res.save()
// }).catch(err => {
//   console.log(err)
// })

const query = Bmob.Query('project');
query.set("name","fff")
query.set("cover","333")
query.save().then(res => {
  console.log(res)

}).catch(err => {
  console.log(err)
})

//  Bmob.User.login('aaaaaa','111111f').then(res => {
//    console.log(res)
//  }).catch(err => {
//   console.log(err)
// });

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


// // //
// const query = Bmob.Query('project');
// query.get('iET1NDDN').then(res => {
//   console.log(res)
//   res.set('cover','444')
//   res.save().then(res => {
//     console.log(res)
//   })
// }).catch(err => {
//   console.log(err)
// })


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
