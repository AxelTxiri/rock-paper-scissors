function getComputerChoice() {
    r = Math.random();
    if (r <= (1/3)) {
        return 0
    } if (r <= (2/3)) {
        return 1
    } else {
        return 2
    }
}

