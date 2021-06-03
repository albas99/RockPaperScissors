// Declare array variable with rock, paper, scissors
const options = ["Rock", "Paper", "Scissors"];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const results = document.querySelector(".display-result");

const resultPara = document.createElement('p');
results.appendChild('resultPara')

// Declare function computerPlay
computerPlay = () => {
  // Declare selection variable to store random selection from array variable
  // Assign selection variable to random selection from array variable
  const selection = options[Math.floor((Math.random()) * options.length)];
  // console.log(selection);
  return selection;
}
// Call function computerPlay
computerPlay();

playerScore = 0;
computerScore = 0;

// Declare function  playRound with with playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  playerSelection = this.dataset.button
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  console.log("playerSelection: ", playerSelection, " computerSelection: ", computerSelection);

  if (playerSelection == 'rock' && computerSelection == 'paper') {
    computerScore++;
    return playerScore + ' ' + computerScore;
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    playerScore++;
    return playerScore + ' ' + computerScore;
  }
  else if (playerSelection == 'paper' && computerSelection == 'rock') {
    playerScore++;
    return playerScore + ' ' + computerScore;
  }
  else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    computerScore++;
    return playerScore + ' ' + computerScore;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    computerScore++;
    return playerScore + ' ' + computerScore;
  }
  else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    playerScore++;
    return playerScore + ' ' + computerScore;
  }

  else {
    return 'Tie!';
  }
}




// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   // let rounds = 5;
//   // for(let i = 0; i < 5; i++){
//     // let playerSelection = prompt("Choose Rock, Paper or Scissors");
//   let playerSelection = this.dataset.button;
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   // }
//   if(computerScore > playerScore){
//     console.log('You Lose!');
//   }
//   else if(computerScore < playerScore){
//     console.log('You win!');
//   }
//   else{
//     console.log('Tie!');
//   }
// }

// game();

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);