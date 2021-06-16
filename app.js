/*
 * app.js
 * javascript rock,paper, scissors game
 * 
 * Author: Rohit Mehta
 */

const rps = ['rock','paper','scissors'];

let playerSelection = '';
let computerSelection = '';

// get the user's input and store it in playerSelection
let playerPlay = () => {
    playerSelection = prompt('Rock, Paper, Scissors ').toLowerCase();

    if (! rps.includes(playerSelection)) {
        alert('Invalid Input!!!');
        playerSelection = '';
    }
}

// get the computer's input and store it in computerSelection
let computerPlay = () => {
    computerSelection = rps[Math.floor(Math.random() * rps.length)];
}

// function to Play a single round and log the winner onto the console
let playRound = () => {
    
    playerPlay();
    computerPlay();

    // rock beats scissors
    // scissors beats paper
    // paper beats rock

    // using a compound condition:
    if(playerSelection === 'rock' && computerSelection === 'scissors' ||
       playerSelection === 'scissors' && computerSelection === 'paper'||
       playerSelection === 'paper' && computerSelection === 'rock') {
           console.log('You won! ' + playerSelection + ' beats ' + computerSelection);
    }
    else if(playerSelection === computerSelection) {
        console.log('Tie! Both won.');
    }
    else {
        console.log('You Lost! ' + computerSelection + ' beats ' + playerSelection);
    }
}

// pass in the number of times to play the game
let game = (i) => {
    while(i-- > 0)
        playRound();
}

game(5);