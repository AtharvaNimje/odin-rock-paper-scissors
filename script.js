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

function game() {
    let player, computer;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your choice: ");
        let computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);

        console.log(`Winner of Round ${i+1}: ${winner}`);

        if (winner === "player") {
            player += 1;
        } else if (winner === "computer") {
            computer += 1;
        }
    }

    if (player > computer) {
        console.log("The final winner is player!");
    } else if(computer > player) {
        console.log("The final winner is computer!");
    } else {
        console.log("It's a draw!")
    }
}

game();