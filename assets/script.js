var startQuizBtn = document.querySelector("#startQuiz");
var timerElement = document.querySelector("#timerCounter");

var timer;
var timerCount = 10;

// Create a score keeper that is updated after each answer is given. If correct answer is given add points to score, if the wrong answer is given subtract time

// Object array that holds all of the questions, answers and which is the correct answer

// Use a function to call a new question/card that will have eventListeners for where the user clicks. Depending on if it is the correct answer (add points to score) or the incorrect answer (subtract time from timer)

// When the time runds out, trigger quizOver() to display final score and have a field that the user updates with their initials. The updated score will be added to the high score board

// Use localStorage to keep all of high scores. On the score board there will be two buttons "Go Back" which will return to start function and "Clear Score" that will empty the localStorage

// View high scores will be a link that can be clicked at any time to end the game and take the user to the scoreboard

// timer function that keeps the time. When the time runs out, it calls the quizOver function
function timerClock() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    // Might need to add a condition here that checks if correct answer is given and update the timer
        if (timerCount === 0) {
            clearInterval(timer);
            quizOver();
        }
    }, 1000);
}
timerClock();

function startQuiz() {
}

function quizOver() {
    console.log("the quiz is over");
}

startQuizBtn.addEventListener("click", startQuiz);