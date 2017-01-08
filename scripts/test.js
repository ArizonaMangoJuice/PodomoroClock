var counterB = 0;
var counterS = 0;
var session = "Session";
var aBreak = "Break";
$(document).ready(function() {
    /* Adding increments to the plus side of break length*/
    $("#addB").click(function() {
        counterB = counterB + 5;
        if (counterB == 65) {
            counterB = 0;
        }
        $("#numberB").text(counterB);

    });
    /* Subtracting increments to the minus side of break length*/
    $("#subB").click(function() {
        counterB = counterB - 5;
        if (counterB == 0) {
            counterB = 60;
        } else if (counterB == -5) {
            counterB = 0;
        }
        $("#numberB").text(counterB);
    });
    /* this gonna set the time*/
    $("#setB").click(function() {
        $("#title").text(aBreak);
        $("#timer").text(counterB);
    });
    /* Adding increments to the plus side of Session length*/
    $("#addS").click(function() {
        counterS = counterS + 5;
        if (counterS == 65) {
            counterS = 0;
        }
        $("#numberS").text(counterS);

    });
    /* Subtracting increments to the minus side of Session length*/
    $("#subS").click(function() {
        counterS = counterS - 5;
        if (counterS == 0) {
            counterS = 60;
        } else if (counterS == -5) {
            counterS = 0;
        }
        $("#numberS").text(counterS);
    });
    /* making the timer still needs to be fixed */
    $("#setS").click(function() {
        var counter = setInterval(timer, 1000);

        function timer() {
            counterS = counterS - 1;
            if (counterS < 0) {
                clearInterval(counter);
                return $("#timer").text(0);
            }

            $("#timer").text(counterS);
        }
    });

});