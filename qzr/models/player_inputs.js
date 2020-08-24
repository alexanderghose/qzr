let QuizModel = require("./schemas")
let player_inputs = new Map()
let player_scores = new Map()

function addPoint(initials) {
    if (player_scores.has(initials)) {
        player_scores.set(initials, player_scores.get(initials) + 1)
    } else {
        player_scores.set(initials, 1)
    }
}
function getAllScores() {
    return player_scores
}

function clearAll() {
    console.log("clearing all answers...")
    for (let [key, value] of player_inputs) {
        player_inputs.set(key, "")
    }
}

function getAll() {
    return player_inputs
}

function push(initials, stuff) {
    player_inputs.set(initials, stuff);
}

function deletePlayer(initials) {
    player_inputs.delete(initials);
}

async function saveToDB(question) {
    try {
        let quiz_obj = {
            question: question,
        }
        let create_q = await QuizModel.create(quiz_obj)
        console.log("create q:",create_q)
        let new_q = await QuizModel.findById(create_q);
        for (let [key, value] of player_inputs) {
            console.log("player_inputs:",player_inputs)
            console.log("current value:",value)
            let playerAnswer = {
                name: key,
                answer: value
            }
            new_q.playerAnswers.push(playerAnswer);
            let save_result = await new_q.save()
            console.log("saving answer:",save_result)
        }
    } catch (error) {
        console.log("error=" + error)
    } 
}

module.exports = {
    getAll: getAll,
    push: push,
    deletePlayer: deletePlayer,
    clearAll,
    addPoint,
    getAllScores,
    saveToDB
}