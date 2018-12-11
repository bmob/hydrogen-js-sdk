/* eslint-disable */
var Bmob = require('./lib/app')
// var Bmob = require('../dist/Bmob-1.6.7.min')

// Bmob.initialize('bb20359e8e7eb634fff2c76089ce0d80', '0dcb80eb0cf198b9facccbf3f0b29b89')
Bmob.initialize('91cccd44cafd370aa5b89669d993b619', 'd56f4b86e5cd56e84f705b6f530e4806');

// const BmobSocketIo = Bmob.Socket()

const query = Bmob.Query('welcome')
query.find().then(res => {
    console.log(res)
})