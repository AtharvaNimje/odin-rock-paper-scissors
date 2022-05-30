function computerPlay() {
    let rps_arr = ["Rock", "Paper", "Scissors"];
    rand_index = Math.floor(Math.random() * rps_arr.length);
    return rps_arr[ rand_index ]
}

console.log(computerPlay());