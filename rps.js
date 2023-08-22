let move;
let comp;
let compIcon = "";
let icon = "";
let Result = document.querySelector(".js-result");
let Game = document.querySelector(".game");
let disp = document.querySelector(".scoreDisplay");
const score = JSON.parse(localStorage.getItem("score")) || {
  won: 0,
  lost: 0,
  tied: 0,
};
disp.innerHTML = ` wins:${score.won} ties:${score.tied} looses:${score.lost}`;
function gamePlay(playermove) {
  if (playermove === "Rock") {
    icon = "fa-hand-back-fist";
    if (move == "Rock") {
      result = "tied";
    } else {
      if (move == "paper") {
        result = "lost";
      } else {
        result = "won";
      }
    }
  } else if (playermove === "paper") {
    icon = "fa-hand";
    if (move == "Rock") {
      result = "won";
    } else {
      if (move == "paper") {
        result = "tied";
      } else {
        result = "lost";
      }
    }
  } else {
    icon = "fa-hand-scissors fa-rotate-90";
    if (move == "Rock") {
      result = "lost";
    } else {
      if (move == "paper") {
        result = "won";
      } else {
        result = "tied";
      }
    }
  }

  if (result == "won") {
    score.won += 1;
  } else if (result == "lost") {
    score.lost += 1;
  } else {
    score.tied += 1;
  }
  Game.innerHTML = `your <i class="fa-solid ${icon} gameIcon margin-icon" style="color: #e1d00e;"></i>
  <i class="fa-solid ${compIcon} gameIcon" style="color: #e1d00e;"></i>
  computer`;
  disp.innerHTML = ` wins:${score.won} ties:${score.tied} looses:${score.lost}`;
  localStorage.setItem("score", JSON.stringify(score));
  Result.innerHTML = `you ${result}`;
}
function randomGen() {
  comp = Math.random();
  if (comp < 0.3333333) {
    move = "Rock";
    compIcon = "fa-hand-back-fist";
  } else {
    if (comp >= 0.3333333 && comp < 0.6666666) {
      move = "paper";
      compIcon = "fa-hand";
    } else {
      move = "scissors";
      compIcon = "fa-hand-scissors fa-rotate-90";
    }
  }
}
