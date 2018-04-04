//Create Secret Number
var secretNumber=4;

//Ask User for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);


//check guess
if(guess === secretNumber){
	alert("You got it right!!!")
}

//otherwise check if higher

else if(guess > secretNumber){
	alert("Too high. Guess again");
}

else{
	alert("Too low. Guess again!");
}
//otherwise check if lower