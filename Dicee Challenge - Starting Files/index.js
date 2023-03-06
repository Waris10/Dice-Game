var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6) + 1);
var randomDiceImage1 = 'images/dice' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage1);
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6) + 1);
var randomDiceImage2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);

if ( randomNumber1 > randomNumber2 ){
  document.querySelectorAll('h1')[0].innerHTML = '🎈Player 1 Wins🎈, ';
} else if ( randomNumber2 > randomNumber1 ){
  document.querySelectorAll('h1')[0].innerHTML = '🎈Player 2 Wins🎈';
  } else {
  document.querySelectorAll('h1')[0].innerHTML = 'DRAW!';
         }
