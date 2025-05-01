console.log("hello");
/*
Pseudocode:
A function gets a random number between 0 and 1 and multiplies it by 10.
If the number is less than or equal to 3.33 RETURN "rock"
If the number is greater than 3.33 and less or equal to 6.66 RETURN "paper"
IF THE NUMBER IS GREATER THAN 6.66 AND LESS OR EQUAL TO 10 RETURN "SCISSORS"

*/
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
/*
GETHUMANCHOICE FUNCTION PROMPS FOR A USER INPUT OF THEIR CHOICE
IF HUMAN TYPES "ROCK" RETURN "ROCK"
ELSE IF HUMAN TYPES "PAPER" RETURN "PAPER"
ELSE IF HUMAN TYPES "SCISSORS" RETURN "SCISSORS";
*/
function getHumanChoice(){
    return prompt("Make your choice!", "Rock");
}
/*
VARIABLES THAT WILL TRACK THE SCORES ARE INITIALIZED
*/

let humanScore = 0;
let computerScore = 0;

// FUNCTION PLAYROUND TAKES AS ARGUMENTS VARIABLES HUMANCHOICE AND COMPUTERCHOICE
// THIS FUNCTION TAKES THE HUMANCHOICE AND MAKES IT ALL LOWERCASE USING STRING METHOD
// MAKE A CONDITIONAL SWITCH CASE FOR WHEN COMPUTERCHOICE IS ROCK;

function playRound(humanChoice, computerChoice){
    humanChoiceLower = humanChoice.toLowerCase();
    
    if (computerChoice == "Rock" && humanChoiceLower == "rock"){
        console.log("Tie! Rock ties with Rock");
    } else if (computerChoice == "Rock" && humanChoiceLower == "paper"){
        console.log("You win! Rock loses to Paper");
        ++humanScore;
    } else if (computerChoice == "Rock" && humanChoiceLower == "scissors"){
        console.log("You lose! Rock beats Scissors");
        ++computerScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "rock"){
        console.log("You lose! Paper beats Rock");
        ++computerScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "scissors"){
        console.log("You win! Paper loses to Scissors");
        ++humanScore;
    } else if (computerChoice == "Paper" && humanChoiceLower == "paper"){
        console.log("Tie!");
    } else if (computerChoice == "Scissors" && humanChoiceLower == "rock"){
        console.log("You win! Scissors loses to Rock");
        ++humanScore;
    } else if (computerChoice == "Scissors" && humanChoiceLower == "paper"){
        console.log("You lose! Scissors beats Paper");
        ++computerScore;
    } else if (computerChoice == "Scissors" && humanChoiceLower == "scissors"){
        console.log("Tie");
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

