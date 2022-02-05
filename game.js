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
  updateUI("First to Score 5 points Wins", "Choose Your Weapon");

  document.getElementById("overlay").style.display = "none";
  document.querySelector(".playAgainBox").style.display = "none";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorBtn.disabled = false;
});

// Player Chooses Rock
let rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", () => {
  console.log("Rock Btn Pressed");
  playRound(playerPlay("rock"), computerPlay());
});

// Player Chooses Paper
let paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", () => {
  console.log("Paper Btn Pressed");
  playRound(playerPlay("paper"), computerPlay());
});

// Player Chooses Scissor
let scissorBtn = document.querySelector(".scissorBtn");
scissorBtn.addEventListener("click", () => {
  console.log("Scissor Btn Pressed");
  playRound(playerPlay("scissors"), computerPlay());
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

  updateIcon(computerSelection, playerSelection);
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
      document.querySelector(".winnerDisplay").textContent = "Computer Win";
    } else if (playerPoints == 5) {
      document.querySelector(".weaponMessage").textContent = "You Win";
      document.querySelector(".winnerDisplay").textContent = "You Win";
    }

    document.getElementById("overlay").style.display = "block";
    document.querySelector(".playAgainBox").style.display = "flex";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }
}

function updateIcon(compIcon, playerIcon) {
  let cIcon = document.querySelector(".compIcon");
  let pIcon = document.querySelector(".playerIcon");

  if (compIcon == "rock") {
    cIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/100/000000/hand-rock.png"
    );
  } else if (compIcon == "paper") {
    cIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/90/000000/hand.png"
    );
  } else {
    cIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/96/000000/hand-scissors--v2.png"
    );
  }

  if (playerIcon == "rock") {
    pIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/100/000000/hand-rock.png"
    );
  } else if (playerIcon == "paper") {
    pIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/90/000000/hand.png"
    );
  } else {
    pIcon.setAttribute(
      "src",
      "https://img.icons8.com/color/96/000000/hand-scissors--v2.png"
    );
  }
}
