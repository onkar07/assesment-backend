// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const quizRoutes = require("./routes/quizRoutes");

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// middleware
app.use(cors({
  origin: true // allow all origins for development; refine in production
}));
app.use(express.json({ limit: "1mb" }));

// connect db then start
connectDB(MONGO_URI);

// routes
app.use("/api/quizzes", quizRoutes);

app.get("/health", (req, res) => {
  res.send({ status: "ok", message: "Quiz Backend running" });
});

// global error handler (basic)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
