const mongoose = require('mongoose');

//ADR Schema
const adrSchema = mongoose.Schema({
	Item :{
		type: String,
		required: true
	},
	Quantity :{
		type: String,
		required: true
	},
	Name :{
		type: String
	},
	Rate :{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	},
	update_date:{
		type: Date,
		default: Date.now
	}
});

const Adr = module.exports = mongoose.model('adr', adrSchema);

// Get ADR
module.exports.getadr = (callback, limit) => {
	Adr.find(callback).limit(limit);
}

// Get ADR
module.exports.getadrById = (id, callback) => {
	Adr.findById(id, callback);
}

// Add Book
module.exports.addadr = (adr, callback) => {
	Adr.create(adr, callback);
}

// Update Book
module.exports.updateadr = (id, adr, options, callback) => {
	var query = {_id: id};
	var update = {
		Item : adr.Item ,
		Quantity : adr.Quantity ,
		Name : adr.Name ,
		Rate : adr.Rate ,
		create_date: adr.create_date
	}
	Adr.findOneAndUpdate(query, update, options, callback);
}

// Delete Book
module.exports.removeadr = (id, callback) => {
	var query = {_id: id};
	Adr.remove(query, callback);
}
