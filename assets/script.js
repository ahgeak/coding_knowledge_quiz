var startQuizBtn = document.getElementById("startQuiz");
var timerElement = document.getElementById("timerCounter");
var title = document.getElementById("titleQuestion");
var description = document.getElementById("descriptionAnswers");
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
var answerStatus = document.getElementById("answerStatus");
var enterInitials = document.getElementById("enterInitials");
var initialsInput = document.getElementById("initials");
// var initialsInput = document.querySelector("#initials");
var initialsSubmit = document.getElementById("initialsSubmit");
var highScoreBtns = document.getElementById("highScoreBtns");
var goBack = document.getElementById("goBack");

var answerButtons = document.querySelector(".answerButtons");
//use getElementById?

var score = 0; //inital score is set to 0

var timer;
var timerCount;

var highScoreArr = [];

// Create a score keeper that is updated after each answer is given. If correct answer is given add points to score, if the wrong answer is given subtract time

// Object array that holds all of the questions, answers and which is the correct answer
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer1: "1. strings",
        answer2: "2. booleans",
        answer3: "3. alerts",
        answer4: "4. numbers",
        correctAnswer: "answer3"
        // correctAnswer: "3. alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answer1: "1. quotes",
        answer2: "2. curly brackets",
        answer3: "3. parenthesis",
        answer4: "4. square brackets",
        correctAnswer: "answer2"
        // correctAnswer: 2. curly brackets
    },
    {
        question: "What does the DOM stand for in JavaScript?",
        answer1: "Document Object Model",
        answer2: "Data Object Model",
        answer3: "Document Output Method",
        answer4: "Document Object Manipulation",
        correctAnswer: "answer1"
        // correctAnswer: answer1: "Document Object Model"
    },
    {
        question: "What does HTML stand for?",
        answer1: "Hyper Text Markup Language",
        answer2: "High Technology Modern Language",
        answer3: "Hyperlink and Text Management Language",
        answer4: "Home Tool for Markup Language",
        correctAnswer: "answer1"
    }
]

// let remainingQuestions = questions;
// console.log(remainingQuestions);
// remainingQuestions.splice(randomQuestion, 1);

// Use a function to call a new question/card that will have eventListeners for where the user clicks. Depending on if it is the correct answer (add points to score) or the incorrect answer (subtract time from timer)

var currentQuestionNumber = 0; //this might be used to set a random number?

var remainingQuestions = questions;

function nextQuestion () {
    if (timerCount > 0 && remainingQuestions.length > 0){
        var randomQuestion = Math.floor(Math.random() * questions.length);
        titleQuestion.textContent = questions[randomQuestion].question;
        description.textContent = "";
        answerButton1.textContent = questions[randomQuestion].answer1;
        answerButton2.textContent = questions[randomQuestion].answer2;
        answerButton3.textContent = questions[randomQuestion].answer3;
        answerButton4.textContent = questions[randomQuestion].answer4;
        answerButtons.dataset.view = "visible";
        startQuizBtn.dataset.view = "hidden";

        currentCorrectAnswer = questions[randomQuestion].correctAnswer;
        
        console.log(remainingQuestions);
        remainingQuestions.splice(randomQuestion, 1);
        return currentCorrectAnswer;
    } else {
        quizOver();
    }
    
}

function startQuiz(){
    timerCount = 20;
    timerClock();
    nextQuestion();

    // I tried to hide the buttons one by one, but I used the dataset in the div element of the button instead. I will keep this incase I need it in the future.
    // answerButton1.dataset.view = "visible";
    // answerButton2.dataset.view = "visible";
    // answerButton3.dataset.view = "visible";
    // answerButton4.dataset.view = "visible";
}

// Maybe I can add the function below the answerButton eventListeners that I call to shorten code
function checkCorrectAnswer (){

}

answerButton1.addEventListener("click", function(event) {
    console.log("You clicked button 1");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        answerStatus.textContent = "Correct!";
        score += 10;
    } else {
        answerStatus.textContent = "Wrong!";
        timerCount -= 5;
    }
    nextQuestion();
});


answerButton2.addEventListener("click", function() {
    console.log("You clicked button 2");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        answerStatus.textContent = "Correct!";
        score += 10;
    } else {
        answerStatus.textContent = "Wrong!";
        timerCount -= 5;
    }
    nextQuestion();
});

answerButton3.addEventListener("click", function(event) {
    console.log("You clicked button 3");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        answerStatus.textContent = "Correct!";
        score += 10;
    } else {
        answerStatus.textContent = "Wrong!";
        timerCount -= 5;
    }
    nextQuestion();
});

answerButton4.addEventListener("click", function() {
    console.log("You clicked button 4");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        answerStatus.textContent = "Correct!";
        score += 10;
    } else {
        answerStatus.textContent = "Wrong!";
        timerCount -= 5;
    }
    nextQuestion();
});

// Use localStorage to keep all of high scores. On the score board there will be two buttons "Go Back" which will return to start function and "Clear Score" that will empty the localStorage

// View high scores will be a link that can be clicked at any time to end the game and take the user to the scoreboard

// timer function that keeps the time. When the time runs out, it calls the quizOver function
function timerClock() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            quizOver();
        }
    }, 1000);
}

// When the time runs out, trigger quizOver() to display final score and have a field that the user updates with their initials. The updated score will be added to the high score board
function quizOver() {
    title.textContent = "All Done!"
    description.textContent = "Your final score is: " + score;
    enterInitials.dataset.view = "visible";
    answerButtons.dataset.view = "hidden";
    answerStatus.textContent = "";
}

function updateHighScore(){
    var highScore = {
            name: initialsInput.value.trim(),
            score: score
        };
    localStorage.setItem("highScore", JSON.stringify(highScore));
    highScoreArr.splice (highScoreArr, highScore);
    console.log(highScoreArr);
    highScoreScreen();
    listHighScores();
}

function listHighScores() {
    for (var i = 0; i < highScoreArr.length; i++) {
        var theScore = highScoreArr[i];
    
        var li = document.createElement("li");
        li.textContent = theScore;
        li.setAttribute("data-view", "visible");
    
        listOfHighScores.appendChild(li);
      }
}

function highScoreScreen() {
    title.textContent =  "High Scores"
    description.textContent = "";
    enterInitials.dataset.view = "hidden";
    var storedScores = JSON.parse(localStorage.getItem("highScore"));
    if (storedScores !== null){
        highScoreArr = storedScores;
    }
    listHighScores();
    highScoreBtns.dataset.view = "visible";
}

initialsSubmit.addEventListener("click", updateHighScore);

goBack.addEventListener("click", startQuiz); // this needs to be fixed go to reset the quiz

// start button that will start the quiz
startQuizBtn.addEventListener("click", startQuiz);