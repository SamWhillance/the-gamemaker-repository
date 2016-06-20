var Duck = require('./models/duck');

// Return all ducks in JSON format
function returnAllDucks(response){
	Duck.find({}, { '_id': 1, 'name': 1 }).exec(function (err, data) {
		if (err)response.send(err);
		response.status(200).json(data);
	});
}

module.exports = function (app) {

	// Return a JSON object
	app.get('/api/status', function (request, response) {
		var obj = {
			status: "Running"
		};
		response.status(200).json(obj);
	});

	// Create Duck
	app.post('/api/duck', function (request, response) {
		Duck.create({
			name: request.body.name
		}, function (err, stock) {
			if (err)response.send(err);
			returnAllDucks(response);
		});
	});

	// Read Ducks
	app.get('/api/ducks', function (request, response) {
		return returnAllDucks(response);
	});

	// Update Duck
	app.put('/api/duck/:id', function (request, response) {
		var duckID = request.params.id;
		var newName = request.body.newName;

		Duck.update({ _id: duckID }, { name: newName }, function(err, doc){
			if (err) return response.status(500).json({ error: err });
			return returnAllDucks(response);
		});
	});

	// Delete Duck
	app.delete('/api/duck/:id', function (request, response) {
		var duckID = request.params._id;

		Duck.find({ _id: duckID }).remove(function(err, duck) {
			if (err || !duck){
				response.status(404).send("Could not find duck");
			} else {
				Duck.find({}, { '_id': 1, 'name': 1 }).exec(function (err, data) {
					if (err)response.send(err);
					response.status(200).json(data);
				});
			}
		});
	});

};
