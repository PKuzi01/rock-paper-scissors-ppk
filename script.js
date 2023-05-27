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
        console.log(roundWin = `tie`);
    };

    if (
        (playersChoice === `rock` && computerChoice === `scissors`) ||
        (playersChoice === `scissors` && computerChoice === `paper`) ||
        (playersChoice === `paper` && computerChoice === `rock`)
  ) { 
        console.log(roundWin = `player`);
    };

    if (
        (computerChoice === `rock` && playersChoice === `scissors`) ||
        (computerChoice === `scissors` && playersChoice === `paper`) ||
        (computerChoice === `paper` && playersChoice === `rock`)
    ) {
        console.log(roundWin = `computer`);
    };
};

//playing the game
function playGame() {
   playRound(); 
   playRound(); 
   playRound(); 
   playRound(); 
   playRound(); 
};


console.log(playGame());