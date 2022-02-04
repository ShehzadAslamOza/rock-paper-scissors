let playerScoreBoard = document.querySelector("#playerScore");
let computerScoreBoard = document.querySelector("#compScore");
let gameDetail = document.querySelector(".gameDetail");
let playerPoints = 0;
let computerPoints = 0;

// Play Again Button
let playAgainButton = document.querySelector(".playAgainBtn");
playAgainButton.addEventListener("click", () => {
  playerPoints = 0;
  computerPoints = 0;
  message = "";
  updateUI(message);

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
  playAgainButton.disabled = true;
});

// Player Chooses Rock
let rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", () => {
  console.log("Rock Btn Pressed");
  playRound(playerPlay(rockBtn.textContent), computerPlay());
});

// Player Chooses Paper
let paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", () => {
  console.log("Paper Btn Pressed");
  playRound(playerPlay(rockBtn.textContent), computerPlay());
});

// Player Chooses Scissor
let scissorBtn = document.querySelector(".scissorBtn");
scissorBtn.addEventListener("click", () => {
  console.log("Scissor Btn Pressed");
  playRound(playerPlay(rockBtn.textContent), computerPlay());
});

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
function playerPlay(playerMove) {
  playerMove = playerMove.trim().toLowerCase();
  return playerMove;
}

// One Round
function playRound(playerSelection, computerSelection) {
  let message;

  if (playerSelection == computerSelection) {
    console.log(`Game Tied! Both Chose ${playerSelection}`);
    message = `Game Tied! Both Chose ${playerSelection}`;
  }

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    playerPoints++;
    message = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computerPoints++;
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  updateUI(message);
  checkGameOver();
}

function updateUI(message) {
  computerScoreBoard.textContent = computerPoints;
  playerScoreBoard.textContent = playerPoints;
  gameDetail.textContent = message;
}

function checkGameOver() {
  if ((computerPoints == 5) | (playerPoints == 5)) {
    if (computerPoints == 5) {
      updateUI("Computer Wins");
    } else if (playerPoints == 5) {
      updateUI("You Win");
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    playAgainButton.disabled = false;
  }
}
