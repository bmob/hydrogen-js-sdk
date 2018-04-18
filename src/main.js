import Bmob from './lib/app'
// var Bmob = require('./lib/bmob')

// import Bmob from './js/Bmob-1.0.0.min.js'
console.log(Bmob)


Bmob.initialize("83c627d276f41bc0f62adbd5ce875e8a","b939b7e1b0c8b221dd4a1320dbc4cd4d")
//
// 生成二维码
// Bmob.generateCode().then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

// 获取access_token
Bmob.getAccessToken().then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
// const query = Bmob.Query('project');
// query.get('iET1NDDN').then(res => {
//   console.log(res)
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
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
//
// test.find().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
