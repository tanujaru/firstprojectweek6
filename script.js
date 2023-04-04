<<<<<<< HEAD
//Initialization 
var goal;
let  roundScore, activePlayer,scores, gamePlaying;


init();

// ROLL button

document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    // 1. Random number genration of the dice.
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result and selecting the image of dice.
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      
      
    } else {
      diceDOM.src = "images/dice-1.png"
      diceDOM.style.display = "block";

      4// Next player's turn  calling the nextplayer function.
      nextPlayer();
    }
  }
});

   5// HOLD button, add the score and exit.
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
   6 // Add CURRENT score to GLOBAL score of the player
    scores[activePlayer] += roundScore;

   8// Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

   9 // Check if player won the game by if condition goal is the no we entered.
    if (scores[activePlayer] >= goal) {
      document.querySelector("#name-" + activePlayer).textContent =document.querySelector("#name-" + activePlayer).textContent + " is winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      gamePlaying = false;
    } else {
    10  // Next player's turn
      nextPlayer();
    }
  }
});

11 //defining the next player function.
function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

12 // NEW-GAME button to start new game.
document.querySelector(".btn-new").addEventListener("click", init);

function init() {

 13 // Reseting score variables
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  goal = prompt("Enter score to become winner!");


  document.querySelector(".dice").style.display = "none";
 14 // Reseting  of players
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  15 // Reseting Player Names

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 3";
  
  document.getElementById("name-0").textContent = document.getElementById("fname").value;
  document.getElementById("name-1").textContent = document.getElementById("sname").value;
  



 16 // Removing classes from panels
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

17 // Modal Elements Instructions of the game.
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

18 //Events Listner add
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

19//open the instruction
function openModal() {
  modal.style.display ="block";
}
20 //Close
function closeModal() {
  modal.style.display = "none";
}

21//Close if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
22//End Instructions.





=======
'use strict';

// Selecting elements
const player0El = document.querySelector('.player0');
const player1El = document.querySelector('.player1');
const score0El = document.querySelector('#score0');
const score1El = document.getElementById('score1');
const current0El = document.getElementById('current0');
const current1El = document.getElementById('current1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btnnew');
const btnRoll = document.querySelector('.btnroll');
const btnHold = document.querySelector('.btnhold');

let scores, currentScore, activePlayer, playing;
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
    
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        // 3. Check for rolled 1
        if (dice !== 1) {
        
        // Add dice to current score
        currentScore += dice;
        document.getElementById(
            `current${activePlayer}`
        ).textContent = currentScore;
        } else {
        
        // Switch to next player
        switchPlayer();
        }
    }
    });
    const switchPlayer = function () {
        document.getElementById(`current${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('playeractive');
        player1El.classList.toggle('playeractive');
        };
        btnHold.addEventListener('click', function () {
if (playing) {

	// 1. Add current score to active player's score
	scores[activePlayer] += currentScore;
	// scores[1] = scores[1] + currentScore

	document.getElementById(`score${activePlayer}`)
	.textContent = scores[activePlayer];

	// 2. Check if player's score is >= 100
	if (scores[activePlayer] >= 100) {
	
	// Finish the game
	playing = false;
	diceEl.classList.add('hidden');

	document
		.querySelector(`.player${activePlayer}`)
		.classList.add('playerwinner');
	document
		.querySelector(`.player${activePlayer}`)
		.classList.remove('playeractive');
	} else {
	
	// Switch to the next player
	switchPlayer();
	}
}


 const switchPlayer = function () {
    document.getElementById(`current${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('playeractive');
    player1El.classList.toggle('playeractive');
    };
    btnHold.addEventListener('click', function () {
        if (playing) {
        
            // 1. Add current score to active player's score
            scores[activePlayer] += currentScore;
            // scores[1] = scores[1] + currentScore
        
            document.getElementById(`score${activePlayer}`)
            .textContent = scores[activePlayer];
        
            // 2. Check if player's score is >= 100
            if (scores[activePlayer] >= 100) {
            
            // Finish the game
            playing = false;
            diceEl.classList.add('hidden');
        
            document
                .querySelector(`.player${activePlayer}`)
                .classList.add('playerwinner');
            document
                .querySelector(`.player${activePlayer}`)
                .classList.remove('playeractive');
            } else {
            
            // Switch to the next player
            switchPlayer();
            }
        }
        });
        // Starting conditions
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    
    diceEl.classList.add('hidden');
    player0El.classList.remove('playerwinner');
    player1El.classList.remove('playerwinner');
    player0El.classList.add('playeractive');
    player1El.classList.remove('playeractive');
    };
    init();
    

    
>>>>>>> d279a46e4001c7e8586c2cb817953c8ca23e0701
