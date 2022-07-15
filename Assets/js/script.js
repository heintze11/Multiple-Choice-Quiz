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
    //send to local storage
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
},
{
    question: "What is not a JavaScript data type?",
    answers: [
        "Boolean",
        "String",
        "Symbol",
        "Method"
    ],
    correctAnswer: "Method",
},
{
    question: "What is a method",
    answers: [
        "A function associated with an object",
        "A set of instructions that perform a task",
        "Performs repeated tasks based on a condition",
        "A conditional statement"
    ],
    correctAnswer: "A function associated with an object",
},
];    


function startGame(){
    mainQuestions.setAttribute("style", "display: flex");
    startTimer();
    game();
}

function game(){
    quest.innerHTML = "";
    ans.innerHTML = "";
    if (currentQ < allQuestions.length) {
    quest.textContent = allQuestions[currentQ].question;
        for (let index = 0; index < 4; index++) {
            let list = document.createElement("li");
            list.addEventListener("click", function() {
                if (this.textContent === allQuestions[currentQ].correctAnswer){
                    currentQ++;
                    game();

                } else {
                    currentQ++;
                    secondsLeft -= 15;
                    game();
                    
                }
                ;
            })

            list.textContent = allQuestions[currentQ].answers[index];
            ans.append(list);
            list.setAttribute("style", "padding: 10px 0")
        }
    } else {
        // has to clear timer counter.
        endGame();
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
    //pause timer
    //set score as time left
    //show save-score
    //save to local storage time left and initials

}

 //clear high scores function

startButton.addEventListener("click", function (){
    begin.setAttribute("style", "display: none");
    startGame();
    

});