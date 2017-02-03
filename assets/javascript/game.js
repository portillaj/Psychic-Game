//variables used throughout the game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var myGuess = document.getElementById("guessed");
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
				'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//randomLetter gets a random number from 0 - 25

//FUNCTIONS SECTION
var getLetter = Math.floor(Math.random() * letters.length);
var randomLetter = letters[getLetter];

//function that resets the game
function resetGame(){
	guessesLeft = 9;
	document.getElementById("wins").textContent = "Wins: " + wins;
	document.getElementById("losses").textContent = "Losses: " + losses;
	document.getElementById("guesses").textContent = "Guesses Left: " + guessesLeft;
	document.getElementById("guessed").textContent = "Guesses so far: ";
	getLetter = Math.floor(Math.random() * letters.length);
	randomLetter = letters[getLetter];
}

//start of game
resetGame();
document.onkeyup = function(){
	//event.key is stored into letterPressed
	//this variable is when the user selects a letter
	var letterPressed = event.key;
	myGuess.textContent += " " + letterPressed + ", ";

	//if letter equals random letter, wins go up and game is reset
	//else if not equal, decrease guesses by 1 and
		//if guesses does not equal zero then continue, if not increase loss and reset game
	if(letterPressed === randomLetter){
		document.getElementById("wins").textContent = ++wins;
		alert("Wow, You guessed my letter you sidekick you!")
		resetGame();
	}else if(letterPressed != randomLetter){
		document.getElementById("guesses").textContent = "Guesses Left: " + --guessesLeft;
		if(guessesLeft == 1){
			alert("You have one more guess left.  Think wisely or else....");
		}
		if(guessesLeft != randomLetter && guessesLeft == 0){
			document.getElementById("losses").textContent = "Losses: " + ++losses;
			alert("Hahaha, Now you must be assassinated")
			resetGame();
		}//end inner if
		
	}//end else if

	//if losses equals 5 give them a nice message
	//if wins equals 5 give them a nasty message
	if(losses == 5){
		alert("I knew I was smarter than you! To Play again refresh the browser");
	}//end if
	if(wins == 5){
		alert("You beat my algorithm, I must rethink this game! reset browser to play again");
	}//end if
};//end keyup function








