// controllers/quizController.js
const Quiz = require("../models/Quiz");
const mongoose = require("mongoose");

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({ createdAt: -1 });
    res.json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getQuizById = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid quiz id" });

  try {
    const quiz = await Quiz.findById(id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const quiz = new Quiz({ title, questions: questions || [] });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateQuiz = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid quiz id" });

  try {
    const { title, questions } = req.body;
    const quiz = await Quiz.findById(id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    if (title !== undefined) quiz.title = title;
    if (questions !== undefined) quiz.questions = questions;
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteQuiz = async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid quiz id" });

  try {
    const quiz = await Quiz.findByIdAndDelete(id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.json({ message: "Quiz deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
