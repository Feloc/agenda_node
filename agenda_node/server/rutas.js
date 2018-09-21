const Router = require('express').Router();
const Users = require('./model.js')
const Events = require('./modelEvent.js')

Router.post('/login', function(req, res) {
    var user = req.body.user
    var pass = req.body.pass
    Users.findOne({email: user}).exec(function(err, doc){
      if (err){
        res.status(500)
        res.json(err)
      }

      var usuario = doc.email
      var password = doc.password
        if (usuario == user && password == pass) {
          res.send("Validado")
        }else{
          res.send("invalido")
        }
    })
})

//Obtener todos los usuarios
Router.get('/all', function(req, res) {
    Events.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Agregar a un usuario
Router.post('/new', function(req, res) {
    let even = new Events({
        //id: Math.floor(Math.random() * 50),
        id: req.body.id,
        title: req.body.title,
        start: req.body.start,
        end: req.body.end,
        start_hour: req.body.start_hour,
        end_hour: req.body.end_hour
    })
    even.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Evento guardado")
    })
})

Router.post('/update', function(req, res){
  let id = req.body.id,
      title = req.body.title,
      start = req.body.start,
      end = req.body.end,
      start_hour= req.body.start_hour,
      end_hour= req.body.end_hour

  Events.updateOne({id: id}, {id: id, start: start, end: end}, function(error) {
  //Events.updateOne({id: id}, {eve}, function(error) {

      if(error) {
          res.status(500)
          res.json(error)
      }
    })
  res.send('Evento modificado')
})

// Eliminar un usuario por su id
Router.post('/delete', function(req, res) {
    let id = req.body.id
    Events.remove({id: id}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }

        res.send('Evento eliminado')
    })
})


module.exports = Router
