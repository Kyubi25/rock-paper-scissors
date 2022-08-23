const playerSelection = prompt("Choose Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice (){
    let random = Math.floor(Math.random()*3);
    if (random == 1)
    return "Rock"
    else if (random == 2)
    return "Paper"
    else
    return "Scissors"
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection.toLowerCase() === "paper")
      return "You lose! Paper beats rock"
      else if (computerSelection.toLowerCase() === "scissors")
      return "You win! Rock beats scissors"
      else
      return "It's a tie!"
    } 
    else if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection.toLowerCase() === "paper")
      return "You win! Scissors beats paper"
      else if (computerSelection.toLowerCase() === "rock")
      return "You lose! Rock beats scissors"
      else
      return "It's a tie!"
    } 
    else if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection.toLowerCase() === "rock")
      return "You Win! Paper beats rock"
      else if (computerSelection.toLowerCase() === "scissors")
      return "You lose! Scissors beats paper"
      else
      return "It's a tie!"
    } 
    else
    return "Try again!"
    
  }


  