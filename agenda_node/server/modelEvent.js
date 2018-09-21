const mongoose = require('mongoose')
const Schema = mongoose.Schema

	let EventSchema = new Schema({
		id:{ type: Number, require: true },
		title:{ type: String, require: true },
		start:{ type: Date, require: true },
		end:{ type: Date, require: true },
		start_hour:{ type: String },
		end_hour:{ type: String}
	})
	let EventModel = mongoose.model('Evento', EventSchema)
	module.exports = EventModel


//La base de datos la llamaremos c7 (curso 7). Para probar que la conexión se realiza con éxito y se crean tanto la base de datos como la colección,
//abriremos una terminal: entramos al REPL de Mongo y listamos las bases de datos con el comando show dbs. Recuerda tener corriendo el servicio MongoD.
