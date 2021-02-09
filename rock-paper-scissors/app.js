let player_choice = prompt("choose: rock, papers or scissors?");
let computer_choice;

let computer_score = 0;
let player_score = 0;

const player_points = document.getElementById("player-score");
const computer_points = document.getElementById("computer-score");

player_points.innerHTML = `player: ${player_score}`;
computer_points.innerHTML = `computer: ${computer_score}`;

let choices = ["rock", "paper", "scissors"];
function computerPlay() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    alert("tie");
  } else {
    if (
      (computerSelection === "rock" && playerSelection === "scissors") ||
      (computerSelection === "scissors" && playerSelection === "paper") ||
      (computerSelection === "paper" && playerSelection === "rock")
    ) {
      computer_score++;
      computer_points.innerHTML = `computer: ${computer_score}`;
      alert(`computer chose ${computerSelection} and won!`);
    } else {
      player_score++;
      player_points.innerHTML = `player: ${player_score}`;
      alert(`computer chose ${computerSelection} and you won!`);
    }
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    console.log("rodada:", i);
    computer_choice = computerPlay();
    playRound(player_choice, computer_choice);
    console.log("player:", player_score, "computer:", computer_score);
    if (i < 5) {
      player_choice = prompt("choose: rock, papers or scissors?");
    }
  }
}
game();
