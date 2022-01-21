// DOM
const startButton = document.getElementById('start-btn');
const highScorePage = document.getElementById('HighScorePage');
const timer = document.getElementById('displayTimer');
const timeLeft = document.getElementById('timeLeft');
const timeOut = document.getElementById('noTime');
const frontPage = document.getElementById('front-page');
const displayedQuestion = document.getElementById('displayed-question');
const quizPage = document.getElementById('quiz-page');
const endPage = document.getElementById('end-page');
const endPageText = document.getElementById('end-page-text');
const initialsField = document.getElementById('initials-field');
const highScore = document.getElementById('yourHighScore');
const yesNoBtns = document.getElementById('y-n-btns');

// Reg Vars
var totalTime = 30;
var questionIndex = 0;
var score = 0;
var answer1 = document.getElementById("quiz-btn-0");
var answer2 = document.getElementById("quiz-btn-1");
var answer3 = document.getElementById("quiz-btn-2");
var answer4 = document.getElementById("quiz-btn-3");
var yesBtn = document.getElementById('y-btn');
var noBtn = document.getElementById('n-btn');

//Array containing questions and their answers
const questions = [

    {
        question: "Commonly used data types do NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },

    {
        question: "Array in JavaScript can be used to store _____.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },

    {
        question: "The condition in an if / else statement is enclosed with _____.",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        options: ["1. Javascript", "2. Terminal/bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    },

];

//Function to start the quiz timer

function newQuiz() {

    questionIndex = 0;

    var frontPage = document.getElementById('front-page');

        frontPage.classList.remove('d-block');
        frontPage.classList.add('d-none');

    var quizPage = document.getElementById('quiz-page');

        quizPage.classList.remove('d-none');
        quizPage.classList.add('d-block');


    //Starts the clock!

    var startTimer = setInterval(function() {

            totalTime--;
            timeLeft.textContent = totalTime;

            if(totalTime <= 0) {
                clearInterval(startTimer);
                if(questionIndex < questions.length - 1) {
                    endQuiz();
                }

            }

        },1000);

    createQuiz();
};

//Pulls from the array items found within var questions to form the questions page
function createQuiz() {

    displayedQuestion.textContent = questions[questionIndex].question;

    answer1.textContent = questions[questionIndex].options[0];
    answer2.textContent = questions[questionIndex].options[1];
    answer3.textContent = questions[questionIndex].options[2];
    answer4.textContent = questions[questionIndex].options[3];

};

//checks each answer so that the score can be tallied or the clock can be docked
function answerCheck(answer) {

    //If the picked option is the same as the answer stored in the array, increment score by 1! If it isn't, dock 5s off the clock.
    if (questions[questionIndex].answer === questions[questionIndex].options[answer]) {

        score++;

        } else {
            
            totalTime -= 5;
            timeLeft.textContent = totalTime;

    }

    questionIndex++;

        if (questionIndex < questions.length) {

            createQuiz();
            
        } else {

            endQuiz();
    }

}

// Functions to pass an argument to the answerCheck function. 
// I found that this is necessary because if you try to pass answerCheck[x] through the event listener, it "hears" it immediately and starts the game with -20 points.

function picked1() {answerCheck(0)};
function picked2() {answerCheck(1)};
function picked3() {answerCheck(2)};
function picked4() {answerCheck(3)};

//For the most part, this function hides things and informs the user that the quiz is over.
function endQuiz() {

    var quizPage = document.getElementById('quiz-page');

        quizPage.classList.remove('d-block');
        quizPage.classList.add('d-none');

    var endPage = document.getElementById('end-page');

        endPage.classList.remove('d-none');
        endPage.classList.add('d-block');

    var yesNoBtns = document.getElementById('y-n-btns');

        yesNoBtns.classList.remove('d-none');
        yesNoBtns.classList.add('d-block');

    var endPageText = document.getElementById('end-page-text');

        endPageText.textContent = 'Your score is ' + score + '. Would you like to save it?';

};

document.getElementById('y-btn').onclick = function() {
    saveScore();
}

document.getElementById('n-btn').onclick = function() {
    refreshPage();
}

function refreshPage(){
    window.location.reload();
}

function saveScore() {

    var endPage = document.getElementById('end-page');

        endPage.classList.remove('d-block');
        endPage.classList.add('d-none');

    var yesNoBtns = document.getElementById('y-n-btns');

        yesNoBtns.classList.remove('d-block');
        yesNoBtns.classList.add('d-none');

}





//Event Listener for start-btn
startButton.addEventListener('click', newQuiz);

//Event Listener for each generated choice
answer1.addEventListener('click', picked1);
answer2.addEventListener('click', picked2);
answer3.addEventListener('click', picked3);
answer4.addEventListener('click', picked4);

