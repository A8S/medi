const Disease = require('../models/disease');
const SubDisease = require('../models/subdisease');

exports.getDiseases = (req, res) => {
	Disease.find({}, (err, foundDiseases) => {
		if (err) {
			console.log(err);
		} else {
			res.send(foundDiseases);
		}
	});
};

exports.getDisease = async (req, res) => {
	Disease.findById(req.params.dId, (err, foundDisease) => {
		if (err) {
			console.log(err);
		} else {
			res.send(foundDisease);
		}
	});
};
exports.createDisease = (req, res) => {
	console.log(JSON.parse(Object.keys(req.body)[0]));
	const { title } = JSON.parse(Object.keys(req.body)[0]);
	let disease = new Disease({ title }); // so post will be there with all the fields coming

	disease.save((err, result) => {
		if (err) {
			return res.status(400).json({
				error: err
			});
		}
		res.json(result);
	});
};

exports.updateDisease = (req, res) => {
	Disease.findByIdAndUpdate(
		req.params.dId,
		JSON.parse(Object.keys(req.body)[0]),
		{ new: true },
		(err, updatedDisease) => {
			if (err) {
				console.log(err);
			} else {
				res.send(updatedDisease);
			}
		}
	);
};

exports.deleteDisease = (req, res) => {
	Disease.findById(req.params.dId, (err, foundDisease) => {
		if (err) {
			console.log(err);
		} else {
			foundDisease.subdiseases.forEach((sub) => {
				SubDisease.findByIdAndRemove(sub._id, (err) => {
					console.log(err);
				});
			});

			foundDisease.remove((err) => {
				if (err) {
					console.log(err);
				} else {
					const response = {
						message: 'Disease successfully deleted',
						id: req.params.dId
					};
					res.status(200).send(response);
				}
			});
		}
	});
};
