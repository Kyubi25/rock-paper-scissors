// define variables for the buttons and the result text
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result');

// define a function to play the game
function play(playerChoice) {
  // generate a random number for the computer's choice
  const computerChoice = Math.floor(Math.random() * 3);

  // determine the winner based on the choices
  let result;
  if (playerChoice === computerChoice) {
    result = 'Draw';
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1)
  ) {
    result = 'You win!';
  } else {
    result = 'You lose';
  }

  // convert the choices to strings for display
  const choices = ['rock', 'paper', 'scissors'];
  const playerChoiceString = choices[playerChoice];
  const computerChoiceString = choices[computerChoice];

  // update the result text
  resultText.innerHTML = `You chose ${playerChoiceString}, the computer chose ${computerChoiceString}. ${result}`;
}

// add event listeners to the buttons to play the game when clicked
rockButton.addEventListener('click', () => play(0));
paperButton.addEventListener('click', () => play(1));
scissorsButton.addEventListener('click', () => play(2));