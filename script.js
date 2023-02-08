"use strict";

const number = Math.trunc(Math.random() * 20) + 1;

let score = document.querySelector(".score").textContent;
score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "ENTER A NUMBER!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "CORRECT!";
  } else if (guess > number) {
    document.querySelector(".message").textContent = "TOO HIGH!";
    score--
  } else if (guess < number) {
    document.querySelector(".message").textContent = "TOO LOW!";
    score--
    document.querySelector(".score").textContent = score
  }
});
