"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let message =  document.querySelector(".message")
let highScore = 0
let body = document.querySelector('body')
let check = document.querySelector(".check")
let numb = document.querySelector('.number')

let score = document.querySelector(".score").textContent;
score = 20;

// When user clicks the check button

check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  

  //when user doesn't click anything

  if (!guess) {
    message.textContent = "ENTER A NUMBER!";
  } else if (guess === number) {

    //When user guesses the correct answer
    
    numb.textContent = guess
    message.textContent = "CORRECT!";
    body.style.backgroundColor = '#60b347'
    numb.style.width ='30rem'
    if (score > highScore) {
        highScore = score
        document.querySelector('.highscore').textContent = highScore
    }
  } else if (guess > number) {

    //When the score is too high
    if (score > 1) {
      message.textContent = "TOO HIGH!";
      score--;
      document.querySelector(".score").textContent = score;

      //When you have run out of turns
    } else {
      message.textContent = "YOU LOST, TRY AGAIN!!";
      document.querySelector(".score").textContent = 0;
    }
    //when the number is too low
  } else if (guess < number) {
    message.textContent = "TOO LOW!";
    score--;

    document.querySelector(".score").textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    number = Math.trunc(Math.random() * 20) + 1;
    numb.textContent = "?";
    message.textContent = "Start guessing...";
    body.style.backgroundColor = '#222';
    document.querySelector(".score").textContent = score;
    numb.style.width ='15rem';
    document.querySelector('.guess').value = '';

    




 })