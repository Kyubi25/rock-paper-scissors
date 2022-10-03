let rounds = 5;
const outcomes = ['rock' , 'paper' , 'scissors'];

function computerSelect(){
  let runningStuff = computerPlay();
  computerSelection = runningStuff;
  return computerSelection;
}

function game(){
  let i; 
    for (i = 0; i < rounds; i++ ){
      computerSelect();
      playerSelect();
      validName();
    }
}

function playerSelect(){
  let initialPrompt = prompt('Please enter your choise:');
  playerSelection = initialPrompt.toLowerCase();
  return playerSelection;
}

function validName(){
  if (outcomes.includes(playerSelection)){
    playRound(playerSelection, computerSelection);
  } else {
    alert("Invalid Selection, please try again!");
    rounds = rounds +1;
    return rounds;
  }
}

function computerPlay(){
  return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function playRound(playerSelection, computerSelection) {
  switch( true || false) {
    case playerSelection === "rock"  && computerSelection === "paper":
      alert ("Computer chose paper so you lose! ");
      break;
    
    case playerSelection === "paper" && computerSelection === "scissors":
      alert ("Computer chose scissors so you lose! ");
      break;

      case  playerSelection === "scissors" && computerSelection === "rock":
        alert("Computer chose rock and you lose!");
    break;

    case playerSelection === "rock" && computerSelection === "scissors":
        alert("Computer chose scissors and you win!");
    break;

    case playerSelection === "paper" && computerSelection === "rock":
        alert("Computer chose rock and you win!");
    break;

    case playerSelection === "scissors" && computerSelection === "paper":
        alert("Computer chose paper and you win!");
    break;
    
    case playerSelection === computerSelection:
        alert("It's a tie!");
    break;
  }
}

game();
  