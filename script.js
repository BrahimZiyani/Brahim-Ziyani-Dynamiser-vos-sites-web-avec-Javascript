var lastChosenDiv;
var totalScore1 = 0;
var totalScore2 = 0;
var activePlayer = 1;
var scoreh1 = 0;
var scoreh2 = 0;


// Executes random() and rolls() functions when the "Roll Dice" div is clicked
document.querySelector(".roll-dice").onclick = function (){
    random();
    rolls();
};


// Stores the current store to the total score of the player and changes the active player
document.querySelector(".hold").onclick = function (){
    hold();
    totalScore1 = 0;
    document.querySelector(".scoretotal1").innerHTML = 0;
    totalScore2 = 0;
    document.querySelector(".scoretotal2").innerHTML = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    if (activePlayer == 1){
        document.querySelector(".player1 .fa-circle-dot").style.display = "block";
        document.querySelector(".player2 .fa-circle-dot").style.display = "none";
    } else {    
        document.querySelector(".player1 .fa-circle-dot").style.display = "none";
        document.querySelector(".player2 .fa-circle-dot").style.display = "block";
    }
};

// Resets all scores when NEW GAME is clicked
document.querySelector(".newgame").onclick = function (){
    activePlayer = 1;
    newg();
    totalScore1 = 0;
    totalScore2 = 0;
    scoreh1 = 0;
    scoreh2 = 0;
    document.querySelector(".scoretotal1").innerHTML = 0;
    document.querySelector(".scoretotal2").innerHTML = 0;
    document.querySelector(".scoreheld1").innerHTML = 0;
    document.querySelector(".scoreheld2").innerHTML = 0;
};


// This function generates a random number between 1-6 and displays the corresponding dice face
function random() {
    var myarray = [".first-face", ".second-face", ".third-face", ".fourth-face", ".fifth-face", ".sixth-face"];
    var ChosenDiv = myarray[Math.floor(Math.random() * myarray.length)];
    var index = myarray.indexOf(ChosenDiv);
    var current = index+1;
    
    //If the player rolls a one, he's current score is set to 0 and he misses his turn
    if (current === 1) {
        activePlayer = activePlayer === 1 ? 2 : 1;
        totalScore1 = 0;
        totalScore2 = 0;
        document.querySelector(".scoretotal1").innerHTML = 0;
        document.querySelector(".scoretotal2").innerHTML = 0;

        if (activePlayer == 1){
            document.querySelector(".player1 .fa-circle-dot").style.display = "block";
            document.querySelector(".player2 .fa-circle-dot").style.display = "none";
        } else {    
            document.querySelector(".player1 .fa-circle-dot").style.display = "none";
            document.querySelector(".player2 .fa-circle-dot").style.display = "block";
        }

    }


    // Adds the current number rolled to the active player's total score and update the UI accordingly
    if (activePlayer == 1) {
        totalScore1 += current;
        document.querySelector(".player1 .fa-circle-dot").style.display = "block";
        document.querySelector(".player2 .fa-circle-dot").style.display = "none";
        document.querySelector(".scoretotal1").innerHTML = totalScore1;
    } else {
        totalScore2 += current;
        document.querySelector(".player1 .fa-circle-dot").style.display = "none";
        document.querySelector(".player2 .fa-circle-dot").style.display = "block";
        document.querySelector(".scoretotal2").innerHTML = totalScore2;
    }

    console.log(current)
    console.log(activePlayer)  
    
   
    if (lastChosenDiv) {
        document.querySelector(lastChosenDiv).style.display = "none";
    }
    

    
    document.querySelector(ChosenDiv).style.display = "flex";
    
    lastChosenDiv = ChosenDiv; 
    
}

// This function is called when the user clicks on the "Hold" button. It adds the current total score of the active player to their held score and updates the corresponding element in the HTML.
function hold() { 
    scoreh1 += totalScore1;
    scoreh2 += totalScore2;
    document.querySelector(".scoreheld1").innerHTML = scoreh1;
    document.querySelector(".scoreheld2").innerHTML = scoreh2;
}

// This function is called when the user clicks on the "Roll Dice" button. It displays a "Roll Success" message in the HTML for a short period of time to let the user know that the dice has been rolled.
function rolls() {
    var rollSuccess = document.querySelector(".roll-success");
    rollSuccess.style.display = "flex";
    setTimeout(function(){
        rollSuccess.style.display = "none";
    }, 500); 
}

// This function is called when the user clicks on the "New Game" button. It resets the game by displaying the player 1 active indicator and hiding the player 2 active indicator.
function newg() {
    document.querySelector(".player1 .fa-circle-dot").style.display = "block";
    document.querySelector(".player2 .fa-circle-dot").style.display = "none";

}