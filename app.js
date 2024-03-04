const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".possible-choices");
let userChoice;
let computerChoice;
let result;

const generateComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = possibleChoices[randomNumber].innerHTML;
  //   console.log(randomNumber, computerChoice)
  computerChoiceDisplay.innerHTML = ` ${computerChoice}`;
  console.log(userChoice === computerChoice);
};

const getResults = () => {
    if (computerChoice === "rock") {
      if (userChoice === "paper") {
        result = "You Win";
      } else if (userChoice === "scissors") {
        result = "You Lost";
      } else {
        result = "It's a draw";
      }
    } else if (computerChoice === "scissors") {
      if (userChoice === "rock") {
        result = "You Win";
      } else if (userChoice === "paper") {
        result = "You Lost";
      } else {
        result = "It's a draw";
      }
    } else if (computerChoice === "paper") {
      if (userChoice === "scissorsff") {
        result = "You won";
      } else if (userChoice === "rockfff") {
        result = "You Lost";
      } else {
        result = "It's a draw";
      }
    } else {
      result = "technical difficulties";
    }
  
    resultDisplay.innerHTML = ` ${result}`;
  };

possibleChoices.forEach((possibleChoice) =>
  addEventListener("click", (e) => {
    userChoice = `${e.target.id}`;
    userChoiceDisplay.innerHTML = ` ${userChoice}`;

    generateComputerChoice();
    getResults();
  })
);


