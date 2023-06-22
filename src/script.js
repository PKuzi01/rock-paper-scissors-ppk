//UI
//Theme Button
let btn = document.getElementById(`button`);
    btn.innerHTML = `<button class="button">Dark/Light Theme</button>`;

//Hero
let heading = document.getElementById(`hero`);
    heading.innerHTML = 
    `<h2>Welcome to a game of</h2>
    <h1>Rock Paper Scissors</h1>
    <h3>Play 5 rounds with the computer, and see who's smarter</h3>`;

//Gameboard
let gameboard = document.getElementById(`gameboard`);
    gameboard.innerHTML =
    `<div class="gameButtons">
    <button class="option" id="rock-button">Rock</button>
    <button class="option" id="paper-button">Paper</button>
    <button class="option" id="scissors-button">Scissors</button>
    </div>
    <div class="viewboard"> 
        <div id="player" class="player">
            <i class="fa-solid fa-user user" id="icon-player"></i>
            <p class="contender" id="playerScore">Player</p>
        </div>
        <div id="pc" class="pc">
            <i class="fa-solid fa-user user" id="icon-pc"></i>
            <p class="contender" id="pcScore">PC</p>
        </div>
    </div>`;

//Result
let results = document.getElementById(`result`);
    results.innerHTML =
    `<p class="results" id="results">Ready when you are!</p>`;

//Restart
let restartButton = document.getElementById(`restart`);
    restartButton.innerHTML =
    `<button class="restartButton" id="restartButton">Restart game</button>`;

//Footer
let footer = document.getElementById(`footer`);
    footer.innerHTML = 
    `<footer class="footer"> 
    Made by
    <a href="https://www.linkedin.com/in/philisizwe-kuzwayo-3116541a8/" target="_blank">Philisizwe Kuzwayo</a>,
    hosted on
    <a href="https://pkuzi01.github.io/rock-paper-scissors-ppk/"
    target="_blank">Github Pages</a>,
    and is open-sourced on
    <a href="https://github.com/PKuzi01/rock-paper-scissors-ppk" target="_blank">Github</a>.
    </footer>`;

//Dark/Light mode
function changeTheme() {
    let body = document.querySelector('body');
    body.classList.toggle('dark')
};

let themeButton = document.querySelector('.button');
themeButton.addEventListener('click', changeTheme);

//Functionality + Behaviour
//Global Variables
const options = ['rock', 'paper', 'scissors'];
const rockIcon = `fa-regular fa-hand-back-fist user`;
const paperIcon = `fa-regular fa-hand user`;
const scissorsIcon = `fa-regular fa-hand-peace user`;
const profileIcon = `fa-solid fa-user user`;
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

//PC's choice
function getPCInput() {
    let iconPC = document.querySelector('#icon-pc');
    let pcInput = options[Math.floor(Math.random() * 3)];
    
    if (pcInput === options[0]) {
        iconPC.setAttribute('class', `${rockIcon}`);
    } else if (pcInput === options[1]) {
        iconPC.setAttribute('class', `${paperIcon}`);
    } else if (pcInput === options[2]) {
        iconPC.setAttribute('class', `${scissorsIcon}`);
    }
    return pcInput;
};

//Player's choice
let playerPoints = 0;
let pcPoints = 0;
let currentRound = 1;

function showPlayerInput(button, icon) {
    button.addEventListener('click', function() {
      let iconPlayer = document.querySelector('#icon-player');
      iconPlayer.setAttribute('class', icon);
  
      let pcChoice = getPCInput();
      let playerChoice = button.id.replace("-button", "");
  
      let result = playRound(playerChoice, pcChoice);
  
      playerPoints = updateScore(result, playerPoints);
      pcPoints = updateScore(result, pcPoints);
  
      updateGameResults(result);
    });
  }

showPlayerInput(rockButton, `${rockIcon}`);
showPlayerInput(paperButton, `${paperIcon}`);
showPlayerInput(scissorsButton, `${scissorsIcon}`);  
  
//Displaying the game results
function updateGameResults(result) {
    let pcScore = document.getElementById('pcScore');
    pcScore.innerHTML = `PC: ${pcPoints}`;

    let playerScore = document.getElementById('playerScore');
    playerScore.innerHTML = `Player: ${playerPoints}`;

    let finalResult = document.getElementById('results');
    finalResult.innerHTML = result;

    if (playerPoints === 5) {
        disableButtons();
        finalResult.innerHTML = `Congrats! You win the game!`;
    } else if (pcPoints === 5) {
        disableButtons();
        finalResult.innerHTML = `Better luck next time.`;
    }
};
  
//Disabling the game buttons
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
};

//Updating the score
function updateScore(result, score) {
    if (result === "This round's to the player!"){
        playerScore++;
    } else if (result === "PC takes this round.") {
        pcScore++;
    }
    
    return score;
};

//Playing one round
function playRound(playerChoice, pcChoice) {
    if (playerChoice === pcChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && pcChoice === "scissors") ||
      (playerChoice === "paper" && pcChoice === "rock") ||
      (playerChoice === "scissors" && pcChoice === "paper")
    ) {
        playerPoints++;
        return "This round's to the player!";
    } else if (
        (pcChoice === "rock" && playerChoice === "scissors") ||
        (pcChoice === "paper" && playerChoice === "rock") ||
        (pcChoice === "scissors" && playerChoice === "paper")
    ) {
        pcPoints++;
        return "PC takes this round.";
    }
};

//Restarting the game
function restartGame() {
    playerPoints = 0;
    pcPoints = 0;
    currentRound = 1;

    let iconPC = document.querySelector('#icon-pc');
    iconPC.setAttribute('class', `${profileIcon}`);
    let iconPlayer = document.querySelector('#icon-player');
    iconPlayer.setAttribute('class', `${profileIcon}`);
  
    let pcScore = document.getElementById('pcScore');
    pcScore.innerHTML = `PC: ${pcPoints}`;
    let playerScore = document.getElementById('playerScore');
    playerScore.innerHTML = `Player: ${playerPoints}`;
    let finalResult = document.getElementById('results');
    finalResult.innerHTML = "Ready when you are!";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
};

let restartBtn = document.getElementById('restartButton');
restartBtn.addEventListener('click', restartGame);

  