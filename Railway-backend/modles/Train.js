const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainNumber: { type: String, required: true, unique: true },
  trainName: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Train", trainSchema);
