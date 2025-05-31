const Train = require("../models/Train");

exports.addTrain = async (req, res) => {
  try {
    const data = req.body;
    console.log("Incoming Data:", data);

    if (Array.isArray(data)) {
      if (data.length === 0) {
        return res.status(400).json({ error: "Empty array provided" });
      }
      const trains = await Train.insertMany(data);
      return res.status(201).json({ message: "Multiple trains added", trains });
    } else {
      const train = new Train(data);
      await train.save();
      return res.status(201).json({ message: "Train added", train });
    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to add train(s)", details: error.message });
  }
};
