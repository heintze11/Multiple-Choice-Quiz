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
let scores = document.getElementById("save-score");
let retry = document.getElementById("start-over");
let submit = document.getElementById("submit");
let highScoreDisplay = document.getElementById("high-score-page");
let finalScore = document.getElementById("final-score");


let highScoreList = document.getElementById("hslist");

let scoreList = [];
let currentQ = 0;
let secondsLeft = 75;
let timerInterval;
let score;
let initials = document.getElementById("initials"); 


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
    currentQ = 0;
    secondsLeft = 75;
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
            list.setAttribute("style", "padding: 10px 0");
            list.setAttribute("style", "border-style: solid")
        }
    } else {
        endGame();
    }
}

function startTimer () {
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeClock.textContent = "Time Remaining: " + secondsLeft;
        if(secondsLeft === 0){
            score = secondsLeft;
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000)
}

//endgame and save scores to local storage
 //pause timer
    //set score as time left
    //save to local storage time left and initials
function endGame(){
    console.log("test")
    if(secondsLeft != 0){
        clearInterval(timerInterval);
        score = secondsLeft;
    }
    mainQuestions.setAttribute("style", "display: none");
    scores.setAttribute("style", "display: flex");
    finalScore.textContent = ("Your Final Score is: " + score);
    timeClock.textContent = ("Total Time: 75 Secs");
}

submit.addEventListener("click", function(event){
    event.preventDefault();
    let highScore = {
        initials: initials.value.trim(),
        score
    };
    console.log(highScore);

    scoreList.push(highScore);
    
    //sort by largest
    scoreList.sort((a,b) => b.score - a.score);
    
    //only keep the highest
    scoreList.splice(5);

    //store scorelist in local storage
    localStorage.setItem("highScore", JSON.stringify(scoreList));

    highScore = {};
    initials.value = "";
});

startButton.addEventListener("click", function (){
    begin.setAttribute("style", "display: none");
    startGame();
});


retry.addEventListener("click", function (){
    console.log("clicked");
    scores.setAttribute("style", "display: none");
    startGame();
});



//save high scores into array
//post high scores on highscore page
//timer stops on page before last wrong answer is subtracted
    //stored timer # is correct