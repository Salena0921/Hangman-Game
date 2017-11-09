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
            
            checkLetters();
        }
    }
}

function checkLetters(userGuess){
    console.log("Yea!");
    if(chosenWord.indexOf(userGuess) > -1){
        for(var i = 0; i < blanks; i++){
            if(lettersInWord[i] === userGuess){
                underDash[i] = userGuess;
                document.getElementById("underscore").innerHTML = underDash.join(" ");
            }
        }

        console.log(underDash);
    }else{
        wrongLetters.push(userGuess);
        guessesLeft--;

        document.getElementById("wrongletters").textContent = wrongLetters;
        document.getElementById("guesses").textContent = guessesLeft;

        console.log("wrong:" + wrongLetters);
        console.log("guesses:" + guessesLeft);

    }
}
