
const choices = ["rock", "paper", "scissors"];
function computerPlay() {
let computerInput = choices[Math.floor(Math.random() * 3)];
console.log("Computer chooses" + ` ${computerInput}`);
return computerInput;
  }
  
  
  function playRound(playerSelection, computerSelection) {
    let win = {
        rock: "scissors" ,
        paper: "rock" ,
        scissors:"paper" 
      };
      if (win[playerSelection.toLowerCase() ] === computerSelection) {
        userScore++;
        console.log(`You won! ${playerSelection.toLowerCase() } beats ${computerSelection}`);
      } else if (win[computerSelection] === playerSelection.toLowerCase() ) {
        computerScore++;
        console.log(`You lost! ${computerSelection} beats ${playerSelection.toLowerCase() }`);
      } else console.log("It is a tie!")
  
  }
  
  
  let userScore = parseInt(0);
  let computerScore = parseInt(0);

  function game(){
  for(var i=0;i<5;i++){
    let playerSelection = prompt("What is your choice ?");
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    
  }
  console.log(`Total scores--> user: ${userScore } computer: ${computerScore}` );
  if(computerScore>userScore){
    console.log("Computer wins!");
  } else if(computerScore<userScore){
  console.log("You win!");
  }else console.log("Tie")
}
 
  game();