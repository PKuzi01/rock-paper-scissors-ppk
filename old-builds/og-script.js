//global vars
let options = ["rock", "paper", "scissors"];
let roundWin = ``;

//getting the PC's input
function getComputerInput() {
    let computerInput = options[Math.floor(Math.random() * 3)];
     return computerInput;
};

//getting the player's input
function getPlayersInput() {
    let playersInput = prompt(`Rock, paper or scissors?`);
    playersInput = playersInput.toLowerCase();
    if (playersInput === `paper` || playersInput === `rock` || playersInput === `scissors`) {
        return playersInput;
    } else {
        prompt(`Error: please enter a correct value.`)
    };
    
};

//playing a single round
function playRound() {
    let playersChoice = getPlayersInput();
    let computerChoice = getComputerInput();

    if (
        (playersChoice === computerChoice)
    ) {
        return roundWin = `tie`;
    };

    if (
        (playersChoice === `rock` && computerChoice === `scissors`) ||
        (playersChoice === `scissors` && computerChoice === `paper`) ||
        (playersChoice === `paper` && computerChoice === `rock`)
  ) { 
        return roundWin = `player`;
    };

    if (
        (computerChoice === `rock` && playersChoice === `scissors`) ||
        (computerChoice === `scissors` && playersChoice === `paper`) ||
        (computerChoice === `paper` && playersChoice === `rock`)
    ) {
        return roundWin = `computer`;
    };
};

//playing the game
function playGame() {
    let displayResults = document.querySelector(`#displayResults`);
    //figure out how you would print each result under the other
    for (x = 1; x <= 5; x++) {
    return  displayResults.innerHTML = playRound();
    }; 

};

//global
let gameButton = document.querySelector(`#playGame`);
gameButton.addEventListener("click", playGame)

playGame();