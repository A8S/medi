const Feedback = require('../models/feedback');

exports.getFeedbacks = (req, res) => {
	Feedback.find({}, (err, foundFeedbacks) => {
		if (err) {
			console.log(err);
		} else {
			res.send(foundFeedbacks);
		}
	});
};

exports.createFeedback = (req, res) => {
	Feedback.create(JSON.parse(Object.keys(req.body)[0]), (err, createFeedback) => {
		if (err) {
			console.log(err);
		} else {
			res.send(createFeedback);
		}
	});
};
