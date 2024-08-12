console.log("Welcome to Rock, Paper, Scissors");

// getComputerChoice returns a random string of rock, paper or scissors using Math.random();
function getComputerChoice(){
    // CREATE a variable that will be the computer's choice
    // USE match.random to return a random number between 1 and 3
    // IF math.random is between 0 and 1, have it equal rock, if between 1 and 2 have it equal paper, if between 2 and 3 have it equal scissors.
    // RETURN the string of the result.
    let choice = "";
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1){
        choice = "rock";
    } else if (randomNumber <=2){
        choice ="paper";
    } else {
        choice = "scissors";
    }
    //console.log(choice);
    return choice;
}

/* getComputerChoice();
getComputerChoice();
getComputerChoice(); */

function getHumanChoice() {
    // CREATE variable that will be the human's choice
    // USE prompt method to get the user's input
    //RETURN the string of the result entered.
    let choice = prompt("Please enter rock, paper or scissors");
    choice = String(choice);
    choice = choice.toLowerCase();
    //console.log(choice);
    return choice;
}

// getHumanChoice();

let humanScore = 0;
let computerScore = 0;


console.log("Your Score is " + humanScore);
console.log("Computer Score is " + computerScore);

function playRound() {
    // DEFINE two parameters for playRound: humanChoice and computerChoice to take the human and computer choices as arguments.
    // COMPARE results and determine winner
    // RETURN winner
    let outcome = "";
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log("Human throws "+ humanSelection+ "!");
    console.log("Computer throws "+ computerSelection+ "!");

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
    return (console.log(outcome));
}


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);

function playGame() {
    playRound();
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + computerScore);
    playRound();
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + computerScore);
    playRound();
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + computerScore);
    playRound();
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + computerScore);
    playRound();
    console.log("Your Score is " + humanScore);
    console.log("Computer Score is " + computerScore);
    if (humanScore < computerScore){
        console.log("Computer wins!");
    } else if (humanScore > computerScore){
        console.log("You win!");
    } else {
        console.log("You tied.");
    }
}

playGame();


/* Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.*/
