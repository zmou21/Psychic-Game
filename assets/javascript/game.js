var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
		 
function compCalc(num) {
	return	compGuess[Math.floor(Math.random() * compGuess.length)];
}
console.log(compCalc());

var win = 0;
var loss = 0;
var guess = 10;
var userGuessSoFar = [];
		
//------------------document.onkeyup-----------------//
document.onkeyup = function(event) {

	var userPress = String.fromCharCode(event.keyCode).toLowerCase();
	userGuessSoFar.push(userPress);
	// console.log("This is the computer: " + compCalc);
	// console.log("This is the user's guess " + userPress);

	if (userPress == compGuess[0] || userPress == compGuess[1] || userPress == compGuess[2] || userPress == compGuess[3] || userPress == compGuess[4] || userPress == compGuess[5] || userPress == compGuess[6] || userPress == compGuess[7] || userPress == compGuess[8] || userPress == compGuess[9] || userPress == compGuess[10] || userPress == compGuess[11] || userPress == compGuess[12] || userPress == compGuess[13] || userPress == compGuess[14] || userPress == compGuess[15] || userPress == compGuess[16] ||userPress == compGuess[17] || userPress == compGuess[18] || userPress == compGuess[19] || userPress == compGuess[20] || userPress == compGuess[21] || userPress == compGuess[22] || userPress == compGuess[23] || userPress == compGuess[24] || userPress == compGuess[25] || userPress == compGuess[26]) {

		if (userPress === compCalc()) {
			guess = 10;
			userGuessSoFar = [];
			win++;
			document.getElementById("win").textContent = win;
			alert("you win");
			console.log(compCalc());
		}
		else if (userPress){
			guess--;
			document.getElementById("guessLeft").textContent = guess;
			document.getElementById("userGuess").textContent = userPress;

			if (guess == 0) {
				guess = 10;
				loss++;
				document.getElementById("loss").textContent = loss;				
				alert("you lose, try again!");
				console.log(compCalc());
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