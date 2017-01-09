var counterB = 5;
var counterS = 25;
var done = "Done";
var aBreak = "Break";
$(document).ready(function() {
    /* Adding increments to the plus side of break length*/

    $("#addB").click(function() {
        counterB = counterB + 1;
        if (counterB == 61) {
            counterB = 0;
        }
        $("#numberB").text(counterB);

    });

    /* Subtracting increments to the minus side of break length*/

    $("#subB").click(function() {
        counterB = counterB - 1;
        if (counterB == 0) {
            counterB = 60;
        } else if (counterB == -1) {
            counterB = 0;
        }
        $("#numberB").text(counterB);
    });


    /* Adding increments to the plus side of Session length*/

    $("#addS").click(function() {
        counterS = counterS + 1;
        if (counterS == 61) {
            counterS = 0;
        }
        $("#numberS").text(counterS);

    });

    /* Subtracting increments to the minus side of Session length*/

    $("#subS").click(function() {
        counterS = counterS - 1;
        if (counterS == 0) {
            counterS = 60;
        } else if (counterS == -1) {
            counterS = 0;
        }
        $("#numberS").text(counterS);
    });
    /*------------*/

    /* making the timer still, needs to be fixed */


    $("#title").click(function() {
        function timerB() {

            counterB = counterB - 1;
            if (counterB < 0) {
                clearInterval(counter);
                return 0;
            }
            $("#timer").text(counterB);
        }
        var counter = setInterval(timer, 1000);

        function timer() {
            counterS = counterS - 1;
            if (counterS < 0) {
                return $("#timer").html(timerB);
            }

            $("#timer").text(counterS);
        }
    });
    $(".pause").click(function() {
        function pause() {
            clearInterval(this.interval);
            delete this.interval;
        }

        function resume() {

        }
        if (counter.interval) {
            counter.pause();
        }
    });
    $(".reset").click(function() {
        counterB = 5;
        counterS = 25;
        $("#numberB").text(counterB);
        $("#numberS").text(counterS);
    });
});