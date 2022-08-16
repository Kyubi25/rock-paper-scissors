function getComputerChoice (){
    let random = Math.floor(Math.random()*10);
    if (random < 3)
    return "Rock"
    else if (random <6)
    return "Paper"
    else
    return "scissors"
  }

