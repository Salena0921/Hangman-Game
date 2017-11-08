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
var underscore = document.getElementById("underscore");
var blanks = "_";
var wrongLetters = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var guessesLeft = 7;
var playing = false;

function startGame() {
    var chosenWord = hpTerms[Math.floor(Math.random() * hpTerms.length)];
    lettersInWord = chosenWord.split("");
    blanks = lettersInWord.length;

    for (chosenWord, i = 0; i < blanks; i++) {
        underscore = blanks;
    };

    correctAnswers = document.getElementById("correct");

    // var split = chosenWord.split(underscore);
    console.log(lettersInWord);
    // document.getElementById("#").innerHTML = startButton;

};
//call function
startGame();

document.onkeyup = function (event) {

    underscore.textContent = event.key;
   
};