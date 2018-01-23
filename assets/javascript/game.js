
//Array with letters of the alphabet
var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
		 
//function randomly selecting in the array compGuess		 
function compCalc(num) {
	return compGuess[Math.floor(Math.random() * compGuess.length)];
}

var win = 0;
var loss = 0;
var guess = 10;
var userGuessSoFar = [];
		
//------------------document.onkeyup-----------------//
document.onkeyup = function(event) {

	var userPress = String.fromCharCode(event.keyCode).toLowerCase();
	userGuessSoFar.push(userPress); //pushes the user's input into the empty array userGuessSoFar

//conditional statement comparing a user's input to the computer's guess
	if (compGuess.includes(userPress)) {

		if (userPress === compCalc()) {
			userGuessSoFar = [];
			guess = 10;
			win++;
			document.getElementById("win").textContent = win;
			alert("You Win!");
			
		}
		else if (userPress){
			guess--;
			document.getElementById("guessLeft").textContent = guess;
			document.getElementById("userGuess").textContent = userPress;

			if (guess == 0) {
				guess = 10;
				loss++;
				document.getElementById("loss").textContent = loss;				
				alert("You lose, try again!");
	
			}		
		}
		if (userGuessSoFar[9]) {
			userGuessSoFar = [];
		}							
	}
	else {
		alert("please press a letter!")
	}
	document.getElementById("guessDisplay").textContent = userGuessSoFar;
}	