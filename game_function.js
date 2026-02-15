

// Computer choice function
function computerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        // console.log("rock");
        return "rock";
    } else if (choice === 1) {
        // console.log("paper");
        return "paper";
    } else {
        // console.log("scissors");
        return "scissors";
    }
}

// Get user choice
function user_choice() {
    console.log("May you enter your choice between Rock, Paper and Scissors");
    const player_selection = prompt("Please Enter your choice right Here: " );

    console.log(player_selection);
    // return player_selection;
}

// Comparing both Players choices
function comparison(computer, players) {
    
    //Checking which player has won
    if (players === "rock" && computer === "scissors"){

        return "player";

    }
    else if (players === "scissors" && computer === "paper"){

        return "player";

    }
    else if (players === "paper" && computer === "rock"){
        
        return "player";
    }
    else{
        return "computer";
    }

}

// Game logic
const game_rounds = 0;
const game_on = true;
let computer;
let player;
let winner;
const humanScore = 0;
const computerScore = 0;

// game loop
while (game_rounds <= 5 && game_on === true ) {

    // Fetch the computer choice
    computer = computerChoice();

    // Get the user choice
    player = user_choice().toLowercase();

    // Check players choice
    if (player === "exit"){
        game_on = false;
        break;
    }

    // comparisons
    winner = comparison(computer, player);

    // Return results
    if (winner === "player"){
        // increase score
        humanScore++;

        //Display results
        console.log(` Round ${game_rounds} You Win! `);
        console.log(` ${player} beats ${computer} `);
        console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
    }else{
        // increase score
        computerScore++;

        //Display results
        console.log(` Round ${game_rounds} You Win! `);
        console.log(` ${computer} beats ${player} `);
        console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);

    }



}


