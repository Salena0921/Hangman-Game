var hpTerms = ["harry potter", " ron weasley", "hermione granger", "draco malfoy", "rofessor serverus snape",
    "professor albus dumbledore", "lord voldemort", "rubeus hagrid", "professor minerva mcGonagall",
    "neville longbottom", "fred and george weasley", "unicorn", "goblin", "centaurs", "ghosts", "transfiguration",
    "potions", "herbology", "defense against the dark arts", "history of magic", "slytherin", "gryffindor",
    "hufflepuff", "ravenclaw", "sorcerer's stone", "chamber of sercrets", "prisoner of azkaban", "goblet of fire",
    "order of the phoenix", "half blood prince", "deathly hallows", "ginny weasley", "arthur weasley", "molly weasley",
    "percy weasley", "charlie weasley", "bill weasley", "lucius malfoy", "narcissa malfoy", "petunia dursley", "vernon dursley",
    "dudley dursley", "luna lovegood", "xenophilius lovegood", "professor filius flitwick", "professor pomona sprout",
];

var letterABC = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "'", " "
];
var chosenWord = "";
var lettersInWord = [];
var blanks = 0;
var underDash = [];
var wrongLetters = [];
var correctWord = 0;
var wrongAnswers = 0;
var guessesLeft = 7;

var chosenWord = "";


function startGame() {
    chosenWord = hpTerms[Math.floor(Math.random() * hpTerms.length)];
    lettersInWord = chosenWord.split("");
    blanks = lettersInWord.length;


    for (var i = 0; i < blanks; i++) {
        underDash.push("_");
    };
    document.getElementById("underscore").innerHTML = underDash.join(" ");
    document.getElementById("correct").innerHTML = correctWord;
    document.getElementById("wrong").innerHTML = wrongAnswers;
    document.getElementById("guesses").innerHTML = guessesLeft;

    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(underDash);

};
//call function
startGame();

//using key to log user guess
document.onkeyup = function (event) {
    var userGuess = event.key
    console.log("w3");
    for (var i = 0; i < letterABC.length; i++) {
        if (userGuess === letterABC[i]) {
            var splitABC = letterABC.splice(i, 0);
            console.log("letter:" + letterABC[i]);
            console.log("splice letter:" + splitABC);

            checkLetters(userGuess);
        }
    }
}

function checkLetters(userGuess) {
    console.log("Yea!");
    if (chosenWord.indexOf(userGuess) > -1) {
        for (var i = 0; i < blanks; i++) {
            if (lettersInWord[i] === userGuess) {
                underDash[i] = userGuess;
                document.getElementById("underscore").textContent = underDash.join(" ");
            }
        }

        console.log(underDash);
    } else {
        wrongLetters.push(userGuess);
        guessesLeft--;

        document.getElementById("wrongletters").textContent = wrongLetters;
        document.getElementById("guesses").textContent = guessesLeft;

        console.log("wrong:" + wrongLetters);
        console.log("guesses:" + guessesLeft);

    }
    winOrLose();
}

function winOrLose() {
    if (underDash.join("") === chosenWord) {
        console.log("won");
        correctWord++;
        document.getElementById("correct").textContent = correctWord;
    } else if (guessesLeft === 0) {
        alert("wrong word")
        wrongAnswers++;
        document.getElementById("wrong").textContent = wrongAnswers;
    }

}

// function reset() {
//     chosenWord = hpTerms[Math.floor(Math.random() * hpTerms.length)];
//     lettersInWord = chosenWord.split("");
//     blanks = lettersInWord.length;

//     for (var i = 0; i < blanks; i++) {
//         underDash.push("_");
//     };
//     document.getElementById("underscore").innerHTML = underDash.join(" ");
// }