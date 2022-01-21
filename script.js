// DOM
const startButton = document.getElementById('start-btn');
const highScore = document.getElementById('HighScore');
const timer = document.getElementById('displayTimer');
const timeLeft = document.getElementById('timeLeft');
const timeOut = document.getElementById('noTime');
const frontPage = document.getElementById('front-page');
const displayedQuestion = document.getElementById('displayed-question');
const quizPage = document.getElementById('quiz-page');
const endPage = document.getElementById('end-page');
var answer1 = document.getElementById("quiz-btn-0");
var answer2 = document.getElementById("quiz-btn-1");
var answer3 = document.getElementById("quiz-btn-2");
var answer4 = document.getElementById("quiz-btn-3");


// Reg Vars
var totalTime = 10;
var questionIndex = 0;

//Array containing questions and their answers
const questions = [

    {
        question: "Commonly used data types do NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },

    {
        question: "Array in JavaScript can be used to store _____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "4. all of the above"
    },

    {
        question: "The condition in an if / else statement is enclosed with _____.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        answer: "3. quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        choices: ["1. Javascript", "2. Terminal/bash", "3. for loops", "4. console.log"],
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


    var startTimer = setInterval(function() {

            totalTime--;
            timeLeft.textContent = totalTime;

            if(totalTime <= 0) {
                clearInterval(startTimer);
                if(questionIndex < questions.length - 1) {
                    endQuiz();
                }
                totalTime = 10;
            }

        },1000);

    createQuiz();
};

function createQuiz() {

    displayedQuestion.textContent = questions[questionIndex].question;

    answer1.textContent = questions[questionIndex].choices[0];
    answer2.textContent = questions[questionIndex].choices[1];
    answer3.textContent = questions[questionIndex].choices[2];
    answer4.textContent = questions[questionIndex].choices[3];

};

function endQuiz() {

    var quizPage = document.getElementById('quiz-page');

        quizPage.classList.remove('d-block');
        quizPage.classList.add('d-none');

    var endPage = document.getElementById('end-page');

        endPage.classList.remove('d-none');
        endPage.classList.add('d-block');
        endPage.textContent = 'Good Work!';
    

}

//Event Listener for start-btn
startButton.addEventListener('click', newQuiz);