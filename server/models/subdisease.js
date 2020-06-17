const mongoose = require('mongoose');

const subdiseaseSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	bestTherapy: {
		type: String,
		required: true
	},
	disease: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Disease'
	},
	allopathy: {
		efficiency: String,
		advantages: String,
		disadvantages: String,
		summary: String,
		suggestions: String
	},
	homeopathy: {
		efficiency: String,
		advantages: String,
		disadvantages: String,
		summary: String,
		suggestions: String
	},
	ayurveda: {
		efficiency: String,
		advantages: String,
		disadvantages: String,
		summary: String,
		suggestions: String
	},
	books: [
		{
			name: String
		}
	],
	references: [
		{
			url: String
		}
	]
});

module.exports = mongoose.model('Subdisease', subdiseaseSchema);
