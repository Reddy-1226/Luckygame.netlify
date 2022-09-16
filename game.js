const randomNumberbetween0and1 = Math.random();
const randomNumberbetween0and19 = randomNumberbetween0and1 * 20;
const luckyNumber = Math.floor(randomNumberbetween0and19);

console.log(luckyNumber);

// Now take input from the user
let score = 5;

const userInput = document.getElementById("guessing");
console.log(userInput);
const mesbox = document.querySelector("#message");
const checkButton = document.getElementById("checkbtn");
const main = document.querySelector("section");
const scoreElement = document.getElementById("score");
scoreElement.textContent = score;

function checkNumber() {
  console.log(userInput.value);
  const userGuess = Number(userInput.value);
  if (userGuess === luckyNumber) {
    mesbox.textContent = "You are right 😀😀";
    main.style.backgroundColor = "green";
  } else {
    main.style.backgroundColor = "red";
    score = score - 1;
    scoreElement.textContent = score;
    if (score <= 0) {
      mesbox.textContent = "You lost the game😮😮";
      checkButton.disabled = true;
      return;
    }
    if (userGuess > luckyNumber) {
      mesbox.textContent = "you number is greater than lucky number😯😯";
    } else {
      mesbox.textContent = "you number is lower than lucky number😯😯";
    }
  }
}
checkButton.addEventListener("click", checkNumber);

const refresh = document.getElementById("replay");

// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
refresh.addEventListener("click", reload, false);


