/*
 * @Author: your name
 * @Date: 2019-07-02 09:41:29
 * @LastEditTime: 2020-06-17 18:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/src/main.js
 */
/* eslint-disable */
var Bmob = require('./lib/app')
// var Bmob = require('../dist/Bmob-1.7.1.min')

// Bmob.initialize('bb20359e8e7eb634fff2c76089ce0d80', '0dcb80eb0cf198b9facccbf3f0b29b89')
// Bmob.initialize('91cccd44cafd370aa5b89669d993b619', 'd56f4b86e5cd56e84f705b6f530e4806');
// Bmob.initialize('4df53b03a0b3a8ef', '123456');
// Bmob.initialize('ad1ef6c1eac9b6e7', '123456'); //内网

Bmob.initialize('9731770784b8c006', '111111')
Bmob.domain('http://website-restful.bmobapp.com')
Bmob.debug(true);


// 初始化AI链接
let ChatAi = Bmob.ChatAI()

// 按钮点击发送消息
setTimeout(()=>{
  // 发送消息
  console.log(ChatAi,"x");
  console.log(12);
  // session 会话id，可以传用户objectId，或者随机数
  // content 内容，提问的内容，如果希望上下文，可以这样传入
  // {"model":"gpt-3.5-turbo","messages":[{"content":"你好","role":"user"},{"content":"你好，有什么我可以为你提供的帮助吗？","role":"assistant"},{"content":"请问Bmob是什么产品","role":"user"}],"stream":true}
  let datas = {"messages":[{"content":"你好","role":"user"}],"session":"b1"}
ChatAi.send(JSON.stringify(datas))
},3000)

// 返回消息处理
let msg = ''
ChatAi.onMessage((res)=>{
  if(res=="done"){
    console.log(msg);
  }else{
    msg = msg+res
  }
})

// const query = Bmob.Query('_User')
// // query.equalTo('username','!=','ff')
// query.find().then(res => {
//     console.log(res)
// })

// let BmobSocketIo = Bmob.Socket(33)

// const fileUploadControl = document.getElementById('profilePhotoFileUpload');
// fileUploadControl.onchange = () => {
//   const pic = fileUploadControl.files
//   let file
//   for(let item of pic){
//      file = Bmob.File(item.name, item);
//   }
//   file.save().then(res => {
//     const file = res[0]
//     console.log(res.length);
//     console.log(res,file);
  

//   })
// }

