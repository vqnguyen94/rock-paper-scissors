function computerPlay(){
    
    let randomNum = Math.round(Math.random() * 2);
    
    switch(randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            return "You lose! Paper beats Rock!";
        }
        else if(computerSelection == "scissors"){
            return "You win! Rock beats Scissors!";
        }
        else{
            return "It's a tie!";
        }
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        }
        else if(computerSelection == "scissors"){
            return "You lose! Scissors beats Paper!";
        }
        else{
            return "It's a tie!";
        }        
    }
    else{ //scissors
        if(computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }
        else if(computerSelection == "rock"){
            return "You lose! Rock beats Scissors!";
        }
        else{
            return "It's a tie!";
        }        
    }
}


function game(){
    let playerSelection, i, playerScore, computerScore, results;
    playerScore = 0;
    computerScore = 0;

    for( i = 0; i < 5; i++){
        playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        results = playRound(playerSelection, computerPlay());
        if(results.includes("win")){
            playerScore++;
            console.log("Player: " + playerScore + " Computer: " + computerScore);
        }
        else if(results.includes("lose")){
            computerScore++;
            console.log("Player: " + playerScore + " Computer: " + computerScore);
        }
        else{
            console.log("Player: " + playerScore + " Computer: " + computerScore);
            continue;
        }
    }
    playerScore = 0;
    computerScore = 0;
}