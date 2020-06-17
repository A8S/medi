const Disease = require('../models/disease');
const Subdisease = require('../models/subdisease');

exports.getSubdisease = async (req, res) => {
	Subdisease.findById(req.params.sdId, (err, foundSubdisease) => {
		if (err) {
			console.log(err);
		} else {
			res.send(foundSubdisease);
		}
	});
};
exports.createSubdisease = (req, res) => {
	// console.log(req.body);
	// let data = JSON.parse(Object.keys(req.body)[0]);
	// data.books = req.body[JSON.parse(Object.keys(req.body)[0])];
	// console.log(data);
	console.log(req.body);
	// console.log(Object.keys(req.body)[0]);
	// Disease.findById(req.params.dId, (err, foundDisease) => {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		console.log('found the disease');
	// 		console.log(foundDisease);
	// 		req.body.disease = req.params.dId;
	// 		console.log(req.body);
	// 		Subdisease.create(req.body, function(err, subdisease) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				subdisease.save();
	// 				foundDisease.subdiseases.push(subdisease);
	// 				foundDisease.save();
	// 				res.send(subdisease);
	// 			}
	// 		});
	// 	}
	// });
};

exports.updateSubdisease = (req, res) => {
	Subdisease.findByIdAndUpdate(req.params.sdId, req.body, { new: true }, (err, updatedSubdisease) => {
		if (err) {
			console.log(err);
		} else {
			res.send(updatedSubdisease);
		}
	});
};

exports.deleteSubdisease = (req, res) => {
	Subdisease.findById(req.params.sdId, (err, foundSubdisease) => {
		if (err) {
			console.log(err);
		} else {
			Disease.findById(foundSubdisease.disease, (err, foundDisease) => {
				if (err) {
					console.log(err);
				} else {
					console.log('found the disease');
					console.log(foundDisease);
					foundDisease.subdiseases = arrayRemove(foundDisease.subdiseases, req.params.sdId);
					foundDisease.save();
				}
			});
			foundSubdisease.remove();
			const response = {
				message: 'Subdisease successfully deleted',
				id: req.params.sdid
			};
			res.status(200).send(response);
		}
	});
};

function arrayRemove(arr, value) {
	return arr.filter(function(ele) {
		return ele != value;
	});
}
