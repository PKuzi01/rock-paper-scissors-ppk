let options = ["rock", "paper", "scissors"];
let roundWin = ``;
// console.log(options);

//getting the PC's input
function getComputerInput() {
    let computerInput = options[Math.floor(Math.random() * 3)];
     console.log(`Computer picked: ${computerInput}`);
};

let computerChoice = getComputerInput();

//getting the player's input
function getPlayersInput() {
    let playersInput = prompt(`Rock, paper or scissors?`);
    playersInput = playersInput.toLowerCase();
    if (playersInput === `paper` || playersInput === `rock` || playersInput === `scissors`) {
        console.log(`You picked: ${playersInput.toLowerCase()}`);
    } else {
        prompt(`Error: please enter a correct value.`)
    };
    
};

let playersChoice = getPlayersInput();

//playing a single round
function playRound(playersChoice, computerChoice) {
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



console.log(playRound(playersChoice, computerChoice));