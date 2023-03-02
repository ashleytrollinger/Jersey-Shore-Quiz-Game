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
