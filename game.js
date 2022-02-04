let playerScoreBoard = document.querySelector("#playerScore");
let computerScoreBoard = document.querySelector("#compScore");
let gameDetail = document.querySelector(".gameDetail");
let gameStatus = document.querySelector(".weaponMessage");
let playerPoints = 0;
let computerPoints = 0;

// Play Again Button
let playAgainButton = document.querySelector(".playAgainBtn");
playAgainButton.addEventListener("click", () => {
  playerPoints = 0;
  computerPoints = 0;
  updateUI("Choose Your Weapon", "First to Score 5 points Wins");

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
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
  playRound(playerPlay(paperBtn.textContent), computerPlay());
});

// Player Chooses Scissor
let scissorBtn = document.querySelector(".scissorBtn");
scissorBtn.addEventListener("click", () => {
  console.log("Scissor Btn Pressed");
  playRound(playerPlay(scissorBtn.textContent), computerPlay());
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
  let message1;
  let message2;

  if (playerSelection == computerSelection) {
    console.log(`Game Tied! Both Chose ${playerSelection}`);
    message1 = `Both Chose ${playerSelection}`;
    message2 = "Game Tied!";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    playerPoints++;
    message1 = `${playerSelection} beats ${computerSelection}`;
    message2 = "You Win!";
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computerPoints++;
    message1 = `${computerSelection} beats ${playerSelection}`;
    message2 = "You Lose!";
  }

  updateUI(message1, message2);
  checkGameOver();
}

function updateUI(message1, message2) {
  computerScoreBoard.textContent = computerPoints;
  playerScoreBoard.textContent = playerPoints;
  gameDetail.textContent = message1;
  gameStatus.textContent = message2;
}

function checkGameOver() {
  if ((computerPoints == 5) | (playerPoints == 5)) {
    if (computerPoints == 5) {
      document.querySelector(".weaponMessage").textContent = "Computer Win";
    } else if (playerPoints == 5) {
      document.querySelector(".weaponMessage").textContent = "You Win";
    }

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }
}
