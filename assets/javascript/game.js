var hpBook1 = ["harry potter", " ron weasley", "hermione granger", "draco malfoy", "rofessor serverus snape",
    "professor albus dumbledore", "lord voldemort", "rubeus hagrid", "professor minerva mcGonagall",
    "neville longbottom", "fred and george weasley", "unicorn", "goblin", "centaurs", "ghosts", "transfiguration",
    "potions", "herbology", "defense against the dark arts", "history of magic", "slytherin", "gryffindor",
    "hufflepuff", "ravenclaw", "sorcerer's stone", "chamber of sercrets", "prisoner of azkaban", "goblet of fire",
    "order of the phoenix", "half blood prince", "deathly hallows", "ginny weasley", "arthur weasley", "molly weasley",
    "percy weasley", "charlie weasley", "bill weasley", "lucius malfoy", "narcissa malfoy", "petunia dursley", "vernon dursley",
    "dudley dursley", "luna lovegood", "xenophilius lovegood", "professor filius flitwick", "professor pomona sprout",
];

//the word to guess is help in this variable
var chosenWord = "";
//will hold the individual letters of the broken down chosen word
var lettersInWord = [];
//Defines the number of underscores needed for chosen word
var blanks = 0;
//Holds the correctly guessed letters and empty underscores
var underDash = [];
//letters that the player guessed wrong
var wrongLetters = [];

//Scoring area
var correctWord = 0;
var wrongAnswers = 0;
var guessesLeft = 7;

function gohome()
{
    $(".heading_welcomePage").show();
    $(".creature_panel").hide();
    $("#unicorn_playarea").hide();
    $("#topheading").hide();

}

function startGame() {
    guessesLeft = 7;

    //chooses a random word from the hpBook1 list
    chosenWord = hpBook1[Math.floor(Math.random() * hpBook1.length)];
    //breaks down chosen word into individual letters
    lettersInWord = chosenWord.split("");
    //adds number of blanks according to number of letters in chosen word
    blanks = lettersInWord.length;

    //So the game can be tested    
    console.log(chosenWord);

    //resets the underscores for the next word
    underDash = [];
    //resets the wrong letters that was guessed previously
    wrongLetters = [];

    //sets the correct number blanks for the number of letters in he solution
    for (var i = 0; i < blanks; i++){
        underDash.push("_");
    }

    //to test to see that the number underscores matches the letters in the chosen word
    console.log(underDash)

  document.getElementById("unicornguess").innerHTML = guessesLeft;
  document.getElementById("unicornunderscore").innerHTML = underDash.join(" ");
  document.getElementById("unicornwrongletters").innerHTML = wrongLetters.join(" ");
}


function checkLetters(letter){
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if(letterInWord){
        for (var j = 0; j < blanks; j++){
            if (chosenWord[j] === letter){
                underDash[j] = letter;
            }
        }
        console.log(blanks);        
    }
    else{
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete(){
    console.log("Win Count: " + correctWord + " | Loss Count: " + wrongAnswers + " |Guesses Left: " + guessesLeft);

    document.getElementById("unicornguess").innerHTML = guessesLeft;
    document.getElementById("unicornunderscore").innerHTML = underDash.join(" ");
    document.getElementById("unicornwrongletters").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() === underDash.toString()){
        correctWord++;
        alert("you win");

        document.getElementById("unicorncorrect").innerHTML = correctWord;
        startGame();
    }
    else if (guessesLeft === 0) {        
        alert("you lost");

        gohome();
        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}