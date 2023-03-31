I will be building a Dice Game Project using HTML, CSS, and JavaScript. The Dice Game is based on a two-player. Both players roll the dice and the player who gets the highest  value will win the game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.
There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.

Roll the dice: The current player has to roll the dice and then a random number will be generated. If current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.  Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.
Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.
Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).



GAME RULES:

The game has 2 players, playing in rounds
In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
The first player to reach 100 points on GLOBAL score wins the game