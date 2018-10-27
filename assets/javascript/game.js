var targetNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
var pinkValue = (Math.floor(Math.random() * 12) + 1);
var orangeValue = (Math.floor(Math.random() * 12) + 1);
var blueValue = (Math.floor(Math.random() * 12) + 1);
var redValue = (Math.floor(Math.random() * 12) + 1);
var total = 0;
var wins = 0;
var losses = 0;

$('#won').text(wins);
$('#lost').text(losses);
$('#target').text(targetNumber);

function reset() {
    targetNumber = (Math.floor(Math.random() * (120 - 19 + 1)) + 19);
    pinkValue = (Math.floor(Math.random() * 12) + 1);
    orangeValue = (Math.floor(Math.random() * 12) + 1);
    blueValue = (Math.floor(Math.random() * 12) + 1);
    redValue = (Math.floor(Math.random() * 12) + 1);
    total = 0;
    $('#total').text(total);
    $('#target').text(targetNumber);
};

function winner() {
    alert ("You won!");
    wins++;
    $('#won').text(wins);
    $('#game-result').text("You won!")
    reset ();
};

function loser() {
    alert ("You lost!");
    losses++;
    $('#lost').text(losses);
    $('#game-result').text("You lost!")
    reset ();
};

$('#pink').on('click', function() {
    total = total + pinkValue;
    $('#total').text(total);
        if (total === targetNumber) {
            winner();
        }
        else if (total > targetNumber) {
            loser();
        }
});

$('#orange').on('click', function() {
    total = total + orangeValue;
    $('#total').text(total);
        if (total === targetNumber) {
            winner();
        }
        else if (total > targetNumber) {
            loser();
        }
});

$('#blue').on('click', function() {
    total = total + blueValue;
    $('#total').text(total);
        if (total === targetNumber) {
            winner();
        }
        else if (total > targetNumber) {
            loser();
        }
});

$('#red').on('click', function() {
    total = total + redValue;
    $('#total').text(total);
        if (total === targetNumber) {
            winner();
        }
        else if (total > targetNumber) {
            loser();
        }
});