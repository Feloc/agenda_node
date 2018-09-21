var User = require('./model.js')

//module.exports.insertarRegistro = function(callback){
let user = new User({
    userId: Math.floor(Math.random() * 50),
    email: 'angelatru@hotmail.com',
    password: '12345'
  })

user.save((error) => {
  if (error)callback(error)
  callback(null, "Registro guardado")
})

//}
