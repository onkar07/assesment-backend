# Quiz Management System — Backend (Node.js + MongoDB)

This is the **Node.js backend API** for the Quiz Management System.

---

## 🚀 Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- dotenv
- CORS

---

## 📁 Project Structure

quiz-backend/
├── server.js
├── .env
├── package.json
├── config/
│   └── db.js
├── models/
│   └── Quiz.js
├── controllers/
│   └── quizController.js
└── routes/
    └── quizRoutes.js

---

## 🔧 Environment Variables

PORT=4000  
MONGO_URI=mongodb://localhost:27017/quiz_app_db  

---

## ▶️ Run Backend
npm install  
npm run dev

---

## 📚 API Endpoints
GET /api/quizzes  
GET /api/quizzes/:id  
POST /api/quizzes  
PUT /api/quizzes/:id  
DELETE /api/quizzes/:id  


