const mongoose = require('mongoose')
const Schema = mongoose.Schema

	let UserSchema = new Schema({
		userId:{ type: Number, require: true, unique:true },
		email:{ type: String, require: true },
		//apellidos:{ type: String, require: true },
		password:{ type: String, require: true }
		//sexo:{ type: String, require: true, enum: ['M', 'S']},
		//estado:{ type: String, require: true, enum: ['Activo', 'Inactivo'] }
	})
	let UserModel = mongoose.model('Usuario', UserSchema)
	module.exports = UserModel


//La base de datos la llamaremos c7 (curso 7). Para probar que la conexión se realiza con éxito y se crean tanto la base de datos como la colección,
//abriremos una terminal: entramos al REPL de Mongo y listamos las bases de datos con el comando show dbs. Recuerda tener corriendo el servicio MongoD.
