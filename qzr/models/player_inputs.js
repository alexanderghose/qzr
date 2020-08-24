let player_inputs = new Map()
let player_scores = new Map()

function addPoint(initials) {
    if (player_scores.has(initials)) {
        player_scores.set(initials, player_scores.get(initials)+1)
    } else {
        player_scores.set(initials, 1)
    }
}
function getAllScores() {
    return player_scores
}

function clearAll() {
    for (let [key,value] of player_inputs) {
        player_inputs.set(key, "")
    }
}

function getAll() {
    return player_inputs
}

function push(initials, stuff) {
    player_inputs.set(initials,stuff);
}

function deletePlayer(initials) {
    player_inputs.delete(initials);
}

module.exports = {
    getAll: getAll,
    push: push,
    deletePlayer: deletePlayer,
    clearAll,
    addPoint,
    getAllScores
}