const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerAnswersSchema = new Schema({
    name: String,
    answer: String,
});

const quizSchema = new Schema({
    question: String,
    playerAnswers: [playerAnswersSchema]
});

let QuizModel = mongoose.model('Questions', quizSchema);
module.exports = QuizModel