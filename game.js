// Computer Move
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Player Move
function playerPlay() {
  let playerMove = prompt("Enter your move: Rock or Paper or Scissors");
  playerMove = playerMove.toLowerCase();

  while (
    !(playerMove == "rock" || playerMove == "paper" || playerMove == "scissors")
  ) {
    playerMove = prompt("Enter your move: Rock or Paper or Scissors");
    playerMove = playerMove.toLowerCase();
  }

  return playerMove;
}

// One Round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log(`Game Tied! Both Chose ${playerSelection}`);
    return 0;
  }

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
}

// One Game
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let currentGame;

  for (let i = 0; i < 5; i++) {
    currentGame = playRound(playerPlay(), computerPlay());
    if (currentGame == 1) {
      playerPoints++;
    } else if (currentGame == -1) {
      computerPoints++;
    }
  }

  console.log(
    `Computer Points: ${computerPoints}\nPlayer Points: ${playerPoints}`
  );
}

game();
