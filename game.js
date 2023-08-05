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
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('What do you choose? (rock, paper, scissors)');
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (
      playRound(playerSelection, computerSelection) ===
      'You Win! ROCK beats SCISSORS'
    ) {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ===
      'You Win! PAPER beats ROCK'
    ) {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ===
      'You Win! SCISSORS beats PAPER'
    ) {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ===
      'You Lose! ROCK beats SCISSORS'
    ) {
      computerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ===
      'You Lose! PAPER beats ROCK'
    ) {
      computerScore++;
    } else if (
      playRound(playerSelection, computerSelection) ===
      'You Lose! SCISSORS beats PAPER'
    ) {
      computerScore++;
    }
    console.log(
      `Player score: ${playerScore} | Computer score: ${computerScore}`
    );
  }
}

console.log(game());
