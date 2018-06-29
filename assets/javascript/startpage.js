/*START PAGE*/
function start() {
    $(".creature_panel").hide();
    $("#topheading").hide();
    $(".main").hide();
    $(".winningpic").hide();
    $("#pick_your_creature").on("click", function () {
        $(".creature_panel").show();
        $(".heading_welcomePage").hide();
    })
};
start();

$("#unicorn_pick").on("click", function () {
    console.log("creature")
    $(".creature_panel").hide();
    $(".heading_welcomePage").hide();
    $("#unicorn_playarea").show();
    $("#topheading").show();
});

$("#centaur_pick").on("click", function () {
    console.log("creature")
    $(".creature_panel").hide();
    $(".heading_welcomePage").hide();
    $("#centaur_playarea").show();
    $("#topheading").show();
});

$("#acromantulas_pick").on("click", function () {
    console.log("creature")
    $(".creature_panel").hide();
    $(".heading_welcomePage").hide();
    $("#acromantula_playarea").show();
    $("#topheading").show();
});

$("#thestrals_pick").on("click", function () {
    console.log("creature")
    $(".creature_panel").hide();
    $(".heading_welcomePage").hide();
    $("#thestral_playarea").show();
    $("#topheading").show();
});