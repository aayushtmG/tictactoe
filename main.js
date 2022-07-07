const cells = document.querySelectorAll(".cells");
const reset = document.querySelector(".reset");
// drawings
const drawX = "draw-x";
const drawCircle = "draw-circle";
let turnNum = 9;

const display = document.querySelector(".header");
// turn variaible to switch between drawngs
let turn = drawX;
const draw = function () {
  if (this.classList.contains(drawX) || this.classList.contains(drawCircle)) {
    alert("Not valid space!!");
  } else {
    this.classList.add(turn);
    console.log("Current :", turn);
    displayWinner(winCheck());
    displayTie();
    turnNum--;
    switchTurn();
    console.log("next is:", turn);
  }
};
//Display winner
function displayWinner(value) {
  if (value == "x") {
    display.textContent = "X'wins";
  } else if (value == "circle") {
    display.textContent = "O'wins";
  }
}

//checking winner
const winCheck = function () {
  if (winner(turn) == "draw-x") {
    stop();
    return "x";
  } else if (winner(turn) == "draw-circle") {
    stop();
    return "circle";
  }
};

//checking tie
function tie(cells) {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains("draw-x") ||
      cell.classList.contains("draw-circle")
    );
  });
}
const displayTie = function () {
  if (tie(cells) && !winner(turn)) {
    console.log("its a tie");
    stop();
    display.textContent = "Draw!!";
  }
};
//function to switch turn
const switchTurn = function () {
  if (turn == drawX) {
    turn = drawCircle;
  } else if (turn == drawCircle) {
    turn = drawX;
  }
};
const stop = function () {
  cells.forEach((cell) => {
    cell.removeEventListener("click", draw);
  });
};

// To check winner
//HARD CODED
const winner = function (value) {
  if (
    cells[0].classList.contains(`${value}`) &&
    cells[1].classList.contains(`${value}`) &&
    cells[2].classList.contains(`${value}`)
  ) {
    return value;
  } else if (
    cells[0].classList.contains(`${value}`) &&
    cells[3].classList.contains(`${value}`) &&
    cells[6].classList.contains(`${value}`)
  ) {
    return value;
  } else if (
    cells[6].classList.contains(`${value}`) &&
    cells[7].classList.contains(`${value}`) &&
    cells[8].classList.contains(`${value}`)
  ) {
    return value;
  } else if (
    cells[2].classList.contains(`${value}`) &&
    cells[5].classList.contains(`${value}`) &&
    cells[8].classList.contains(`${value}`)
  ) {
    return value;
  } else if (
    cells[3].classList.contains(`${value}`) &&
    cells[4].classList.contains(`${value}`) &&
    cells[5].classList.contains(`${value}`)
  ) {
    return value;
  } else if (
    cells[0].classList.contains(`${value}`) &&
    cells[4].classList.contains(`${value}`) &&
    cells[8].classList.contains(`${value}`)
  )
    return value;
  else if (
    cells[2].classList.contains(`${value}`) &&
    cells[4].classList.contains(`${value}`) &&
    cells[6].classList.contains(`${value}`)
  )
    return value;
  else if (
    cells[1].classList.contains(`${value}`) &&
    cells[4].classList.contains(`${value}`) &&
    cells[7].classList.contains(`${value}`)
  ) {
    return value;
  }
};
// Adding event to every cell in the board
const play = function () {
  cells.forEach((cell) => {
    cell.addEventListener("click", draw);
  });
};

play();

reset.addEventListener("click", function () {
  cells.forEach((cell) => {
    cell.classList.remove("draw-x", "draw-circle");
  });
  display.textContent = "";
  display.insertAdjacentHTML(
    "afterbegin",
    'Tic-<span class="colored">Tac</span>-Toe'
  );
  play();
});
