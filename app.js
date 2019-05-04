/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Variables
let scores, roundScore, activePlayer, gamePlaying, sixRoll;

let diceDom = document.querySelector(".dice");
let diceTwoDom = document.querySelector(".DICE");

init();


// Dom 
// document.querySelector(`#current-${activePlayer}`).textContent = dice;

document.querySelector(".btn-new").addEventListener("click", init);

// let input = document.getElementById("input").value;



diceDom.style.display = "none";


diceTwoDom.style.display = "none";

let btnRoll = document.querySelector(".btn-roll");
btnRoll.addEventListener("click", rollFunction);

let btnHold = document.querySelector(".btn-hold");
btnHold.addEventListener("click", holdFunction);

// Functions
function rollFunction() {
  if (gamePlaying) {
    let dice1 = Math.floor((Math.random() * 6) + 1);

    let dice2 = Math.floor((Math.random() * 6) + 1);



    diceDom.style.display = "block";
    diceDom.src = `dice-${dice1}.png`;

    diceTwoDom.style.display = "block";
    diceTwoDom.src = `dice-${dice2}.png`;

    if (dice1 != 1 && dice2 != 1) {
      roundScore += (dice1 + dice2);
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

      /*     sixRoll.push(dice1);

for(let i = 0; i < sixRoll.length; i++) {
  if(sixRoll[i] == sixRoll[i+1]) {
    console.log(sixRoll);
   
    scores[activePlayer] = 0;
    document.querySelector(`#score-${activePlayer}`).textContent = 0;
    roundScore = 0;
    document.querySelector(`#current-${activePlayer}`).textContent = 0;

    diceDom.style.display = "none";

    diceTwoDom.style.display = "none";

  activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(`.player-0-panel`).classList.toggle("active");
  document.querySelector(`.player-1-panel`).classList.toggle("active"); */

      // nextPlayer();
      // }


      // }


    } else {
      nextPlayer();
    }


  }

}

function holdFunction() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;

    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    let input = document.getElementById("input").value;

    let winningScore;
    if(input) {
winningScore = input;
    } else {
      winningScore = 100;
    }



    if (scores[activePlayer] >= winningScore) {
      document.getElementById(`name-${activePlayer}`).textContent = "WINNER!!!";

      diceDom.style.display = "none";

      diceTwoDom.style.display = "none";

      document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
      document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");

      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }

}

function nextPlayer() {
  diceDom.style.display = "none";

  diceTwoDom.style.display = "none";

  activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(`.player-0-panel`).classList.toggle("active");
  document.querySelector(`.player-1-panel`).classList.toggle("active");
}

function init() {
  gamePlaying = true;
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.getElementById("input").value = "";

  diceDom.style.display = "none";
  diceTwoDom.style.display = "none";

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(`.player-0-panel`).classList.remove("winner");
  document.querySelector(`.player-1-panel`).classList.remove("winner");
  document.getElementById(`name-0`).textContent = `Player 1`;
  document.getElementById(`name-1`).textContent = `Player 2`;
  document.querySelector(`.player-0-panel`).classList.remove("active");
  document.querySelector(`.player-1-panel`).classList.remove("active");
  document.querySelector(`.player-0-panel`).classList.add("active");
}