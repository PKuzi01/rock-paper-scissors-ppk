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
    <button class="option">Rock</button>
    <button class="option">Paper</button>
    <button class="option">Scissors</button>
    </div>
    <div class="viewboard"> 
    <i class="fa-solid fa-user user"></i>
    <p class="contender">Player</p>
    <i class="fa-solid fa-user user"></i>
    <p class="contender">PC</p>
    </div>`;

//result
let results = document.getElementById(`result`);
    results.innerHTML =
    `<p class="results">Winner/Loser</p>`;

//restart
let restartButton = document.getElementById(`restart`);
    restartButton.innerHTML =
    `<button class="restartButton">Restart game</button>`;

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
}

let themeButton = document.querySelector('.button');
themeButton.addEventListener('click', changeTheme);

let rock = `<i class="fa-regular fa-hand-back-fist user"></i>`
let paper = `<i class="fa-regular fa-hand user"></i>`
let scissors = `<i class="fa-regular fa-hand-peace user"></i>`

//functionality build
let options = ['rock', 'paper', 'scissors']

function getPCInput() {
    let pcInput = options[Math.floor(Math.random() * 3)];
    console.log(pcInput);
}