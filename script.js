'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

const displayMessage = (message) => {
   document.querySelector('.message').textContent = message;
}
const randomNumber = () => {
   return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;


// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
   const guess = Number(document.querySelector('.guess').value);
   // console.log(guess, typeof guess);

   if (!guess) {
      displayMessage('⛔ No number!');

   } else if (guess === secretNumber) {
      displayMessage('✔ Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score >= highscore) {
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
      }

   } else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         displayMessage('🧨 You lost the game!');
      }
   }
   //else if (guess > secretNumber) {
   //    if (score > 1) {
   //       document.querySelector('.message').textContent = '📈 Too high!';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = '🧨 You lost the game!';
   //    }

   // } else if (guess < secretNumber) {
   //    if (score > 1) {
   //       document.querySelector('.message').textContent = '📉 Too low!';
   //       score--;
   //       document.querySelector('.score').textContent = score;
   //    } else {
   //       document.querySelector('.message').textContent = '🧨 You lost the game!';
         
   //    }
   // }
});


document.querySelector('.again').addEventListener('click', () => {
   score = 20;
   secretNumber = randomNumber();
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   displayMessage('Start quessing ...');
   document.querySelector('.score').textContent = score;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
});