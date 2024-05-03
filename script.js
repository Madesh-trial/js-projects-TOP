function getComputerChoice() {
    a = Math.random();
    if (a < 0.33) {
        return "Rock";
    }
    else if (a > 0.33 && a < 0.67) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

function getHumanChoice() {
    return window.prompt("Enter You Choice:")
}

let humanScore, computerScore = 0;


function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice.toLowerCase() == "rock") {
            if (computerChoice.toLowerCase() == "scissor") {
                console.log("you Win! Rock beats Scissor");
            }
            else if (humanChoice.toLowerCase() == "paper") {
                console.log("you Lose! Paper beats Rock");
            }
            else {
                console.log("Its a Draw :)");
            }
        }
        else if (humanChoice.toLowerCase() == "paper") {
            if (computerChoice.toLowerCase() == "rock") {
                console.log("you Win! Paper beats Rock");
            }
            else if (computerChoice.toLowerCase() == "scissor") {
                console.log("you Lose! Scissor beats paper");
            }
            else {
                console.log("Its a Draw :)");
            }
        }
        else if (humanChoice.toLowerCase() == "scissor") {
            if (computerChoice.toLowerCase() == "paper") {
                console.log("you Win! Scissor beats paper");
            }
            else if (computerChoice.toLowerCase() == "rock") {
                console.log("you Lose! Rock beats Scissor");
            }
            else {
                console.log("Its a Draw :)");
            }
        }
        else {
            window.prompt("Please enter valid option!");
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

playGame();
