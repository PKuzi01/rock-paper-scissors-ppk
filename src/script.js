//theme button
let btn = document.getElementById(`button`);
    btn.innerHTML = `<button class="button">Dark/Light Theme</button>`;
//hero
let heading = document.getElementById(`hero`);
    heading.innerHTML = 
    `<h2>Welcome to a game of</h2>
    <h1>Rock Paper Scissors</h1>
    <h3>Play 5 rounds with the computer, and see who's smarter</h3>`;
//gameboard
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

//result
let results = document.getElementById(`result`);
    results.innerHTML =
    `<p class="results" id="results">Winner/Loser</p>`;

//restart
let restartButton = document.getElementById(`restart`);
    restartButton.innerHTML =
    `<button class="restartButton" id="restartButton">Restart game</button>`;

//footer
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

//chanigng the page from dark to light mode, and vice versa
function changeTheme() {
    let body = document.querySelector('body');
    body.classList.toggle('dark')
};

let themeButton = document.querySelector('.button');
themeButton.addEventListener('click', changeTheme);

//functionality build
//global variables
let options = ['rock', 'paper', 'scissors'];
let rockIcon = `fa-regular fa-hand-back-fist user`; //rock icon
let paperIcon = `fa-regular fa-hand user`; //paper icon
let scissorsIcon = `fa-regular fa-hand-peace user`; //scissor icon

//pc's choice
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

//player's choice
let playerPoints = 0;
let pcPoints = 0;
let currentRound = 1;
let maxRound = 5;

function showPlayerInput(button, icon) {
    button.addEventListener('click', function() {
      const iconPlayer = document.querySelector('#icon-player');
      iconPlayer.setAttribute('class', icon);

    let pcChoice = getPCInput();
    let playerChoice = button.id.replace("-button", "");

    let result = playRound(playerChoice, pcChoice);

    playerPoints = updateScore(result, playerPoints);
    pcPoints = updateScore(result, pcPoints);

    let pcScore = document.getElementById('pcScore');
    pcScore.innerHTML = `PC: ${pcPoints}`;
    let playerScore = document.getElementById('playerScore');
    playerScore.innerHTML = `Player: ${playerPoints}`;
    let finalResult = document.getElementById('results');
    finalResult.innerHTML = result;

    return result;
    });
};
  
  let rockButton = document.getElementById('rock-button');
  let paperButton = document.getElementById('paper-button');
  let scissorsButton = document.getElementById('scissors-button');
  
  showPlayerInput(rockButton, `${rockIcon}`);
  showPlayerInput(paperButton, `${paperIcon}`);
  showPlayerInput(scissorsButton, `${scissorsIcon}`);

//uypdating the score
function updateScore(result, score) {
    if (result === "You win!") {
        score++
    }
    return score;
};

//playing one round
function playRound(playerChoice, pcChoice) {
    if (playerChoice === pcChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && pcChoice === "scissors") ||
      (playerChoice === "paper" && pcChoice === "rock") ||
      (playerChoice === "scissors" && pcChoice === "paper")
    ) {
        playerPoints++;
        return "You win!";
    } else {
        pcPoints++;
        return "You lose!";
    }
};

//restarting the game
function restartGame() {
    playerPoints = 0;
    pcPoints = 0;
    currentRound = 1;
  
    let pcScore = document.getElementById('pcScore');
    pcScore.innerHTML = `PC: ${pcPoints}`;
    let playerScore = document.getElementById('playerScore');
    playerScore.innerHTML = `Player: ${playerPoints}`;
    let finalResult = document.getElementById('results');
    finalResult.innerHTML = "Winner/Loser";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
};

let restartBtn = document.getElementById('restartButton');
restartBtn.addEventListener('click', restartGame);

  