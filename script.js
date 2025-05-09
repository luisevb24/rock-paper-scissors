let body = document.querySelector("body");
let rockBtn = document.querySelector(".rockBtn");
let paperBtn = document.querySelector(".paperBtn");
let scissorsBtn = document.querySelector(".scissorsBtn");
let scoreDiv = document.querySelector(".score");
let resultsDiv = document.querySelector(".results");
let finalDiv = document.querySelector(".finalScreen");
let resetBtn = document.createElement('button');
resetBtn.textContent = "Play Again!";

rockBtn.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
paperBtn.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});

resetBtn.addEventListener('click', ()=>{
    resetScores();
    finalDiv.textContent = "";
})


let humanScore = 0;
let computerScore = 0;



function getComputerChoice(){
    let randomNumber = Math.random();
    randomNumber = randomNumber * 10;

    if(randomNumber <= 3.33){
        return "Rock";
    } else if (randomNumber > 3.33 && randomNumber <= 6.66){
        return "Paper";
    } else if (randomNumber > 6.66 && randomNumber <= 10){
        return "Scissors";
    } else {
        console.log("Error");
    }
}

function playRound(humanChoice, computerChoice){
    humanChoiceLower = humanChoice.toLowerCase();
    
    
    if (computerChoice == "Rock" && humanChoiceLower == "rock"){
        resultsDiv.textContent = "Tie!";
    } else if (computerChoice == "Rock" && humanChoiceLower == "paper"){
        resultsDiv.textContent = "Point for you! Rock loses to Paper";
        ++humanScore;
    } else if (computerChoice == "Rock" && humanChoiceLower == "scissors"){
        resultsDiv.textContent = "Point for the PC! Rock beats Scissors";
        ++computerScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "rock"){
        resultsDiv.textContent = "Point for the PC! Paper beats Rock";
        ++computerScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "scissors"){
        resultsDiv.textContent = "Point for you! Paper loses to Scissors";
        ++humanScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "paper"){
        resultsDiv.textContent = "Tie!";
    } else if (computerChoice == "Scissors" && humanChoiceLower == "rock"){
        resultsDiv.textContent = "Point for you! Scissors loses to Rock";
        ++humanScore;
    } else if (computerChoice == "Scissors" && humanChoiceLower == "paper"){
        resultsDiv.textContent = "Point for the PC! Scissors beats Paper";
        ++computerScore;
    } else if (computerChoice == "Scissors" && humanChoiceLower == "scissors"){
        resultsDiv.textContent = "Tie" ;
    }

    scoreDiv.textContent = `You: ${humanScore} PC: ${computerScore}`;

    if (humanScore >= 5){
        finalDiv.textContent = "You Win!";
        body.appendChild(resetBtn);
    }
    if (computerScore >= 5){
        finalDiv.textContent = "You Lose :("
        body.appendChild(resetBtn);
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `You: ${humanScore} PC: ${computerScore}`;
}
