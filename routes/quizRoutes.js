// routes/quizRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/quizController");

// GET /api/quizzes
router.get("/", controller.getAllQuizzes);

// GET /api/quizzes/:id
router.get("/:id", controller.getQuizById);

// POST /api/quizzes
router.post("/", controller.createQuiz);

// PUT /api/quizzes/:id
router.put("/:id", controller.updateQuiz);

// DELETE /api/quizzes/:id
router.delete("/:id", controller.deleteQuiz);

module.exports = router;
