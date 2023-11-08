function getComputerChoice() {
  const choices = [`rock`, `paper`, `scissors`];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = getComputerChoice();
    let computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === `rock` && computerSelection === `paper`) {
        computerScore++;
        return `You Lose! Paper beats Rock`;
      } else if (
        playerSelection === `rock` &&
        computerSelection === `scissors`
      ) {
        playerScore++;
        return `You Win! Rock beats Scissors`;
      } else if (playerSelection === `rock` && computerSelection === `rock`) {
        return `It's a Tie! Rock ties with Rock`;
      } else if (playerSelection === `paper` && computerSelection === `rock`) {
        playerScore++;
        return `You Win! Paper beats Rock`;
      } else if (
        playerSelection === `paper` &&
        computerSelection === `scissors`
      ) {
        computerScore++;
        return `You Lose! Scissors beats Paper`;
      } else if (playerSelection === `paper` && computerSelection === `paper`) {
        return `It's a Tie! Paper ties with Paper`;
      } else if (
        playerSelection === `scissors` &&
        computerSelection === `paper`
      ) {
        playerScore++;
        return `You Win! Scissors beat Paper`;
      } else if (
        playerSelection === `scissors` &&
        computerSelection === `rock`
      ) {
        computerScore++;
        return `You Lose! Rock beats Scissors`;
      } else if (
        playerSelection === `scissors` &&
        computerSelection === `scissors`
      ) {
        return `It's a Tie! Scissors ties with Scissors`;
      }
    }
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);

  if(playerScore < computerScore) {
    console.log(`Nice! YOU win the Game.`); 
  } else if(playerScore === computerScore) {
    console.log(`Close one! You tie.`); 
  } else {
    console.log(`Unfortunate! COMPUTER wins the game.`); 
  }

}

game();
