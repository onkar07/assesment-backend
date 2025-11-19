// models/Quiz.js
const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true }
}, { _id: false });

const QuestionSchema = new mongoose.Schema({
  // keep `id` client-side stable if needed; we store _id automatically
  clientId: { type: String }, // optional: map the frontend question id
  type: { type: String, enum: ["mcq", "tf", "text"], required: true },
  text: { type: String, required: true },
  options: [{ type: String }], // list of option texts for mcq
  // For mcq answer = index (Number). For tf answer = "True"|"False". For text answer = string (sample).
  answer: { type: mongoose.Schema.Types.Mixed } 
}, { _id: false });

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: { type: [QuestionSchema], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

QuizSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Quiz", QuizSchema);
