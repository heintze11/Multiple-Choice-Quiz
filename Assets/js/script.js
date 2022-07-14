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

let clear = document.getElementById("clear");
let highScoreList = document.getElementById("hslist");
let scoreList = [];
let timer;
let timerCount;



const allQuestions = [{
    question: "What is HTML?",
    answers: {
        a: "Hi there mad language",
        b: "Hypertext Markup Language",
        c: "Hypertext Markdown Language",
        d: "Hypertyping Markup Language"
    },
    correctAnswer: "b"
},
{
    question: "What uses a condition ? ture | false format?",
    answers: {
        a: "Tertiary Operators",
        b: "Ternary Conditions",
        c: "Ternary Operators",
        d: "Triceratops Methods"
    },
    correctAnswer: "c"
}
];    

console.log (allQuestions);

function startGame(){
    console.log("hello");
}

startButton.addEventListener("click", startGame);