function printReverse(myArray){
	arrayLength = myArray.length;
	for(var i = arrayLength-1; i>=0; i--){
		console.log(myArray[i]);
	}

}

function isUniform(myArray){
	var firstElement = myArray[0];
	for(var i = 1; i<myArray.length; i++){
		if(myArray[i] !== firstElement){
			return false;
			}
		}
			return true;
		}

function maximumNum(myArray){
	myArray.sort();
	myArray.reverse();
	console.log(myArray[0]);

}

function sumArray(myArray){
	var total = 0
	for(var i=0; i<myArray.length; i++){
		total+=myArray[i];
	}
	console.log(total);
}




