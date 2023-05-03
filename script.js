var lastChosenDiv;
var totalScore1 = 0;
var totalScore2 = 0;
var activePlayer = 1;
var scoreh1 = 0;
var scoreh2 = 0;

document.querySelector(".roll-dice").onclick = function (){
    random();
    rolls();
};

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



function random() {
    var myarray = [".first-face", ".second-face", ".third-face", ".fourth-face", ".fifth-face", ".sixth-face"];
    var ChosenDiv = myarray[Math.floor(Math.random() * myarray.length)];
    var index = myarray.indexOf(ChosenDiv);
    var current = index+1;
    
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

function hold() { 
    scoreh1 += totalScore1;
    scoreh2 += totalScore2;
    document.querySelector(".scoreheld1").innerHTML = scoreh1;
    document.querySelector(".scoreheld2").innerHTML = scoreh2;
}


function rolls() {
    var rollSuccess = document.querySelector(".roll-success");
    rollSuccess.style.display = "flex";
    setTimeout(function(){
        rollSuccess.style.display = "none";
    }, 500); 
}


function newg() {
    document.querySelector(".player1 .fa-circle-dot").style.display = "block";
    document.querySelector(".player2 .fa-circle-dot").style.display = "none";

}