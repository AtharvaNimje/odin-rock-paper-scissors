function computerPlay() {
    let rps_arr = ["Rock", "Paper", "Scissors"];
    rand_index = Math.floor(Math.random() * rps_arr.length);
    return rps_arr[rand_index]
}

//console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection, computerSelection);

    if (playerSelection === computerSelection) {
        return "draw";
    } else if (
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
    let player_score = 0, computer_score = 0;
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            let computerSelection = computerPlay();
            const winner = playRound(playerSelection, computerSelection);

            console.log(`Winner of this Round: ${winner}`);

            if (winner === "player") {
                player_score += 1;
            } else if (winner === "computer") {
                computer_score += 1;
            }
            console.log(player_score, computer_score);

            const displayDiv = document.querySelector('.score');
            displayDiv.textContent = `Player: ${player_score} Computer: ${computer_score}`;

            if (player_score === 5 || computer_score === 5) {
                document.querySelector('.rpsBtn').style.display = 'none';
                if (player_score > computer_score) {
                    displayDiv.textContent = 'Player won! Do you want to play again?'
                    resetGame();
                } else {
                    displayDiv.textContent = 'Computer won! Do you want to try again?'
                    resetGame();
                }
            }
        })
    }));


}

function resetGame() {
    tryAgainBtn = document.createElement('button');
    tryAgainBtn.classList.add('tryAgainBtn');
    tryAgainBtn.textContent = 'Try again?';
    const displayDiv = document.querySelector('.score');
    displayDiv.appendChild(tryAgainBtn);

    tryAgainBtn.addEventListener('click', function() {
        window.location.reload()
    });
}

game();