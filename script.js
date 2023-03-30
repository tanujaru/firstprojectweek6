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
            });// Starting conditions
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
            
                    
    