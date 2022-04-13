Deployed Link: https://nathansteinway.github.io/SMU_Challenge_4_Quiz/

Acceptance Criteria:

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

Pseudo-Code:

Upon clicking a button a function that begins the game is called.
This function must start a timer that counts down to 0.

This function must also refer to another function that populates containers with information.
So, I must create an array with several objects that contain the question, choices, and answers.
After filling these arrays, I must create containers to hold their data.
Upon finishing these containers, I must create a function that pulls from the arrays and populates the containers.

I must be able to answer the questions, so the containers need event listeners that refer to functions that call another function that will check if they match the answers present in the array.
If they do, then the score increments by one and the questions array increments by one to the next question.
If they don't, then time is docked and the questions array increments by one to the next question.

When the clock <= 0, the game must end.
If statement within the function that handles the timer that clears the interval if the time <= 0.

When the questions are all answered, the game must end.
If statement within the function that handles the questionIndex incrementation that checks if the index's value is >= the array's length.
If not, the function calls the next question.
If so, the function calls the endQuiz function.

Finally, the user must be able to save the score tied to their initials.
Function that shows the "save screen" shows Y or N buttons.
When Y is clicked, the function creates a form that saves a user's input as their initials, tying it to their score and saving it to localStorage.
When N is clicked, the function reloads the page.





