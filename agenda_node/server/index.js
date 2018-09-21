const http = require('http'),
      path = require('path'),
      Routing = require('./rutas.js'),
      express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const PORT = 8082
const app = express()

const Server = http.createServer(app)

//var Operaciones = require('./usuario.js')


mongoose.connect('mongodb://localhost/agenda')

/*Operaciones.insertarRegistro((error, result) =>{
  if(error)console.log(error)
  console.log(result)
})*/


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use('/events', Routing)

app.use(express.static('client'))


Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})


//console.log('HOLA');
