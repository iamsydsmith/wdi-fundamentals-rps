
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
	return move || getInput();
}

function getComputerMove(move) {
   return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
  var winner;
    if (playerMove === computerMove){
        winner = "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }
    return winner;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        while (playerWins < 5 && computerWins < 5) {
        var winner = getWinner(getPlayerMove, getComputerMove);
        if (winner === "player") {
            playerWins +=1;
            console.log ("Player chose" + playerMove + "while Computer chose" + computerMove);
            console.log ("Player wins this round"); 
        }else if (winner === "computer") {
            computerWins +=1;
            console.log ("Player chose" + playerMove + "while Computer chose" + computerMove);
            console.log ("Computer wins this round");
        }else if (winner === null) {
            console.log ("Player chose" + playerMove + "while Computer chose" + computerMove);
            console.log ("This is a tie");
        }
    console.log("The score is currently:" + playerWins + "to" + computerWins  + '\n');
        }
        
     return [playerWins, computerWins];
}

//end game
    return [playerWins, computerWins];
}

