console.log("Printing all numbers between -10 and 19");
var i=-10;
while(i < 20){
	console.log(i);
	i++;
}

console.log("Printing all even between 10 and 40");
var i=10

while(i <= 40){
	console.log(i);
	i+=2;
}

console.log("Printing all odd numbers between 300 and 333");
var i=300
while (i <= 333){
	if (i % 2 !== 0){
		console.log(i);
	}
	i++
	
}

console.log("Printing all numbers divisible by 5 and 3 between 5 and 50")
var i=5
while(i<=50){
	if(i%5 === 0 && i%3 === 0){
		console.log(i);
	}
	i++;
}
