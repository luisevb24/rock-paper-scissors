console.log("hello");
/*
Pseudocode:
A function gets a random number between 0 and 1 and multiplies it by 10.
If the number is less than or equal to 3.33 RETURN "rock"
If the number is greater than 3.33 and less or equal to 6.66 RETURN "paper"
IF THE NUMBER IS GREATER THAN 6.66 AND LESS OR EQUAL TO 10 RETURN "SCISSORS"

*/
let computerChoice = "not set"
function getComputerChoice(){
    let randomNumber = Math.random();
    randomNumber = randomNumber * 10;
    console.log(randomNumber);
    if(randomNumber <= 3.33){
        computerChoice = "Rock";
    } else if (randomNumber > 3.33 && randomNumber <= 6.66){
        computerChoice = "Paper";
    } else if (randomNumber > 6.66 && randomNumber <= 10){
        computerChoice = "Scissors";
    } else {
        console.log("Error");
    }
}

getComputerChoice();
console.log(computerChoice);
/*
GETHUMANCHOICE FUNCTION PROMPS FOR A USER INPUT OF THEIR CHOICE
IF HUMAN TYPES "ROCK" RETURN "ROCK"
ELSE IF HUMAN TYPES "PAPER" RETURN "PAPER"
ELSE IF HUMAN TYPES "SCISSORS" RETURN "SCISSORS";
*/
let humanChoice = "Rock";

function getHumanChoice(){
    humanChoice = prompt("Make your choice!", "Rock");
    return humanChoice;
}
getHumanChoice();
console.log(humanChoice);

/*
*/