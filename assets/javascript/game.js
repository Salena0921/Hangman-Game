var hpBook1 = ["harry_potter", " ron_weasley", "hermione_granger", "draco_malfoy", "professor_serverus_snape",
    "professor_albus_dumbledore", "lord_voldemort", "rubeus_hagrid", "professor_minerva_mcgonagall",
    "neville_longbottom", "fred_and_george weasley", "unicorn", "goblin", "centaurs", "ghosts", "transfiguration",
    "potions", "herbology", "defense_against_the_dark_arts", "history_of_magic", "slytherin", "gryffindor",
    "hufflepuff", "ravenclaw", "sorcerers_stone", "chamber_of_sercrets", "prisoner_of_azkaban", "goblet_of_fire",
    "order_of_the_phoenix", "half_blood_prince", "deathly_hallows", "ginny_weasley", "arthur_weasley", "molly_weasley",
    "percy_weasley", "charlie_weasley", "bill_weasley", "lucius_malfoy", "narcissa_malfoy", "petunia_dursley", "vernon_dursley",
    "dudley_dursley", "luna_lovegood", "xenophilius_lovegood", "professor_filius_flitwick", "professor_pomona_sprout",
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

function gohome() {
    $(".heading_welcomePage").show();
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
    for (var i = 0; i < blanks; i++) {
        underDash.push("_");
    }

    //to test to see that the number underscores matches the letters in the chosen word
    console.log(underDash)

    document.getElementById("unicornguess").innerHTML = guessesLeft;
    document.getElementById("unicornunderscore").innerHTML = underDash.join(" ");
    document.getElementById("unicornwrongletters").innerHTML = wrongLetters.join(" ");
}


function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (chosenWord[j] === letter) {
                underDash[j] = letter;
            }
        }
        console.log(blanks);
    } else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {
    console.log("Win Count: " + correctWord + " | Loss Count: " + wrongAnswers + " |Guesses Left: " + guessesLeft);

    document.getElementById("unicornguess").innerHTML = guessesLeft;
    document.getElementById("unicornunderscore").innerHTML = underDash.join(" ");
    document.getElementById("unicornwrongletters").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() === underDash.toString()) {
        correctWord++;
        document.getElementById("unicorncorrect").innerHTML = correctWord;
        startGame();
        gameWin();
                   
    } else if (guessesLeft === 0) {
        alert("you lost");

        gohome();
        startGame();
    }
}

startGame();

function gameWin(){
    if (correctWord === 7){ 
        $(".winningpic").show(); 
        $("#unicorn_playarea").hide();        
    }
    $("#playagain").on("click", function () {
        gohome();
        startGame();
        $(".winningpic").hide(); 
    }); 
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}