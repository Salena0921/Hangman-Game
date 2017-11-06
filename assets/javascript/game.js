//Create array of Harry Potter related words
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
var blanksandSuccesses = [];

function reset() {
    chosenWord = hpTerms[Math.floor() * hpTerms.length];
    lettersInWord = chosenWord.split("");
    numLetterBlanks = lettersInWord.length;

    correctAnswers = 0;
    wrongAnswers = 0;
    guessesLeft = 7;
    wrongLetters = [];
    blanksandSuccesses = [];
    letterABC = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z", "'"
    ];
    test = false;
    startGame();
}

function startGame() {
    chosenWord = hpTerms[Math.floor() * hpTerms.length];
    lettersInWord = chosenWord.split("");
    numLetterBlanks = lettersInWord.length;

    correctAnswers = 0;
    wrongAnswers = 0;
    guessesLeft = 7;
    wrongLetters = [];
    blanksandSuccesses = [];
    letterABC = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z", "'"
    ];
    test = false;
    startGame();
    for (var i = 0; i < numLetterBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses
    }

    document.getElementById("wordToGuess").innerHTML = blanksandSuccesses.join("");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = correctAnswers;
    document.getElementById("lossCounter").innerHTML = wrongAnswers;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;

    //Choose the word randomly    
    //Create underscore based on length of word
    //Get users guess
    //Check if guess is right
    //If right push to right underscore
    //If wrong push to wrong letters section and remove one from guesses left
    //If right word is completed add one to correct answers
    //If guesses left equal zero and word is not complete add one to wrong answer
    //If correct answers reaches 14 user wins house cup
    //If wrong answer reaches 7 user is taken by Dementor and game resets
}

function compareLetters(userKey) {
    console.log("WORKING!");
    if (chosenWord.indexOf(userKey) > -1) {

        for (var i = 0; i < numLetterBlanks; i++) {

            if (lettersInWord[i] === userKey) {

                correctAnswers++;
                blanksandSuccesses[i] = userKey;
                document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");

            }
        }
        console.log(blanksandSuccesses);
    } else {
        wrongLetters.push(userKey);
        guessesLeft--;
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters;
        console.log("Wrong Letters =" + wrongLetters);
        console.log("Guesses left are: " + guessesLeft);
    }
}

function winLose(){
    if(correctAnswers === numLetterBlanks){
        correctAnswers++;
        document.getElementById("winCounter").innerHTML = correctAnswers;
    }
    else if(guessesLeft === 0){
        wrongAnswers++;
        document.getElementById("lossCounter").innerHTML = wrongAnswers;
    }

}


var userText = document.getElementById("underscore");

document.onkeyup = function (event) {
    userText.textContent = event.key;
};