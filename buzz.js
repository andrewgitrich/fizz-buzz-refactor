// prompt a user for input of a number
//
var naumbre = prompt("enter a number");

function iceCream(num){
	for (var i = 1; i <= num; i++){
	if (i % 3 === 0 && i % 5 === 0){
		console.log("fizzBuzz");
	}
	else if(i % 3 === 0){
		console.log("fizz");
	}
	else if(i % 5 === 0){
		console.log("buzz");
	}
	else{
		console.log(i);
	}
	}
}

iceCream(naumbre);
// print numbers 1 - 100
//numbers that are divisible by 3 should print "fizz"
// number that are divisible by 5 shpuld print "buzz"
// numbers divisible by 3 & 5 should print "fizz buzz"
/*
for (var i = 1; i <= 100; i++){
	if (i % 3 === 0 && i % 5 === 0){
		console.log("fizzBuzz");
	}
	else if(i % 3 === 0){
		console.log("fizz");
	}
	else if(i % 5 === 0){
		console.log("buzz");
	}
	else{
		console.log(i);
	}
}


*/


