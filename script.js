/*Variables for timer*/
var timerSecLeft = 90;
var timeLeftElement = document.querySelector("#timer");

var homePage = document.querySelector("#homescreen");
var rulesPage = document.querySelector("#rules");
var quizScreen = document.querySelector("#quizscreen");

var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

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

}



//Array of questions with objects
let questions = [
    {
        numb: 1,
        question: "Who calls Angelina a dirty little hamster?",
        answer: "Mike",
        options: [
            "Pauly D",
            "Vinny",
            "Snooki",
            "Mike"
        ]
    },
    {
        numb: 2,
        question: "What does GTL stand for?",
        answer: "Gym, tan, laundry",
        options: [
            "Guido, tan, lift",
            "Gym, tan, laundry",
            "Guido, tan, lift",
            "Gym, tequila, love"
        ]
    },
    {
        numb: 3,
        question: "?",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 4,
        question: "?",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },
    {
        numb: 5,
        question: "?",
        answer: "",
        options: [
            "",
            "",
            "",
            ""
        ]
    },