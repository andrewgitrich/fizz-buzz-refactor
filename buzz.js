// use old code and add a function that meets these requirements

//page loads, prompt a user for input of a number

//write a nameed function
	// takes interger as argument
	//counts from 1 to argument value
	// substitute fizz, buzz and fizz buzz accordingly

//convert input value from string(default) to number
	//use + operator for conversion somehow

//validate input with parseInt() function
	//where to put parseInt()

var naumbre = parseInt(prompt("enter a number"));


function counter(num){
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



counter(naumbre);



