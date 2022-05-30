function computerPlay() {
    let rps_arr = ["Rock", "Paper", "Scissors"];
    rand_index = Math.floor(Math.random() * rps_arr.length);
    return rps_arr[ rand_index ]
}

//console.log(computerPlay());

function playRound( playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection, computerSelection);

    if (playerSelection === "rock"){
        if (computerSelection === "rock") {
            return "draw";
        }
        if (computerSelection === "paper") {
            return "computer";
        }
        if (computerSelection === "scissors") {
            return "player";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player";
        }
        if (computerSelection === "paper") {
            return "draw";
        }
        if (computerSelection === "scissors") {
            return "computer";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "computer";
        }
        if (computerSelection === "paper") {
            return "player";
        }
        if (computerSelection === "scissors") {
            return "draw";
        }
    }
}

function game() {
    let player = 0, computer = 0;

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

    console.log(player, computer);

    if (player > computer) {
        console.log("The final winner is player!");
    } else if(computer > player) {
        console.log("The final winner is computer!");
    } else {
        console.log("It's a draw!")
    }
}

game();
