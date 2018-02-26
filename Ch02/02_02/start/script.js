// JavaScript Document

// Create the game score

let myScore = 1000;

// Setup and change the game score
init()
changeScore();

// Function to initalize the game score in the game
function init() {
    myScore = 1000;
}

// Function to change the score of the game
function changeScore() {
    myScore = myScore + 100;
    console.log("Player score: " + myScore);
}