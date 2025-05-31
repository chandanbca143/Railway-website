const express = require("express");
const mongoose = require("mongoose");
const trainRoutes = require("./routes/trainRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/railway", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB error:", err));

app.use("/api/trains", trainRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
