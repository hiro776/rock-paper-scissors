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


// set the playerSelecton depending on as
// event p ('click' event) 's target is rock, paper or scissors
const playUser = (p) => {
    playerSelection = p.target.getAttribute('data-rps');

    console.log(p.target.getAttribute('data-rps'));

    //computer plays as the player plays so
    playComputer();

    // finally determine who won
    playRound();
}


const userWeapons = Array.from(document.querySelectorAll('.rps'));
userWeapons.forEach(weapon => {
    weapon.addEventListener('click', playUser);
});


// the computer's choice of weapon randomly
// also display it to the user
const playComputer = () => {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];

    // const compImg = document.querySelector('.computer');

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
        console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
    }
    else if (playerSelection === computerSelection) {
        console.log('Tie! Both won.');
    }
    else {
        console.log('You Lost! ' + computerSelection + ' beats ' + playerSelection);
    }
}

// // pass in the number of times to play the game
// let game = (i) => {
//     while(i-- > 0)
        // playRound();
// }

// game(5);