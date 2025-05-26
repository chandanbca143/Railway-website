const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// const { corsOptions } = require("./config/frontCors");
const trainRoutes = require("./Routes/trainRoutes");
const deleteExpiredTrains = require("./utils/deleteExpiredTrains");

// const cors = require('cors');
const path = require("path");

dotenv.config();
connectDB();
deleteExpiredTrains();

const app = express();

app.use(express.json());
// app.use(cors(corsOptions));

// ✅ Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use("/api/auth", require("./Routes/user.route"));
app.use("/api/trains", trainRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});