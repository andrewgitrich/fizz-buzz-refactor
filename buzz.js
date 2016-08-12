
$(document).ready(function(){


function counter(num){
	for (var i = 1; i <= num; i++){
		
		if (i % 3 === 0 && i % 5 === 0){
				$("ul").append('<li>' + "fizzbuzz" +'</li>');
		}

		else if(i % 3 === 0){
			$("ul").append('<li>' + "fizz" +'</li>');
		}

		else if(i % 5 === 0){
			$("ul").append('<li>' + "buzz" +'</li>');
		}

		else{
			$("ul").append('<li>' + i +'</li>');
		}
	}
}


//press a button to run the function called counter, 
//pass the value/argument from input field into the function
//not sure if parseInt() is working
$("#myButton").click(function(){
	counter(parseInt($("#formValue").val()));
});




});