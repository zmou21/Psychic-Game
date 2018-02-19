
	//Array with letters of the alphabet
	var compGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//function randomly selecting in the array compGuess
	function compCalc() {
		randomLetter = compGuess[Math.floor(Math.random() * compGuess.length)];
		//return randomLetter.push(compGuess);
	}


	var win = 0;
	var loss = 0;
	var guess = 10;
	var userGuessSoFar = [];
	var randomLetter = null;

	compCalc();
	//console.log(randomLetter);
	//------------------document.onkeyup-----------------//
	document.onkeyup = function(event) {

		var userPress = String.fromCharCode(event.keyCode).toLowerCase();
		userGuessSoFar.push(userPress); //pushes the user's input into the empty array userGuessSoFar
		// compCalc();
		// console.log(randomLetter);
	//conditional statement comparing a user's input to the computer's guess
		if (compGuess.includes(userPress)) {

			if (userPress === randomLetter) {
				userGuessSoFar = [];
				guess = 10;
				win++;
				document.getElementById("win").textContent = win;
				alert("You Win!");
				compCalc();
				//console.log(randomLetter);
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
					compCalc();
					//console.log(randomLetter);
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
