function computerPlay() {
    let rps_arr = ["Rock", "Paper", "Scissors"];
    rand_index = Math.floor(Math.random() * rps_arr.length);
    return rps_arr[ rand_index ]
}

//console.log(computerPlay());

function playRound( playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "Rock"){
        if (computerSelection === "Rock") {
            return "draw";
        }
        if (computerSelection === "Paper") {
            return "computer";
        }
        if (computerSelection === "Scissors") {
            return "player";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "player";
        }
        if (computerSelection === "Paper") {
            return "draw";
        }
        if (computerSelection === "Scissors") {
            return "computer";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "computer";
        }
        if (computerSelection === "Paper") {
            return "player";
        }
        if (computerSelection === "Scissors") {
            return "draw";
        }
    }
}
