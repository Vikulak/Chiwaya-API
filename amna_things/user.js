var amna = require ('amna');

var User = module.exports = amna.thing ({
	email: String, 
	name: String,
	location: String
});