function factorial(Number){
	//define a result variable
	var solution = 1;
    for(var i=Number; i>=2; i--){
  		solution *= i;
    }
    return solution;
}


function isEven(num){
	return num % 2 === 0;
}

function changeWord(word){
	//search string for all dashes
	var newWord = word.replace(/-/g , "_");
	//return str
	return newWord;
}