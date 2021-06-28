/*
 * app.js
 * javascript rock,paper, scissors game
 * 
 * Author: Rohit Mehta
 */

'use strict';

const rps = ['rock', 'paper', 'scissors'];

let playerSelection = '';
let computerSelection = '';

// looking into computer's choices via pictures
const compImg = document.querySelector('.computer');
const compImgSrc = compImg.getAttribute('src');
const status = document.querySelector('.status');


// set the playerSelecton depending on as
// event p ('click' event) 's target is rock, paper or scissors
const playUser = (p) => {
    playerSelection = p.target.getAttribute('data-rps');

    // p.target.style.cssText = 'box-shadow: 0 0 30px red';

    // console.log(p.target.getAttribute('data-rps'));

    //computer plays as the player plays so
    playComputer();

    // finally determine who won
    playRound();

    // reset all styling after 2 seconds
    setTimeout(function () {
        compImg.setAttribute('src', compImgSrc);
        status.textContent = '';
    }, 1000);

}

const userWeapons = Array.from(document.querySelectorAll('.rps'));
userWeapons.forEach(weapon => {
    weapon.addEventListener('click', playUser);
});


// the computer's choice of weapon randomly
// also display it to the user
const playComputer = () => {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];


    compImg.setAttribute('src', `img/${computerSelection}.png`);
};


// function to Play a single round and log the winner onto the console
function playRound() {
    // rock beats scissors
    // scissors beats paper
    // paper beats rock

    // using a compound condition:
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
        status.textContent = 'You won! ' + playerSelection + ' beats ' + computerSelection;
    }
    else if (playerSelection === computerSelection) {
        status.textContent = 'Tie! Both won.';
    }
    else {
        status.textContent = 'You Lost! ' + computerSelection + ' beats ' + playerSelection;
    }

}
