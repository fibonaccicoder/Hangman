// window onload
// game start
// onkeyup

var words= ["aliens", "quasar", "rocket", "astronaut", "galaxy", "supernova"];
var currentWord=[]
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins= 0;
var losses= 0;
var lettersGuessed= [];
var correctLetters= [];
var winningLetters= [];
var incorrectGuesses=[];
var wordSplit=[];
var guessesRemaining=10


document.onkeyup=function(event){

for(var i=0; i< words.length; i++){
	console.log(words[i]);
}

//currentWord= Math.floor(Math.random()*words.length)];
	currentWord= (Math.floor(Math.random()*words.length));
	document.WRITE("Current word: " currentWord);


wordSplit= currentWord.split("");

}
//getelementbyid

// pick a word (and print)
// 	-list of words
// 	-pick one at random (index)
// 		-length of list
// 		-pick number between 0 and length (less than length)
// 		-use number as index (place in array) 
// 	-store it (as variable)
// 	-lettersinword['a','l']

// check for user input
// 	-onkeyup event (errrrrrrraythang inside.)
// 	-key and store it as lowercase (initialize n array)
// 	-check to see if its a letter (check against array of letters, if index of letter in array !==-1, 
// 		-if yes, add to list of guessed letters, check guessed letters, if in guessed letters, do nothing, if no, add to guessed list 
// 		-if no, do nothing 

// (create function, check to see if valid guess)
// (word.split('')) look up array join 
// ( get unique items in array, js delete duplicates in array, arr.map array.map, var uniquearr (strts as empty array) = arr.filter(function(item, position, self (uniquearr)){return (self.indexOf(item)===-1) if true, gets saved in uniquearr, if false, doe not get saved}

// see if matches  word 
// 	-if indexof x in array ===-1, if true, not in word, = wrong
// 	-else, correct guess, add it to puzzle,
// (function called correct guess, incorrect guess)
// 	-if correct, add to array of correct letters
// 	-in incorrect, counter of guessed letters
// 	-correct
// 		-array of guesses
// 		-push items in
// 		-reveal in puzzle
// 		-WRITE IN FNCTIOOOOOOOON 
// 		-make variable for empty string, var = "" 
// 			-loop length of word 
// 				-check char at increments of word == indexOf letter in correct guesses in array (user input)
// 					-if true, var= var + x (self + x)
// 					-if false, var = var+ " _ " 
// 		-check for victory (if length of arrays =, win. if no underscores in puzzle left, win)

// 	-incorrect
// 		-array of incorrect guesses
// 		-push items in
// 		-decrease guesses left
// 		-display letters guessed arrOfIncorrect
// 			-var string = arrOfIncorrect.join(', '), push to screen 
// 		-check for loss - increment losses, restart game, alert LOOOOSER

// -RESTART:
// 	-choose new word- reset display
// 	-reset everything (counter, letters guessed, letters remaining, correct letters array, incorrect letters array, update wins/losses start at 0
// 	-winningletters array w/no duplicates
// 	-(remove words from word array)