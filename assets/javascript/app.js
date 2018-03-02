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
    $(".number").hide();

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
        $(".heading").replaceWith("<h1>Times Up!</h1><br>");
        $(".subheading").replaceWith("<h2>Your Results:</h2>");
        
    }
    function answers() {
        var amountCorrect = 0;          
        for(var i = 1; i <= 4; i++) {
        var radios = document.getElementsByName('q'+i);
        
        for(var j = 0; j < radios.length; j++) {
        var radio = radios[j];

        if(radio.value == "correct" && radio.checked) {
        amountCorrect++;
            var incorrect = 4 - amountCorrect;
         }
    
  }
 }      $(".number").show();             
    $(".number").append("Correct: " + amountCorrect + "<br><br>");
    $(".number").append("Incorrect: " + incorrect);
  
    };

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
       
         }
    };
  $(".done").click(function() {
    stop();
    $("#hider").fadeIn("slow");
    $('#popup_box').fadeIn("slow");
    $("#hider").show();
    time = 0;
    $("#buttonClose").hide();
    
    $("#content").show();
    $(".heading").replaceWith("<h1>Thanks for playing!</h1><br>");
    $(".subheading").replaceWith("<h2>Your Results:</h2>");
    answers(); 
  });

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