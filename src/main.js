import Bmob from './lib/app'
// var Bmob = require('./lib/bmob')

// import Bmob from './js/Bmob-1.0.0.min.js'
console.log(Bmob)
Bmob.initialize("71acb3659ea66abed6b7739f9bd2e914","45ef983f011036c5868e9e9a38c193ec")


// var GameScore = Bmob.Object.extend("GameScore");
// var query = Bmob.Query(GameScore);
// query.get("4edc3f6ee9").then(function (response) {
//         console.log(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// 生成二维码
// Bmob.generateCode().then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

const query = Bmob.Query('project');

query.get('iET1NDDN').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

query.get('ZiQs2112').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

const test = Bmob.Query('test3');
test.get('nh3RGGGc').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
