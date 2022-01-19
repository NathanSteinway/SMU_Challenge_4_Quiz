// DOM
const startButton = document.getElementById('start-btn');

// Reg Vars
var totalTime = 10;

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