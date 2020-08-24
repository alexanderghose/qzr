let player_inputs = []

function getAll() {
    return player_inputs
}

function push(initials, stuff) {
    player_inputs[initials]=stuff
}

module.exports = {
    getAll: getAll,
    push: push
}