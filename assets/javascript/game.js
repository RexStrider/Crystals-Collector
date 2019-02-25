console.log("Welcome to Crystals Collector!");
console.log("click on a crystal to see its value");
console.log("------------------------------------");

// initialize score to 0
let score = 0;

// number of wins
let wins = 0;

// number of losses
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
function addCrystalScore() {
    let index = parseInt(this.getAttribute("index"));
    let crystal = "";

    if (index === 0) crystal = "yellow";
    if (index === 1) crystal = "teal";
    if (index === 2) crystal = "red";
    if (index === 3) crystal = "purple";

    score += crystalScores[index];
    console.log(crystal + " crystal: " + crystalScores[index]);
    render();
}

for (i=0; i < crystalImages.length; i++) {
    crystalImages[i].addEventListener("click", addCrystalScore, false);
}

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