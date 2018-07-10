/*START PAGE*/
function start() {
    $("#topheading").hide();
    $(".main").hide();
    $(".winningpic").hide();
    $("#startbutton").on("click", function () {
        $("#playarea").show();
        $(".heading_welcomePage").hide();
    })
};
start();
