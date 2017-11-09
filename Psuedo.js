//Variables//
var hpTerms = ["Harry Potter", " Ron Weasley", "Hermione Granger", "Draco Malfoy", "Professor Serverus Snape",
"Professor Albus Dumbledore", "Lord Voldemort", "Rubeus Hagrid", "Professor Minerva McGonagall",
"Neville Longbottom", "Fred and George Weasley", "Unicorn", "Goblin", "Centaurs", "Ghosts", "Transfiguration",
"Potions", "Herbology", "Defense Against The Dark Arts", "History of Magic", "Slytherin", "Gryffindor",
"Hufflepuff", "Ravenclaw", "Sorcerer's Stone", "Chamber of Sercrets", "Prisoner of Azkaban", "Goblet of Fire",
"Order of the Phoenix", "Half Blood Prince", "Deathly Hallows", "Ginny Weasley", "Arthur Weasley", "Molly Weasley",
"Percy Weasley", "Charlie Weasley", "Bill Weasley", "Lucius Malfoy", "Narcissa Malfoy", "Petunia Dursley", "Vernon Dursley",
"Dudley Dursley", "Luna Lovegood", "Xenophilius Lovegood", "Professor Filius Flitwick", "Professor Pomona Sprout",
];

var letterABC = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z", "'"
];
var chosenWord = "";
var lettersInWord = [];
var blanks = 0;
var underDash = [];
var wrongLetters = [];
var correctWord = 0;
var wrongAnswers = 0;
var guessesLeft = 7;

//Start Game//
function startGame() {
//choose random word//    
var chosenWord = hpTerms[Math.floor(Math.random() * hpTerms.length)];
//split chosen word into letters//
lettersInWord = chosenWord.split("");
//determine number of blanks//
blanks = lettersInWord.length;
//each blank needs to represent a letter and each letter also needs to be represented by a blank//
for(var i=0; i < blanks; i++){
    underDash.push("_");        
};
//pulling java into html//
document.getElementById("underscore").innerHTML = underDash;
document.getElementById("correcta").innerHTML = correctWord;
document.getElementById("wronga").innerHTML = wrongAnswers;
document.getElementById("guesses").innerHTML = guessesLeft;




};
//call function//
startGame();
//user key needs to match a letter in the chosen word
//if letter mataches then the underscore needs to be filled with correct letter//
//else if letter does not match any letter in word then letter needs to be added to wrong letter section//
//if user gets word correct they gain one point for correct word else if the//
//user gueeses left gets to zero then they get a point in the wrong answers section//
//if the user get 7 correct words then they win else if they get 4 inccorrect words then they loose and game resets//
