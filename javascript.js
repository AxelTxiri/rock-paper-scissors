function getComputerChoice() {
    let r = Math.random();
    if (r <= (1/3)) {
        return "rock";
    } else if (r <= (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let c = prompt("Input Rock, Paper or Scissors:");
    return c.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("That's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore = humanScore + 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore = computerScore + 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore = computerScore + 1;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore = humanScore + 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore = humanScore + 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore = computerScore + 1;
    }
}

playRound(computerChoice, humanChoice);