const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
playerScore = 0;
computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let results = document.querySelector(".display-result");

computerPlay = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const selection = options[Math.floor(Math.random() * options.length)];
  return selection;
};

computerPlay();

playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    let scorePara = document.createElement('p');
    results.appendChild(scorePara);

  if (playerSelection === 'rock' && computerSelection === 'paper') {
      computerPoints.textContent = computerScore++;
      playerPoints.textContent = playerScore;
      scorePara.textContent = "Paper beats Rock. Better luck next time."
    // return playerScore + " " + computerScore;
  } else if (playerSelection == rock && computerSelection == scissors) {
    playerScore++;
    return playerScore + " " + computerScore;
  } else if (playerSelection == paper && computerSelection == rock) {
    playerScore++;
    return playerScore + " " + computerScore;
  } else if (playerSelection == paper && computerSelection == scissors) {
    computerScore++;
    return playerScore + " " + computerScore;
  } else if (playerSelection == scissors && computerSelection == rock) {
    computerScore++;
    return playerScore + " " + computerScore;
  } else if (playerSelection == scissors && computerSelection == paper) {
    playerScore++;
    return playerScore + " " + computerScore;
  } else {
    return "Tie!";
  }
};
