

// * There will be four crystalScores displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// * Your game will hide this amount until the player clicks a crystal.
// * When they do click one, update the player's score counter.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

// * When the game begins again, the player should see a new random number. Also, all the crystalScores will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// initialize score to 0
let score = 0;
console.log(score);

let wins = 0;
let losses = 0;

// create a random integer with a range of 20 to 50 inclusive
let randomNumber = Math.ceil(Math.random() * 20) + 30;
console.log(randomNumber);

// create random number values for each crystal with a range of 1 and 15 inclusive
let crystalScores = [];

for(i=0; i < 4; i++) {
    crystalScores.push( Math.ceil(Math.random() * 15) );
}
console.log(crystalScores);

// get all of the crystal image elements
let crystalImages = document.getElementsByTagName("img");

// add to the score when clicking on a crystal

// adds the value of crystal 1 to the score
crystalImages[0].addEventListener("click", event => {
    score += crystalScores[0];
    console.log("crystal 1: " + crystalScores[0]);
    console.log("current score: " + score);
    render();
});

// adds the value of crystal 2 to the score
crystalImages[1].addEventListener("click", event => {
    score += crystalScores[1];
    console.log("crystal 2: " + crystalScores[1]);
    console.log("current score: " + score);
    render();
});

// adds the value of crystal 3 to the score
crystalImages[2].addEventListener("click", event => {
    score += crystalScores[2];
    console.log("crystal 3: " + crystalScores[2]);
    console.log("current score: " + score);
    render();
});

// adds the value of crystal 4 to the score
crystalImages[3].addEventListener("click", event => {
    score += crystalScores[3];
    console.log("crystal 4: " + crystalScores[3]);
    console.log("current score: " + score);
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
    alert("You lost! XD");
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
    alert("You won! :D");
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