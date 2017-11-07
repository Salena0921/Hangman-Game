var hpTerms = ["Harry Potter", " Ron Weasley", "Hermione Granger", "Draco Malfoy", "Professor Serverus Snape",
    "Professor Albus Dumbledore", "Lord Voldemort", "Rubeus Hagrid", "Professor Minerva McGonagall",
    "Neville Longbottom", "Fred and George Weasley", "Unicorn", "Goblin", "Centaurs", "Ghosts", "Transfiguration",
    "Potions", "Herbology", "Defense Against The Dark Arts", "History of Magic", "Slytherin", "Gryffindor",
    "Hufflepuff", "Ravenclaw", "Sorcerer's Stone", "Chamber of Sercrets", "Prisoner of Azkaban", "Goblet of Fire",
    "Order of the Phoenix", "Half-Blood Prince", "Deathly Hallows", "Ginny Weasley", "Mr. Arthur Weasley", "Mrs. Molly Weasley",
    "Percy Weasley", "Charlie Weasley", "Bill Weasley", "Lucius Malfoy", "Narcissa Malfoy", "Petunia Dursley", "Vernon Dursley",
    "Dudley Dursley", "Luna Lovegood", "Xenophilius Lovegood", "Professor Filius Flitwick", "Professor Pomona Sprout",
];

var letterABC = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "'"
];

var chosenWord = "";
var lettersInWord = [];
var numLetterBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var guessesLeft = 7;
var playing = false;
var userKey = document.getElementById("user-text");

function startGame(startButton){
    document.getElementById("#start").innerHTML = startButton;
    console.log(ffff);  
}