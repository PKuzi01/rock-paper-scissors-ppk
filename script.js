let options = ["rock", "paper", "scissors"];
// console.log(options);

//getting the PC's input
function getComputerInput() {
    let computerInput = options[Math.floor(Math.random() * 3)];
     console.log(computerInput);
};

//getting the player's input
function getPlayersInput() {
    let playersInput = prompt("Rock, paper or scissors?");
    
    if (playersInput === 'paper' || playersInput === 'rock' || playersInput === 'scissors') {
        console.log(`You picked: ${playersInput.toLowerCase()}`);
    } else {
        prompt(`Error: please enter a correct value.`)
    };
    
};
