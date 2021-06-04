// PLAYER ELEMENTS
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// RESULTS AND RESTART SECTIONS
const results = document.querySelector(".display-result");
const restart = document.querySelector('.restart-button');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
restart.addEventListener('click', game);


// Declare function computerPlay
function computerPlay() {
  const number = Math.floor(Math.random() * 1000);
  if (number % 3 === 0) {
    return "rock";
  }
  if (number % 3 === 1) {
    return "paper";
  }
  return "scissors";
}
// Call function computerPlay
computerPlay();

let playerScore = 0;
let computerScore = 0;

// Declare function  playRound with with playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  playerSelection = this.dataset.button
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerPlay().toUpperCase();
  
  const resultPara = document.createElement("p");
  results.prepend(resultPara);

  const roundWinner = document.createElement('p');
  results.prepend(roundWinner);

  const finalWinner = document.createElement("p");
  results.prepend(finalWinner);
  finalWinner.style.fontSize = '2rem';
  finalWinner.style.fontWeight = '900';
  
  
  if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    computerScore++;
    roundWinner.textContent += `${computerSelection} beats ${playerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`
    
  }
  else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    playerScore++;
        roundWinner.textContent += `${playerSelection} beats ${computerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`;


  }
  else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    playerScore++;
        roundWinner.textContent += `${playerSelection} beats ${computerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`;


  }
  else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    computerScore++;
        roundWinner.textContent += `${computerSelection} beats ${playerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`;


  }
  else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    computerScore++;
        roundWinner.textContent += `${computerSelection} beats ${playerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`;


  }
  else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    playerScore++;
        roundWinner.textContent += `${playerSelection} beats ${computerSelection}
    (Player Score: ${playerScore}, Computer Score: ${computerScore})`;


  }

  else {
    resultPara.textContent += `Player selects ${playerSelection} and computer selects ${computerSelection}:`
    roundWinner.textContent += `Tie!
        (Player Score: ${playerScore}, Computer Score: ${computerScore})`; // displays tie

  }
    // CHECKS NUMBER OF ROUNDS IN PROPORTION TO WINS.
    if (computerScore > playerScore && computerScore >= 5) {
      finalWinner.textContent = `Computer Wins and You Lose!`;
      restart.style.display = "block";
      console.log("Computer Wins and You Lose!");
      rock.removeEventListener("click", playRound);
      paper.removeEventListener("click", playRound);
      scissors.removeEventListener("click", playRound);
    } else if (playerScore > computerScore && playerScore >= 5) {
      finalWinner.textContent = `You Win and Computer Loses!`;
      restart.style.display = "block";
      console.log("You Win and Computer Loses!");
      rock.removeEventListener("click", playRound);
      paper.removeEventListener("click", playRound);
      scissors.removeEventListener("click", playRound);
    }

}

// RESTARTS GAME BY RELOADING THE PAGE
function game() {
  window.location.reload('true');
}