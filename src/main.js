import Bmob from './lib/app'
// var Bmob = require('./lib/bmob')

// import Bmob from './js/Bmob-1.0.0.min.js'
console.log(Bmob)
Bmob.initialize("39ee83f92ff3a195130596a4eaec5ddf","a1223fca87f5d229953817f5c2493446")


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

const query = Bmob.Query('test999');

query.get('Fg2elllC').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
