var clear = document.getElementById("clear");


function postHighScores (){
    let list = JSON.parse(localStorage.getItem("highScore"));

    for (let index = 0; index < list.length; index++){
        const initials = JSON.parse(localStorage.getItem("initials"));
        const initialCreation = document.createElement("li");
        initialCreation.textContent = initials[index];

        const scores = JSON.parse(localStorage.getItem("score"));
        const scoreCreation = document.createElement("li");
        scoreCreation.textContent = scores[index];

        
    }
}


clear.addEventListener("click", function(){
    localStorage.removeItem("initials");
    localStorage.removeItem("score");
    postHighScores();
})

postHighScores();

