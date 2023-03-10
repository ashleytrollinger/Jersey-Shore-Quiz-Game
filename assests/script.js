/*Variables for timer*/
var timerSecLeft = 90;
var timeLeftElement = document.querySelector("#timer");
var timeCompleted = 0;

/*Making all my sections and divs accessable in my JS */
var homePage = document.querySelector("#homescreen");
var rulesPage = document.querySelector("#rules");
var quizScreen = document.querySelector("#quizscreen");
var questionScreen = document.querySelector("#questionScreen");
var scoreScreen = document.querySelector("#scoreScreen");

/*Event listener added on click of start button that calls the startQuiz function */
var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

var currentQuestion = 0;

/*Event listener added on the click of the high score button that calls the loadResults function */

/*GO BACK AND CHANGE THE FUNCTION IN HERE> CREATE A NEW ONE THAT TAKES YOU JUST TO THE HS AND NOT TO THE UPDATED ONE*/
var highScoreButton = document.querySelector("#scores");
highScoreButton.addEventListener("click", highScorePage);
const highScores = JSON.parse(localStorage.getItem("highScores")) || [

];

//Array of questions with objects
const questions = [
    {
        numb: 1,
        question: "Who says 'When your tanner, you feel hotter and sexier'?",
        answer: "Snooki",
        options: [
            "J-Woww",
            "Vinny",
            "Snooki",
            "Angelina"
        ]
    },
    {
        numb: 2,
        question: "Who says 'My one rule, never fall in love at the Jersey Shore'?",
        answer: "Ron",
        options: [
            "Ron",
            "Mike",
            "J-Woww",
            "Pauly D"
        ]
    },
    {
        numb: 3,
        question: "Who says 'You stalk my whole life on the boardwalk'?",
        answer: "Pauly D",
        options: [
            "Snooki",
            "Pauly D",
            "Mike",
            "Deena"
        ]
    },
    {
        numb: 4,
        question: "Who says 'This woman is not a grenade, she is an atomic bomb'?",
        answer: "Pauly D",
        options: [
            "Ron",
            "Mike",
            "Vinny",
            "Pauly D"
        ]
    },
    {
        numb: 5,
        question: "Who says 'Im a bartender. I do like, you know, great things'?",
        answer: "Angelina",
        options: [
            "Angelina",
            "Vinny",
            "Pauly D",
            "Snooki"
        ]
    },
    {
        numb: 6,
        question: "Who says 'Everybody loves me. Babies, dogs, ya know, hot girls, cougars. I just have unbelievable mass appeal'?",
        answer: "Mike",
        options: [
            "Pauly D",
            "Mike",
            "Sammi",
            "J-Woww"
        ]
    },
    {
        numb: 7,
        question: "Who says 'I regret that I got caught. I do not regret that I hit the kid, because he had it coming'?",
        answer: "Ron",
        options: [
            "J-Woww",
            "Snooki",
            "Mike",
            "Ron"
        ]
    },
    {
        numb: 8,
        question: "Who says 'I know I am not the brightest crayon box, but its not rocket scientist'?",
        answer: "Deena",
        options: [
            "Deena",
            "Snooki",
            "Mike",
            "Sammi"
        ]
    },
    {
        numb: 9,
        question: "Who says 'Are you friends with her'?",
        answer: "Sammi",
        options: [
            "Pauly D",
            "Sammi",
            "Ron",
            "J-Woww"
        ]
    },
    {
        numb: 10,
        question: "Who says ''?",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
]



function startQuiz() {


    /*Timer */
    var timerInterval = setInterval(function () {
        if (timerSecLeft <= 0) {
            clearInterval(timerInterval);
        }
        timeLeftElement.innerHTML = timerSecLeft;
        timerSecLeft--;
    }, 1000)

    homePage.replaceChild(quizScreen, rulesPage);
    loadQuestion();
}

function loadQuestion() {
    /*if question conditional */
    var currentQ = questions[currentQuestion];
    var currentQ2 = currentQ;

    if (currentQuestion == 9) {
        loadResults();
    }

    var displayQ = document.createElement("h1");
    var currentQ2 = document.createTextNode(currentQ.question);
    displayQ.appendChild(currentQ2);
    questionScreen.appendChild(displayQ);


    for (let answer in currentQ.options) {
        var choiceButton = document.createElement("BUTTON");
        var answerButton = document.createTextNode(currentQ.options[answer]);
        choiceButton.addEventListener("click", function () {
            verifyChoice(currentQ.options[answer]);
        });
        choiceButton.appendChild(answerButton);
        questionScreen.appendChild(choiceButton);
    };



}

function verifyChoice(answerSelected) {
    var currentQ = questions[currentQuestion];
    var correctAnswer = currentQ.answer;

    if (correctAnswer != answerSelected) {
        timerSecLeft = timerSecLeft - 10;
    }
    currentQuestion++;
    questionScreen.innerHTML = "";
    loadQuestion();
}

function loadResults() {
    homePage.replaceChild(scoreScreen, quizScreen);
    var resultsHeader = document.createElement("h1");
    var resultsHeaderV = document.createTextNode("High Scores");
    resultsHeader.appendChild(resultsHeaderV);
    scoreScreen.appendChild(resultsHeader);

    var resultsParagraph = document.createElement("p");
    var resultsParagraphText = document.createTextNode("If you want other guidos and guidettes to see how well ya did save your score and see if you make the leaderboard.");
    resultsParagraph.appendChild(resultsParagraphText);
    scoreScreen.appendChild(resultsParagraph);

    var timeCompleted = timerSecLeft;


    var scoreName = document.createElement("input");
    scoreName.setAttribute("type", "text");
    scoreName.setAttribute("value", "Your name");
    scoreName.setAttribute("id", "scoreName");
    scoreScreen.appendChild(scoreName);

    var submitButton = document.createElement("button");
    var submissionButtonWords = document.createTextNode("Save Score");
    submitButton.appendChild(submissionButtonWords);
    submitButton.addEventListener("click", saveScore);
    scoreScreen.appendChild(submitButton);




}

function highScorePage() {
    homePage.replaceChild(scoreScreen, rulesPage);
    var resultsHeader = document.createElement("h1");
    var resultsHeaderV = document.createTextNode("High Scores");
    resultsHeader.appendChild(resultsHeaderV);
    scoreScreen.appendChild(resultsHeader);

}

function saveScore() {
    var playerName = document.getElementById("scoreName").value;

    var highscoreObject = {
        playerName: playerName,
        score: timerSecLeft
    };
    highScores.push(highscoreObject);
    highScores.sort(function (a, b) { return b.score - a.score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    scoreScreen.appendChild(highScores);
}
