
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
$("#myButton").click(function(){
	
		//prevents default form action of sending input to server
		event.preventDefault();

		//removes content of all 'ul' elements
		$('ul').empty();
	
	//validate user input 
	if(parseInt($("#formValue").val())){
		
		//pass the value/argument from input field into the function
		counter($("#formValue").val());
	}
	//alert if user input is not an interger
	else{
		alert("this is not a number");
	}
	
});




});