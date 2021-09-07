const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
let scoreText = document.querySelector(".score");
let highScoreText = document.querySelector(".highscore");
let messageText = document.querySelector(".message");
let guessNumberText = document.querySelector(".number");
let inputValueText = document.querySelector(".guess");

let score = 20;
let highScore = 0;
let guessNumber = Math.trunc(Math.random() * 20) + 1;

//show message func

const displayMessage = (message) => {
  messageText.textContent = message;
};

//check btn func
const checkFunc = (trueFalse, bg, text) => {
  checkBtn.disabled = trueFalse;
  checkBtn.style.backgroundColor = bg;
  checkBtn.textContent = text;
};

//restart game func
const restartGame = () => {
  score = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;

  scoreText.textContent = score;
  guessNumberText.textContent = "?";
  inputValueText.value = "";
  checkFunc(false, "#eee", "Check!");
  changeStyle("#222", "15rem");
  displayMessage("start guessing...");
};

const changeStyle = (bgColor, w) => {
  document.querySelector("body").style.backgroundColor = bgColor;
  document.querySelector(".number").style.width = w;
};

checkBtn.addEventListener("click", function () {
  const inputValue = Number(inputValueText.value);

  if (!inputValue) {
    displayMessage("please enter a number or wrong input");
  } else {
    if (inputValue === guessNumber) {
      displayMessage("Boom!!! its a correct number!");
      guessNumberText.textContent = guessNumber;
      changeStyle("#60b347", "30rem");
      highScoreText.textContent = score;
      checkFunc(false, "red", "click Again! button");
    } else if (inputValue !== guessNumber) {
      if (score > 1) {
        inputValue > guessNumber
          ? displayMessage("too high")
          : displayMessage("too low");
        score--;
        scoreText.textContent = score;
      } else {
        displayMessage("you lost the game");
      }
    }
  }
});
againBtn.addEventListener("click", function () {
  restartGame();
});
