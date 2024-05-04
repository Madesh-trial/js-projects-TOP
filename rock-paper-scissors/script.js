const options = ["rock", "paper", "scissors"];
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let output = document.querySelector(".output");

let playerScore = 0;
let computerScore = 0;

let playerScoredisp = document.querySelector(".playerScore");
let computerScoredisp = document.querySelector(".computerScore");

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        output.textContent = "It's a Tie!";
        playerScoredisp.textContent = `Your Score: ${playerScore}`;
        computerScoredisp.textContent = `Computer Score: ${computerScore}`;
    }
    else if(result == "Player"){
        output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        playerScore++;
        playerScoredisp.textContent = `Your Score: ${playerScore}`;
        computerScoredisp.textContent = `Computer Score: ${computerScore}`;
    }
    else{
        output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        computerScore++;
        playerScoredisp.textContent = `Your Score: ${playerScore}`;
        computerScoredisp.textContent = `Computer Score: ${computerScore}`;
    }
}

rockBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener("click", () => {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
})
