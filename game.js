function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a tie!";
  } else if (playerSelection.toLowerCase() === 'rock') {
    if (computerSelection.toLowerCase() === 'paper') {
      return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    } else {
      return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toLowerCase() === 'paper') {
    if (computerSelection.toLowerCase() === 'scissors') {
      return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    } else {
      return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
  } else if (playerSelection.toLowerCase() === 'scissors') {
    if (computerSelection.toLowerCase() === 'rock') {
      return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
    } else {
      return `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
    }
  }
}

function game() {
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}

const playerSelection = prompt('What do you choose? (rock, paper, scissors)');
const computerSelection = getComputerChoice();

console.log(game());
