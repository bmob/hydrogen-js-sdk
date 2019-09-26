const Bmob = require('../src/lib/app')
// const Bmob = require('../dist/Bmob-2.2.1.min')
console.log(Bmob.type)
Bmob.initialize('ad1ef6c1eac9b6e7', '123456')

const query = Bmob.Query('_User')
query.equalTo('username', '!=', 'ff')
query.find().then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})