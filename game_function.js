

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

// sanitze user input
function input_sanitizor(user_input) {

    while (
        user_input !== "rock" &&
        user_input !== "scissors" &&
        user_input !== "paper" &&
        user_input !== "exit"
    ) {
        user_input = prompt("Incorrect input.\nPlayer: enter Rock, Paper, Scissors, or Exit:");
        // So pressing Cancel at either prompt exits safely.
        if (user_input === null) return "exit";
        user_input = user_input.toLowerCase();
    }

    return user_input
    
}

// Get user choice
function user_choice() {
    
    // getting user input
    let player_selection = prompt("Player: enter Rock, Paper, Scissors, or Exit: ");
    if (player_selection === null) return "exit";

    
    // sanitizing user choice
    // turn the players input into case insensetive first
    player_selection = player_selection.toLowerCase();

    player_selection = input_sanitizor(player_selection)
    

    // console.log(player_selection);
    return player_selection;
}

// Comparing both Players choices
function comparison(computer, players) {
    // Check for a tie first
    if (players === computer) {
        return "tie"
        
    }

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

// Displaying game results
function game_results(rounds, playerScore, computerScore, winner, computer, player) {

    if (winner === "player"){
        // increase score
        playerScore++;

        //Display results
        console.log(` Round ${rounds} You Win! `);
        console.log(` ${player} beats ${computer} `);
        console.log(`Human: ${playerScore} vs Computer: ${computerScore}`);
    }
    else if (winner === "computer"){
        // increase score
        computerScore++;

        //Display results
        console.log(` Round ${rounds} You Lose! `);
        console.log(` ${computer} beats ${player} `);
        console.log(`Human: ${playerScore} vs Computer: ${computerScore}`);

    }else{
        // print it is a tie
        console.log(`Round ${rounds} is a tie`);
        console.log(` ${computer} is the same ${player} `);
        console.log(`Human: ${playerScore} vs Computer: ${computerScore}`);
    }

    return { playerScore, computerScore };
}

// Game logic
let game_rounds = 1;
let game_state = true;
let computer;
let player;
let game_status;
let humanScore = 0;
let computerScore = 0;

// game loop
while (game_rounds <= 5 && game_state === true ) {

    // Fetch the computer choice
    computer = computerChoice();

    // Get the user choice
    player = user_choice();

    // Check players choice
    if (player === "exit"){
        game_state = false;
        break;
    }

    // comparisons
    game_status = comparison(computer, player);

    // Return results
    ({ playerScore: humanScore, computerScore } = game_results(
        game_rounds,
        humanScore,
        computerScore,
        game_status,
        computer,
        player
    ));

    // increase the rounds per loop
    game_rounds ++;

}
