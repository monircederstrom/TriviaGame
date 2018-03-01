var time = 30;
var correct = 0;
var wrong = 0;
var total = 4;

function answers( ) {
    sessionStorage.setItem('a1', 'd');
    sessionStorage.setItem('a2', 'b');
    sessionStorage.setItem('a3', 'a');
    sessionStorage.setItem('a4', 'd');

}

$(document).ready(function () {

    
    $(".timer").text("00:30");

    //hide hider and popup_box
    $("#hider").hide();
    $("#popup_box").show();

    //on click show the hider div and the message

    //on click hide the message and the
    $("#buttonClose").click(function () {

        $("#hider").fadeOut("slow");
        $('#popup_box').fadeOut("slow");
        start();
    });

    function start() {
        intervalID = setInterval(count, 1000);
        while (time <= 0) {
            $("#hider").fadeIn("slow");
            $('#popup_box').fadeIn("slow");
            $("#buttonClose").hide();
            stop();
        }
    }
    function stop() {
        $("popup_box").hide();
        $("#content").show();
    }
    function answers() {
        if 
    }

    function count() {
        if (time > 0) {
        time--;
        var converted = timeConverter(time);
        $(".timer").text(converted);
        }
        else {    
            stop();
            $("#hider").fadeIn("slow");
            $('#popup_box').fadeIn("slow");
            $("#hider").show();
            time = 0;
            $("#buttonClose").hide();
            $(".number").text("Results <br>" + "Corect Answers: " + correct + "<br>" + "Wrong Answers: " + wrong)
         }
    }
  

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
        seconds = "0" + seconds;
        }

        if (minutes === 0) {
        minutes = "00";
        }
        else if (minutes < 10) {
        minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
        }
    });

   window.addEventListener('load',answers,false);