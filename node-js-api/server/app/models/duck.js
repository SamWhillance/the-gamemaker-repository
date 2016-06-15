var mongoose = require('mongoose');

module.exports = mongoose.model('Duck', {

	name: {
		type: String,
		default: 'unnamed_duck'
	}

});
