// DOM
const startButton = document.getElementById('start-btn');
const highScore = document.getElementById('HighScore');
const timer = document.getElementById('displayTimer');
const timeLeft = document.getElementById('timeLeft');
const timeOut = document.getElementById('noTime');

// Reg Vars
var totalTime = 30;

//Function to start the quiz timer

function newGame() {

    var startTimer = setInterval(function() {

            totalTime--;

            if(totalTime <= 0) {
                clearInterval(startTimer);
                console.log('timer end');
            }

        },1000);
};

//Event Listener for start-btn
startButton.addEventListener('click', newGame);