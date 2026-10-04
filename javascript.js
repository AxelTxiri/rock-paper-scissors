function getComputerChoice() {
    r = Math.random();
    if (r <= (1/3)) {
        return 0;
    } else if (r <= (2/3)) {
        return 1;
    } else {
        return 2;
    }
}

function getHumanChoice() {
    let c = prompt("Select (0)Rock, (1)Paper or (2)Scissors:");
    return c;
}

let humanScore = 0;
let computerScore = 0;

