var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var p1ScoreDisplay = document.getElementById("p1Score");
var p1Score = 0;
var p2Score = 0;
var p2ScoreDisplay = document.getElementById("p2Score")
var gameOver = false;
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScore = 5;
var winningScoreDisplay = document.getElementById("finalScore")

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1ScoreDisplay.classList.add("winner");
			gameOver = true;
		}
		p1ScoreDisplay.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2ScoreDisplay.classList.add("winner");
			gameOver = true;
		}
		p2ScoreDisplay.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
	gameOver = false;
})

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = 0;
	p2ScoreDisplay.textContent = 0;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = parseInt(numInput.value);
	winningScore = parseInt(numInput.value);
	reset();
})


