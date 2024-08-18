
// getComputerChoice returns a random string of rock, paper or scissors using Math.random();
function getComputerChoice(){
    let choice = "";
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1){
        choice = "rock";
    } else if (randomNumber <=2){
        choice ="paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

// The code below returns rock, paper or scissors depending on what the user clicks.
const body = document.querySelector("body");
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

const throws = document.querySelector('#throws');
const results = document.querySelector('#results');
const hScore = document.querySelector('#human-score');
const cScore = document.querySelector("#computer-score");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Restart Game";
resetBtn.id ="reset";
//const resetBtn = document.querySelector('#reset');

function getHumanChoice(evt) {
    if(humanScore < 5 & computerScore < 5){
        let choice = evt.currentTarget.id;
        if (choice === "rock-btn"){
            choice = "rock"
        } else if (choice === "paper-btn"){
            choice = "paper"
        } else {
            choice = "scissors"
        }
        playRound(choice);
    }
}



let humanScore = 0;
let computerScore = 0;

hScore.textContent = `Your Score is ${humanScore}`;
cScore.textContent = `Computer Score is ${computerScore}`;

console.log("Your Score is " + humanScore);
console.log("Computer Score is " + computerScore);

function playRound(choice) {
    let outcome = "";
    const humanSelection = choice;
    const computerSelection = getComputerChoice();
    throws.textContent = `Human throws ${humanSelection}! Computer throws ${computerSelection}!`
    if (humanSelection === "rock" && computerSelection === "rock" ){
       outcome = "You both threw rocks, you tied.";
    } else if (humanSelection === "rock" && computerSelection === "paper" ){
       outcome = "Paper covers rock, you lose.";
       computerScore++
    } else if (humanSelection === "rock" && computerSelection === "scissors" ){
        outcome = "Rock beats scissors, you win!";
        humanScore++
    } else if (humanSelection === "paper" && computerSelection === "rock"){
            outcome = "Paper covers rock, you win!";
            humanScore++
    } else if (humanSelection === "paper" && computerSelection === "paper"){
            outcome = "You both threw paper, you tied."
    } else if (humanSelection === "paper" && computerSelection === "scissors"){
             outcome = "Scissors cut paper, you lose."
             computerScore++
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
            outcome = "Rock beats scissors, you lose.";
            computerScore++
    } else if (humanSelection === "scissors" && computerSelection === "paper"){
            outcome = "Scissors cuts paper, you win!"
            humanScore++
    } else {
            outcome = "You both threw scissors, you tied."
        }
    let endResult ='';
    if (humanScore < 5 & computerScore < 5){
        hScore.textContent = `Your Score is ${humanScore}`;
        cScore.textContent = `Computer Score is ${computerScore}`;
        results.textContent = `${outcome}`;
        body.append(resetBtn);
    } else {
        hScore.textContent = `Your Score is ${humanScore}`;
        cScore.textContent = `Computer Score is ${computerScore}`;
        if (humanScore < computerScore){
            endResult = "Computer wins the whole game!";
        } else if (humanScore > computerScore){
            console.log("You win!");
            endResult = "You win the whole game!";
        } else {
            console.log("You tied.");
            endResult = "You tied the whole game.";
        }
        results.textContent = `${outcome} ${endResult}`;

    }
}



rockBtn.addEventListener("click", getHumanChoice);
paperBtn.addEventListener("click", getHumanChoice);
scissorsBtn.addEventListener("click", getHumanChoice);

resetBtn.addEventListener("click", function(){
humanScore = 0;
computerScore = 0;
hScore.textContent = `Your Score is ${humanScore}`;
cScore.textContent = `Computer Score is ${computerScore}`;
throws.textContent='';
results.textContent='';
resetBtn.remove();
}
)
