let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game is draw.");
  msg.innerText = "Game is draw.";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoiceId) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! ${userChoice} beats ${compChoiceId}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Comp Wins.");
    msg.innerText = `Comp Wins. ${compChoiceId} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("Your Choice:", userChoice);
  const compChoiceId = compChoice();
  console.log("Comp choice:", compChoiceId);
  if (userChoice === compChoiceId) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoiceId === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoiceId === "scissors" ? false : true;
    } else {
      //paper, rock
      userWin = compChoiceId === "rock" ? false : true;
      showWinner(userWin, userChoice, compChoiceId);
    }
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("You clicked on", userChoice);
    playGame(userChoice);
  });
});
