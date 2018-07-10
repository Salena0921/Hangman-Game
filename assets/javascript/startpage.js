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
