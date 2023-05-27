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
function playRound(playersChoice, computerChoice) {
    if (
        (playersChoice === computerChoice) ||
        (computerChoice === playersChoice)
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

function playGame() {
   playRound(playersChoice, computerChoice); 
   playRound(playersChoice, computerChoice); 
   playRound(playersChoice, computerChoice); 
   playRound(playersChoice, computerChoice); 
   playRound(playersChoice, computerChoice); 
};
console.log(playGame());

let playersChoice = getPlayersInput();
let computerChoice = getComputerInput();
//playRound(playersChoice, computerChoice);