/* eslint-disable */
var Bmob = require('./lib/app')
// var Bmob = require('../dist/Bmob-1.7.1.min')

// Bmob.initialize('bb20359e8e7eb634fff2c76089ce0d80', '0dcb80eb0cf198b9facccbf3f0b29b89')
// Bmob.initialize('91cccd44cafd370aa5b89669d993b619', 'd56f4b86e5cd56e84f705b6f530e4806');
// Bmob.initialize('4df53b03a0b3a8ef', '123456');
Bmob.initialize('ad1ef6c1eac9b6e7', '123456'); //内网
// Bmob.debug(true);

// const BmobSocketIo = Bmob.Socket()

const query = Bmob.Query('_User')
query.equalTo('username','!=','ff')
query.find().then(res => {
    console.log(res)
})

// let BmobSocketIo = Bmob.Socket(33)

const fileUploadControl = document.getElementById('profilePhotoFileUpload');
fileUploadControl.onchange = () => {
  const pic = fileUploadControl.files
  let file
  for(let item of pic){
     file = Bmob.File(item.name, item);
  }
  file.save().then(res => {
    const file = res[0]
    console.log(res.length);
    console.log(res,file);
  

  })
}