$(document).ready(function () {//I need jQuery to run!
    var goal, current, win, loss, redNumber, blueNumber, yellowNumber, greenNumber;

    var resetGame = function () {
        goal = Math.floor(Math.random() * 101 + 19);
        current = 0;
        win = 0;
        loss = 0;
        redNumber = Math.floor(Math.random() * 12);
        blueNumber = Math.floor(Math.random() * 12);
        yellowNumber = Math.floor(Math.random() * 12);
        greenNumber = Math.floor(Math.random() * 12);

        $('#goal').text(goal);
    $('#current').text(current);
    $("#button-red").attr('value', redNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-yellow").attr('value', yellowNumber);
    $("#button-green").attr('value', greenNumber);
    }

    resetGame();

    


    $('#button-red').click(function () {
        current += parseInt($(this).attr('value'));
        console.log(current);
        $('#current').text(current);
        check();
    });

    $('#button-blue').click(function () {
        current += parseInt($(this).attr('value'));
        console.log(current);
        $('#current').text(current);
        check();
    });

    $('#button-yellow').click(function () {
        current += parseInt($(this).attr('value'));
        console.log(current);
        $('#current').text(current);
        check();
    });

    $('#button-green').click(function () {
        current += parseInt($(this).attr('value'));
        console.log(current);
        $('#current').text(current);
        check();
    });

    function check() {
        if (goal === current) {
            win++;
            $('#win').text(win);
            console.log(win);
            resetGame();
        }
        if (current > goal) {
            loss++;
            console.log('loss', loss);
            $('#loss').text(loss);
            resetGame();
        }
    }




});