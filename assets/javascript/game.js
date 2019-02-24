console.log("Welcome to Crystals Collector!");
console.log("click on a crystal to see its value");
console.log("------------------------------------");

// initialize score to 0
let score = 0;

let wins = 0;
let losses = 0;

// create a random integer with a range of 20 to 50 inclusive
let randomNumber = Math.ceil(Math.random() * 20) + 30;
console.log("the target number is " + randomNumber);

// create random number values for each crystal with a range of 1 and 15 inclusive
let crystalScores = [];

for(i=0; i < 4; i++) {
    crystalScores.push( Math.ceil(Math.random() * 15) );
}

// get all of the crystal image elements
let crystalImages = document.getElementsByTagName("img");

// add to the score when clicking on a crystal
// adds the value of crystal 1 to the score
crystalImages[0].addEventListener("click", event => {
    score += crystalScores[0];
    console.log("yellow crystal: " + crystalScores[0]);
    render();
});

// adds the value of crystal 2 to the score
crystalImages[1].addEventListener("click", event => {
    score += crystalScores[1];
    console.log("teal crystal: " + crystalScores[1]);
    render();
});

// adds the value of crystal 3 to the score
crystalImages[2].addEventListener("click", event => {
    score += crystalScores[2];
    console.log("red crystal: " + crystalScores[2]);
    render();
});

// adds the value of crystal 4 to the score
crystalImages[3].addEventListener("click", event => {
    score += crystalScores[3];
    console.log("purple crystal: " + crystalScores[3]);
    render();
});

// renders the game
function render() {

    if (score > randomNumber) {
        gameLost();
    } else if (score === randomNumber) {
        gameWon();
    }

    document.getElementById("game-score").textContent = score;
}

// Game behavior when player losses
function gameLost() {
    // tally the loss
    losses++;

    // re-initalize and update the game
    gameReset();

    // update the web page
    document.getElementById("losses").textContent = losses;
    document.getElementById("random-number").textContent = randomNumber;

    // alert the user
    alert("You lost!");

    console.log("You lost!");
    console.log("------------------------------------");
    console.log("the target number is " + randomNumber);
}

// Game behavior when player wins
function gameWon() {
    // tally the win
    wins++;

    // reset the game stats
    gameReset();

    // update the web page
    document.getElementById("wins").textContent = wins;
    document.getElementById("random-number").textContent = randomNumber;

    // alert the user
    alert("You won!");

    console.log("You won!");
    console.log("------------------------------------");
    console.log("the target number is " + randomNumber);
}

// Resets the games stats
function gameReset() {
        // re-initialize the game
        score=0;
        randomNumber = Math.ceil(Math.random() * 20) + 30;
    
        // re-initalize the crystal scores
        for(i=0; i < 4; i++) {
            crystalScores[i] = Math.ceil(Math.random() * 15);
        }
}

// Game Start
document.getElementById("random-number").textContent = randomNumber;

render();