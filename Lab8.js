function gameStart() {
  //vars
  var player1 = prompt ("Player 1, please enter rock, paper or scissors");
  var player2 = prompt ("Player 2, please enter rock, paper or scissors");
  var winner = getWinner(player1, player2);
  

  //if statements

  function getWinner (choice1, choice2) {

  //choices players can make
  if ((choice1 ==="rock" && choice2 ==="scissors") ||
  (choice1==="paper" && choice2 ==="rock") ||
  (choice1==="scissors" && choice2==="paper")) {
    return 1;}
    else {
      return 2;
    }
  //tie
  if (choice1 ===choice2) {
    return 0;
    }
  }

  //invalid input
  if (!player1 ||  !player2|| !isAcceptableChoice (player1) ||!isAcceptableChoice(player2)) {
    alert("Error, try again");
    return;
  }
  
    //showing results and displaying winner
  if (winner === 0) {
    alert("Tie");
  }
  else {
    alert("Player " + winner + " wins");
  }
}

  function isAcceptableChoice(choice) {
    return choice === "rock" || choice === "paper" || choice ==="scissors";
  }


  

   
  
  
