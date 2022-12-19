// define variables for the buttons, the result text, and the score
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultText = document.getElementById('result');
let playerScore = 0;
let computerScore = 0;

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
    playerScore++;
  } else {
    result = 'You lose';
    computerScore++;
  }

  // convert the choices to strings for display
  const choices = ['rock', 'paper', 'scissors'];
  const playerChoiceString = choices[playerChoice];
  const computerChoiceString = choices[computerChoice];

  // update the result text
  resultText.innerHTML = `You chose ${playerChoiceString}, the computer chose ${computerChoiceString}. ${result}`;

  // check if the game is over
  if (playerScore === 5 || computerScore === 5) {
    // declare the winner
    let winner;
    if (playerScore === 5) {
      winner = 'You';
    } else {
      winner = 'The computer';
    }
    resultText.innerHTML = `Game over! ${winner} wins with a score of ${playerScore} to ${computerScore}.`;

    // disable the buttons to end the game
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

// add event listeners to the buttons to play the game when clicked
rockButton.addEventListener('click', () => play(0));
paperButton.addEventListener('click', () => play(1));
scissorsButton.addEventListener('click', () => play(2));