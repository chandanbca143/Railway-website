const Train = require("../modles/Train");

// Create Train (Admin Only)
exports.createTrain = async (req, res) => {
  try {
    const train = new Train(req.body);
    await train.save();
    res.status(201).json(train);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Train (Admin Only)
exports.updateTrain = async (req, res) => {
  try {
    const train = await Train.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!train) return res.status(404).json({ message: "Train not found" });
    res.json(train);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Train (Admin Only)
exports.deleteTrain = async (req, res) => {
  try {
    const train = await Train.findByIdAndDelete(req.params.id);
    if (!train) return res.status(404).json({ message: "Train not found" });
    res.json({ message: "Train deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get Trains (by source, destination, and date)
exports.getTrains = async (req, res) => {
  try {
    const { source, destination } = req.query;
    const now = new Date();

    const trains = await Train.find({
      source,
      destination,
      departureTime: { $gte: new Date(now.getTime() - 1000 * 60 * 60 * 24) }, // last 24 hrs only
    }).sort({ departureTime: 1 });

    res.json(trains);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
