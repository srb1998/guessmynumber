'use strict';

var secretNumber =Math.floor( Math.random()*20)+1;

var score = 10;

var highscore = 0;

document.querySelector(".check").addEventListener("click", function(){
   const guess = Number ((document.querySelector(".guess").value));
//when no input
    if(!guess)
    {
        (document.querySelector(".message").textContent = "No Number Entered !");
    }
    //When Guess is Low
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector(".message").textContent = "Too Less";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else
        {
            document.querySelector(".message").textContent = "Game Over! You Lost the Game";
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".score").textContent = 0;
        }
      
    }
    // When Guess is High
    else if(guess > secretNumber)
    {

        if(score > 1)
        {
            document.querySelector(".message").textContent = "Too High";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else
        {
            document.querySelector(".message").textContent = "Game Over! You Lost the Game";
            document.querySelector("body").style.backgroundColor = "red";
            document.querySelector(".score").textContent = 0;
        }
        
    }
    //When Player wins
    else
    {
        document.querySelector(".message").textContent = "Correct Number 👌";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "25rem";

        if (score > highscore)
        {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
    }
});

document.querySelector(".again").addEventListener("click", function(){

    score= 10;
    secretNumber =Math.floor( Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

});