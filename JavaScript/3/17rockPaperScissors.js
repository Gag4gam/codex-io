//exercicio

let player = 0;
let computer = Math.floor(Math.random() * 3);

if (player === 0) {
    console.log("Player picked:     Rock");
} else if (player === 1) {
    console.log("Player picked:     Paper");
}
else if (player === 2) {
    console.log("Player picked:     Scissors");
}

if (computer === 0) {
    console.log("Computer picked:   Rock");
} else if (computer === 1) {    
    console.log("Computer picked:   Paper");
} else if (computer === 2) {
    console.log("Computer picked:   Scissors");
}

console.log("\n");

if (player === computer) {
    console.log("It's a tie!");
} else if (player === 0 && computer === 2) {
    console.log("The player won!");
} else if (player === 1 && computer === 0) {
    console.log("The player won!");
} else if (player === 2 && computer === 1) {
    console.log("The player won!");
} else {
    console.log("The computer won!");
}