const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
};

const getOutcome = (moveOne, moveTwo) => {
  if (moveOne === moveTwo) {
    return "It's a draw!";
  }

  if (
    (moveOne === "scissors" && moveTwo === "paper") ||
    (moveOne === "rock" && moveTwo === "scissors") ||
    (moveOne === "paper" && moveTwo === "rock")
  ) {
    return "Player One wins!";
  }

  return "Player Two wins!";
};

// Removing elements (nodes) from the DOM
const resetGame = () => {
  if (document.getElementById("outcome")) {
    const outcome = document.body.lastChild;
    document.body.removeChild(outcome);
  }
};

const playGame = () => {
  resetGame();
  const playerOneMove = getRandomMove();
  const playerTwoMove = getRandomMove();
  const outcome = getOutcome(playerOneMove, playerTwoMove);
  updateDOM(playerOneMove, playerTwoMove, outcome);
};

const updateDOM = (moveOne, moveTwo, outcome) => {
  // TODO Implement this method to update the DOM
  // There are some images you can use in the images directory

  //get handles to image container
  const playerOneImage = document.getElementById("player-one-move__img");
  const playerTwoImage = document.getElementById("player-two-move__img");
  console.log("hello");
  //update image containers
  playerOneImage.setAttribute("src", `./images/${moveOne}.png`);
  playerTwoImage.setAttribute("src", `./images/${moveTwo}.png`);

  //get handles to p tags for move names
  const playerOneMoveText = document.getElementById("player-one-move__name");
  const playerTwoMoveText = document.getElementById("player-two-move__name");
  //set move names
  playerOneMoveText.innerHTML = moveOne;
  playerTwoMoveText.innerHTML = moveTwo;

  ////Add outcome result to the document
  //create p tag element
  const result = document.createElement("p");
  //set class and id attributes
  result.setAttribute("id", "outcome");
  result.setAttribute("class", "outcome");

  // set text
  result.innerText = outcome;
  //add to the DOM
  document.body.appendChild(result);

  //
};

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", playGame);
