"use strict";

let number = Math.trunc(Math.random() * 20) + 1;

let score = document.querySelector(".score").textContent;
score = 20;

// When user clicks the check button

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  

  //when user doesn't click anything

  if (!guess) {
    document.querySelector(".message").textContent = "ENTER A NUMBER!";
  } else if (guess === number) {

    //When user guesses the correct answer
    
    document.querySelector(".number").textContent = guess
    document.querySelector(".message").textContent = "CORRECT!";
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width ='30rem'
  } else if (guess > number) {

    //When the score is too high
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO HIGH!";
      score--;
      document.querySelector(".score").textContent = score;

      //When you have run out of turns
    } else {
      document.querySelector(".message").textContent = "YOU LOST, TRY AGAIN!!";
      document.querySelector(".score").textContent = 0;
    }
    //when the number is too low
  } else if (guess < number) {
    document.querySelector(".message").textContent = "TOO LOW!";
    score--;

    document.querySelector(".score").textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector(".score").textContent = score;
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('.guess').value = '';

    




 })