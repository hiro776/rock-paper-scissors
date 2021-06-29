/*
 * app.js
 * javascript rock,paper, scissors game
 * 
 * Author: Rohit Mehta
 */

'use strict';

// Rules of the Game are at the end of this file. See the alert() at the bottom.

// weapon choices for comptpuer
const rps = ['rock', 'paper', 'scissors'];
const scoreLimit = 5;                       // Change this to change the winning score



// a point where to print all messages
const msgHandler = document.querySelector('.msg');
// player score and computer score display location in the dom
const dispalyPlayerScore = document.querySelector('#player-score');
const displayCompScore = document.querySelector('#comp-score');
// represents the dom element where to add textNode for displaying current round
const displayRound = document.querySelector('div.round span.number');

let round = parseInt(displayRound.childNodes[0].nodeValue);
let playerScore = parseInt(dispalyPlayerScore.childNodes[0].nodeValue);
let compScore = parseInt(displayCompScore.childNodes[0].nodeValue);




// playRound ---- play the single round
// 
// arguments:
//      playerWeapon --- player weapon, either 'rock', 'paper' or 'scissors'
//
// returns:
//      'win' --- if the player has won
//      'lose'   --- if the computer has won
//      'tie'  --- if there's a tie
const playRound = function (playerWeapon) {

    const computerWeapon = rps[Math.floor(Math.random() * rps.length)];
    //    console.log(computerWeapon);


    if (playerWeapon === 'rock' && computerWeapon === 'scissors' ||
        playerWeapon === 'scissors' && computerWeapon === 'paper' ||
        playerWeapon === 'paper' && computerWeapon === 'rock') {
        // player wins
        return 'win';
    }
    else if (playerWeapon === computerWeapon) {
        // tie
        return 'tie';
    }
    else {
        // player loses
        return 'lose';
    }
}




// game() -- initialize the game
//
// Arguments:  
//          e -- user click event
const game = function (e) {
    if (playerScore === scoreLimit || compScore === scoreLimit)
        return;

    e.target.style.cssText = 'transform: scale(110%); box-shadow:0 0 10px #a27a2c';
    const result = playRound(e.target.getAttribute('data-weapon'));
    // console.log(result)

    switch (result) {
        case 'win':
            msgHandler.textContent = 'Round Won 🔥';
            playerScore++;
            break;

        case 'tie':
            msgHandler.textContent = 'Round Tied ⚖️';
            playerScore++;
            compScore++;
            break;

        case 'lose':
            msgHandler.textContent = 'Round Lost 😩';
            compScore++;
            break;

        default:
            msgHandler.textContent = 'An Error Occured. (code 1)';
            return;
    }


    dispalyPlayerScore.textContent = playerScore;
    displayCompScore.textContent = compScore;

    // before exiting print win/lose msg
    if (playerScore === scoreLimit) {
        msgHandler.style.cssText = 'font-size: 2rem; background-color: rgba(241, 201, 124, 0.8)';
        msgHandler.textContent = 'You Won 🎉';
    }
    else if (compScore === scoreLimit) {
        msgHandler.style.cssText = 'font-size: 2rem; background-color: rgba(241, 201, 124, 0.8)';
        msgHandler.textContent = 'You Lose 😭';
    }
    else {
        // pass the user click event to this arrow function 
        // to remove the highlight styling
        setTimeout((e) => {
            // ready for next round
            round++;
            displayRound.textContent = round;
            e.target.style.cssText = '';
            msgHandler.textContent = 'Ready !';
        }, 700, e);
    }
}



// the user clickables (rock, paper and scissors)
const usrClickables = Array.from(document.querySelectorAll('.rps-weapon img'));


// add event listeners to user clickables which will 
// trigger the playRound
usrClickables.forEach(weapon => {
    weapon.addEventListener('click', game);
});

alert('You will be playing a tense game of Rock, Paper & Scissors against the computer.\nRules are simple:\nWhoever reaches the score limit of 5 first wins.');