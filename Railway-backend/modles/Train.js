// models/Train.js

const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  train_name: { type: String, required: true },
  train_number: { type: String, required: true, unique: true },
  train_src: { type: String, required: true },
  train_dest: { type: String, required: true },
  departure_time: { type: String, required: true },  // "HH:mm" format
  arrival_time: { type: String, required: true },    // "HH:mm" format
  duration: { type: String, required: true },        // e.g., "15:45"
  running_days: {
    type: [String],
    required: true,
    validate: {
      validator: function (days) {
        const allowedDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        return days.every(day => allowedDays.includes(day));
      },
      message: "Invalid day in running_days"
    }
  }
});

module.exports = mongoose.model("Train", trainSchema);
