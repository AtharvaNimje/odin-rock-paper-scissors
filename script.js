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

    if (playerSelection === computerSelection) {
        return "draw";
    }else if (
        ((playerSelection === "rock") && (computerSelection === "scissors")) ||
        ((playerSelection === "paper") && (computerSelection === "rock")) ||
        ((playerSelection === "scissors") && (computerSelection === "paper"))
    ) {
        return "player";
    } else if (
        ((playerSelection === "rock") && (computerSelection === "paper")) ||
        ((playerSelection === "paper") && (computerSelection === "scissors")) ||
        ((playerSelection === "scissors") && (computerSelection === "rock"))
    ) {
        return "computer";
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
