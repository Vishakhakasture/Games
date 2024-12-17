const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  // arrow function and for each we will move the mole in each square of the grid
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  // random position to move the mole in square of grids
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  // it wil assign the id of randaomPosition to hitPosition for us to use it later
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  // the eventListener mouse refers to when we hit our mouse on an element
  square.addEventListener("mousedown", () => {
    // and when it does if the id of our div is equals to the hitposition the we win
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      // reassign hitpostion to null for the next iteration
      hitPosition = null;
    }
  });
});

// this function is move the mole every so often, we can set this time interval to ourself
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

// this function will make our current time go down by one incrementally show this new time in the browser
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  // if the current time is 0 then our game is over
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 1000);
