var Duck = require('./models/duck');

// Return all ducks in JSON format
function getDucks(res) {
	Duck.find(function(err, data) {
		if (err)res.send(err);
		res.json(data);
	});
};

module.exports = function (app) {

	// GET STATUS
	app.get('/api/status', function (req, res) {
		res.status(200).json({
			status: "Running"
		});
	});

	// GET ALL DUCKS
	app.get('/api/ducks', function (req, res) {
		Duck.find({}, { '_id': 1, 'name': 1 }).exec(function (err, data) {
			if (err)res.send(err);
			res.status(200).json(data);
		});
	});

	// CREATE DUCK
	app.post('/api/duck', function (req, res) {
		console.log(req.body);

		// Create a duck
		Duck.create({
			name: req.body.name
		}, function (err, stock) {
			if (err)res.send(err);

			Duck.find({}, { '_id': 1, 'name': 1 }).exec(function (err, data) {
				if (err)res.send(err);
				res.status(200).json(data);
			});
		});
	});

	// DELETE DUCK
	app.delete('/api/duck', function (req, res) {
		console.log(req.body);
		var duckID = req.body.id;

		console.log(duckID);

		Duck.find({ _id: duckID }).remove(function(err, duck) {
			if (err || !duck){
				res.status(404).send("Could not find duck");
			} else {
				Duck.find({}, { '_id': 1, 'name': 1 }).exec(function (err, data) {
					if (err)res.send(err);
					res.status(200).json(data);
				});
			}
		});
	});

};
