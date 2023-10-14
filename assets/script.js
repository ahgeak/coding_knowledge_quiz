var startQuizBtn = document.getElementById("startQuiz");
var timerElement = document.getElementById("timerCounter");
var title = document.getElementById("titleQuestion");
var description = document.getElementById("descriptionAnswers");
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");

var answerButtons = document.querySelector(".answerButtons");
//use getElementById

var timer;
var timerCount = 10;

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
        correctAnswer: "2. curly brackets"
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: ""
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: ""
    }
]

// Use a function to call a new question/card that will have eventListeners for where the user clicks. Depending on if it is the correct answer (add points to score) or the incorrect answer (subtract time from timer)

var currentQuestionNumber = 0;

function startQuiz(){
    // for (var i = 0 ; i < questions.length; i++) {
    //     titleQuestion.textContent = questions[i].question;
    //     description.textContent = "";
    //     answerButton1.textContent = questions[i].answer1;
    //     answerButton2.textContent = questions[i].answer2;
    //     answerButton3.textContent = questions[i].answer3;
    //     answerButton4.textContent = questions[i].answer4;
    //     answerButtons.dataset.view = "visible";
    // }

    titleQuestion.textContent = questions[0].question;
    description.textContent = "";
    answerButton1.textContent = questions[0].answer1;
    answerButton2.textContent = questions[0].answer2;
    answerButton3.textContent = questions[0].answer3;
    answerButton4.textContent = questions[0].answer4;
    answerButtons.dataset.view = "visible";
    startQuizBtn.dataset.view = "hidden";

    currentCorrectAnswer = questions[0].correctAnswer;
    return currentCorrectAnswer;

    // I tried to hide the buttons one by one, but I used the dataset in the div element of the button instead. I will keep this incase I need it in the future.
    // answerButton1.dataset.view = "visible";
    // answerButton2.dataset.view = "visible";
    // answerButton3.dataset.view = "visible";
    // answerButton4.dataset.view = "visible";
}

answerButton1.addEventListener("click", function(event) {
    console.log("You clicked button 1");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
    
});


answerButton2.addEventListener("click", function() {
    console.log("You clicked button 2");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

answerButton3.addEventListener("click", function(event) {
    console.log("You clicked button 3");

    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});

answerButton4.addEventListener("click", function() {
    console.log("You clicked button 4");
    
    var selectedAnswer = this.getAttribute("id");

    if (selectedAnswer === currentCorrectAnswer){
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
});



function quizQuestions () {
}

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

function quizOver() {
    console.log("the quiz is over");
}

startQuizBtn.addEventListener("click", startQuiz);