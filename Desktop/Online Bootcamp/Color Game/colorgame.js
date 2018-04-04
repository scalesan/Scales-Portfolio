var colorArray = [];
var chosenColor;
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	modeButtonsSetup();
	reset(numOfSquares);
	SquaresSetup();
}	

function modeButtonsSetup(){
		for(var i = 0; i<modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numOfSquares = 3;
			}

			else{
				numOfSquares = 6;
			}

			reset(numOfSquares);


		});	
	}
	}


function SquaresSetup(){
	colorDisplay.textContent = chosenColor;
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === chosenColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
	}
	else{
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	})
	}

}


	function reset(numOfSquares){
		colorArray = getRandomColors(numOfSquares);
		//pick new random color from array
		chosenColor = randomColorChosen();
		//change colorDisplay to match chosen Color
		colorDisplay.textContent = chosenColor; 
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		//change colors of squares
		for(var i = 0; i < squares.length; i++){
			if(colorArray[i]){
				squares[i].style.display = "block";
					squares[i].style.backgroundColor = colorArray[i];
			}
			 else{
			 	colorArray.splice(i, 1);
			 	squares[i].style.display = "none";
			 }
			}
		h1.style.backgroundColor = "steelblue";


	}

resetButton.addEventListener("click", function(){
		reset(numOfSquares);
})

	function changeColors(color){
		//loop through all squares
		for(var i=0; i<squares.length; i++){
			//change each color to match chosen color
			squares[i].style.backgroundColor = color;
		}
	}

	function randomColorChosen(){
		var randomNumber = Math.floor(Math.random() * colorArray.length);
		return colorArray[randomNumber];
	}

	function getRandomColors(num){
		//make array
		var colorArray = []
		//repeat num times
		for(var i = 0; i<num; i++){
			colorArray.push(randomColor());
			//get random color and push into array
		}
		//return that array
		return colorArray;
	}

	function randomColor(){
		//pick red from 0-255
		var red = Math.floor(Math.random() * 256);
		//pick a green from 0-255
		var green = Math.floor(Math.random() * 256);
		//pick a blue from 0-255
		var blue = Math.floor(Math.random() * 256);
		return "rgb(" + red + ", " + green + ", " + blue +")";

	}
