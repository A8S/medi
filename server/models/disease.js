const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const diseaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Disease", diseaseSchema);