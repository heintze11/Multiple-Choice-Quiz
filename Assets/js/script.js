//Set variables including questions
//create function to start quiz
//on button push - 
    //start timer
    //post question
//on answer click
    //check if right answer
    //go to next question
    //deduct time if wrong answer
//tally up correct answers after time has exipired
//function to save high scores
//go to high score page
//function to clear high scores
//button to go back to game



let timeClock = document.getElementById("time");
let begin = document.getElementById("beginning");
let startButton = document.getElementById("start");
let mainQuestions = document.getElementById("questions");
let quest = document.getElementById("q");
let ans = document.getElementById("a");


let clear = document.getElementById("clear");
let highScoreList = document.getElementById("hslist");
let scoreList = [];
let currentQ = 0;
let secondsLeft = 75;



const allQuestions = [{
    question: "What is HTML?",
    answers: [
        "Hi there mad language",
        "Hypertext Markup Language",
        "Hypertext Markdown Language",
        "Hypertyping Markup Language"
    ],
    correctAnswer: "Hypertext Markup Language"
},
{
    question: "What uses a condition ? ture | false format?",
    answers: [
        "Tertiary Operators",
        "Ternary Conditions",
        "Ternary Operators",
        "Triceratops Methods"
    ],
    correctAnswer: "Ternary Operators"
}
];    


function startGame(){
    mainQuestions.setAttribute("style", "display: flex");
    startTimer();
    game();
}

function game(){
    quest.innerHTML = "";
    ans.innerHTML = "";
    quest.textContent = allQuestions[currentQ].question;
    for (let index = 0; index < 4; index++) {
        let list = document.createElement("li");
        list.addEventListener("click", function() {
            if (this.textContent === allQuestions[currentQ].correctAnswer){
                currentQ++;
                game();

            } else {
                currentQ++;
                //timer and subtract
                game();
                
            }
            ;
        })

        list.textContent = allQuestions[currentQ].answers[index];
        ans.append(list);

    }
}
function startTimer () {
    let timerInterval = setInterval(function(){
        secondsLeft--;
        timeClock.textContent = "Time Remaining: " + secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            endGame();

        }
    }, 1000)
}

function endGame(){

}


startButton.addEventListener("click", function (){
    begin.setAttribute("style", "display: none");
    startGame();
    

});