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
var initialsSubmit = document.getElementById("initialsSubmit");
var highScoreBtns = document.getElementById("highScoreBtns");
var goBack = document.getElementById("goBack");
var clearHighScore = document.getElementById("clearHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var answerButtons = document.querySelector(".answerButtons");

var score = 0; // inital score is set to 0
var timer; // timer variable
var timerCount;  // time left on clock variable
var highScoreArr = []; // array to store high scores

// Object array that holds all of the questions, answers and the correct answer
let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswer: "answer3"
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correctAnswer: "answer2"
    },
    {
        question: "What does the DOM stand for in JavaScript?",
        answer1: "Document Object Model",
        answer2: "Data Object Model",
        answer3: "Document Output Method",
        answer4: "Document Object Manipulation",
        correctAnswer: "answer1"
    },
    {
        question: "What does HTML stand for?",
        answer1: "Hyper Text Markup Language",
        answer2: "High Technology Modern Language",
        answer3: "Hyperlink and Text Management Language",
        answer4: "Home Tool for Markup Language",
        correctAnswer: "answer1"
    },
    {
        question: "What will be the result of 3 + '3' in JavaScript?",
        answer1: "33",
        answer2: "6",
        answer3: "'33'",
        answer4: "36",
        correctAnswer: "answer3"
    },
    {
        question: "Which HTML element is used to define the structure of an HTML document?",
        answer1: "<structure>",
        answer2: "<html>",
        answer3: "<body>",
        answer4: "<layout>",
        correctAnswer: "answer2"
    },
    {
        question: "What does the <br> tag do in HTML?",
        answer1: "Adds a bullet point",
        answer2: "Creates a line break",
        answer3: "Makes text bold",
        answer4: "Inserts an image",
        correctAnswer: "answer2"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answer1: "font-color",
        answer2: "text-color",
        answer3: "color",
        answer4: "text-style",
        correctAnswer: "answer3"
    },
    {
        question: "What does the 'C' stand for in CSS?",
        answer1: "Cascading",
        answer2: "Colorful",
        answer3: "Creative",
        answer4: "Computer",
        correctAnswer: "answer1"
    },
    {
        question: "How can you center-align an element horizontally in CSS?",
        answer1: "center-align: horizontal;",
        answer2: "align: center;",
        answer3: "horizontal-align: center;",
        answer4: "text-align: center;",
        correctAnswer: "answer4"
    },
    {
        question: "Which CSS property is used to add space around the content of an element?",
        answer1: "margin",
        answer2: "padding",
        answer3: "spacing",
        answer4: "border-spacing",
        correctAnswer: "answer2"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answer1: "<link>",
        answer2: "<a>",
        answer3: "<href>",
        answer4: "<url>",
        correctAnswer: "answer1"
    }
]

var remainingQuestions = questions; // variable to store the questions that are left in the quiz

// nextQuestion is called to display a random question then remove that question from the remainingQuestion array and return the value of the currentCorrectAnswer. If the timer is over and the remainingQuestions array is empty, the quiz will end
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
        
        remainingQuestions.splice(randomQuestion, 1);
        return currentCorrectAnswer;
    } else {
        quizOver();
    }
}

// startQuiz sets the time, calls the next question and removes elements from the start screen from view
function startQuiz(){
    timerCount = 100;
    timerClock();
    nextQuestion();

    goBack.dataset.view = "hidden";
    clearHighScore.dataset.view = "hidden";
    enterInitials.dataset.view = "hidden";
}

// The following evenListeners listen for user clicks. Depending on if it is the correct answer (add points to score) or the incorrect answer (subtract time from timer).
answerButton1.addEventListener("click", function(event) {
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

// timer function that keeps the time. When the time runs out, it calls the quizOver function
function timerClock() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            quizOver();
        }
    }, 1000);
}

// When the time runs out, trigger quizOver() to display final score and have a field that the user updates with their initials. The updated score will be added to the high score board
function quizOver() {
    title.textContent = "All Done!";
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
    highScoreArr.splice(highScoreArr, highScore);
    console.log(highScoreArr, " this is the high score array");
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
        listOfHighScores.dataset.view = "visible";
      }
}

function highScoreScreen() {
    title.textContent =  "High Scores";
    description.textContent = "";
    enterInitials.dataset.view = "hidden";
    var storedScores = JSON.parse(localStorage.getItem("highScore"));
    if (storedScores !== null){
        highScoreArr = storedScores;
    }
    listHighScores();
    highScoreBtns.dataset.view = "visible";
    goBack.dataset.view = "visible";
    clearHighScore.dataset.view = "visible";

}

// eventListener for user to enter their initials
initialsSubmit.addEventListener("click", updateHighScore);

// go back button that intializes startQuiz()
goBack.addEventListener("click", startQuiz);

// start button that will start the quiz
startQuizBtn.addEventListener("click", startQuiz);